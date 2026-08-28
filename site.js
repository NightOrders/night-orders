(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function locTag() {
    return window.NO_LOCALE || undefined;
  }

  function clockText() {
    return new Date().toLocaleTimeString(locTag(), {
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

  function armAlison(phone) {
    const bar = phone.querySelector(".glass-bar");
    if (bar) bar.hidden = false;
    phone.querySelectorAll(".glass-bar [data-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        showRoom(phone, tab.getAttribute("data-tab"));
      });
    });
    const start = phone.querySelector("[data-alison-start]");
    const stop = phone.querySelector("[data-alison-stop]");
    if (start && stop) {
      start.addEventListener("click", function () {
        start.hidden = true;
        stop.hidden = false;
      });
      stop.addEventListener("click", function () {
        stop.hidden = true;
        start.hidden = false;
      });
    }
    showRoom(phone, "home");
  }

  function armPack(phone) {
    const bar = phone.querySelector(".glass-bar");
    const openBtn = phone.querySelector("[data-pack-open]");
    function enter(id) {
      if (bar) bar.hidden = id === "opening";
      showRoom(phone, id);
    }
    if (openBtn) {
      openBtn.addEventListener("click", function () {
        enter("dogs");
      });
    }
    phone.querySelectorAll(".glass-bar [data-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        enter(tab.getAttribute("data-tab"));
      });
    });
    phone.querySelectorAll("[data-pack-to-checkin]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        enter("checkin");
      });
    });
    phone.querySelectorAll("[data-pack-to-parks]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        enter("parks");
      });
    });
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
