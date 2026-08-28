(function (root) {
  function pick() {
    var list = [];
    if (typeof navigator !== "undefined") {
      if (navigator.languages && navigator.languages.length) {
        for (var i = 0; i < navigator.languages.length; i++) list.push(navigator.languages[i]);
      }
      if (navigator.language) list.push(navigator.language);
      if (navigator.userLanguage) list.push(navigator.userLanguage);
    }
    for (var n = 0; n < list.length; n++) {
      var hit = map(list[n]);
      if (hit) return hit;
    }
    return "en";
  }

  function map(raw) {
    var tag = String(raw || "").replace(/_/g, "-").trim();
    if (!tag) return null;
    var low = tag.toLowerCase();
    if (low === "pt-br" || low.indexOf("pt-br") === 0) return "pt-BR";
    if (low.indexOf("pt-pt") === 0) return null;
    if (
      low === "zh-hans" ||
      low.indexOf("zh-hans") === 0 ||
      low === "zh-cn" ||
      low.indexOf("zh-cn") === 0 ||
      low === "zh"
    ) {
      return "zh-Hans";
    }
    if (low.indexOf("zh-hant") === 0 || low.indexOf("zh-tw") === 0 || low.indexOf("zh-hk") === 0) {
      return null;
    }
    var p = low.split("-")[0];
    if (p === "pt") return "pt-BR";
    if (p === "en" || p === "es" || p === "fr" || p === "de" || p === "ja" || p === "ar" || p === "he") {
      return p;
    }
    if (p === "iw") return "he";
    return null;
  }

  var loc = pick();
  var rtl = loc === "ar" || loc === "he";
  root.lang = loc;
  root.dir = rtl ? "rtl" : "ltr";
  root.setAttribute("data-locale", loc);
  window.NO_LOCALE = loc;
})(document.documentElement);
