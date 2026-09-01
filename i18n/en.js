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
    alisonPocAria: "Alison. Opening, Home, Food, Journal, Clinic, Yours.",
    alisonRoomsAria: "Alison. Opening, Home, Food, Journal, Clinic, Yours.",
    alisonTabAria: "Alison",
    alisonTabHome: "Home",
    alisonTabFood: "Food",
    alisonTabJournal: "Journal",
    alisonTabClinic: "Clinic",
    alisonTabHealth: "Health",
    alisonTabYours: "Yours",
    alisonOpen: "OPEN",
    alisonNoAds: "No ads forever",
    alisonOpeningLine: "The journal is yours. Not a diagnosis.",
    alisonJournalNotDx: "Personal journal. Not a diagnosis.",
    alisonPrivacyLine:
      "Journal stays on this phone. Location is optional, weather only. Apple Health is optional: journal overlay, not diagnosis. Not a medical device.",
    alisonPrivacyPolicy: "Privacy policy",
    alisonStart: "Start",
    alisonStop: "Stop",
    alisonHomeWhisper: "Start when it begins. Stop when it ends.",
    alisonHeadacheNow: "Headache right now?",
    alisonHugeStart: "Huge Start. Someone else can tap it. Details fill later.",
    alisonFood: "Food · on this phone",
    alisonFoodWhisper: "Search, scan, or type. Ingredients are the help. Not calories. Not a trigger test.",
    alisonFoodRow: "Oats · water",
    alisonFoodOff: "Off",
    alisonFoodNote: "Open Food Facts when you look up a food. Override any hint. Delete any row.",
    alisonEmpty: "Nothing yet.",
    alisonJournalWhisper: "Journal is nothing extra. It is what you already wrote.",
    alisonJournalEmpty: "Nothing yet. Start, then Stop. Meals on Food.",
    alisonClinicWhisper:
      "Clinic letter stays closed until the count is honest. You can still share the month page. Not a diagnosis.",
    alisonClinicNote: "Five episodes, eight meals, seven days. Your words. Not a medical device.",
    alisonHealthWhisper: "Health is a pipe. Optional read of food, water, and sleep already on the device.",
    alisonHealthNote: "Turn On All if you want that overlay. Deny still works. Not a medical device.",
    alisonHealthPipe: "Apple Health",
    alisonHealthStillOff: "Still off",
    alisonHealthConnected: "Connected",
    alisonHealthNotHere: "Health not on this device. Journal still works.",
    alisonHealthConnect: "Connect",
    alisonHealthTruth: "Optional. This browser cannot read Apple Health. Journal still works.",
    alisonYoursWhisper: "Data is beautiful. It is yours.",
    alisonYoursNote: "The journal stays on this phone. No account. Apple Health is optional. Not a medical device.",
    alisonFig: "OPEN. Home, Food, Journal, Clinic, Yours.",
    packPocAria: "Pack Run. Opening, dogs, parks, Keep.",
    packRoomsAria: "Pack Run. Opening, dogs, parks, Keep.",
    packTabAria: "Pack Run",
    packTabDogs: "Dogs",
    packTabParks: "Parks",
    packTabCheckIn: "Check-in",
    packTabKeep: "Keep",
    packTabPrivacy: "Privacy",
    packOpen: "OPEN",
    packNoAds: "No ads forever",
    packTagline: "One park. One count.",
    packOpeningLine:
      "Check-in lasts 90 minutes, then it's gone. Still here? Check in again. The count is this park, this pack. If the board is quiet, it's just this phone. Location is only to find nearby parks.",
    packPrivacyPolicy: "Privacy policy",
    packDogsWhisper: "Your dogs. On this phone. No names on the park board.",
    packDogOnPhone: "On this phone",
    packDogSample: "Maple",
    packNoNames: "No names on the park board.",
    packNearby: "Nearby parks. Counts, no names.",
    packNamedPark: "Named park",
    packHillPark: "Hill park",
    packThisPhone: "This phone only.",
    packBack: "Parks",
    packCheckIn: "Check in",
    packLeave: "Leave",
    packErase: "Erases in 90 minutes.",
    packNoPhoto: "No photo. No GPS track.",
    packKeepTrial: "30-day free trial, then $0.99 / month through Apple.",
    packKeepRoom: "The live count stays. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it.",
    packKeepMute: "No ads. Auto-renews. Cancel in Apple Subscriptions.",
    packKeepStore: "Keep is in the App Store build.",
    packPrivacyRoom: "When In Use, parks only. 90 minutes, then erased. No account. No GPS track.",
    packFig: "OPEN. Dogs, parks, Keep.",
    homeWhat: "What is this?",
    homeWhatA: "A small studio. Two apps at launch: Alison and Pack Run. The record stays with you.",
    homeData: "Where does my data live?",
    homeDataA:
      "On your device. No Night Orders account. Alison does not upload the journal. Pack Run check-in is park, pack size, time, and a hashed device id for 90 minutes, then erased.",
    homeAds: "Is there an account? Ads?",
    homeAdsA: "No account. No ads. No analytics on this site or in the apps. No plus, no confetti.",
    homeKeep: "What is Keep?",
    homeKeepA:
      "Keep is a 30-day free trial, then $0.99/month through Apple. Alison: the journal stays readable without Keep; new Start, Food, and Health pull wait on Keep. Pack Run: the park list stays; check-in waits on Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    homeReach: "How do I reach you?",
    titleFaq: "FAQ — Night Orders",
    faqMotto: "FAQ",
    faqDataA:
      "On your device. No Night Orders account. GDPR / CCPA: we do not sell personal information and we do not share it for ads. Pack Run check-in is park and count only. It lasts 90 minutes, then it's gone.",
    faqAds: "Ads? Account?",
    faqAdsA: "No ads. No account. No analytics. No plus, no confetti.",
    alisonWhat: "What is Alison?",
    alisonWhatA:
      "An on-device headache journal. Observational pairs with migraine days (foods, weather, sleep, meds, env). Three repeats. A warning is what has shown up together, not a forecast. Not a medical device. Not ICHD-3. Health is a pipe. Notes are Off by default, warn-only, not a medical alarm. You can override any hint and delete any row.",
    alisonKeepQ: "Keep?",
    alisonKeepA:
      "Keep is a 30-day free trial, then $0.99/month through Apple. Journal stays readable without it. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions.",
    faqWatchFood: "Watch, Health, food?",
    faqWatchFoodA:
      "Optional. Watch: start and intensity, same journal. Health is a pipe: optional read of food, water, and sleep already on the device. Open Food Facts is an ingredient-level food log. You can override any hint and delete any row. Deny still works.",
    packWhat: "What is Pack Run?",
    packWhatA: "Are dogs at this park. Nearby parks when location is on. Check-in lasts 90 minutes, then it is erased.",
    packWho: "How do park counts work?",
    packWhoA:
      "You check in from your phone. Parks don't share with each other, and nobody owns a park.",
    packFollow: "Does it follow me?",
    packFollowA:
      "Location is When In Use, parks only. Your location, photos, and dog names stay on this phone. No account.",
    packKeepQ: "Keep?",
    packKeepA:
      "Keep is a 30-day free trial, then $0.99/month through Apple. Park list stays. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions.",
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
      "Journal readable without Keep. Keep is a 30-day free trial, then $0.99/month through Apple for new Start, Food, and Health pull. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
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
      "Keep is a 30-day free trial, then $0.99/month through Apple. Journal stays readable without it. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions, not in Alison.",
    titlePack: "Pack Run — Night Orders",
    descPack: "Pack Run: are dogs at this park. Check-in lasts 90 minutes, then it is erased.",
    packLede: "Are dogs at this park. Nearby parks when location is on.",
    packProse1:
      "One job: are dogs at this park. The list shows a count, not names. Still there after 90 minutes? Check in again.",
    packProseMute:
      "Check in at a park and the count goes up. Parks stay separate. Your location, photos, and dog names stay on this phone. You can still see the park list without Keep.",
    packKeepP:
      "Park list stays without Keep. Keep is a 30-day free trial, then $0.99/month through Apple for check-in. When the trial or Keep ends, check-in ends with it. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    packNote:
      "Location is When In Use, for nearby parks. Deny it and a short list still works. No background tracking. No account. No chat.",
    packWhoLongA:
      "You check in from your phone. A park in one city doesn't see a park in another. Nobody owns a park, and you don't run anything extra on your phone.",
    packPosted: "What do other people see?",
    packPostedA:
      "The park, how many dogs, and when. Names, photos, and your exact spot stay on this phone. After 90 minutes it disappears. Leave and it is gone now.",
    packWhy90: "Why 90 minutes?",
    packWhy90A: "So the board is now, not last week. Still at the park? Check in again. Empty parks stay empty.",
    packHowMany: "How many dogs at a park?",
    packHowManyA:
      "Each park shows a live count. When it's busy, the oldest check-in drops off so the board stays current. Parks stay separate. With location off, you still get a short list.",
    packLoc: "Location?",
    packLocA:
      "Location is When In Use, and only if you want it. Nearby dog parks when it is on. Turn it off and you still get a short list. Nothing runs in the background.",
    packAcct: "Do I need an account?",
    packAcctA: "No. No chat. No ads. Dogs you add live on your device.",
    packKeepCancelA:
      "Keep is a 30-day free trial, then $0.99/month through Apple. Park list stays without it. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions, not in Pack Run.",
    titleSupport: "Support — Night Orders",
    supportMotto: "Support",
    alisonSupportAria: "Alison support",
    alisonSupportNote:
      "A journal on your phone. Not a medical device. Talk to a clinician about symptoms.",
    supportFirst: "How do I start?",
    supportFirstA:
      "If a headache is on, tap Start. When it ends, tap Stop. Log meals, water, and sleep as they happen. The journal is what you already wrote. Watch and Apple Health are optional. Look up a food when you want. Change or delete any row.",
    supportHealth: "Health did not connect",
    supportHealthA:
      "That is optional. You can let Alison read food, water, and sleep already on the phone. If you say no, the journal still works.",
    supportNotes: "Notes",
    supportNotesA:
      "Off by default. Warn-only for what has shown up together. Three repeats. Not a medical alarm. Not a forecast. You can override any hint and delete any row.",
    supportKeepRow: "I can't start a new entry",
    supportKeepRowA:
      "Journal stays readable. Keep is a 30-day free trial, then $0.99 / month. New Start, Food, and Health pull wait on Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
    packSupportAria: "Pack Run support",
    packSupportNote:
      "Are dogs at this park. Check-in lasts 90 minutes, then it is erased.",
    supportNoParks: "No nearby parks",
    supportNoParksA:
      "Allow location When In Use, parks only. If location is off, or the map is down, a short list still works.",
    supportGone: "Check-in disappeared",
    supportGoneA:
      "That's on purpose. Check-in lasts 90 minutes, or until you leave. Still at the park? Check in again. Camera and photos stay on this phone.",
    supportKeepIn: "I can't check in",
    supportKeepInA:
      "Park list stays. Keep is a 30-day free trial, then $0.99 / month. Check-in waits on Keep. When the trial or Keep ends, check-in ends with it. Cancel in Apple Subscriptions.",
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
      "Location is When In Use, and only if you want it. Nearby parks when it is on. Turn it off and you still get a short list. Nothing runs in the background."
  });
  catalogs["en-AU"] = assign(catalogs["en-US"], {
    htmlLang: "en-AU",
    packLocA:
      "Location is When In Use, and only if you want it. Nearby dog parks when it is on. Turn it off and you still get a short list. Nothing runs in the background."
  });
  catalogs["en-CA"] = assign(catalogs["en-US"], {
    htmlLang: "en-CA",
    packLocA:
      "Location is When In Use, and only if you want it. Nearby dog parks when it is on. Turn it off and you still get a short list. Nothing runs in the background."
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
