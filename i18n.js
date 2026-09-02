(function () {
  var I = window.NO_I18N = window.NO_I18N || {};

  var CHROME_MAP = {
    navAria: ["navSite", "navAria"],
    navSupport: ["support", "navSupport"],
    navFaq: ["faq", "navFaq"],
    navPrivacy: ["privacy", "navPrivacy"],
    navLegal: ["legal", "navLegal"],
    motto: ["motto"],
    titleHome: ["studio", "titleHome"],
    descHome: ["lede", "descHome"],
    descMotto: ["motto", "descMotto"],
    homeLede: ["lede", "homeLede"],
    alisonBlurb: ["alisonBlurb", "notDevice"],
    moreUsage: ["usageKeepPrivacy", "alisonMore", "moreUsage"],
    packBlurb: ["packBlurb"],
    coming: ["coming"],
    footLine: ["foot", "footLine"],
    supportPrefix: ["supportPrefix"],
    alisonPocAria: ["alisonCap", "alisonPocAria"],
    alisonFood: ["alisonWhisper", "alisonFood", "food"],
    alisonEmpty: ["nothingYet", "empty", "alisonEmpty"],
    alisonMealPh: ["addMeal", "alisonMealPh"],
    alisonMealAria: ["food", "alisonMealAria"],
    alisonAdd: ["add", "alisonAdd"],
    alisonPair: ["pairShowed", "alisonPair"],
    alisonPairDays: ["observational", "alisonPairDays"],
    alisonFig: ["alisonCap", "alisonFig"],
    packPocAria: ["packCap", "packPocAria"],
    packDogsWhisper: ["packWhisperDogs", "packDogsWhisper"],
    packNoNames: ["noNames", "packNoNames"],
    packAddDog: ["addDog", "packAddDog"],
    packLetsGo: ["letsGo", "open", "packLetsGo"],
    packNearby: ["packWhisperParks", "packNearby"],
    packBack: ["parks", "back", "packBack"],
    packCheckIn: ["checkIn", "packCheckIn"],
    packLeave: ["leave", "packLeave"],
    packErase: ["erases90", "erases", "ninetyThenGone", "packErase"],
    packNoPhoto: ["noPhotoNoGps", "noPhoto", "packNoPhoto"],
    packFig: ["packCap", "packFig"],
    homeWhat: ["what", "homeWhat"],
    homeWhatA: ["whatA", "homeWhatA"],
    homeData: ["where", "homeData"],
    homeDataA: ["whereA", "homeDataA"],
    homeAds: ["account", "homeAds"],
    homeAdsA: ["accountA", "homeAdsA"],
    homeKeep: ["keepQ", "homeKeep"],
    homeKeepA: ["keepA", "homeKeepA"],
    homeReach: ["reach", "homeReach"],
    titleFaq: ["faq", "titleFaq"],
    faqMotto: ["faq", "faqMotto"],
    faqAds: ["account", "faqAds"],
    faqAdsA: ["accountA", "faqAdsA"],
    keepH: ["keep", "keepH"],
    packWhat: ["packBlurb", "packWhat"],
    packWho: ["packWho"],
    supportMotto: ["support", "supportMotto"],
    privacyMotto: ["privacy", "privacyMotto"],
    legalMotto: ["legal", "legalMotto"],
    titleSupport: ["support", "titleSupport"],
    titlePrivacy: ["privacy", "titlePrivacy"],
    titleLegal: ["legal", "titleLegal"],
    alisonRoomsAria: ["alisonRoomsAria", "alisonCap"],
    alisonTabAria: ["alison", "alisonTabAria"],
    alisonTabHome: ["home", "navToday", "tabHome", "alisonTabHome"],
    alisonTabFood: ["food", "navFood", "tabFood", "alisonTabFood"],
    alisonTabJournal: ["journal", "navLog", "tabJournal", "alisonTabJournal"],
    alisonTabClinic: ["navClinic", "tabClinic", "clinic", "alisonTabClinic"],
    alisonTabHealth: ["health", "tabHealth", "alisonTabHealth"],
    alisonTabYours: ["yours", "navYours", "tabYours", "alisonTabYours"],
    alisonOpen: ["open", "alisonOpen"],
    alisonNoAds: ["noAds", "alisonNoAds"],
    alisonOpeningLine: ["alisonOpeningLine", "journalNotDx"],
    alisonJournalNotDx: ["journalNotDx", "alisonJournalNotDx"],
    alisonPrivacyLine: ["privacyLine", "alisonPrivacyLine"],
    alisonPrivacyPolicy: ["privacyPolicy", "alisonPrivacyPolicy"],
    alisonClinicWhisper: ["talkClinicWait", "healthClinic", "alisonClinicWhisper"],
    alisonClinicNote: ["alisonClinicNote"],
    alisonHealthStillOff: ["stillOff", "alisonHealthStillOff"],
    alisonHealthConnected: ["connected", "alisonHealthConnected"],
    alisonHealthNotHere: ["healthUnavailable", "alisonHealthNotHere"],
    alisonHealthConnect: ["connect", "alisonHealthConnect"],
    alisonHealthPipe: ["connectHealth", "alisonHealthPipe"],
    alisonHealthTruth: ["healthOptional", "alisonHealthTruth"],
    alisonStart: ["start", "alisonStart"],
    alisonStop: ["stop", "alisonStop"],
    alisonHomeWhisper: ["alisonProse1", "notDevice", "alisonHomeWhisper"],
    alisonHeadacheNow: ["headacheNow", "alisonHeadacheNow"],
    alisonHugeStart: ["hugeStart", "alisonHugeStart"],
    alisonFoodWhisper: ["alisonWhisper", "food", "alisonFoodWhisper"],
    alisonFoodRow: ["alisonFoodRow"],
    alisonFoodNote: ["alisonProse3", "alisonFoodNote"],
    alisonJournalWhisper: ["journal", "alisonJournalWhisper"],
    alisonJournalEmpty: ["nothingYet", "alisonEmpty", "alisonJournalEmpty"],
    alisonHealthWhisper: ["health", "alisonHealthWhisper"],
    alisonHealthNote: ["notDevice", "alisonHealthNote"],
    alisonYoursWhisper: ["yours", "alisonYoursWhisper"],
    alisonYoursNote: ["notDevice", "alisonYoursNote"],
    packRoomsAria: ["packRoomsAria", "packCap"],
    packTabAria: ["packRun", "packTabAria"],
    packTabDogs: ["packTab", "tabPack", "packTabDogs"],
    packTabParks: ["parks", "tabLive", "live", "packTabParks"],
    packTabCheckIn: ["checkIn", "packTabCheckIn"],
    packTabKeep: ["keep", "packTabKeep"],
    packTabPrivacy: ["privacy", "tabPrivacy", "packTabPrivacy"],
    packOpen: ["open", "packOpen"],
    packNoAds: ["noAds", "packNoAds"],
    packTagline: ["onePark", "tagline", "packTagline"],
    packOpeningLine: ["privacyLine", "ninety", "packErase", "packOpeningLine"],
    packPrivacyPolicy: ["privacyPolicy", "packPrivacyPolicy"],
    packDogOnPhone: ["packWhisperDogs", "packDogOnPhone"],
    packDogSample: ["packDogSample"],
    packNamedPark: ["namedPark", "packNamedPark"],
    packHillPark: ["packHillPark"],
    packThisPhone: ["occPhone", "thisPhone", "packThisPhone"],
    packKeepTrial: ["keepTrialThen", "packKeepTrial"],
    packKeepMute: ["keepMute", "keepNoAds", "packKeepMute"],
    packKeepStore: ["keepStore", "packKeepStore"],
    packKeepRoom: ["keepBody", "keepA", "packKeepP", "packKeepRoom"],
    packPrivacyRoom: ["ninety", "packPrivacyRoom"]
  };

  var PAIRS = [
    ["en-US", "en"],
    ["es-ES", "es"],
    ["fr-FR", "fr"],
    ["de-DE", "de"],
    ["ar-SA", "ar"]
  ];

  function firstHit(src, names) {
    if (!src) return null;
    for (var i = 0; i < names.length; i++) {
      var v = src[names[i]];
      if (typeof v === "function") continue;
      if (v != null && String(v).length) return String(v);
    }
    return null;
  }

  function mergeChrome(code, src) {
    if (!code || !src) return;
    var dest = I[code] || {};
    Object.keys(CHROME_MAP).forEach(function (siteKey) {
      if (dest[siteKey]) return;
      var hit = firstHit(src, CHROME_MAP[siteKey]);
      if (hit) dest[siteKey] = hit;
    });
    Object.keys(src).forEach(function (k) {
      var v = src[k];
      if (typeof v === "function") return;
      if (dest[k] == null && v != null && String(v).length) dest[k] = String(v);
    });
    I[code] = dest;
  }

  function ingestFamilyObject(obj) {
    if (!obj) return;
    var copy = obj.copy;
    var locales = obj.LOCALES || obj.locales;
    if (typeof copy === "function" && locales && locales.length) {
      locales.forEach(function (code) { mergeChrome(code, copy(code)); });
    } else if (copy && typeof copy === "object") {
      Object.keys(copy).forEach(function (code) { mergeChrome(code, copy[code]); });
    }
    Object.keys(obj).forEach(function (code) {
      if (code === "copy" || code === "family" || code === "locales" || code === "LOCALES" || typeof obj[code] !== "object" || !obj[code]) return;
      if (obj[code].motto || obj[code].navAria || obj[code].lede || obj[code].navSupport) mergeChrome(code, obj[code]);
    });
  }

  ingestFamilyObject(window.NO_CJK);
  ingestFamilyObject(window.NO_RTL);
  ingestFamilyObject(window.NO_INDIC);
  ingestFamilyObject(window.NO_WEST);
  ingestFamilyObject(window.NO_EAST);
  ingestFamilyObject(window.NO_EN);
  ingestFamilyObject(window.NO_IBERIAN);
  ["rtl", "cjk", "indic", "en", "iberian", "west", "east"].forEach(function (fam) {
    ingestFamilyObject(I[fam]);
  });

  PAIRS.forEach(function (pair) {
    var a = pair[0];
    var b = pair[1];
    if (I[a] && !I[b]) I[b] = I[a];
    if (I[b] && !I[a]) I[a] = I[b];
    if (I[a] && I[b] && I[a] !== I[b]) {
      Object.keys(I[b]).forEach(function (k) { if (I[a][k] == null) I[a][k] = I[b][k]; });
      Object.keys(I[a]).forEach(function (k) { if (I[b][k] == null) I[b][k] = I[a][k]; });
    }
  });

  function t(key) {
    var loc = window.NO_LOCALE || "en-US";
    var pack = I[loc] || {};
    if (pack[key] != null && String(pack[key]).length && String(pack[key]) !== key) return String(pack[key]);
    var en = I["en-US"] || I.en || {};
    if (en[key] != null && String(en[key]).length && String(en[key]) !== key) return String(en[key]);
    if (key === "packAddDog") return "Add a dog";
    return null;
  }

  function dogLabel(n) {
    var count = Math.max(0, Number(n) || 0);
    var loc = window.NO_LOCALE || "en-US";
    if (window.NO_CJK && typeof window.NO_CJK.dogs === "function" && window.NO_CJK.locales && window.NO_CJK.locales.indexOf(loc) !== -1) {
      return window.NO_CJK.dogs(loc, count);
    }
    var east = I.east && I.east.copy && I.east.copy[loc];
    if (east && typeof east.dogsN === "function") return east.dogsN(count);
    var cat = "other";
    try {
      cat = new Intl.PluralRules(loc).select(count);
    } catch (e) {
      cat = count === 1 ? "one" : "other";
    }
    var tpl = t("dog." + cat) || t("dog.other") || "{n} dogs";
    return tpl.replace(/\{n\}/g, String(count));
  }

  function apply() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(key);
      if (key === "packAddDog" && (val == null || val === "" || val === key)) val = "Add a dog";
      if (val == null || val === key) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = t(key);
      if (val != null && val !== key) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = t(key);
      if (val != null && val !== key) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      var val = t(key);
      if (val != null && val !== key) el.setAttribute("content", val);
    });
    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      var tk = titleEl.getAttribute("data-i18n");
      var tv = t(tk);
      if (tv && tv !== tk) document.title = tv;
    }
    var loc = window.NO_LOCALE;
    if (window.NO_CJK && window.NO_CJK.locales && window.NO_CJK.locales.indexOf(loc) !== -1 && typeof window.NO_CJK.apply === "function") {
      try { window.NO_CJK.apply(loc); } catch (e) { /* fit-only */ }
    }
    if (window.NO_INDIC && window.NO_INDIC.LOCALES && window.NO_INDIC.LOCALES.indexOf(loc) !== -1 && typeof window.NO_INDIC.apply === "function") {
      try { window.NO_INDIC.apply(loc); } catch (e2) { /* fit-only */ }
    }
  }

  window.NO_T = t;
  window.NO_DOG = dogLabel;
  window.NO_APPLY = apply;
  apply();
})();
