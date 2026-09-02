(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ARM_MS = 300;
  const PACK_TTL_MS = 90 * 60 * 1000;
  const ALISON_KEY = "no.site.alison.v1";
  const PACK_KEY = "no.site.pack.v1";
  const CLINIC_NEED = { episodes: 5, meals: 8, days: 7 };

  function locTag() {
    return window.NO_LOCALE || undefined;
  }

  function clockText(at) {
    return new Date(at == null ? Date.now() : at).toLocaleTimeString(locTag(), {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function tickClocks() {
    document.querySelectorAll(".phone .clock").forEach(function (el) {
      el.textContent = clockText();
    });
  }

  function showRoom(phone, id) {
    const rooms = phone.querySelectorAll("[data-room]");
    const tabs = phone.querySelectorAll(".glass-bar [data-tab]");
    rooms.forEach(function (room) {
      const on = room.getAttribute("data-room") === id;
      room.hidden = !on;
      room.classList.toggle("is-on", on);
    });
    tabs.forEach(function (tab) {
      const on = tab.getAttribute("data-tab") === id;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.classList.toggle("is-on", on);
    });
  }

  function copy(key, fallback) {
    if (window.NO_T) {
      const hit = window.NO_T(key);
      if (hit && hit !== key) return hit;
    }
    if (key === "packAddDog") return "Add a dog";
    return fallback;
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* this browser, private mode still plays in memory */ }
  }

  function stripKcal(text) {
    return String(text || "")
      .replace(/\s*\(\s*\d[\d.,]*\s*k?cal(?:ories?)?\s*\)/gi, "")
      .replace(/\s+\d[\d.,]*\s*k?cal(?:ories?)?\b/gi, "")
      .replace(/\b\d[\d.,]*\s*(lb|kg|oz|g)\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function loadAlison() {
    const blank = { open: null, episodes: [], meals: [] };
    const raw = readJson(ALISON_KEY, blank);
    const episodes = Array.isArray(raw.episodes) ? raw.episodes : [];
    const meals = Array.isArray(raw.meals) ? raw.meals : [];
    const open = raw.open && typeof raw.open.at === "number" && raw.open.endAt == null
      ? { id: String(raw.open.id || uid()), at: raw.open.at, endAt: null }
      : null;
    return {
      open: open,
      episodes: episodes.filter(function (row) {
        return row && typeof row.at === "number";
      }).slice(0, 400),
      meals: meals.filter(function (row) {
        return row && typeof row.text === "string" && row.text.trim();
      }).slice(0, 800)
    };
  }

  function saveAlison(state) {
    writeJson(ALISON_KEY, state);
  }

  function spanDays(episodes, meals) {
    const times = [];
    episodes.forEach(function (row) {
      if (typeof row.at === "number") times.push(row.at);
      if (typeof row.endAt === "number") times.push(row.endAt);
    });
    meals.forEach(function (row) {
      if (typeof row.at === "number") times.push(row.at);
    });
    if (times.length < 2) return times.length === 1 ? 1 : 0;
    return Math.max(1, Math.ceil((Math.max.apply(null, times) - Math.min.apply(null, times)) / 86400000));
  }

  function clinicGate(state) {
    const episodes = state.episodes.length;
    const meals = state.meals.length;
    const days = spanDays(state.episodes, state.meals);
    return {
      ready: episodes >= CLINIC_NEED.episodes && meals >= CLINIC_NEED.meals && days >= CLINIC_NEED.days,
      episodes: episodes,
      meals: meals,
      days: days
    };
  }

  function loadPack() {
    const blank = {
      dogs: [{ id: "maple", name: "Maple" }],
      parks: { named: 0, hill: 0 },
      here: null,
      until: 0
    };
    const raw = readJson(PACK_KEY, null);
    if (!raw) return blank;
    const dogs = Array.isArray(raw.dogs)
      ? raw.dogs.filter(function (d) { return d && String(d.name || "").trim(); })
      : blank.dogs.slice();
    const parks = {
      named: Math.max(0, Number(raw.parks && raw.parks.named) || 0),
      hill: Math.max(0, Number(raw.parks && raw.parks.hill) || 0)
    };
    const here = raw.here === "named" || raw.here === "hill" ? raw.here : null;
    const until = typeof raw.until === "number" ? raw.until : 0;
    return { dogs: dogs.slice(0, 40), parks: parks, here: here, until: until };
  }

  function savePack(state) {
    writeJson(PACK_KEY, {
      dogs: state.dogs,
      parks: state.parks,
      here: state.here,
      until: state.until
    });
  }

  function remainLabel(until) {
    const ms = Math.max(0, until - Date.now());
    if (ms <= 0) return copy("packGoneNow", "Gone.");
    const total = Math.ceil(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const clock = (h ? h + ":" : "") + String(m).padStart(h ? 2 : 1, "0") + ":" + String(s).padStart(2, "0");
    return copy("packGoneIn", "Gone in") + " " + clock;
  }

  function pulse(el) {
    if (!el || reduce) return;
    el.classList.remove("breathe");
    void el.offsetWidth;
    el.classList.add("breathe");
  }

  function armOpen(btn, onOpen) {
    if (!btn) return;
    let armed = false;
    btn.style.pointerEvents = "none";
    window.setTimeout(function () {
      armed = true;
      btn.style.pointerEvents = "";
    }, ARM_MS);
    btn.addEventListener("click", function () {
      if (!armed) return;
      onOpen();
    });
  }

  function armAlison(phone) {
    const bar = phone.querySelector(".glass-bar");
    const openBtn = phone.querySelector("[data-alison-open]");
    const hasOpening = phone.querySelector('[data-room="opening"]');
    const start = phone.querySelector("[data-alison-start]");
    const stop = phone.querySelector("[data-alison-stop]");
    const live = phone.querySelector("[data-alison-live]");
    const foodLog = phone.querySelector("[data-alison-food-log]");
    const foodInput = phone.querySelector("[data-alison-food-input]");
    const foodAdd = phone.querySelector("[data-alison-food-add]");
    const journalLog = phone.querySelector("[data-alison-journal]");
    const journalEmpty = phone.querySelector("[data-alison-journal-empty]");
    const clinicLock = phone.querySelector("[data-alison-clinic-lock]");
    const clinicCount = phone.querySelector("[data-alison-clinic-count]");
    const shareBtn = phone.querySelector("[data-alison-share]");
    const shareAck = phone.querySelector("[data-alison-share-ack]");
    const ack = phone.querySelector("[data-alison-health-ack]");
    const healthBtn = phone.querySelector("[data-alison-health]");
    const healthTruth = phone.querySelector("[data-alison-health-truth]");
    let state = loadAlison();

    function enter(id) {
      if (bar) bar.hidden = id === "opening";
      showRoom(phone, id);
    }

    function paintHome() {
      const on = !!(state.open && state.open.endAt == null);
      if (start) start.hidden = on;
      if (stop) stop.hidden = !on;
      if (live) {
        if (on) {
          live.hidden = false;
          live.textContent = copy("alisonStarted", "Started") + " " + clockText(state.open.at);
        } else {
          live.hidden = true;
          live.textContent = "";
        }
      }
    }

    function paintJournal() {
      if (!journalLog) return;
      journalLog.textContent = "";
      const rows = [];
      if (state.open && state.open.endAt == null) {
        rows.push({
          id: state.open.id,
          line: copy("alisonStarted", "Started") + " " + clockText(state.open.at),
          live: true
        });
      }
      state.episodes.slice().sort(function (a, b) { return b.at - a.at; }).forEach(function (row) {
        const startLine = copy("alisonStarted", "Started") + " " + clockText(row.at);
        const stopLine = row.endAt
          ? copy("alisonStopped", "Stopped") + " " + clockText(row.endAt)
          : "";
        rows.push({
          id: row.id,
          line: stopLine ? startLine + " · " + stopLine : startLine,
          live: false
        });
      });
      const empty = rows.length === 0;
      if (journalEmpty) journalEmpty.hidden = !empty;
      if (empty) return;
      rows.forEach(function (row) {
        const li = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = row.line;
        const qty = document.createElement("span");
        qty.className = "qty";
        qty.textContent = row.live ? copy("alisonLive", "On") : "";
        li.appendChild(name);
        li.appendChild(qty);
        journalLog.appendChild(li);
      });
    }

    function paintFood() {
      if (!foodLog) return;
      foodLog.textContent = "";
      if (!state.meals.length) {
        const li = document.createElement("li");
        li.className = "empty";
        li.textContent = copy("alisonEmpty", "Nothing yet.");
        foodLog.appendChild(li);
        return;
      }
      state.meals.slice().sort(function (a, b) { return b.at - a.at; }).forEach(function (row) {
        const li = document.createElement("li");
        li.setAttribute("data-id", row.id);
        const name = document.createElement("span");
        name.textContent = row.text;
        const del = document.createElement("button");
        del.type = "button";
        del.className = "back";
        del.setAttribute("data-alison-food-del", row.id);
        del.textContent = copy("alisonDelete", "Delete");
        li.appendChild(name);
        li.appendChild(del);
        foodLog.appendChild(li);
      });
    }

    function paintClinic() {
      const gate = clinicGate(state);
      if (clinicCount) {
        clinicCount.textContent =
          gate.episodes + " / " + CLINIC_NEED.episodes + " " + copy("alisonEpisodes", "episodes") +
          " · " +
          gate.meals + " / " + CLINIC_NEED.meals + " " + copy("alisonMeals", "meals") +
          " · " +
          gate.days + " / " + CLINIC_NEED.days + " " + copy("alisonDays", "days");
      }
      if (clinicLock) {
        clinicLock.textContent = gate.ready
          ? copy("alisonClinicOpen", "The count is honest. Still not a diagnosis. Not a medical device.")
          : copy("alisonClinicWhisper", "Clinic letter stays closed until the count is honest. You can still share the month page. Not a diagnosis.");
      }
    }

    function paint() {
      paintHome();
      paintJournal();
      paintFood();
      paintClinic();
    }

    function persist() {
      saveAlison(state);
      paint();
    }

    if (openBtn) {
      armOpen(openBtn, function () {
        enter("home");
      });
    }
    phone.querySelectorAll(".glass-bar [data-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        enter(tab.getAttribute("data-tab"));
      });
    });

    if (start && stop) {
      start.addEventListener("click", function () {
        if (state.open && state.open.endAt == null) return;
        state.open = { id: uid(), at: Date.now(), endAt: null };
        persist();
      });
      stop.addEventListener("click", function () {
        if (!state.open || state.open.endAt != null) return;
        state.episodes.unshift({
          id: state.open.id,
          at: state.open.at,
          endAt: Date.now()
        });
        state.episodes = state.episodes.slice(0, 400);
        state.open = null;
        persist();
      });
    }

    function addFood() {
      if (!foodInput) return;
      const text = stripKcal(foodInput.value);
      if (!text) return;
      state.meals.unshift({ id: uid(), text: text, at: Date.now() });
      state.meals = state.meals.slice(0, 800);
      foodInput.value = "";
      persist();
      foodInput.focus();
    }

    if (foodAdd) foodAdd.addEventListener("click", addFood);
    if (foodInput) {
      foodInput.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          addFood();
        }
      });
    }
    if (foodLog) {
      foodLog.addEventListener("click", function (ev) {
        const btn = ev.target.closest("[data-alison-food-del]");
        if (!btn) return;
        const id = btn.getAttribute("data-alison-food-del");
        state.meals = state.meals.filter(function (row) { return row.id !== id; });
        persist();
      });
    }

    function monthPage() {
      const lines = [];
      lines.push("Alison — month page");
      lines.push(copy("motto", "The record stays with you."));
      lines.push(copy("alisonClinicOpen", "Not a diagnosis. Not a medical device."));
      lines.push("");
      const gate = clinicGate(state);
      lines.push(
        copy("alisonClinicNote", "Five episodes, eight meals, seven days. Your words. Not a medical device.")
      );
      lines.push(
        "Coverage: " + gate.episodes + " episodes, " + gate.meals + " meals, " + gate.days + " days."
      );
      if (!gate.ready) {
        lines.push("Clinic letter stays closed until the count is honest.");
      }
      lines.push("");
      lines.push(copy("alisonTabJournal", "Journal"));
      if (!state.episodes.length && !(state.open && state.open.endAt == null)) {
        lines.push(copy("alisonJournalEmpty", "Nothing yet. Start, then Stop. Meals on Food."));
      } else {
        if (state.open && state.open.endAt == null) {
          lines.push("- " + copy("alisonStarted", "Started") + " " + clockText(state.open.at));
        }
        state.episodes.slice().sort(function (a, b) { return b.at - a.at; }).forEach(function (row) {
          const line = copy("alisonStarted", "Started") + " " + clockText(row.at) +
            (row.endAt ? " · " + copy("alisonStopped", "Stopped") + " " + clockText(row.endAt) : "");
          lines.push("- " + line);
        });
      }
      lines.push("");
      lines.push(copy("alisonTabFood", "Food"));
      if (!state.meals.length) {
        lines.push(copy("alisonEmpty", "Nothing yet."));
      } else {
        state.meals.slice().sort(function (a, b) { return b.at - a.at; }).forEach(function (row) {
          lines.push("- " + row.text + " · " + clockText(row.at));
        });
      }
      lines.push("");
      lines.push(copy("contact", "support@nightorders.app"));
      return lines.join("\n");
    }

    if (shareBtn) {
      shareBtn.addEventListener("click", function () {
        const text = monthPage();
        function shown(ok) {
          if (!shareAck) return;
          shareAck.hidden = false;
          shareAck.textContent = ok
            ? copy("alisonShareCopied", "Copied. Take this to a clinician. Not a diagnosis.")
            : text;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { shown(true); }).catch(function () { shown(false); });
        } else {
          shown(false);
        }
      });
    }

    if (ack) ack.textContent = copy("alisonHealthStillOff", "Still off");
    if (healthBtn) {
      healthBtn.addEventListener("click", function () {
        if (ack) ack.textContent = copy("alisonHealthStillOff", "Still off");
        if (healthTruth) {
          healthTruth.textContent = copy("alisonHealthNotHere", "Health not on this device. Journal still works.");
        }
      });
    }

    paint();
    enter(hasOpening ? "opening" : "home");
  }

  function armPack(phone) {
    const bar = phone.querySelector(".glass-bar");
    const openBtn = phone.querySelector("[data-pack-open]");
    const dogLog = phone.querySelector("[data-pack-dog-log]");
    const dogInput = phone.querySelector("[data-pack-dog-input]");
    const dogAdd = phone.querySelector("[data-pack-dog-add]");
    const ttlEl = phone.querySelector("[data-pack-ttl]");
    const checkBtn = phone.querySelector("[data-pack-checkin]");
    const leaveBtn = phone.querySelector("[data-pack-leave]");
    let state = loadPack();
    let park = "named";
    let editing = null;
    let ttlTimer = 0;

    function expireIfNeeded() {
      if (!state.here) return false;
      if (state.until && Date.now() < state.until) return false;
      if (state.parks[state.here] != null) {
        state.parks[state.here] = Math.max(0, state.parks[state.here] - 1);
      }
      state.here = null;
      state.until = 0;
      savePack(state);
      return true;
    }

    function paintCounts() {
      phone.querySelectorAll("[data-pack-count]").forEach(function (el) {
        const id = el.getAttribute("data-pack-count");
        if (id && state.parks[id] != null) {
          const next = String(state.parks[id]);
          if (el.textContent !== next) {
            el.textContent = next;
            pulse(el);
          }
        }
      });
      const detail = phone.querySelector("[data-pack-detail-count]");
      if (detail && state.parks[park] != null) {
        const next = String(state.parks[park]);
        if (detail.textContent !== next) {
          detail.textContent = next;
          pulse(detail);
        } else {
          detail.textContent = next;
        }
      }
      phone.querySelectorAll("[data-pack-to-checkin]").forEach(function (btn) {
        const id = btn.getAttribute("data-pack-park");
        btn.classList.toggle("is-in", state.here === id);
      });
    }

    function paintCheck() {
      if (checkBtn) checkBtn.hidden = state.here === park;
      if (leaveBtn) leaveBtn.hidden = state.here !== park;
      if (ttlEl) {
        if (state.here === park && state.until > Date.now()) {
          ttlEl.textContent = remainLabel(state.until) +
            " · " + copy("packEraseAt", "Erases at") + " " + clockText(state.until);
        } else {
          ttlEl.textContent = copy("packErase", "Erases in 90 minutes.");
        }
      }
    }

    function paintDogs() {
      if (!dogLog) return;
      dogLog.textContent = "";
      if (!state.dogs.length) {
        const li = document.createElement("li");
        li.className = "empty";
        li.textContent = copy("alisonEmpty", "Nothing yet.");
        dogLog.appendChild(li);
        return;
      }
      state.dogs.forEach(function (dog) {
        const li = document.createElement("li");
        li.setAttribute("data-id", dog.id);
        const name = document.createElement("span");
        name.textContent = dog.name;
        const actions = document.createElement("span");
        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "back";
        edit.setAttribute("data-pack-dog-edit", dog.id);
        edit.textContent = copy("packEdit", "Edit");
        const del = document.createElement("button");
        del.type = "button";
        del.className = "back";
        del.setAttribute("data-pack-dog-del", dog.id);
        del.textContent = copy("packDelete", "Delete");
        actions.appendChild(edit);
        actions.appendChild(del);
        li.appendChild(name);
        li.appendChild(actions);
        dogLog.appendChild(li);
      });
      if (dogAdd) {
        const addLabel = copy("packAddDog", "Add a dog");
        dogAdd.textContent = editing
          ? copy("packSave", "Save")
          : (addLabel === "packAddDog" ? "Add a dog" : addLabel);
      }
    }

    function tickTtl() {
      expireIfNeeded();
      paintCounts();
      paintCheck();
      if (state.here && state.until > Date.now()) {
        if (!ttlTimer) ttlTimer = window.setInterval(tickTtl, 1000);
      } else if (ttlTimer) {
        window.clearInterval(ttlTimer);
        ttlTimer = 0;
      }
    }

    function persist() {
      savePack(state);
      paintDogs();
      paintCounts();
      paintCheck();
      tickTtl();
    }

    function enter(id) {
      if (bar) bar.hidden = id === "opening" || id === "checkin";
      showRoom(phone, id);
      if (id === "parks") paintCounts();
    }

    expireIfNeeded();

    if (openBtn) {
      armOpen(openBtn, function () {
        enter("parks");
      });
    }
    phone.querySelectorAll(".glass-bar [data-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        enter(tab.getAttribute("data-tab"));
      });
    });
    phone.querySelectorAll("[data-pack-to-checkin]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        park = btn.getAttribute("data-pack-park") || "named";
        const title = phone.querySelector("[data-pack-park-title]");
        const label = btn.querySelector("span");
        if (title && label) title.textContent = label.textContent;
        paintCounts();
        paintCheck();
        enter("checkin");
      });
    });
    phone.querySelectorAll("[data-pack-to-parks]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        enter("parks");
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener("click", function () {
        expireIfNeeded();
        if (state.here === park) return;
        if (state.here && state.parks[state.here] != null) {
          state.parks[state.here] = Math.max(0, state.parks[state.here] - 1);
        }
        state.parks[park] = (state.parks[park] || 0) + 1;
        state.here = park;
        state.until = Date.now() + PACK_TTL_MS;
        persist();
      });
    }
    if (leaveBtn) {
      leaveBtn.addEventListener("click", function () {
        if (state.here !== park) return;
        if (state.parks[park] != null) state.parks[park] = Math.max(0, state.parks[park] - 1);
        state.here = null;
        state.until = 0;
        persist();
      });
    }

    function commitDog() {
      if (!dogInput) return;
      const name = String(dogInput.value || "").trim();
      if (!name) return;
      if (editing) {
        state.dogs = state.dogs.map(function (dog) {
          if (dog.id !== editing) return dog;
          return { id: dog.id, name: name };
        });
        editing = null;
      } else {
        state.dogs.push({ id: uid(), name: name });
        state.dogs = state.dogs.slice(0, 40);
      }
      dogInput.value = "";
      persist();
      dogInput.focus();
    }

    if (dogAdd) dogAdd.addEventListener("click", commitDog);
    if (dogInput) {
      dogInput.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          commitDog();
        }
      });
    }
    if (dogLog) {
      dogLog.addEventListener("click", function (ev) {
        const editBtn = ev.target.closest("[data-pack-dog-edit]");
        const delBtn = ev.target.closest("[data-pack-dog-del]");
        if (editBtn) {
          const id = editBtn.getAttribute("data-pack-dog-edit");
          const dog = state.dogs.filter(function (d) { return d.id === id; })[0];
          if (!dog) return;
          editing = id;
          if (dogInput) {
            dogInput.value = dog.name;
            dogInput.focus();
            dogInput.select();
          }
          paintDogs();
          return;
        }
        if (delBtn) {
          const id = delBtn.getAttribute("data-pack-dog-del");
          state.dogs = state.dogs.filter(function (d) { return d.id !== id; });
          if (editing === id) {
            editing = null;
            if (dogInput) dogInput.value = "";
          }
          persist();
        }
      });
    }

    persist();
    enter("opening");
  }

  tickClocks();
  setInterval(tickClocks, 30000);
  document.querySelectorAll('[data-rooms="alison"], [data-poc="alison"]').forEach(armAlison);
  document.querySelectorAll('[data-rooms="pack"], [data-poc="pack"]').forEach(armPack);

  (function armGlass() {
    const root = document.documentElement;
    if (!reduce) {
      window.addEventListener("pointermove", function (ev) {
        const w = Math.max(window.innerWidth, 1);
        const h = Math.max(window.innerHeight, 1);
        root.style.setProperty("--lx", ((ev.clientX / w) * 100).toFixed(2) + "%");
        root.style.setProperty("--ly", ((ev.clientY / h) * 100).toFixed(2) + "%");
      }, { passive: true });
    }
    if (document.getElementById("lg-defs")) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "lg-defs");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    svg.innerHTML = '<defs><filter id="lg-lens" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G"/></filter></defs>';
    document.body.appendChild(svg);
  })();
})();
(function restoreMail() {
  const addr = "support@nightorders.app";
  document.querySelectorAll("a.mail, a[href*='email-protection']").forEach(function (a) {
    a.setAttribute("href", "mailto:" + addr);
    const text = (a.textContent || "").replace(/\s+/g, " ").trim();
    if (!text || text.indexOf("(at)") !== -1 || text.indexOf("[email") !== -1 || text.indexOf("protected") !== -1) {
      a.textContent = addr;
    }
  });
})();
