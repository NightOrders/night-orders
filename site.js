(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ARM_MS = 300;
  const ALISON_KEY = "no.site.alison.v1";
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

  function readSession(key, fallback) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeSession(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* private mode still plays in memory */ }
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


  tickClocks();
  setInterval(tickClocks, 30000);
  document.querySelectorAll('[data-rooms="alison"], [data-poc="alison"]').forEach(armAlison);

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

/* SITE_ISLAND_HAND_DOCK */
(function () {
  var KEY = "nightorders.mastDock";
  var body = document.body;
  var mast = document.querySelector(".mast");
  if (!body || !mast) return;

  var group = mast.querySelector(".dock-control");
  if (!group) {
    group = document.createElement("div");
    group.className = "dock-control";
    group.setAttribute("role", "radiogroup");
    group.setAttribute("aria-label", "Navigation island position");
    group.innerHTML =
      '<button type="button" class="dock-btn" role="radio" data-dock="top" aria-checked="true" tabindex="0" title="Dock navigation at top">Top</button>' +
      '<button type="button" class="dock-btn" role="radio" data-dock="bottom" aria-checked="false" tabindex="-1" title="Dock navigation at bottom">Bottom</button>';
    mast.appendChild(group);
  }

  var grip = mast.querySelector(".mast-grip");
  if (!grip) {
    grip = document.createElement("button");
    grip.type = "button";
    grip.className = "mast-grip";
    grip.setAttribute("aria-label", "Drag navigation island to top or bottom");
    grip.title = "Drag island";
    grip.innerHTML = '<span aria-hidden="true" class="mast-grip-dots">⋮⋮</span>';
    mast.insertBefore(grip, group);
  }

  var buttons = [].slice.call(group.querySelectorAll("[data-dock]"));

  function apply(dock, persist) {
    var v = dock === "bottom" ? "bottom" : "top";
    body.classList.toggle("mast-dock-bottom", v === "bottom");
    document.documentElement.classList.remove("mast-dock-bottom-pending");
    mast.setAttribute("data-dock", v);
    buttons.forEach(function (b) {
      var on = b.getAttribute("data-dock") === v;
      b.setAttribute("aria-checked", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
    if (persist) {
      try { localStorage.setItem(KEY, v); } catch (e) {}
    }
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var phone = false;
  try { phone = window.matchMedia("(max-width: 51.99rem)").matches; } catch (e) {}
  var initial = saved === "bottom" || saved === "top"
    ? saved
    : (phone ? "bottom" : "top");
  apply(initial, false);
  // Do NOT persist the automatic phone default until user docks/drags/clicks —
  // so rotating to desktop later does not stick bottom forever.

  group.addEventListener("click", function (e) {
    var b = e.target.closest("[data-dock]");
    if (!b || !group.contains(b)) return;
    apply(b.getAttribute("data-dock"), true);
  });
  group.addEventListener("keydown", function (e) {
    var i = buttons.indexOf(document.activeElement);
    if (i < 0) return;
    var n = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % buttons.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + buttons.length) % buttons.length;
    else return;
    e.preventDefault();
    apply(buttons[n].getAttribute("data-dock"), true);
    buttons[n].focus();
  });

  var dragging = false;
  var startY = 0;
  var baseY = 0;
  var pointerId = null;
  var mastH = 0;

  function isNavOrDock(t) {
    return t && t.closest && t.closest("a[href], .dock-btn, input, textarea, select");
  }

  function onDown(e) {
    if (e.button != null && e.button !== 0) return;
    if (isNavOrDock(e.target)) return;
    dragging = true;
    pointerId = e.pointerId;
    startY = e.clientY;
    var rect = mast.getBoundingClientRect();
    baseY = rect.top;
    mastH = rect.height;
    mast.classList.add("mast-dragging");
    document.documentElement.classList.add("mast-no-select");
    try { mast.setPointerCapture(pointerId); } catch (err) {}
    e.preventDefault();
  }

  function onMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    var dy = e.clientY - startY;
    mast.style.transform = "translate(-50%, " + dy + "px)";
  }

  function onUp(e) {
    if (!dragging || (pointerId != null && e.pointerId !== pointerId)) return;
    dragging = false;
    mast.classList.remove("mast-dragging");
    document.documentElement.classList.remove("mast-no-select");
    try { mast.releasePointerCapture(pointerId); } catch (err) {}
    pointerId = null;
    var dy = e.clientY - startY;
    mast.style.transform = "";
    if (Math.abs(dy) < 8) return;
    var center = baseY + dy + mastH / 2;
    apply(center > window.innerHeight / 2 ? "bottom" : "top", true);
  }

  mast.addEventListener("pointerdown", onDown);
  mast.addEventListener("pointermove", onMove);
  mast.addEventListener("pointerup", onUp);
  mast.addEventListener("pointercancel", onUp);

  mast.addEventListener("keydown", function (e) {
    if (!e.altKey) return;
    if (e.key === "ArrowUp") { apply("top", true); e.preventDefault(); }
    if (e.key === "ArrowDown") { apply("bottom", true); e.preventDefault(); }
  });
})();

/* SITE_MASTHEAD_ANIMATE masthead6 */
(function () {
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var motto = document.querySelector(".page-home .masthead-band--amazing .motto");
  if (motto) {
    if (reduce) {
      motto.classList.add("is-in");
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            motto.classList.add("is-in");
            requestAnimationFrame(function () { motto.classList.add("is-breath"); });
            io.disconnect();
          }
        });
      }, { threshold: 0.55 });
      io.observe(motto);
    } else {
      motto.classList.add("is-in", "is-breath");
    }
  }

  var band = document.querySelector(".page-home .masthead-band--amazing");
  var art = band && band.querySelector(".masthead-art");
  if (!band || !art || reduce) return;
  if (!window.matchMedia("(pointer: fine)").matches && !("ontouchstart" in window)) return;

  function setTilt(clientX, clientY) {
    var r = band.getBoundingClientRect();
    var x = ((clientX - r.left) / r.width) * 2 - 1;
    var y = ((clientY - r.top) / r.height) * 2 - 1;
    band.style.setProperty("--mx", String(Math.max(-1, Math.min(1, x))));
    band.style.setProperty("--my", String(Math.max(-1, Math.min(1, y))));
    band.classList.add("is-tilting");
  }
  function clearTilt() {
    band.classList.remove("is-tilting");
    band.style.setProperty("--mx", "0");
    band.style.setProperty("--my", "0");
  }
  band.addEventListener("pointermove", function (e) {
    if (e.pointerType === "mouse" || e.pointerType === "pen" || e.pointerType === "touch") {
      setTilt(e.clientX, e.clientY);
    }
  });
  band.addEventListener("pointerleave", clearTilt);
  band.addEventListener("pointercancel", clearTilt);
})();
