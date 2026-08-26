(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ALISON_KEY = "night-orders-alison-poc";
  const PACK_KEY = "night-orders-pack-poc";
  const TTL_MS = 90 * 60 * 1000;
  const PAIR_DAYS = {
    oatmeal: 3,
    chocolate: 2,
    wine: 4,
    coffee: 2,
    cheese: 3,
    avocado: 2,
    banana: 2,
    toast: 1
  };
  const SEED_PARKS = [
    { id: "cedar", name: "Cedar Hollow", dogs: 2 },
    { id: "river", name: "Riverside", dogs: 0 },
    { id: "mill", name: "Mill Pond", dogs: 4 }
  ];

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* private mode */
    }
  }

  function breathe(el) {
    if (!el || reduce) return;
    el.classList.remove("breathe");
    void el.offsetWidth;
    el.classList.add("breathe");
  }

  function clockText() {
    return new Date().toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function whenText(ts) {
    return new Date(ts).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function dogLabel(n) {
    const count = Math.max(0, Number(n) || 0);
    return count + (count === 1 ? " dog" : " dogs");
  }

  function pairDaysFor(name) {
    const n = String(name || "").trim().toLowerCase();
    if (!n) return 1;
    for (const key of Object.keys(PAIR_DAYS)) {
      if (n.indexOf(key) !== -1 || key.indexOf(n) !== -1) return PAIR_DAYS[key];
    }
    return 1;
  }

  function remainText(until) {
    const ms = Math.max(0, until - Date.now());
    const total = Math.ceil(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function copyPark(park) {
    return { id: park.id, name: park.name, dogs: park.dogs };
  }

  function readAlison() {
    const state = load(ALISON_KEY, { meals: [], pair: null });
    if (!Array.isArray(state.meals)) state.meals = [];
    return state;
  }

  function readPack() {
    const state = load(PACK_KEY, { parks: SEED_PARKS.map(copyPark), checkin: null, dogs: 0 });
    if (!Array.isArray(state.parks) || state.parks.length !== SEED_PARKS.length) {
      state.parks = SEED_PARKS.map(copyPark);
    } else {
      state.parks = state.parks.map(function (park, i) {
        const seed = SEED_PARKS[i];
        return {
          id: park.id || seed.id,
          name: seed.name,
          dogs: Math.max(0, Number(park.dogs) || 0)
        };
      });
    }
    state.dogs = Math.max(0, Math.min(8, Number(state.dogs) || 0));
    if (state.checkin && state.dogs < 1) state.dogs = 1;
    return state;
  }

  const alisonMem = readAlison();
  const packMem = readPack();

  function persistAlison() {
    save(ALISON_KEY, alisonMem);
  }

  function persistPack() {
    save(PACK_KEY, packMem);
  }

  function expirePack() {
    const checkin = packMem.checkin;
    if (!checkin || !checkin.until || checkin.until > Date.now()) return false;
    const park = packMem.parks.find(function (p) { return p.id === checkin.parkId; });
    if (park) park.dogs = Math.max(0, park.dogs - 1);
    packMem.checkin = null;
    persistPack();
    return true;
  }

  function here(parkId) {
    return !!(packMem.checkin && packMem.checkin.parkId === parkId && packMem.checkin.until > Date.now());
  }

  function tickClocks() {
    document.querySelectorAll(".phone .clock").forEach(function (el) {
      el.textContent = clockText();
    });
  }

  function armAlison(phone) {
    const log = phone.querySelector("[data-alison-log]");
    const form = phone.querySelector("[data-alison-form]");
    const pair = phone.querySelector("[data-alison-pair]");
    const pairFood = phone.querySelector("[data-pair-food]");
    const pairN = phone.querySelector("[data-pair-n]");
    if (!log || !form || !pair) return;

    function render(opts) {
      const meals = alisonMem.meals.slice(0, 6);
      log.innerHTML = "";
      if (!meals.length) {
        const empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "Nothing yet.";
        log.appendChild(empty);
      } else {
        meals.forEach(function (meal) {
          const row = document.createElement("li");
          const name = document.createElement("span");
          const when = document.createElement("span");
          when.className = "qty";
          name.textContent = meal.name;
          when.textContent = whenText(meal.at);
          row.appendChild(name);
          row.appendChild(when);
          log.appendChild(row);
        });
      }
      if (alisonMem.pair && alisonMem.pair.name) {
        pair.hidden = false;
        pairFood.textContent = alisonMem.pair.name;
        pairN.textContent = String(alisonMem.pair.days);
        if (opts && opts.breathe) breathe(pair);
      } else {
        pair.hidden = true;
      }
    }

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const input = form.querySelector('input[name="meal"]');
      const name = String((input && input.value) || "").replace(/\s+/g, " ").trim();
      if (!name) return;
      alisonMem.meals.unshift({ name: name.slice(0, 32), at: Date.now() });
      alisonMem.meals = alisonMem.meals.slice(0, 12);
      alisonMem.pair = { name: name.slice(0, 32), days: pairDaysFor(name) };
      persistAlison();
      if (input) {
        input.value = "";
        input.focus();
      }
      render({ breathe: true });
    });

    render({ breathe: false });
  }

  function armPack(phone) {
    const dogsPane = phone.querySelector("[data-pack-dogs]");
    const addBtn = phone.querySelector("[data-pack-add]");
    const goBtn = phone.querySelector("[data-pack-go]");
    const dogsCount = phone.querySelector("[data-pack-dogs-count]");
    const list = phone.querySelector("[data-pack-list]");
    const rows = phone.querySelector("[data-pack-rows]");
    const detail = phone.querySelector("[data-pack-detail]");
    const back = phone.querySelector("[data-pack-back]");
    const nameEl = phone.querySelector("[data-pack-name]");
    const countEl = phone.querySelector("[data-pack-count]");
    const inBtn = phone.querySelector("[data-pack-in]");
    const leaveBtn = phone.querySelector("[data-pack-leave]");
    const eraseEl = phone.querySelector("[data-pack-erase]");
    const ttlEl = phone.querySelector("[data-pack-ttl]");
    if (!list || !rows || !detail || !inBtn || !leaveBtn) return;

    let view = packMem.dogs > 0 ? "list" : "dogs";
    let openId = null;

    function renderDogs(opts) {
      if (dogsCount) dogsCount.textContent = dogLabel(packMem.dogs);
      if (goBtn) goBtn.hidden = packMem.dogs < 1;
      if (addBtn) addBtn.hidden = packMem.dogs >= 8;
      if (opts && opts.breathe && dogsCount) breathe(dogsCount);
    }

    function renderList(opts) {
      rows.innerHTML = "";
      packMem.parks.forEach(function (park) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "park-btn" + (here(park.id) ? " is-in" : "");
        btn.setAttribute("data-park", park.id);
        const label = document.createElement("span");
        const qty = document.createElement("span");
        qty.className = "qty";
        label.textContent = park.name;
        qty.textContent = String(park.dogs);
        btn.appendChild(label);
        btn.appendChild(qty);
        btn.addEventListener("click", function () {
          if (packMem.dogs < 1) {
            view = "dogs";
            openId = null;
            render({ breathe: false });
            return;
          }
          view = "detail";
          openId = park.id;
          render({ breathe: false });
        });
        rows.appendChild(btn);
        if (opts && opts.breathe && opts.parkId === park.id) breathe(qty);
      });
    }

    function renderDetail(park, opts) {
      const inHere = here(park.id);
      nameEl.textContent = park.name;
      countEl.textContent = dogLabel(park.dogs);
      inBtn.hidden = inHere;
      leaveBtn.hidden = !inHere;
      eraseEl.hidden = !inHere;
      ttlEl.hidden = !inHere;
      if (inHere) ttlEl.textContent = remainText(packMem.checkin.until);
      if (opts && opts.breathe) breathe(countEl);
    }

    function render(opts) {
      expirePack();
      if (packMem.dogs < 1) {
        view = "dogs";
        openId = null;
      }
      if (dogsPane) dogsPane.hidden = view !== "dogs";
      list.hidden = view !== "list";
      detail.hidden = view !== "detail";
      if (view === "dogs") {
        renderDogs(opts);
        return;
      }
      const park = openId ? packMem.parks.find(function (p) { return p.id === openId; }) : null;
      if (view === "detail" && park) {
        renderDetail(park, opts);
        return;
      }
      view = "list";
      openId = null;
      if (dogsPane) dogsPane.hidden = true;
      list.hidden = false;
      detail.hidden = true;
      renderList(opts);
    }

    if (addBtn) {
      addBtn.addEventListener("click", function () {
        if (packMem.dogs >= 8) return;
        packMem.dogs += 1;
        persistPack();
        view = "dogs";
        render({ breathe: true });
      });
    }

    if (goBtn) {
      goBtn.addEventListener("click", function () {
        if (packMem.dogs < 1) return;
        view = "list";
        openId = null;
        render({ breathe: false });
      });
    }

    back.addEventListener("click", function () {
      openId = null;
      view = "list";
      render({ breathe: false });
    });

    inBtn.addEventListener("click", function () {
      expirePack();
      if (packMem.dogs < 1) {
        view = "dogs";
        openId = null;
        render({ breathe: false });
        return;
      }
      if (!openId) return;
      if (here(openId)) {
        render({ breathe: false });
        return;
      }
      if (packMem.checkin && packMem.checkin.parkId && packMem.checkin.parkId !== openId) {
        const prev = packMem.parks.find(function (p) { return p.id === packMem.checkin.parkId; });
        if (prev) prev.dogs = Math.max(0, prev.dogs - 1);
      }
      const park = packMem.parks.find(function (p) { return p.id === openId; });
      if (!park) return;
      park.dogs += 1;
      packMem.checkin = { parkId: park.id, until: Date.now() + TTL_MS };
      persistPack();
      view = "detail";
      render({ breathe: true, parkId: park.id });
    });

    leaveBtn.addEventListener("click", function () {
      expirePack();
      if (!openId) return;
      if (!here(openId)) {
        render({ breathe: false });
        return;
      }
      const park = packMem.parks.find(function (p) { return p.id === openId; });
      if (park) park.dogs = Math.max(0, park.dogs - 1);
      packMem.checkin = null;
      persistPack();
      render({ breathe: true, parkId: openId });
    });

    setInterval(function () {
      const expired = expirePack();
      if (expired) {
        render({ breathe: true, parkId: openId });
        return;
      }
      if (packMem.checkin && openId === packMem.checkin.parkId && ttlEl && !ttlEl.hidden) {
        ttlEl.textContent = remainText(packMem.checkin.until);
      }
    }, 1000);

    render({ breathe: false });
  }

  expirePack();
  tickClocks();
  setInterval(tickClocks, 30000);
  document.querySelectorAll('[data-poc="alison"]').forEach(armAlison);
  document.querySelectorAll('[data-poc="pack"]').forEach(armPack);
})();
