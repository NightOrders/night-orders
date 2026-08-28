/** LANG-EN chrome. en-US keys. Storefronts en-US en-GB en-AU en-CA. Do not mix. */
(function (root) {
  var FALLBACK = "en-US";
  var STOREFRONTS = ["en-US", "en-GB", "en-AU", "en-CA"];

  var dogPlural = {
    "dog.zero": "{n} dogs",
    "dog.one": "{n} dog",
    "dog.two": "{n} dogs",
    "dog.few": "{n} dogs",
    "dog.many": "{n} dogs",
    "dog.other": "{n} dogs"
  };

  var enUS = {
    navAria: "Site",
    navSupport: "Support",
    navFaq: "FAQ",
    navPrivacy: "Privacy",
    navLegal: "Legal",
    motto: "The record stays with you.",
    titleHome: "Night Orders",
    descHome: "The record stays with you. Alison and Pack Run.",
    descMotto: "The record stays with you.",
    homeLede: "Two apps at launch. On your device. No account. Help first.",
    alisonBlurb: "A journal on your device. Not a medical device.",
    moreUsage: "Usage, Keep, privacy",
    packBlurb: "Are dogs at this park. Check-in lasts 90 minutes, then it is erased.",
    coming: "Coming to the App Store",
    footLine: "Night Orders. No ads. No account.",
    supportPrefix: "Support:",
    alisonPocAria: "Alison. Home Start and Stop. Food, Journal, Health, Yours.",
    alisonRoomsAria: "Alison. Home Start and Stop. Food, Journal, Health, Yours.",
    alisonTabAria: "Alison",
    alisonTabHome: "Home",
    alisonTabFood: "Food",
    alisonTabJournal: "Journal",
    alisonTabHealth: "Health",
    alisonTabYours: "Yours",
    alisonStart: "Start",
    alisonStop: "Stop",
    alisonHomeWhisper: "Start when it begins. Stop when it ends.",
    alisonHeadacheNow: "Headache now",
    alisonHugeStart: "Tap Start. Details can wait.",
    alisonFood: "Food · on this phone",
    alisonFoodWhisper: "Ingredient log. On this phone.",
    alisonFoodRow: "Oats · water",
    alisonFoodNote: "Open Food Facts when you look up a food. Override any hint. Delete any row.",
    alisonEmpty: "Nothing yet.",
    alisonJournalWhisper: "What you already wrote.",
    alisonJournalEmpty: "Nothing yet. Start, then Stop. Meals on Food.",
    alisonHealthWhisper: "Health is a pipe. Optional read of food, water, and sleep already on the device.",
    alisonHealthNote: "Turn On All if you want that overlay. Deny still works. Not a medical device.",
    alisonYoursWhisper: "Light. Health. Pulse. Privacy. Data is yours.",
    alisonYoursNote: "Not a medical device. Journal stays on this phone.",
    alisonFig: "Home. Start and Stop. Food, Journal, Health, Yours.",
    packPocAria: "Pack Run. Opening, dogs, parks, check-in, Keep, privacy.",
    packRoomsAria: "Pack Run. Opening, dogs, parks, check-in, Keep, privacy.",
    packTabAria: "Pack Run",
    packTabDogs: "Dogs",
    packTabParks: "Parks",
    packTabCheckIn: "Check-in",
    packTabKeep: "Keep",
    packTabPrivacy: "Privacy",
    packOpen: "OPEN",
    packNoAds: "No ads forever",
    packTagline: "One park. One count.",
    packOpeningLine: "Check-in lasts 90 minutes, then it is erased.",
    packDogsWhisper: "Your dogs · on this phone",
    packDogOnPhone: "On this phone",
    packNoNames: "No names on the park board.",
    packNearby: "Nearby parks · counts, no names",
    packNamedPark: "Named park",
    packBack: "Parks",
    packCheckIn: "Check in",
    packLeave: "Leave",
    packErase: "Erases in 90 minutes.",
    packNoPhoto: "No photo. No GPS track.",
    packKeepRoom: "Park list stays. Check-in waits on Keep. 30-day trial, then $0.99/month through Apple.",
    packPrivacyRoom: "When In Use, parks only. 90 minutes, then erased. No account. No GPS track.",
    packFig: "OPEN. Dogs, parks, check-in, Keep, privacy.",
    homeWhat: "What is this?",
    homeWhatA: "A small studio. Two apps at launch: Alison and Pack Run. The record stays with you.",
    homeData: "Where does my data live?",
    homeDataA:
      "On your device. No Night Orders account. Alison does not upload the journal. Pack Run check-in is park, pack size, time, and a hashed device id for 90 minutes, then erased.",
    homeAds: "Is there an account? Ads?",
    homeAdsA: "No account. No ads. No analytics on this site or in the apps. No plus, no confetti.",
    homeKeep: "What is Keep?",
    homeKeepA:
      "Keep is a 30-day free trial, then {price}/month through Apple. Alison: the journal stays readable without Keep; new Start, Food, and Health pull wait on Keep. Pack Run: the park list stays; check-in waits on Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    homeReach: "How do I reach you?",
    titleFaq: "FAQ — Night Orders",
    faqMotto: "FAQ",
    faqDataA:
      "On your device. No Night Orders account. GDPR / CCPA: we do not sell personal information and we do not share it for ads. Pack Run occupancy is one host: hashed device, park, pack size, and time, 90 minutes, then erased.",
    faqAds: "Ads? Account?",
    faqAdsA: "No ads. No account. No analytics. No plus, no confetti.",
    alisonWhat: "What is Alison?",
    alisonWhatA:
      "An on-device headache journal. Observational pairs with migraine days (foods, weather, sleep, meds, env). Three repeats. A warning is what has shown up together, not a forecast. Not a medical device. Not ICHD-3. Health is a pipe. Notes are Off by default, warn-only, not a medical alarm. You can override any hint and delete any row.",
    alisonKeepQ: "Keep?",
    alisonKeepA:
      "Keep is a 30-day free trial, then {price}/month through Apple. Journal stays readable without it. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions.",
    faqWatchFood: "Watch, Health, food?",
    faqWatchFoodA:
      "Optional. Watch: start and intensity, same journal. Health is a pipe: optional read of food, water, and sleep already on the device. Open Food Facts is an ingredient-level food log. You can override any hint and delete any row. Deny still works.",
    packWhat: "What is Pack Run?",
    packWhatA: "Are dogs at this park. Nearby parks when location is on. Check-in lasts 90 minutes, then it is erased.",
    packWho: "Who hosts?",
    packWhoA:
      "One Cloudflare host. Users check in. They do not host. Each park is its own room of 80. A park does not see another park. Nobody owns a park.",
    packFollow: "Does it follow me?",
    packFollowA:
      "Location is When In Use, parks only. No Always. No GPS track, photos, or dog names on the occupancy wire. No account.",
    packKeepQ: "Keep?",
    packKeepA:
      "Keep is a 30-day free trial, then {price}/month through Apple. Park list stays. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions.",
    titleAlison: "Alison — Night Orders",
    descAlison: "Alison is a personal headache journal. On your device. Not a medical device.",
    alisonLede: "Personal headache journal. On your device. No account.",
    alisonProse1:
      "Start when it begins. Stop when it ends. Log meals, water, and sleep as they happen. Journal is what you already wrote.",
    alisonProse2:
      "Observational pairs with migraine days (foods, weather, sleep, meds, env). Three repeats. A warning is what has shown up together, not a forecast. Not a medical device. Not ICHD-3. Health is a pipe. It does not diagnose, treat, cure, or prevent migraine or any condition.",
    alisonProse3: "Ingredient-level food log (Open Food Facts). You can override any hint and delete any row.",
    keepH: "Keep",
    alisonKeepP:
      "Journal readable without Keep. Keep is a 30-day free trial, then {price}/month through Apple for new Start, Food, and Health pull. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    alisonNote:
      "Optional Apple Watch marks start and intensity. Optional Apple Health reads food, water, and sleep already on the device — Turn On All if you want that overlay. Deny still works. The journal still works.",
    alisonWhatShortA:
      "A personal headache journal. On your device. No account. Not a medical device. Not ICHD-3. Health is a pipe. It does not diagnose, treat, or prescribe.",
    alisonDo: "What do I actually do?",
    alisonDoA:
      "If a headache is on, tap Start. When it ends, tap Stop. Log meals on Food. Type numbers; sliders are optional. Details can wait.",
    alisonPairQ: "What is a pair?",
    alisonPairA:
      "A diary fact: something you logged that showed up with migraine days. Three repeats. A warning is what has shown up together. Observational. Not a trigger test, not causality, not a forecast. You can override any hint and delete any row.",
    alisonWatchQ: "Watch?",
    alisonWatchA: "Optional. Same journal. Start and intensity on a paired Watch. Watch does not read Apple Health.",
    alisonHealthQ: "Apple Health?",
    alisonHealthA:
      "Optional read of food, water, and sleep already on the device. Turn On All if you want that overlay. Deny still works. Did not connect still works. Do not log into MyFitnessPal, Cronometer, or Lose It.",
    alisonWhere: "Where does my journal live?",
    alisonWhereA: "On your device. Deleting the app removes it. We cannot restore a local-only journal.",
    alisonKeepCancelA:
      "Keep is a 30-day free trial, then {price}/month through Apple. Journal stays readable without it. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions, not in Alison.",
    titlePack: "Pack Run — Night Orders",
    descPack: "Pack Run: are dogs at this park. Check-in lasts 90 minutes, then it is erased.",
    packLede: "Are dogs at this park. Nearby parks when location is on.",
    packProse1:
      "One job: are dogs at this park. The list shows a count, not names. Still there after 90 minutes? Check in again.",
    packProseMute:
      "Users check in. They do not host. One host. Each park is its own room. No GPS track, photos, or dog names on the occupancy wire. Park list stays without Keep.",
    packKeepP:
      "Park list stays without Keep. Keep is a 30-day free trial, then {price}/month through Apple for check-in. When the trial or Keep ends, check-in ends with it. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    packNote:
      "Location is When In Use, for nearby parks. Deny it and a short list still works. No background tracking. No account. No chat.",
    packWhoLongA:
      "One Cloudflare host. Users check in. They do not host. Each park is its own room. A park in one city does not see a park in another. Nobody owns a park. Nobody runs a server on their phone.",
    packPosted: "What gets posted when I check in?",
    packPostedA:
      "Park, pack size, time, and a hashed device id. GPS, photos, and dog names stay on your device. After 90 minutes the row is erased. Leave deletes it now.",
    packWhy90: "Why 90 minutes?",
    packWhy90A: "So the board stays now, not last week. Still at the park? Check in again. The app does not invent a crowd.",
    packHowMany: "How many dogs at a park?",
    packHowManyA:
      "Each park holds 80 check-ins. Oldest drops when a park is full. Other parks are their own rooms. Ask with no park list and the board is empty.",
    packLoc: "Location?",
    packLocA:
      "When In Use, optional. Nearby OpenStreetMap dog parks. No Always. No background track. Deny location and a short list still works.",
    packAcct: "Do I need an account?",
    packAcctA: "No. No chat. No ads. Dogs you add live on your device.",
    packKeepCancelA:
      "Keep is a 30-day free trial, then {price}/month through Apple. Park list stays without it. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions, not in Pack Run.",
    titleSupport: "Support — Night Orders",
    supportMotto: "Support",
    alisonSupportAria: "Alison support",
    alisonSupportNote:
      "On-device journal. Not a medical device. Not ICHD-3. Health is a pipe. Talk to a clinician about symptoms.",
    supportFirst: "First open",
    supportFirstA:
      "If a headache is on, tap Start. When it ends, tap Stop. Log meals, water, and sleep as they happen. Journal is what you already wrote. Watch and Apple Health are optional. Open Food Facts is live search when you look up a food. Ingredient-level food log (Open Food Facts). You can override any hint and delete any row.",
    supportHealth: "Health says did not connect",
    supportHealthA:
      "Optional. Turn On All if you want food, water, and sleep already on the device. Deny still works. The journal still works.",
    supportNotes: "Notes",
    supportNotesA:
      "Off by default. Warn-only for what has shown up together. Three repeats. Not a medical alarm. Not a forecast. You can override any hint and delete any row.",
    supportKeepRow: "Keep will not start a new row",
    supportKeepRowA:
      "Journal stays readable. Keep is a 30-day free trial, then {price} / month. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    packSupportAria: "Pack Run support",
    packSupportNote:
      "Are dogs at this park. Check-in lasts 90 minutes, then it is erased. Users check in. They do not host.",
    supportNoParks: "No nearby parks",
    supportNoParksA:
      "Allow Location When In Use. Parks only. No Always. If location is off, or the map is down, a short list still works.",
    supportGone: "Check-in disappeared",
    supportGoneA:
      "That is the product. Ninety minutes, then erased, or when you leave. Still at the park? Check in again. Camera and photos stay on this phone. They are not on the occupancy wire.",
    supportKeepIn: "Keep will not check in",
    supportKeepInA:
      "Park list stays. Keep is a 30-day free trial, then {price} / month. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions.",
    alisonPrivacyLink: "Alison privacy",
    packPrivacyLink: "Pack Run privacy",
    titleLegal: "Legal — Night Orders",
    legalMotto: "Legal",
    titlePrivacy: "Privacy — Night Orders",
    privacyMotto: "Privacy",
    titlePrivacyAlison: "Privacy — Alison — Night Orders",
    privacyAlisonMotto: "Alison privacy",
    titlePrivacyPack: "Privacy — Pack Run — Night Orders",
    privacyPackMotto: "Pack Run privacy",
    titleTerms: "Terms — Night Orders",
    htmlLang: "en-US",
    dir: "ltr",
    contact: "support@nightorders.app"
  };

  function assign(target, src) {
    var out = {};
    var k;
    for (k in target) if (Object.prototype.hasOwnProperty.call(target, k)) out[k] = target[k];
    for (k in src) if (Object.prototype.hasOwnProperty.call(src, k)) out[k] = src[k];
    return out;
  }

  var catalogs = {};
  catalogs["en-US"] = assign(assign(enUS, dogPlural), { htmlLang: "en-US" });
  catalogs["en-GB"] = assign(catalogs["en-US"], {
    htmlLang: "en-GB",
    packLetsGo: "Let's go",
    packLocA:
      "When In Use, optional. Nearby OpenStreetMap parks. No Always. No background track. Deny location and a short list still works."
  });
  catalogs["en-AU"] = assign(catalogs["en-US"], {
    htmlLang: "en-AU",
    packLocA:
      "When In Use, optional. Nearby OpenStreetMap dog parks. No Always. No background track. Deny location and a short list still works."
  });
  catalogs["en-CA"] = assign(catalogs["en-US"], {
    htmlLang: "en-CA",
    packLocA:
      "When In Use, optional. Nearby OpenStreetMap dog parks. No Always. No background track. Deny location and a short list still works."
  });

  function pickStorefront(raw) {
    var s = String(raw || "")
      .trim()
      .toLowerCase()
      .replace(/_/g, "-");
    if (s === "en-gb" || s.indexOf("en-gb-") === 0 || s === "en-uk") return "en-GB";
    if (s === "en-au" || s.indexOf("en-au-") === 0) return "en-AU";
    if (s === "en-ca" || s.indexOf("en-ca-") === 0) return "en-CA";
    return FALLBACK;
  }

  function enPluralCat(n) {
    return Math.abs(Number(n)) === 1 ? "one" : "other";
  }

  function pickPlural(n) {
    var cat = enPluralCat(n);
    var key = cat === "one" ? "dog.one" : "dog.other";
    return String(catalogs[FALLBACK][key] || "{n} dogs").replace(/\{n\}/g, String(n));
  }

  var bag = root.NO_I18N || {};
  bag.en = catalogs[FALLBACK];
  bag["en-US"] = catalogs["en-US"];
  bag["en-GB"] = catalogs["en-GB"];
  bag["en-AU"] = catalogs["en-AU"];
  bag["en-CA"] = catalogs["en-CA"];
  bag.FALLBACK = FALLBACK;
  bag.STOREFRONTS = STOREFRONTS;
  bag.pickStorefront = pickStorefront;
  bag.pickPlural = pickPlural;
  bag.enPluralCat = enPluralCat;
  root.NO_I18N = bag;
})(typeof window !== "undefined" ? window : globalThis);
