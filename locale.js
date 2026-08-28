(function (root) {
  var ASC = [
    "ar-SA", "bn-BD", "ca", "cs", "da", "de-DE", "el",
    "en-AU", "en-CA", "en-GB", "en-US", "es-ES", "es-MX",
    "fi", "fr-CA", "fr-FR", "gu-IN", "he", "hi", "hr", "hu", "id", "it",
    "ja", "kn-IN", "ko", "ml-IN", "mr-IN", "ms", "nl-NL", "no", "or-IN",
    "pa-IN", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sl-SI", "sv",
    "ta-IN", "te-IN", "th", "tr", "uk", "ur-PK", "vi", "zh-Hans", "zh-Hant"
  ];
  var RTL = { "ar-SA": 1, ar: 1, he: 1, "ur-PK": 1, ur: 1 };
  var LATAM = {
    MX: 1, AR: 1, BO: 1, CL: 1, CO: 1, CR: 1, CU: 1, DO: 1, EC: 1,
    GT: 1, HN: 1, NI: 1, PA: 1, PE: 1, PR: 1, PY: 1, SV: 1, UY: 1, VE: 1, 419: 1
  };
  var PREFIX = {
    ar: "ar-SA", bn: "bn-BD", ca: "ca", cs: "cs", da: "da", de: "de-DE", el: "el",
    en: "en-US", es: "es-ES", fi: "fi", fr: "fr-FR", gu: "gu-IN", he: "he", iw: "he",
    hi: "hi", hr: "hr", hu: "hu", id: "id", it: "it", ja: "ja", kn: "kn-IN", ko: "ko",
    ml: "ml-IN", mr: "mr-IN", ms: "ms", nl: "nl-NL", no: "no", nb: "no", nn: "no",
    or: "or-IN", od: "or-IN", pa: "pa-IN", pl: "pl", pt: "pt-BR", ro: "ro", ru: "ru",
    sk: "sk", sl: "sl-SI", sv: "sv", ta: "ta-IN", te: "te-IN", th: "th", tr: "tr",
    uk: "uk", ur: "ur-PK", vi: "vi", zh: "zh-Hans"
  };

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
    return "en-US";
  }

  function map(raw) {
    var tag = String(raw || "").replace(/_/g, "-").trim();
    if (!tag) return null;
    var low = tag.toLowerCase();
    var i;
    for (i = 0; i < ASC.length; i++) {
      if (ASC[i].toLowerCase() === low) return ASC[i];
    }
    if (low.indexOf("zh-hant") === 0 || low.indexOf("zh-tw") === 0 || low.indexOf("zh-hk") === 0 || low.indexOf("zh-mo") === 0) {
      return "zh-Hant";
    }
    if (low === "zh-hans" || low.indexOf("zh-hans") === 0 || low.indexOf("zh-cn") === 0 || low.indexOf("zh-sg") === 0 || low === "zh") {
      return "zh-Hans";
    }
    if (low.indexOf("pt-br") === 0) return "pt-BR";
    if (low.indexOf("pt-pt") === 0) return "pt-PT";
    if (low.indexOf("fr-ca") === 0) return "fr-CA";
    if (low.indexOf("en-au") === 0) return "en-AU";
    if (low.indexOf("en-ca") === 0) return "en-CA";
    if (low.indexOf("en-gb") === 0 || low.indexOf("en-uk") === 0) return "en-GB";
    if (low.indexOf("es-mx") === 0 || low === "es-419") return "es-MX";
    var parts = low.split("-");
    var p = parts[0];
    var region = (parts[1] || "").toUpperCase();
    if (p === "es" && LATAM[region]) return "es-MX";
    if (PREFIX[p]) return PREFIX[p];
    return null;
  }

  var loc = pick();
  var rtl = !!RTL[loc] || loc.indexOf("ar") === 0 || loc.indexOf("he") === 0 || loc.indexOf("ur") === 0;
  root.lang = loc;
  root.dir = rtl ? "rtl" : "ltr";
  root.setAttribute("data-locale", loc);
  window.NO_LOCALE = loc;
  window.NO_ASC = ASC;
})(document.documentElement);
