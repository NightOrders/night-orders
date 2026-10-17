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
 descHome: "The record stays with you. Alison, Pack Run, and Stellar Anvil.",
 descMotto: "The record stays with you.",
 homeLede: "Three apps. On your device. No account. Help first.",
 alisonBlurb: "A journal on your device. Not a medical device.",
 moreUsage: "Usage, Keep, privacy",
 
    anvilBlurb: "Marks to Ignite to Star Ash. Paid App Store download $0.99. No in-app purchases. No account. No ads.",
    anvilOneLiner: "Marks to Ignite to Star Ash.",

    packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
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
 alisonNoAds: "No ads. No tracking.",
 alisonOpeningLine: "The journal is yours. Not a diagnosis.",
 alisonJournalNotDx: "Personal journal. Not a diagnosis.",
 alisonPrivacyLine:
 "The journal stays on this phone. Weather is optional and sends your location to weather services. Apple Health is optional and read-only. Not a medical device.",
 alisonPrivacyPolicy: "Privacy policy",
 alisonStart: "Start",
 alisonStop: "Stop",
 alisonStarted: "Started",
 alisonStopped: "Stopped",
 alisonLive: "On",
 alisonDelete: "Delete",
 alisonAdd: "Add",
 alisonHomeWhisper: "Start when it begins. Stop when it ends.",
 alisonHeadacheNow: "Headache right now?",
 alisonHugeStart: "Huge Start. Someone else can tap it. Details fill later.",
 alisonFood: "Food · on this phone",
 alisonFoodHelp: "Ingredients are the help.",
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
 alisonClinicOpen: "The count is honest. Still not a diagnosis. Not a medical device.",
 alisonShareMonth: "Share month",
 alisonShareCopied: "Copied. Take this to a clinician. Not a diagnosis.",
 alisonEpisodes: "episodes",
 alisonMeals: "meals",
 alisonDays: "days",
 alisonHealthWhisper: "Optional read of food, water, sleep, menstrual flow, caffeine, and alcohol already on the device.",
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
 packTabCheckIn: "Maps",
 packTabKeep: "Keep",
 packTabPrivacy: "Privacy",
 packOpen: "OPEN",
 packNoAds: "No ads forever",
 packTagline: "Dog parks near you.",
 packOpeningLine:
 "Pack Run finds dog parks near you and keeps a profile for your dog. A live park count is not part of this version. Location is only to find nearby parks.",
 packPrivacyPolicy: "Privacy policy",
 packDogsWhisper: "Your dogs. On this phone. Not sent anywhere.",
 packAddDog: "Add a dog",
 packEdit: "Edit",
 packSave: "Save",
 packDelete: "Delete",
 packDogOnPhone: "On this phone",
 packDogSample: "Maple",
 packNoNames: "Your dogs and photos stay on this phone.",
 packNearby: "Nearby dog parks.",
 packNamedPark: "Named park",
 packHillPark: "Hill park",
 packThisPhone: "This phone only.",
 packBack: "Parks",
 packCheckIn: "Directions",
 packLeave: "Leave",
 packErase: "Directions open in Apple Maps.",
 packEraseAt: "Directions",
 packGoneNow: "Gone.",
 packGoneIn: "Directions",
 packNoPhoto: "No photo. No GPS track.",
 packKeepTrial: "Keep: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Auto-renews until you cancel; cancel at least 24 hours before the period ends in Apple Subscriptions.",
 packKeepPaid: "Not a paid download.",
 packKeepRoom: "The park finder and one dog are free. Keep unlocks dogs 2 to 8. If Keep ends, the dogs you added stay.",
 packKeepMute: "No ads. Auto-renews. Cancel in Apple Subscriptions.",
 packKeepStore: "Keep is in the App Store build.",
 packPrivacyRoom: "While Using the App only. About 1 km, rounded, goes to park search. Nothing to a Night Orders server. No account.",
 packFig: "OPEN. Dogs, parks, Keep.",
 homeWhat: "What is this?",
 homeWhatA: "A small studio. Three apps: Alison, Pack Run, and Stellar Anvil. The record stays with you.",
 homeData: "Where does my data live?",
 homeDataA:
 "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 homeAds: "Is there an account? Ads?",
 homeAdsA: "No account. No ads. No tracking. No plus, no confetti.",
 homeKeep: "What is Keep?",
 homeKeepA:
 "Keep is through Apple. Alison: 1-month free trial for new subscribers, then $0.99/month (local price varies). Pack Run: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Alison: the journal stays readable without Keep; after your first 24 hours, new Start, Food, and Health pull need Keep. Pack Run: the park finder and one dog are free; Keep unlocks dogs 2 to 8; if Keep ends, the dogs you added stay. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
 homeReach: "How do I reach you?",
 titleFaq: "FAQ — Night Orders",
 faqMotto: "FAQ",
 faqDataA:
 "On your device. No Night Orders account. GDPR / CCPA: we do not sell personal information and we do not share it for ads. Pack Run sends nothing to a Night Orders server.",
 faqAds: "Ads? Account?",
 faqAdsA: "No ads. No tracking. No account. No plus, no confetti.",
 alisonWhat: "What is Alison?",
 alisonWhatA:
 "An on-device headache journal. Observational pairs with migraine days (foods, weather, sleep, meds, env). Three repeats. What has shown up together is shown as a note, not a forecast and not a cause. Not a medical device. Notes are off by default and are not a medical alarm. You can override any hint and delete any row.",
 alisonKeepQ: "Keep?",
 alisonKeepA:
 "Keep is through Apple: 1-month free trial for new subscribers, then $0.99/month (local price varies). Journal stays readable without it. After your first 24 hours, new Start, Food, and Health pull need Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions.",
 faqWatchFood: "Watch, Health, food?",
 faqWatchFoodA:
 "Optional. Watch: start and intensity, same journal. Apple Health is read-only and optional: food, water, sleep, menstrual flow, caffeine, and alcohol. Food lookups send your search or barcode to Open Food Facts, which supplies the ingredients. You can override any hint and delete any row. Deny and the journal still works.",
 packWhat: "What is Pack Run?",
 packWhatA: "Pack Run finds dog parks near you when location is on, and keeps a profile for your dog. A live park count is not part of this version.",
 packWho: "Is there a live park count?",
 packWhoA:
 "Not in this version. Pack Run lists nearby OpenStreetMap dog parks and how far away each one is.",
 packFollow: "Does it follow me?",
 packFollowA:
 "Location is While Using, parks only. Your photos and dog names stay on this phone. The park search sends your location to OpenStreetMap-based services (see Privacy). No account.",
 packKeepQ: "Keep?",
 packKeepA:
 "Keep: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Auto-renews until you cancel; cancel at least 24 hours before the period ends in Apple Subscriptions. The park finder and one dog are free. Keep unlocks dogs 2 to 8. If Keep ends, the dogs you added stay.",
 titleAlison: "Alison — Night Orders",
 descAlison: "Alison is a personal headache journal. On your device. Not a medical device.",
 alisonLede: "Personal headache journal. On your device. No account.",
 alisonProse1:
 "Start when it begins. Stop when it ends. Log meals, water, and sleep as they happen. Journal is what you already wrote.",
 alisonProse2:
 "Observational pairs with migraine days (foods, weather, sleep, meds, env). Three repeats. What has shown up together is shown as a note, not a forecast and not a cause. Not a medical device. It does not diagnose, treat, cure, or prevent migraine or any condition.",
 alisonProse3: "Ingredient-level food log (Open Food Facts). You can override any hint and delete any row.",
 keepH: "Keep",
 alisonKeepP:
 "Journal readable without Keep. Keep is through Apple: 1-month free trial for new subscribers, then $0.99/month (local price varies). After your first 24 hours, new Start, Food, and Health pull need Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
 alisonNote:
 "Optional Apple Watch marks start and intensity. Optional Apple Health reads food, water, sleep, menstrual flow, caffeine, and alcohol already on the device — Turn On All if you want that overlay. Deny and the journal still works.",
 alisonWhatShortA:
 "A personal headache journal. On your device. No account. Not a medical device. It does not diagnose, treat, or prescribe.",
 alisonDo: "What do I actually do?",
 alisonDoA:
 "If a headache is on, tap Start. When it ends, tap Stop. Log meals on Food. Type numbers; sliders are optional. Details can wait.",
 alisonPairQ: "What is a pair?",
 alisonPairA:
 "A diary fact: something you logged that showed up with migraine days. Three repeats. A note is what has shown up together. Observational. Not a trigger test, not causality, not a forecast. You can override any hint and delete any row.",
 alisonWatchQ: "Watch?",
 alisonWatchA: "Optional. Same journal. Start and intensity on a paired Watch. Watch does not read Apple Health.",
 alisonHealthQ: "Apple Health?",
 alisonHealthA:
 "Optional, read-only: food, water, sleep, menstrual flow, caffeine, and alcohol. Turn On All if you want that overlay. Deny and the journal still works. Do not log into MyFitnessPal, Cronometer, or Lose It.",
 alisonWhere: "Where does my journal live?",
 alisonWhereA: "On your device. Deleting the app removes it. We cannot restore a local-only journal.",
 alisonKeepCancelA:
 "Keep is through Apple: 1-month free trial for new subscribers, then $0.99/month (local price varies). Journal stays readable without it. After your first 24 hours, new Start, Food, and Health pull need Keep. When the trial or Keep ends, those services end. Cancel in Apple Subscriptions, not in Alison.",
 titlePack: "Pack Run — Night Orders",
 descPack: "Pack Run finds dog parks near you and keeps a profile for your dog.",
 packLede: "Pack Run finds dog parks near you when location is on.",
 packProse1:
 "One job: find dog parks near you. See how far away each one is, and get directions in Apple Maps.",
 packProseMute:
 "Set up your dog with a name and a photo. Your photos and dog names stay on this phone. The park finder stays free without Keep.",
 packKeepP:
 "The park finder and one dog are free. Keep unlocks dogs 2 to 8. Keep: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Auto-renews until you cancel; cancel at least 24 hours before the period ends in Apple Subscriptions. If Keep ends, the dogs you added stay. Restore on the Keep screen.",
 packNote:
 "Location is While Using the App, for nearby parks. If you do not allow location, Pack Run cannot list parks; the rest of the app still works. No background location. No account. No chat.",
 packWhoLongA:
 "Not in this version. Pack Run lists nearby OpenStreetMap dog parks and how far away each one is, and opens Apple Maps for directions.",
 packPosted: "What leaves my phone?",
 packPostedA:
 "Only an approximate location, rounded to about 1 km, for park search. Names and photos stay on this phone. Pack Run sends nothing to a Night Orders server.",
 packWhy90: "Is there a check-in?",
 packWhy90A: "Not in this version. Pack Run finds parks and keeps your dog profiles.",
 packHowMany: "How do I find a park?",
 packHowManyA:
 "Allow location While Using the App. Pack Run lists nearby OpenStreetMap dog parks and how far away each one is. A live park count is not part of this version.",
 packLoc: "Location?",
 packLocA:
 "Location is While Using the App, and only if you want it. Nearby dog parks when it is on. If you turn it off, Pack Run cannot list parks; the rest of the app still works. Nothing runs in the background.",
 packAcct: "Do I need an account?",
 packAcctA: "No. No chat. No ads. Dogs you add live on your device.",
 packKeepCancelA:
 "Keep: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Auto-renews until you cancel; cancel at least 24 hours before the period ends in Apple Subscriptions. The park finder and one dog are free. Keep unlocks dogs 2 to 8. If Keep ends, the dogs you added stay. Cancel in Apple Subscriptions, not in Pack Run.",
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
 "That is optional. You can let Alison read food, water, sleep, menstrual flow, caffeine, and alcohol from Apple Health. If you say no, the journal still works.",
 supportNotes: "Notes",
 supportNotesA:
 "Off by default. A note shows only for what has shown up together, after three repeats. Not a medical alarm. Not a forecast. Not a cause. You can override any hint and delete any row.",
 supportKeepRow: "I can't start a new entry",
 supportKeepRowA:
 "Journal stays readable. Keep is through Apple: 1-month free trial for new subscribers, then $0.99/month (local price varies). After your first 24 hours, new Start, Food, and Health pull need Keep. When the trial or Keep ends, those services end. Restore on the Keep screen. Cancel in Apple Subscriptions.",
 packSupportAria: "Pack Run support",
 packSupportNote:
 "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 supportNoParks: "No nearby parks",
 supportNoParksA:
 "Allow location While Using the App. If location is off, Pack Run cannot list parks; the rest of the app still works.",
 supportGone: "Where are my dogs stored?",
 supportGoneA:
 "On this phone. Dogs and photos are not sent anywhere. Deleting the app removes them, and we cannot restore them, because we never had a copy.",
 supportKeepIn: "I can't add another dog",
 supportKeepInA:
 "One dog is free. Keep unlocks dogs 2 to 8. Keep: 1-month free trial for new subscribers, then $0.99 a month (local price varies) through Apple. Auto-renews until you cancel; cancel at least 24 hours before the period ends in Apple Subscriptions. If Keep ends, the dogs you added stay.",
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
 "Location is While Using the App, and only if you want it. Nearby dog parks when it is on. If you turn it off, Pack Run cannot list parks; the rest of the app still works. Nothing runs in the background."
 });
 catalogs["en-AU"] = assign(catalogs["en-US"], {
 htmlLang: "en-AU",
 packLocA:
 "Location is While Using the App, and only if you want it. Nearby dog parks when it is on. If you turn it off, Pack Run cannot list parks; the rest of the app still works. Nothing runs in the background."
 });
 catalogs["en-CA"] = assign(catalogs["en-US"], {
 htmlLang: "en-CA",
 packLocA:
 "Location is While Using the App, and only if you want it. Nearby dog parks when it is on. If you turn it off, Pack Run cannot list parks; the rest of the app still works. Nothing runs in the background."
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
