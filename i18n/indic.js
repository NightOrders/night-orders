/** Indic chrome for nightorders.app. hi bn-BD gu-IN kn-IN ml-IN mr-IN or-IN pa-IN ta-IN te-IN.
 *  Real scripts. Real line-break. Real fonts. Real plurals.
 *  Chrome only. No /es/ hops. mailto:support@nightorders.app. Islands one glass bar.
 *  OSM names stay as mapped. Alison: no medical translation.
 */
(function (root) {
  var LOCALES = ["hi", "bn-BD", "gu-IN", "kn-IN", "ml-IN", "mr-IN", "or-IN", "pa-IN", "ta-IN", "te-IN"];
  var FEATURES =
    '"kern" 1, "liga" 1, "calt" 1, "locl" 1, "akhn" 1, "blwf" 1, "half" 1, "vatu" 1, "pres" 1, "abvs" 1, "blws" 1, "psts" 1, "haln" 1';
  var FONTS = {
    Deva: '"Kohinoor Devanagari","ITF Devanagari","Devanagari Sangam MN","Noto Sans Devanagari",system-ui,sans-serif',
    Beng: '"Kohinoor Bangla","Bangla Sangam MN","Noto Sans Bengali",system-ui,sans-serif',
    Gujr: '"Kohinoor Gujarati","Gujarati Sangam MN","Noto Sans Gujarati",system-ui,sans-serif',
    Knda: '"Kohinoor Kannada","Kannada Sangam MN","Noto Sans Kannada",system-ui,sans-serif',
    Mlym: '"Malayalam Sangam MN","Noto Sans Malayalam",system-ui,sans-serif',
    Orya: '"Oriya Sangam MN","Kohinoor Odia","Noto Sans Oriya",system-ui,sans-serif',
    Guru: '"Kohinoor Gurmukhi","Gurmukhi MN","Gurmukhi Sangam MN","Noto Sans Gurmukhi",system-ui,sans-serif',
    Taml: '"Tamil Sangam MN","Kohinoor Tamil","Noto Sans Tamil",system-ui,sans-serif',
    Telu: '"Kohinoor Telugu","Telugu Sangam MN","Noto Sans Telugu",system-ui,sans-serif',
  };
  var SCRIPT = {
    hi: { iso: "Deva", unicode: "Devanagari", virama: "\u094D", fonts: FONTS.Deva, lh: "1.42" },
    "bn-BD": { iso: "Beng", unicode: "Bengali", virama: "\u09CD", fonts: FONTS.Beng, lh: "1.48" },
    "gu-IN": { iso: "Gujr", unicode: "Gujarati", virama: "\u0ACD", fonts: FONTS.Gujr, lh: "1.44" },
    "kn-IN": { iso: "Knda", unicode: "Kannada", virama: "\u0CCD", fonts: FONTS.Knda, lh: "1.5" },
    "ml-IN": { iso: "Mlym", unicode: "Malayalam", virama: "\u0D4D", fonts: FONTS.Mlym, lh: "1.52" },
    "mr-IN": { iso: "Deva", unicode: "Devanagari", virama: "\u094D", fonts: FONTS.Deva, lh: "1.42" },
    "or-IN": { iso: "Orya", unicode: "Oriya", virama: "\u0B4D", fonts: FONTS.Orya, lh: "1.5" },
    "pa-IN": { iso: "Guru", unicode: "Gurmukhi", virama: "\u0A4D", fonts: FONTS.Guru, lh: "1.44" },
    "ta-IN": { iso: "Taml", unicode: "Tamil", virama: "\u0BCD", fonts: FONTS.Taml, lh: "1.5" },
    "te-IN": { iso: "Telu", unicode: "Telugu", virama: "\u0CCD", fonts: FONTS.Telu, lh: "1.5" },
  };
  var MAIL = "support@nightorders.app";
  var FONTS_HREF =
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Gujarati:wght@400;600;700&family=Noto+Sans+Gurmukhi:wght@400;600;700&family=Noto+Sans+Kannada:wght@400;600;700&family=Noto+Sans+Malayalam:wght@400;600;700&family=Noto+Sans+Oriya:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans+Telugu:wght@400;600;700&display=swap";

  function oneLocales(locale, n) {
    if (!isFinite(n)) return "other";
    var i = Math.trunc(Math.abs(n));
    if (locale === "hi" || locale === "bn-BD" || locale === "gu-IN" || locale === "kn-IN" || locale === "pa-IN") {
      return i === 0 || n === 1 ? "one" : "other";
    }
    return n === 1 ? "one" : "other";
  }

  function copy() {
    return {
      hi: {
        studio: "Night Orders",
        motto: "रिकॉर्ड आपके पास रहता है।",
        lede: "लॉन्च पर दो ऐप। आपके डिवाइस पर। खाता नहीं। पहले मदद।",
        coming: "App Store पर आ रहा है",
        alison: "Alison",
        pack: "Pack Run",
        support: "सहायता",
        faq: "सवाल",
        privacy: "गोपनीयता",
        legal: "कानूनी",
        noAds: "विज्ञापन कभी नहीं",
        noAccount: "खाता नहीं।",
        what: "यह क्या है?",
        whatBody: "एक छोटा स्टूडियो। लॉन्च पर दो ऐप: Alison और Pack Run। रिकॉर्ड आपके पास रहता है।",
        where: "मेरा डेटा कहाँ रहता है?",
        whereBody:
          "आपके डिवाइस पर। Night Orders खाता नहीं। Alison जर्नल अपलोड नहीं करता। Pack Run चेक-इन पार्क, पैक आकार, समय, और हैश डिवाइस आईडी 90 मिनट, फिर मिट जाता है।",
        ads: "खाता है? विज्ञापन?",
        adsBody: "खाता नहीं। विज्ञापन नहीं। इस साइट या ऐप में एनालिटिक्स नहीं।",
        keepQ: "Keep क्या है?",
        keepBody:
          "Keep 30 दिन मुफ़्त, फिर Apple से मासिक। Alison: बिना Keep जर्नल पढ़ा जा सकता है; नया शुरू, खाना, हेल्थ पुल Keep पर रुकते हैं। Pack Run: पार्क सूची रहती है; चेक-इन Keep पर रुकता है। रद्द Apple सदस्यताओं में।",
        reach: "कैसे पहुँचें?",
        more: "उपयोग, Keep, गोपनीयता",
        alisonLine: "आपके डिवाइस पर जर्नल। चिकित्सा उपकरण नहीं।",
        packLine: "इस पार्क पर कुत्ते हैं। चेक-इन 90 मिनट, फिर मिट जाता है।",
        home: "होम",
        food: "खाना",
        journal: "जर्नल",
        health: "हेल्थ",
        yours: "आपका",
        start: "शुरू",
        stop: "रोकें",
        open: "खोलें",
        dim: "मद्धम",
        pulse: "पल्स",
        keep: "Keep",
        addMeal: "भोजन जोड़ें",
        add: "जोड़ें",
        nothingYet: "अभी कुछ नहीं।",
        mealPh: "भोजन जोड़ें",
        pair: "जोड़ी दिखी",
        observational: "प्रेक्षण। पूर्वानुमान नहीं।",
        live: "लाइव",
        tabPack: "पैक",
        checkIn: "चेक-इन",
        leave: "जाएँ",
        addDog: "कुत्ता जोड़ें",
        letsGo: "चलें",
        parks: "पार्क",
        noNames: "नाम नहीं।",
        yourDogs: "आपके कुत्ते · गिनती, नाम नहीं",
        nearby: "पास के पार्क · गिनती, नाम नहीं",
        erases: "90 मिनट में मिटेगा।",
        noGps: "फ़ोटो नहीं। GPS ट्रैक नहीं।",
        figAlison: "भोजन जोड़ें। जोड़ी दिख सकती है।",
        figPack: "कुत्ता जोड़ें। फिर चेक-इन। गिनती, नाम नहीं।",
        dogs: function (n) {
          return oneLocales("hi", n) === "one" ? n + " कुत्ता" : n + " कुत्ते";
        },
      },
      "bn-BD": {
        studio: "Night Orders",
        motto: "রেকর্ড আপনার কাছে থাকে।",
        lede: "লঞ্চে দুই অ্যাপ। আপনার ডিভাইসে। অ্যাকাউন্ট নেই। আগে সাহায্য।",
        coming: "App Store-এ আসছে",
        alison: "Alison",
        pack: "Pack Run",
        support: "সহায়তা",
        faq: "প্রশ্ন",
        privacy: "গোপনীয়তা",
        legal: "আইন",
        noAds: "বিজ্ঞাপন কখনো না",
        noAccount: "অ্যাকাউন্ট নেই।",
        what: "এটা কী?",
        whatBody: "একটি ছোট স্টুডিও। লঞ্চে দুই অ্যাপ: Alison ও Pack Run। রেকর্ড আপনার কাছে থাকে।",
        where: "আমার ডেটা কোথায়?",
        whereBody:
          "আপনার ডিভাইসে। Night Orders অ্যাকাউন্ট নেই। Alison জার্নাল আপলোড করে না। Pack Run চেক-ইন পার্ক, প্যাক আকার, সময়, ও হ্যাশ ডিভাইস আইডি ৯০ মিনিট, তারপর মুছে যায়।",
        ads: "অ্যাকাউন্ট? বিজ্ঞাপন?",
        adsBody: "অ্যাকাউন্ট নেই। বিজ্ঞাপন নেই। এই সাইট বা অ্যাপে অ্যানালিটিক্স নেই।",
        keepQ: "Keep কী?",
        keepBody:
          "Keep ৩০ দিন ফ্রি, তারপর Apple থেকে মাসিক। Alison: Keep ছাড়া জার্নাল পড়া যায়; নতুন শুরু, খাবার, হেলথ পুল Keep-এর অপেক্ষায়। Pack Run: পার্ক তালিকা থাকে; চেক-ইন Keep-এর অপেক্ষায়। বাতিল Apple সাবস্ক্রিপশনে।",
        reach: "কীভাবে যোগাযোগ?",
        more: "ব্যবহার, Keep, গোপনীয়তা",
        alisonLine: "আপনার ডিভাইসে জার্নাল। চিকিৎসা যন্ত্র নয়।",
        packLine: "এই পার্কে কুকুর আছে। চেক-ইন ৯০ মিনিট, তারপর মুছে যায়।",
        home: "হোম",
        food: "খাবার",
        journal: "জার্নাল",
        health: "হেলথ",
        yours: "আপনার",
        start: "শুরু",
        stop: "থামান",
        open: "খুলুন",
        dim: "মৃদু",
        pulse: "পালস",
        keep: "Keep",
        addMeal: "খাবার যোগ",
        add: "যোগ",
        nothingYet: "এখনো কিছু নেই।",
        mealPh: "খাবার যোগ",
        pair: "এক জোড়া দেখা গেল",
        observational: "পর্যবেক্ষণ। পূর্বাভাস নয়।",
        live: "লাইভ",
        tabPack: "প্যাক",
        checkIn: "চেক-ইন",
        leave: "যান",
        addDog: "কুকুর যোগ",
        letsGo: "চলুন",
        parks: "পার্ক",
        noNames: "নাম নেই।",
        yourDogs: "আপনার কুকুর · গণনা, নাম নয়",
        nearby: "কাছের পার্ক · গণনা, নাম নয়",
        erases: "৯০ মিনিটে মুছে যাবে।",
        noGps: "ছবি নেই। GPS ট্র্যাক নেই।",
        figAlison: "খাবার যোগ করুন। জোড়া দেখা দিতে পারে।",
        figPack: "কুকুর যোগ করুন। তারপর চেক-ইন। গণনা, নাম নয়।",
        dogs: function (n) {
          return n + " কুকুর";
        },
      },
      "gu-IN": {
        studio: "Night Orders",
        motto: "રેકોર્ડ તમારી પાસે રહે.",
        lede: "લોન્ચ પર બે એપ. તમારા ડિવાઇસ પર. એકાઉન્ટ નહીં. પહેલા મદદ.",
        coming: "App Store પર આવે છે",
        alison: "Alison",
        pack: "Pack Run",
        support: "સહાય",
        faq: "પ્રશ્ન",
        privacy: "ગોપનીયતા",
        legal: "કાનૂની",
        noAds: "જાહેરાત ક્યારેય નહીં",
        noAccount: "એકાઉન્ટ નહીં.",
        what: "આ શું છે?",
        whatBody: "નાનું સ્ટુડિયો. લોન્ચ પર બે એપ: Alison અને Pack Run. રેકોર્ડ તમારી પાસે રહે.",
        where: "મારો ડેટા ક્યાં?",
        whereBody:
          "તમારા ડિવાઇસ પર. Night Orders એકાઉન્ટ નહીં. Alison જર્નલ અપલોડ નથી કરતી. Pack Run ચેક-ઇન પાર્ક, પેક કદ, સમય, અને હેશ ડિવાઇસ આઈડી 90 મિનિટ, પછી મિટે.",
        ads: "એકાઉન્ટ? જાહેરાત?",
        adsBody: "એકાઉન્ટ નહીં. જાહેરાત નહીં. આ સાઇટ કે એપમાં એનાલિટિક્સ નહીં.",
        keepQ: "Keep શું છે?",
        keepBody:
          "Keep 30 દિવસ મફત, પછી Appleથી માસિક. Alison: Keep વગર જર્નલ વંચાય; નવું શરૂ, ખોરાક, હેલ્થ પુલ Keep પર રોકાય. Pack Run: પાર્ક યાદી રહે; ચેક-ઇન Keep પર રોકાય. રદ Apple સબ્સ્ક્રિપ્શનમાં.",
        reach: "કેવી રીતે પહોંચવું?",
        more: "ઉપયોગ, Keep, ગોપનીયતા",
        alisonLine: "તમારા ડિવાઇસ પર જર્નલ. તબીબી ઉપકરણ નહીં.",
        packLine: "આ પાર્ક પર કૂતરા છે. ચેક-ઇન 90 મિનિટ, પછી મિટે.",
        home: "હોમ",
        food: "ખોરાક",
        journal: "જર્નલ",
        health: "હેલ્થ",
        yours: "તમારું",
        start: "શરૂ",
        stop: "રોકો",
        open: "ખોલો",
        dim: "મંદ",
        pulse: "પલ્સ",
        keep: "Keep",
        addMeal: "ભોજન ઉમેરો",
        add: "ઉમેરો",
        nothingYet: "હજુ કંઈ નથી.",
        mealPh: "ભોજન ઉમેરો",
        pair: "જોડી દેખાઈ",
        observational: "નિરીક્ષણ. આગાહી નહીં.",
        live: "લાઇવ",
        tabPack: "પેક",
        checkIn: "ચેક-ઇન",
        leave: "જાઓ",
        addDog: "કૂતરો ઉમેરો",
        letsGo: "ચાલો",
        parks: "પાર્ક",
        noNames: "નામ નહીં.",
        yourDogs: "તમારા કૂતરા · ગણતરી, નામ નહીં",
        nearby: "નજીકના પાર્ક · ગણતરી, નામ નહીં",
        erases: "90 મિનિટમાં મિટશે.",
        noGps: "ફોટો નહીં. GPS ટ્રેક નહીં.",
        figAlison: "ભોજન ઉમેરો. જોડી દેખાઈ શકે.",
        figPack: "કૂતરો ઉમેરો. પછી ચેક-ઇન. ગણતરી, નામ નહીં.",
        dogs: function (n) {
          return n + " કૂતરા";
        },
      },
      "kn-IN": {
        studio: "Night Orders",
        motto: "ದಾಖಲೆ ನಿಮ್ಮ ಬಳಿ ಉಳಿಯುತ್ತದೆ.",
        lede: "ಲಾಂಚ್‌ನಲ್ಲಿ ಎರಡು ಆಪ್. ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ. ಖಾತೆ ಇಲ್ಲ. ಮೊದಲು ಸಹಾಯ.",
        coming: "App Storeಗೆ ಬರುತ್ತಿದೆ",
        alison: "Alison",
        pack: "Pack Run",
        support: "ಸಹಾಯ",
        faq: "ಪ್ರಶ್ನೆ",
        privacy: "ಗೌಪ್ಯತೆ",
        legal: "ಕಾನೂನು",
        noAds: "ಜಾಹೀರಾತು ಎಂದಿಗೂ ಬೇಡ",
        noAccount: "ಖಾತೆ ಇಲ್ಲ.",
        what: "ಇದು ಏನು?",
        whatBody: "ಚಿಕ್ಕ ಸ್ಟುಡಿಯೋ. ಲಾಂಚ್‌ನಲ್ಲಿ ಎರಡು ಆಪ್: Alison ಮತ್ತು Pack Run. ದಾಖಲೆ ನಿಮ್ಮ ಬಳಿ ಉಳಿಯುತ್ತದೆ.",
        where: "ನನ್ನ ಡೇಟಾ ಎಲ್ಲಿ?",
        whereBody:
          "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ. Night Orders ಖಾತೆ ಇಲ್ಲ. Alison ಜರ್ನಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡುವುದಿಲ್ಲ. Pack Run ಚೆಕ್-ಇನ್ ಪಾರ್ಕ್, ಪ್ಯಾಕ್ ಗಾತ್ರ, ಸಮಯ, ಮತ್ತು ಹ್ಯಾಶ್ ಸಾಧನ ಐಡಿ 90 ನಿಮಿಷ, ನಂತರ ಅಳಿಸುತ್ತದೆ.",
        ads: "ಖಾತೆ? ಜಾಹೀರಾತು?",
        adsBody: "ಖಾತೆ ಇಲ್ಲ. ಜಾಹೀರಾತು ಇಲ್ಲ. ಈ ಸೈಟ್ ಅಥವಾ ಆಪ್‌ನಲ್ಲಿ ಅನಾಲಿಟಿಕ್ಸ್ ಇಲ್ಲ.",
        keepQ: "Keep ಏನು?",
        keepBody:
          "Keep 30 ದಿನ ಉಚಿತ, ನಂತರ Appleನಿಂದ ಮಾಸಿಕ. Alison: Keep ಇಲ್ಲದೆ ಜರ್ನಲ್ ಓದಬಹುದು; ಹೊಸ ಪ್ರಾರಂಭ, ಆಹಾರ, ಹೆಲ್ತ್ ಪುಲ್ Keepಗಾಗಿ ಕಾಯುತ್ತವೆ. Pack Run: ಪಾರ್ಕ್ ಪಟ್ಟಿ ಉಳಿಯುತ್ತದೆ; ಚೆಕ್-ಇನ್ Keepಗಾಗಿ ಕಾಯುತ್ತದೆ. ರದ್ದು Apple ಚಂದಾದಲ್ಲಿ.",
        reach: "ಹೇಗೆ ಸಂಪರ್ಕಿಸುವುದು?",
        more: "ಬಳಕೆ, Keep, ಗೌಪ್ಯತೆ",
        alisonLine: "ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ಜರ್ನಲ್. ವೈದ್ಯಕೀಯ ಸಾಧನವಲ್ಲ.",
        packLine: "ಈ ಪಾರ್ಕ್‌ನಲ್ಲಿ ನಾಯಿಗಳಿವೆಯೇ. ಚೆಕ್-ಇನ್ 90 ನಿಮಿಷ, ನಂತರ ಅಳಿಸುತ್ತದೆ.",
        home: "ಹೋಮ್",
        food: "ಆಹಾರ",
        journal: "ಜರ್ನಲ್",
        health: "ಹೆಲ್ತ್",
        yours: "ನಿಮ್ಮದು",
        start: "ಪ್ರಾರಂಭ",
        stop: "ನಿಲ್ಲಿಸಿ",
        open: "ತೆರೆಯಿರಿ",
        dim: "ಮಂದ",
        pulse: "ಪಲ್ಸ್",
        keep: "Keep",
        addMeal: "ಊಟ ಸೇರಿಸಿ",
        add: "ಸೇರಿಸಿ",
        nothingYet: "ಇನ್ನೂ ಏನೂ ಇಲ್ಲ.",
        mealPh: "ಊಟ ಸೇರಿಸಿ",
        pair: "ಜೋಡಿ ಕಾಣಿಸಿತು",
        observational: "ವೀಕ್ಷಣೆ. ಮುನ್ಸೂಚನೆ ಅಲ್ಲ.",
        live: "ಲೈವ್",
        tabPack: "ಪ್ಯಾಕ್",
        checkIn: "ಚೆಕ್-ಇನ್",
        leave: "ಹೊರಡಿ",
        addDog: "ನಾಯಿ ಸೇರಿಸಿ",
        letsGo: "ಹೋಗೋಣ",
        parks: "ಪಾರ್ಕ್",
        noNames: "ಹೆಸರು ಇಲ್ಲ.",
        yourDogs: "ನಿಮ್ಮ ನಾಯಿಗಳು · ಎಣಿಕೆ, ಹೆಸರು ಅಲ್ಲ",
        nearby: "ಹತ್ತಿರದ ಪಾರ್ಕ್ · ಎಣಿಕೆ, ಹೆಸರು ಅಲ್ಲ",
        erases: "90 ನಿಮಿಷದಲ್ಲಿ ಅಳಿಸುತ್ತದೆ.",
        noGps: "ಫೋಟೋ ಇಲ್ಲ. GPS ಟ್ರ್ಯಾಕ್ ಇಲ್ಲ.",
        figAlison: "ಊಟ ಸೇರಿಸಿ. ಜೋಡಿ ಕಾಣಿಸಬಹುದು.",
        figPack: "ನಾಯಿ ಸೇರಿಸಿ. ನಂತರ ಚೆಕ್-ಇನ್. ಎಣಿಕೆ, ಹೆಸರು ಅಲ್ಲ.",
        dogs: function (n) {
          return n + " ನಾಯಿ";
        },
      },
      "ml-IN": {
        studio: "Night Orders",
        motto: "റെക്കോർഡ് നിങ്ങളോടൊപ്പം നിൽക്കും.",
        lede: "ലോഞ്ചിൽ രണ്ട് ആപ്പ്. നിങ്ങളുടെ ഉപകരണത്തിൽ. അക്കൗണ്ട് ഇല്ല. ആദ്യം സഹായം.",
        coming: "App Store-ൽ വരുന്നു",
        alison: "Alison",
        pack: "Pack Run",
        support: "സഹായം",
        faq: "ചോദ്യം",
        privacy: "സ്വകാര്യത",
        legal: "നിയമം",
        noAds: "പരസ്യം ഒരിക്കലുമില്ല",
        noAccount: "അക്കൗണ്ട് ഇല്ല.",
        what: "ഇതെന്താണ്?",
        whatBody: "ചെറിയ സ്റ്റുഡിയോ. ലോഞ്ചിൽ രണ്ട് ആപ്പ്: Alison, Pack Run. റെക്കോർഡ് നിങ്ങളോടൊപ്പം നിൽക്കും.",
        where: "എന്റെ ഡാറ്റ എവിടെ?",
        whereBody:
          "നിങ്ങളുടെ ഉപകരണത്തിൽ. Night Orders അക്കൗണ്ട് ഇല്ല. Alison ജേണൽ അപ്‌ലോഡ് ചെയ്യുന്നില്ല. Pack Run ചെക്ക്-ഇൻ പാർക്ക്, പാക്ക് വലുപ്പം, സമയം, ഹാഷ് ഡിവൈസ് ഐഡി 90 മിനിറ്റ്, പിന്നെ മായും.",
        ads: "അക്കൗണ്ട്? പരസ്യം?",
        adsBody: "അക്കൗണ്ട് ഇല്ല. പരസ്യം ഇല്ല. ഈ സൈറ്റിലോ ആപ്പിലോ അനലിറ്റിക്സ് ഇല്ല.",
        keepQ: "Keep എന്താണ്?",
        keepBody:
          "Keep 30 ദിവസം സൗജന്യം, പിന്നെ Apple-ൽ നിന്ന് മാസിക. Alison: Keep ഇല്ലാതെ ജേണൽ വായിക്കാം; പുതിയ തുടക്കം, ഭക്ഷണം, ഹെൽത്ത് പുൾ Keep കാത്തിരിക്കും. Pack Run: പാർക്ക് ലിസ്റ്റ് നിൽക്കും; ചെക്ക്-ഇൻ Keep കാത്തിരിക്കും. റദ്ദ് Apple സബ്‌സ്‌ക്രിപ്‌ഷനിൽ.",
        reach: "എങ്ങനെ ബന്ധപ്പെടാം?",
        more: "ഉപയോഗം, Keep, സ്വകാര്യത",
        alisonLine: "നിങ്ങളുടെ ഉപകരണത്തിലെ ജേണൽ. വൈദ്യ ഉപകരണമല്ല.",
        packLine: "ഈ പാർക്കിൽ നായകളുണ്ടോ. ചെക്ക്-ഇൻ 90 മിനിറ്റ്, പിന്നെ മായും.",
        home: "ഹോം",
        food: "ഭക്ഷണം",
        journal: "ജേണൽ",
        health: "ഹെൽത്ത്",
        yours: "നിങ്ങളുടേത്",
        start: "തുടങ്ങുക",
        stop: "നിർത്തുക",
        open: "തുറക്കുക",
        dim: "മങ്ങിയത്",
        pulse: "പൾസ്",
        keep: "Keep",
        addMeal: "ഭക്ഷണം ചേർക്കുക",
        add: "ചേർക്കുക",
        nothingYet: "ഇതുവരെ ഒന്നുമില്ല.",
        mealPh: "ഭക്ഷണം ചേർക്കുക",
        pair: "ഒരു ജോടി കാണിച്ചു",
        observational: "നിരീക്ഷണം. പ്രവചനം അല്ല.",
        live: "ലൈവ്",
        tabPack: "പാക്ക്",
        checkIn: "ചെക്ക്-ഇൻ",
        leave: "പോകുക",
        addDog: "നായ ചേർക്കുക",
        letsGo: "പോകാം",
        parks: "പാർക്ക്",
        noNames: "പേരുകൾ ഇല്ല.",
        yourDogs: "നിങ്ങളുടെ നായകൾ · എണ്ണം, പേര് അല്ല",
        nearby: "അടുത്ത പാർക്കുകൾ · എണ്ണം, പേര് അല്ല",
        erases: "90 മിനിറ്റിൽ മായും.",
        noGps: "ഫോട്ടോ ഇല്ല. GPS ട്രാക്ക് ഇല്ല.",
        figAlison: "ഭക്ഷണം ചേർക്കുക. ജോടി കാണാം.",
        figPack: "നായ ചേർക്കുക. പിന്നെ ചെക്ക്-ഇൻ. എണ്ണം, പേര് അല്ല.",
        dogs: function (n) {
          return n + " നായ";
        },
      },
      "mr-IN": {
        studio: "Night Orders",
        motto: "रेकॉर्ड तुमच्याकडे राहतो.",
        lede: "लॉन्चवर दोन अॅप. तुमच्या डिव्हाइसवर. खाते नाही. आधी मदत.",
        coming: "App Store वर येत आहे",
        alison: "Alison",
        pack: "Pack Run",
        support: "मदत",
        faq: "प्रश्न",
        privacy: "गोपनीयता",
        legal: "कायदेशीर",
        noAds: "जाहिरात कधीही नाही",
        noAccount: "खाते नाही.",
        what: "हे काय आहे?",
        whatBody: "लहान स्टुडिओ. लॉन्चवर दोन अॅप: Alison आणि Pack Run. रेकॉर्ड तुमच्याकडे राहतो.",
        where: "माझा डेटा कुठे?",
        whereBody:
          "तुमच्या डिव्हाइसवर. Night Orders खाते नाही. Alison जर्नल अपलोड करत नाही. Pack Run चेक-इन पार्क, पॅक आकार, वेळ, आणि हॅश डिव्हाइस आयडी 90 मिनिटे, मग पुसतो.",
        ads: "खाते? जाहिरात?",
        adsBody: "खाते नाही. जाहिरात नाही. या साइट किंवा अॅपमध्ये अॅनालिटिक्स नाही.",
        keepQ: "Keep काय आहे?",
        keepBody:
          "Keep 30 दिवस मोफत, मग Apple कडून मासिक. Alison: Keepशिवाय जर्नल वाचता येते; नवे सुरू, जेवण, हेल्थ पुल Keepवर थांबतात. Pack Run: पार्क यादी राहते; चेक-इन Keepवर थांबतो. रद्द Apple सदस्यतेत.",
        reach: "कसे संपर्क करावा?",
        more: "वापर, Keep, गोपनीयता",
        alisonLine: "तुमच्या डिव्हाइसवरील जर्नल. वैद्यकीय उपकरण नाही.",
        packLine: "या पार्कमध्ये कुत्रे आहेत का. चेक-इन 90 मिनिटे, मग पुसतो.",
        home: "होम",
        food: "जेवण",
        journal: "जर्नल",
        health: "हेल्थ",
        yours: "तुमचे",
        start: "सुरू",
        stop: "थांबवा",
        open: "उघडा",
        dim: "मंद",
        pulse: "पल्स",
        keep: "Keep",
        addMeal: "जेवण जोडा",
        add: "जोडा",
        nothingYet: "अजून काही नाही.",
        mealPh: "जेवण जोडा",
        pair: "जोडी दिसली",
        observational: "निरीक्षण. अंदाज नाही.",
        live: "लाईव्ह",
        tabPack: "पॅक",
        checkIn: "चेक-इन",
        leave: "जा",
        addDog: "कुत्रा जोडा",
        letsGo: "चलूया",
        parks: "पार्क",
        noNames: "नावे नाहीत.",
        yourDogs: "तुमचे कुत्रे · मोजणी, नाव नाही",
        nearby: "जवळचे पार्क · मोजणी, नाव नाही",
        erases: "90 मिनिटांत पुसेल.",
        noGps: "फोटो नाही. GPS ट्रॅक नाही.",
        figAlison: "जेवण जोडा. जोडी दिसू शकते.",
        figPack: "कुत्रा जोडा. मग चेक-इन. मोजणी, नाव नाही.",
        dogs: function (n) {
          return n === 1 ? n + " कुत्रा" : n + " कुत्रे";
        },
      },
      "or-IN": {
        studio: "Night Orders",
        motto: "ରେକର୍ଡ ଆପଣଙ୍କ ପାଖରେ ରହେ।",
        lede: "ଲଞ୍ଚରେ ଦୁଇ ଆପ୍। ଆପଣଙ୍କ ଡିଭାଇସରେ। ଆକାଉଣ୍ଟ ନାହିଁ। ପ୍ରଥମେ ସହାୟତା।",
        coming: "App Store ରେ ଆସୁଛି",
        alison: "Alison",
        pack: "Pack Run",
        support: "ସହାୟତା",
        faq: "ପ୍ରଶ୍ନ",
        privacy: "ଗୋପନୀୟତା",
        legal: "ଆଇନ",
        noAds: "ବିଜ୍ଞାପନ କେବେ ନୁହେଁ",
        noAccount: "ଆକାଉଣ୍ଟ ନାହିଁ।",
        what: "ଏହା କ’ଣ?",
        whatBody: "ଛୋଟ ଷ୍ଟୁଡିଓ। ଲଞ୍ଚରେ ଦୁଇ ଆପ୍: Alison ଓ Pack Run। ରେକର୍ଡ ଆପଣଙ୍କ ପାଖରେ ରହେ।",
        where: "ମୋ ଡାଟା କେଉଁଠି?",
        whereBody:
          "ଆପଣଙ୍କ ଡିଭାଇସରେ। Night Orders ଆକାଉଣ୍ଟ ନାହିଁ। Alison ଜର୍ଣ୍ଣାଲ୍ ଅପଲୋଡ୍ କରେ ନାହିଁ। Pack Run ଚେକ୍-ଇନ୍ ପାର୍କ, ପ୍ୟାକ୍ ଆକାର, ସମୟ, ଓ ହ୍ୟାସ୍ ଡିଭାଇସ୍ ଆଇଡି 90 ମିନିଟ୍, ତା’ପରେ ଲିଭେ।",
        ads: "ଆକାଉଣ୍ଟ? ବିଜ୍ଞାପନ?",
        adsBody: "ଆକାଉଣ୍ଟ ନାହିଁ। ବିଜ୍ଞାପନ ନାହିଁ। ଏହି ସାଇଟ୍ କିମ୍ବା ଆପ୍‌ରେ ଆନାଲିଟିକ୍ସ ନାହିଁ।",
        keepQ: "Keep କ’ଣ?",
        keepBody:
          "Keep 30 ଦିନ ମାଗଣା, ତା’ପରେ Appleରୁ ମାସିକ। Alison: Keep ବିନା ଜର୍ଣ୍ଣାଲ୍ ପଢ଼ାଯାଏ; ନୂଆ ଆରମ୍ଭ, ଖାଦ୍ୟ, ହେଲ୍ଥ ପୁଲ୍ Keep ପାଇଁ ଅପେକ୍ଷା କରେ। Pack Run: ପାର୍କ ତାଲିକା ରହେ; ଚେକ୍-ଇନ୍ Keep ପାଇଁ ଅପେକ୍ଷା। ବାତିଲ୍ Apple ସଦସ୍ୟତାରେ।",
        reach: "କିପରି ଯୋଗାଯୋଗ?",
        more: "ବ୍ୟବହାର, Keep, ଗୋପନୀୟତା",
        alisonLine: "ଆପଣଙ୍କ ଡିଭାଇସରେ ଜର୍ଣ୍ଣାଲ୍। ଚିକିତ୍ସା ଯନ୍ତ୍ର ନୁହେଁ।",
        packLine: "ଏହି ପାର୍କରେ କୁକୁର ଅଛନ୍ତି କି। ଚେକ୍-ଇନ୍ 90 ମିନିଟ୍, ତା’ପରେ ଲିଭେ।",
        home: "ହୋମ୍",
        food: "ଖାଦ୍ୟ",
        journal: "ଜର୍ଣ୍ଣାଲ୍",
        health: "ହେଲ୍ଥ",
        yours: "ଆପଣଙ୍କର",
        start: "ଆରମ୍ଭ",
        stop: "ରୋକନ୍ତୁ",
        open: "ଖୋଲନ୍ତୁ",
        dim: "ମନ୍ଦ",
        pulse: "ପଲ୍ସ",
        keep: "Keep",
        addMeal: "ଖାଦ୍ୟ ଯୋଡ଼ନ୍ତୁ",
        add: "ଯୋଡ଼ନ୍ତୁ",
        nothingYet: "ଏଯାଏ କିଛି ନାହିଁ।",
        mealPh: "ଖାଦ୍ୟ ଯୋଡ଼ନ୍ତୁ",
        pair: "ଏକ ଯୋଡ଼ି ଦେଖାଗଲା",
        observational: "ପର୍ଯ୍ୟବେକ୍ଷଣ। ପୂର୍ବାନୁମାନ ନୁହେଁ।",
        live: "ଲାଇଭ୍",
        tabPack: "ପ୍ୟାକ୍",
        checkIn: "ଚେକ୍-ଇନ୍",
        leave: "ଯାଆନ୍ତୁ",
        addDog: "କୁକୁର ଯୋଡ଼ନ୍ତୁ",
        letsGo: "ଚାଲନ୍ତୁ",
        parks: "ପାର୍କ",
        noNames: "ନାମ ନାହିଁ।",
        yourDogs: "ଆପଣଙ୍କ କୁକୁର · ଗଣନା, ନାମ ନୁହେଁ",
        nearby: "ପାଖ ପାର୍କ · ଗଣନା, ନାମ ନୁହେଁ",
        erases: "90 ମିନିଟ୍‌ରେ ଲିଭିବ।",
        noGps: "ଫଟୋ ନାହିଁ। GPS ଟ୍ରାକ୍ ନାହିଁ।",
        figAlison: "ଖାଦ୍ୟ ଯୋଡ଼ନ୍ତୁ। ଯୋଡ଼ି ଦେଖାଯାଇପାରେ।",
        figPack: "କୁକୁର ଯୋଡ଼ନ୍ତୁ। ତା’ପରେ ଚେକ୍-ଇନ୍। ଗଣନା, ନାମ ନୁହେଁ।",
        dogs: function (n) {
          return n + " କୁକୁର";
        },
      },
      "pa-IN": {
        studio: "Night Orders",
        motto: "ਰਿਕਾਰਡ ਤੁਹਾਡੇ ਕੋਲ ਰਹਿੰਦਾ ਹੈ।",
        lede: "ਲਾਂਚ ’ਤੇ ਦੋ ਐਪ। ਤੁਹਾਡੇ ਡਿਵਾਈਸ ’ਤੇ। ਖਾਤਾ ਨਹੀਂ। ਪਹਿਲਾਂ ਮਦਦ।",
        coming: "App Store ’ਤੇ ਆ ਰਿਹਾ ਹੈ",
        alison: "Alison",
        pack: "Pack Run",
        support: "ਮਦਦ",
        faq: "ਸਵਾਲ",
        privacy: "ਪਰਦੇਦਾਰੀ",
        legal: "ਕਾਨੂੰਨੀ",
        noAds: "ਇਸ਼ਤਿਹਾਰ ਕਦੇ ਨਹੀਂ",
        noAccount: "ਖਾਤਾ ਨਹੀਂ।",
        what: "ਇਹ ਕੀ ਹੈ?",
        whatBody: "ਇੱਕ ਛੋਟਾ ਸਟੂਡੀਓ। ਲਾਂਚ ’ਤੇ ਦੋ ਐਪ: Alison ਅਤੇ Pack Run। ਰਿਕਾਰਡ ਤੁਹਾਡੇ ਕੋਲ ਰਹਿੰਦਾ ਹੈ।",
        where: "ਮੇਰਾ ਡਾਟਾ ਕਿੱਥੇ ਹੈ?",
        whereBody:
          "ਤੁਹਾਡੇ ਡਿਵਾਈਸ ’ਤੇ। Night Orders ਖਾਤਾ ਨਹੀਂ। Alison ਜਰਨਲ ਅਪਲੋਡ ਨਹੀਂ ਕਰਦੀ। Pack Run ਚੈੱਕ-ਇਨ ਪਾਰਕ, ਪੈਕ ਆਕਾਰ, ਸਮਾਂ, ਅਤੇ ਹੈਸ਼ ਡਿਵਾਈਸ ਆਈਡੀ 90 ਮਿੰਟ, ਫਿਰ ਮਿਟਦਾ ਹੈ।",
        ads: "ਖਾਤਾ? ਇਸ਼ਤਿਹਾਰ?",
        adsBody: "ਖਾਤਾ ਨਹੀਂ। ਇਸ਼ਤਿਹਾਰ ਨਹੀਂ। ਇਸ ਸਾਈਟ ਜਾਂ ਐਪ ਵਿੱਚ ਐਨਾਲਿਟਿਕਸ ਨਹੀਂ।",
        keepQ: "Keep ਕੀ ਹੈ?",
        keepBody:
          "Keep 30 ਦਿਨ ਮੁਫ਼ਤ, ਫਿਰ Apple ਤੋਂ ਮਹੀਨਾਵਾਰ। Alison: Keep ਤੋਂ ਬਿਨਾਂ ਜਰਨਲ ਪੜ੍ਹਿਆ ਜਾ ਸਕਦਾ ਹੈ; ਨਵਾਂ ਸ਼ੁਰੂ, ਖਾਣਾ, ਹੈਲਥ ਪੁਲ Keep ’ਤੇ ਰੁਕਦੇ ਹਨ। Pack Run: ਪਾਰਕ ਸੂਚੀ ਰਹਿੰਦੀ ਹੈ; ਚੈੱਕ-ਇਨ Keep ’ਤੇ ਰੁਕਦਾ ਹੈ। ਰੱਦ Apple ਗਾਹਕੀ ਵਿੱਚ।",
        reach: "ਕਿਵੇਂ ਪਹੁੰਚੀਏ?",
        more: "ਵਰਤੋਂ, Keep, ਪਰਦੇਦਾਰੀ",
        alisonLine: "ਤੁਹਾਡੇ ਡਿਵਾਈਸ ’ਤੇ ਜਰਨਲ। ਡਾਕਟਰੀ ਯੰਤਰ ਨਹੀਂ।",
        packLine: "ਇਸ ਪਾਰਕ ’ਤੇ ਕੁੱਤੇ ਹਨ। ਚੈੱਕ-ਇਨ 90 ਮਿੰਟ, ਫਿਰ ਮਿਟਦਾ ਹੈ।",
        home: "ਹੋਮ",
        food: "ਖਾਣਾ",
        journal: "ਜਰਨਲ",
        health: "ਹੈਲਥ",
        yours: "ਤੁਹਾਡਾ",
        start: "ਸ਼ੁਰੂ",
        stop: "ਰੋਕੋ",
        open: "ਖੋਲ੍ਹੋ",
        dim: "ਮੱਧਮ",
        pulse: "ਪਲਸ",
        keep: "Keep",
        addMeal: "ਭੋਜਨ ਜੋੜੋ",
        add: "ਜੋੜੋ",
        nothingYet: "ਹਾਲੇ ਕੁਝ ਨਹੀਂ।",
        mealPh: "ਭੋਜਨ ਜੋੜੋ",
        pair: "ਜੋੜੀ ਦਿਖੀ",
        observational: "ਨਿਰੀਖਣ। ਭਵਿੱਖਬਾਣੀ ਨਹੀਂ।",
        live: "ਲਾਈਵ",
        tabPack: "ਪੈਕ",
        checkIn: "ਚੈੱਕ-ਇਨ",
        leave: "ਜਾਓ",
        addDog: "ਕੁੱਤਾ ਜੋੜੋ",
        letsGo: "ਚਲੋ",
        parks: "ਪਾਰਕ",
        noNames: "ਨਾਂ ਨਹੀਂ।",
        yourDogs: "ਤੁਹਾਡੇ ਕੁੱਤੇ · ਗਿਣਤੀ, ਨਾਂ ਨਹੀਂ",
        nearby: "ਨੇੜਲੇ ਪਾਰਕ · ਗਿਣਤੀ, ਨਾਂ ਨਹੀਂ",
        erases: "90 ਮਿੰਟ ਵਿੱਚ ਮਿਟੇਗਾ।",
        noGps: "ਫੋਟੋ ਨਹੀਂ। GPS ਟਰੈਕ ਨਹੀਂ।",
        figAlison: "ਭੋਜਨ ਜੋੜੋ। ਜੋੜੀ ਦਿਖ ਸਕਦੀ ਹੈ।",
        figPack: "ਕੁੱਤਾ ਜੋੜੋ। ਫਿਰ ਚੈੱਕ-ਇਨ। ਗਿਣਤੀ, ਨਾਂ ਨਹੀਂ।",
        dogs: function (n) {
          return oneLocales("pa-IN", n) === "one" ? n + " ਕੁੱਤਾ" : n + " ਕੁੱਤੇ";
        },
      },
      "ta-IN": {
        studio: "Night Orders",
        motto: "பதிவு உங்களிடம் நிற்கும்.",
        lede: "தொடக்கத்தில் இரண்டு ஆப். உங்கள் சாதனத்தில். கணக்கு இல்லை. முதலில் உதவி.",
        coming: "App Store-க்கு வருகிறது",
        alison: "Alison",
        pack: "Pack Run",
        support: "உதவி",
        faq: "கேள்வி",
        privacy: "தனியுரிமை",
        legal: "சட்டம்",
        noAds: "விளம்பரம் ஒருபோதும் இல்லை",
        noAccount: "கணக்கு இல்லை.",
        what: "இது என்ன?",
        whatBody: "ஒரு சிறிய ஸ்டுடியோ. தொடக்கத்தில் இரண்டு ஆப்: Alison மற்றும் Pack Run. பதிவு உங்களிடம் நிற்கும்.",
        where: "என் தரவு எங்கே?",
        whereBody:
          "உங்கள் சாதனத்தில். Night Orders கணக்கு இல்லை. Alison குறிப்பேட்டைப் பதிவேற்றாது. Pack Run செக்-இன் பூங்கா, பேக் அளவு, நேரம், ஹாஷ் சாதன ஐடி 90 நிமிடம், பின் அழியும்.",
        ads: "கணக்கு? விளம்பரம்?",
        adsBody: "கணக்கு இல்லை. விளம்பரம் இல்லை. இந்தத் தளத்திலோ ஆப்பிலோ பகுப்பாய்வு இல்லை.",
        keepQ: "Keep என்றால் என்ன?",
        keepBody:
          "Keep 30 நாள் இலவசம், பின் Apple இலிருந்து மாதாந்திரம். Alison: Keep இல்லாமல் குறிப்பேடு படிக்கலாம்; புதிய தொடக்கம், உணவு, ஹெல்த் புல் Keep-ஐ எதிர்பார்க்கும். Pack Run: பூங்கா பட்டியல் நிற்கும்; செக்-இன் Keep-ஐ எதிர்பார்க்கும். ரத்து Apple சந்தாவில்.",
        reach: "எப்படி தொடர்புகொள்வது?",
        more: "பயன்பாடு, Keep, தனியுரிமை",
        alisonLine: "உங்கள் சாதனத்தில் குறிப்பேடு. மருத்துவக் கருவி அல்ல.",
        packLine: "இந்தப் பூங்காவில் நாய்கள் உள்ளனவா. செக்-இன் 90 நிமிடம், பின் அழியும்.",
        home: "முகப்பு",
        food: "உணவு",
        journal: "குறிப்பேடு",
        health: "ஹெல்த்",
        yours: "உங்களுடையது",
        start: "தொடங்கு",
        stop: "நிறுத்து",
        open: "திற",
        dim: "மங்கல்",
        pulse: "பல்ஸ்",
        keep: "Keep",
        addMeal: "உணவு சேர்",
        add: "சேர்",
        nothingYet: "இன்னும் ஒன்றுமில்லை.",
        mealPh: "உணவு சேர்",
        pair: "ஒரு இணை தெரிந்தது",
        observational: "கவனிப்பு. முன்னறிவிப்பு அல்ல.",
        live: "நேரலை",
        tabPack: "பேக்",
        checkIn: "செக்-இன்",
        leave: "போ",
        addDog: "நாயைச் சேர்",
        letsGo: "போவோம்",
        parks: "பூங்கா",
        noNames: "பெயர்கள் இல்லை.",
        yourDogs: "உங்கள் நாய்கள் · எண்ணிக்கை, பெயர் அல்ல",
        nearby: "அருகிலுள்ள பூங்கா · எண்ணிக்கை, பெயர் அல்ல",
        erases: "90 நிமிடத்தில் அழியும்.",
        noGps: "புகைப்படம் இல்லை. GPS தடம் இல்லை.",
        figAlison: "உணவு சேர். இணை தெரியலாம்.",
        figPack: "நாயைச் சேர். பின் செக்-இன். எண்ணிக்கை, பெயர் அல்ல.",
        dogs: function (n) {
          return n === 1 ? n + " நாய்" : n + " நாய்கள்";
        },
      },
      "te-IN": {
        studio: "Night Orders",
        motto: "రికార్డు మీ దగ్గరే ఉంటుంది.",
        lede: "లాంచ్‌లో రెండు యాప్‌లు. మీ పరికరంలో. ఖాతా లేదు. ముందు సహాయం.",
        coming: "App Storeకు వస్తోంది",
        alison: "Alison",
        pack: "Pack Run",
        support: "సహాయం",
        faq: "ప్రశ్న",
        privacy: "గోప్యత",
        legal: "చట్టం",
        noAds: "ప్రకటనలు ఎప్పటికీ లేవు",
        noAccount: "ఖాతా లేదు.",
        what: "ఇది ఏమిటి?",
        whatBody: "ఒక చిన్న స్టూడియో. లాంచ్‌లో రెండు యాప్‌లు: Alison మరియు Pack Run. రికార్డు మీ దగ్గరే ఉంటుంది.",
        where: "నా డేటా ఎక్కడ?",
        whereBody:
          "మీ పరికరంలో. Night Orders ఖాతా లేదు. Alison జర్నల్ అప్‌లోడ్ చేయదు. Pack Run చెక్-ఇన్ పార్కు, ప్యాక్ పరిమాణం, సమయం, హాష్ పరికర ఐడి 90 నిమిషాలు, తర్వాత తుడుచుకుంటుంది.",
        ads: "ఖాతా? ప్రకటనలు?",
        adsBody: "ఖాతా లేదు. ప్రకటనలు లేవు. ఈ సైట్ లేదా యాప్‌లో అనలిటిక్స్ లేవు.",
        keepQ: "Keep అంటే ఏమిటి?",
        keepBody:
          "Keep 30 రోజులు ఉచితం, తర్వాత Apple నుంచి నెలవారీ. Alison: Keep లేకుండా జర్నల్ చదవవచ్చు; కొత్త మొదలు, ఆహారం, హెల్త్ పుల్ Keep కోసం ఆగుతాయి. Pack Run: పార్కు జాబితా ఉంటుంది; చెక్-ఇన్ Keep కోసం ఆగుతుంది. రద్దు Apple సభ్యత్వాల్లో.",
        reach: "ఎలా సంప్రదించాలి?",
        more: "వాడకం, Keep, గోప్యత",
        alisonLine: "మీ పరికరంలో జర్నల్. వైద్య పరికరం కాదు.",
        packLine: "ఈ పార్కులో కుక్కలున్నాయా. చెక్-ఇన్ 90 నిమిషాలు, తర్వాత తుడుచుకుంటుంది.",
        home: "హోమ్",
        food: "ఆహారం",
        journal: "జర్నల్",
        health: "హెల్త్",
        yours: "మీది",
        start: "మొదలు",
        stop: "ఆపండి",
        open: "తెరవండి",
        dim: "మసక",
        pulse: "పల్స్",
        keep: "Keep",
        addMeal: "భోజనం చేర్చండి",
        add: "చేర్చు",
        nothingYet: "ఇంకా ఏమీ లేదు.",
        mealPh: "భోజనం చేర్చండి",
        pair: "ఒక జత కనిపించింది",
        observational: "పరిశీలన. అంచనా కాదు.",
        live: "లైవ్",
        tabPack: "ప్యాక్",
        checkIn: "చెక్-ఇన్",
        leave: "వెళ్ళండి",
        addDog: "కుక్కను చేర్చండి",
        letsGo: "వెళ్దాం",
        parks: "పార్కు",
        noNames: "పేర్లు లేవు.",
        yourDogs: "మీ కుక్కలు · లెక్క, పేరు కాదు",
        nearby: "దగ్గరి పార్కులు · లెక్క, పేరు కాదు",
        erases: "90 నిమిషాల్లో తుడుచుకుంటుంది.",
        noGps: "ఫోటో లేదు. GPS ట్రాక్ లేదు.",
        figAlison: "భోజనం చేర్చండి. జత కనిపించవచ్చు.",
        figPack: "కుక్కను చేర్చండి. తర్వాత చెక్-ఇన్. లెక్క, పేరు కాదు.",
        dogs: function (n) {
          return n === 1 ? n + " కుక్క" : n + " కుక్కలు";
        },
      },
    };
  }

  var TABLE = copy();

  function parse(raw) {
    var s = String(raw || "")
      .trim()
      .toLowerCase()
      .replace(/_/g, "-");
    if (!s) return null;
    if (s === "pa-arab" || s.indexOf("pa-arab-") === 0 || s === "pa-pk" || s.indexOf("pa-pk-") === 0) return null;
    var i;
    for (i = 0; i < LOCALES.length; i++) {
      if (raw === LOCALES[i]) return LOCALES[i];
    }
    var base = s.split("-")[0] || "";
    if (base === "hi") return "hi";
    if (base === "bn") return "bn-BD";
    if (base === "gu") return "gu-IN";
    if (base === "kn") return "kn-IN";
    if (base === "ml") return "ml-IN";
    if (base === "mr") return "mr-IN";
    if (base === "or" || base === "od") return "or-IN";
    if (base === "pa") return s.indexOf("guru") >= 0 || s.indexOf("in") >= 0 || s === "pa" ? "pa-IN" : null;
    if (base === "ta") return "ta-IN";
    if (base === "te") return "te-IN";
    return null;
  }

  function detect(input) {
    if (input) return parse(input);
    if (typeof navigator === "undefined") return null;
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    var i;
    for (i = 0; i < list.length; i++) {
      var hit = parse(list[i]);
      if (hit) return hit;
    }
    return null;
  }

  function cssRule(locale) {
    var s = SCRIPT[locale];
    if (!s) return "";
    return (
      "html[lang=\"" +
      locale +
      "\"]{font-family:" +
      s.fonts +
      ";font-feature-settings:" +
      FEATURES +
      ";line-height:" +
      s.lh +
      ";word-break:normal;overflow-wrap:anywhere;line-break:auto;hyphens:none;text-wrap:pretty;-webkit-hyphens:none;font-optical-sizing:auto}" +
      "html[lang=\"" +
      locale +
      "\"] .mast-nav a,html[lang=\"" +
      locale +
      "\"] .check,html[lang=\"" +
      locale +
      "\"] .leave{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"
    );
  }

  function apply(locale) {
    if (typeof document === "undefined") return;
    var html = document.documentElement;
    var s = SCRIPT[locale];
    html.lang = locale;
    html.dir = "ltr";
    html.setAttribute("data-locale", locale);
    html.setAttribute("data-script", s.iso);
    html.setAttribute("data-indic", locale);
    html.style.setProperty("--indic-font", s.fonts);
    html.style.setProperty("--indic-lh", s.lh);
    html.classList.add("indic");
    var id = "no-indic-fit";
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("style");
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = cssRule(locale);
  }

  root.NO_INDIC = {
    LOCALES: LOCALES,
    SCRIPT: SCRIPT,
    TABLE: TABLE,
    MAIL: MAIL,
    FONTS_HREF: FONTS_HREF,
    FEATURES: FEATURES,
    parse: parse,
    detect: detect,
    pluralCat: oneLocales,
    copy: function (locale) {
      return TABLE[locale] || TABLE.hi;
    },
    css: cssRule,
    apply: apply,
    dir: "ltr",
  };
})(typeof window !== "undefined" ? window : this);
