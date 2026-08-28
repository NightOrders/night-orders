(function () {
  var I = window.NO_I18N = window.NO_I18N || {};
  function put(code, map) { I[code] = map; }

  put("hi", {
    navAria: "साइट",
    navSupport: "सहायता",
    navFaq: "प्रश्न",
    navPrivacy: "गोपनीयता",
    navLegal: "कानूनी",
    motto: "रिकॉर्ड आपके पास रहता है।",
    titleHome: "Night Orders",
    descHome: "रिकॉर्ड आपके पास रहता है। Alison और Pack Run.",
    descMotto: "रिकॉर्ड आपके पास रहता है।",
    homeLede: "लॉन्च पर दो ऐप। आपके डिवाइस पर। कोई खाता नहीं। पहले मदद।",
    alisonBlurb: "आपके डिवाइस पर जर्नल। चिकित्सा उपकरण नहीं।",
    moreUsage: "उपयोग, Keep, गोपनीयता",
    packBlurb: "इस पार्क में कुत्ते हैं? चेक-इन 90 मिनट रहता है, फिर मिट जाता है।",
    coming: "जल्द App Store पर",
    footLine: "Night Orders. कोई विज्ञापन नहीं। कोई खाता नहीं।",
    supportPrefix: "सहायता:",
    alisonPocAria: "Alison. एक भोजन जोड़ें। जोड़ा दिख सकता है।",
    alisonFood: "खाना · इस फ़ोन पर",
    alisonEmpty: "अभी कुछ नहीं।",
    alisonMealPh: "भोजन जोड़ें",
    alisonMealAria: "भोजन",
    alisonAdd: "जोड़ें",
    alisonPair: "एक जोड़ा जो दिखा",
    alisonPairDays: "माइग्रेन के दिन। प्रेक्षण। पूर्वानुमान नहीं।",
    alisonFig: "एक भोजन जोड़ें। जोड़ा दिख सकता है।",
    packPocAria: "Pack Run. कुत्ता जोड़ें, फिर चेक-इन। पार्क गिनती दिखाते हैं, नाम नहीं।",
    packDogsWhisper: "आपके कुत्ते · गिनती, बिना नाम",
    packNoNames: "कोई नाम नहीं।",
    packAddDog: "कुत्ता जोड़ें",
    packLetsGo: "चलें",
    packNearby: "पास के पार्क · गिनती, बिना नाम",
    packBack: "पार्क",
    packCheckIn: "चेक-इन",
    packLeave: "छोड़ें",
    packErase: "90 मिनट में मिट जाता है।",
    packNoPhoto: "कोई फ़ोटो नहीं। कोई GPS निशान नहीं।",
    packFig: "कुत्ता जोड़ें। फिर चेक-इन। गिनती, नाम नहीं।",
    homeWhat: "यह क्या है?",
    homeWhatA: "एक छोटा स्टूडियो। लॉन्च पर दो ऐप: Alison और Pack Run. रिकॉर्ड आपके पास रहता है।",
    homeData: "मेरा डेटा कहाँ रहता है?",
    homeDataA: "आपके डिवाइस पर। कोई Night Orders खाता नहीं। Alison जर्नल अपलोड नहीं करता। Pack Run चेक-इन पार्क, पैक आकार, समय और 90 मिनट के लिए हैश डिवाइस आईडी है, फिर मिट जाता है।",
    homeAds: "खाता है? विज्ञापन?",
    homeAdsA: "कोई खाता नहीं। कोई विज्ञापन नहीं। इस साइट या ऐप में कोई एनालिटिक्स नहीं। कोई plus नहीं, कोई कंफ़ेटी नहीं।",
    homeKeep: "Keep क्या है?",
    homeKeepA: "सशुल्क डाउनलोड $0.99। Keep 30 दिन का परीक्षण है, फिर Apple के ज़रिए $0.99/माह। Alison: जर्नल Keep के बिना पढ़ने योग्य रहता है; नए Start, Food और Health Keep की प्रतीक्षा करते हैं। Pack Run: पार्क सूची रहती है; चेक-इन Keep की प्रतीक्षा करता है। परीक्षण या Keep खत्म होने पर वे सेवाएँ खत्म होती हैं। Keep स्क्रीन पर पुनर्स्थापित करें। Apple Subscriptions में रद्द करें।",
    homeReach: "आप तक कैसे पहुँचूँ?",
    titleFaq: "प्रश्न — Night Orders",
    faqMotto: "प्रश्न",
    keepH: "Keep",
    packWho: "कौन होस्ट करता है?",
    packWhat: "Pack Run क्या है?",
    titleSupport: "सहायता — Night Orders",
    supportMotto: "सहायता",
    privacyMotto: "गोपनीयता",
    legalMotto: "कानूनी",
    "dog.zero": "{n} कुत्ते",
    "dog.one": "{n} कुत्ता",
    "dog.other": "{n} कुत्ते",
    "dog.two": "{n} कुत्ते",
    "dog.few": "{n} कुत्ते",
    "dog.many": "{n} कुत्ते"
  });

  function chrome(over) {
    var base = {
      titleHome: "Night Orders",
      keepH: "Keep",
      packCheckIn: "Check-in",
      coming: "App Store"
    };
    for (var k in over) base[k] = over[k];
    return base;
  }

  put("bn-BD", chrome({
    navAria: "সাইট",
    navSupport: "সহায়তা",
    navFaq: "প্রশ্ন",
    navPrivacy: "গোপনীয়তা",
    navLegal: "আইন",
    motto: "রেকর্ড আপনার কাছে থাকে।",
    descMotto: "রেকর্ড আপনার কাছে থাকে।",
    homeLede: "লঞ্চে দুটি অ্যাপ। আপনার ডিভাইসে। কোনো অ্যাকাউন্ট নেই। আগে সাহায্য।",
    alisonBlurb: "আপনার ডিভাইসে জার্নাল। চিকিৎসা যন্ত্র নয়।",
    packBlurb: "এই পার্কে কুকুর আছে? চেক-ইন ৯০ মিনিট থাকে, তারপর মুছে যায়।",
    footLine: "Night Orders. কোনো বিজ্ঞাপন নেই। কোনো অ্যাকাউন্ট নেই।",
    supportPrefix: "সহায়তা:",
    alisonEmpty: "এখনো কিছু নেই।",
    alisonAdd: "যোগ করুন",
    packAddDog: "একটি কুকুর যোগ করুন",
    packLetsGo: "চলুন",
    packBack: "পার্ক",
    packLeave: "ছেড়ে যান",
    packNoNames: "কোনো নাম নেই।",
    homeWhat: "এটা কী?",
    homeKeep: "Keep কী?",
    packWho: "কে হোস্ট করে?",
    "dog.one": "{n} কুকুর",
    "dog.other": "{n} কুকুর"
  }));

  put("gu-IN", chrome({
    navAria: "સાઇટ",
    navSupport: "સહાય",
    navPrivacy: "ગોપનીયતા",
    motto: "રેકોર્ડ તમારી પાસે રહે છે.",
    homeLede: "લોન્ચ પર બે એપ. તમારા ઉપકરણ પર. ખાતું નહીં. પહેલા મદદ.",
    alisonEmpty: "હજુ કંઈ નહીં.",
    alisonAdd: "ઉમેરો",
    packAddDog: "કૂતરો ઉમેરો",
    packLetsGo: "ચાલો",
    packBack: "પાર્ક",
    packLeave: "છોડો",
    homeWhat: "આ શું છે?",
    "dog.one": "{n} કૂતરો",
    "dog.other": "{n} કૂતરા"
  }));

  put("kn-IN", chrome({
    navAria: "ಸೈಟ್",
    navSupport: "ಸಹಾಯ",
    motto: "ದಾಖಲೆ ನಿಮ್ಮ ಬಳಿ ಉಳಿಯುತ್ತದೆ.",
    homeLede: "ಲಾಂಚ್‌ನಲ್ಲಿ ಎರಡು ಆ್ಯಪ್‌ಗಳು. ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ. ಖಾತೆ ಇಲ್ಲ. ಮೊದಲು ಸಹಾಯ.",
    alisonEmpty: "ಇನ್ನೂ ಏನೂ ಇಲ್ಲ.",
    alisonAdd: "ಸೇರಿಸಿ",
    packAddDog: "ನಾಯಿಯನ್ನು ಸೇರಿಸಿ",
    packLetsGo: "ಹೋಗೋಣ",
    packBack: "ಪಾರ್ಕ್‌ಗಳು",
    packLeave: "ಬಿಡಿ",
    homeWhat: "ಇದು ಏನು?",
    "dog.one": "{n} ನಾಯಿ",
    "dog.other": "{n} ನಾಯಿಗಳು"
  }));

  put("ml-IN", chrome({
    navAria: "സൈറ്റ്",
    navSupport: "സഹായം",
    motto: "രേഖ നിങ്ങളോടൊപ്പം നില്‍ക്കുന്നു.",
    homeLede: "ലോഞ്ചിൽ രണ്ട് ആപ്പുകൾ. നിങ്ങളുടെ ഉപകരണത്തിൽ. അക്കൗണ്ട് ഇല്ല. ആദ്യം സഹായം.",
    alisonEmpty: "ഇതുവരെ ഒന്നുമില്ല.",
    alisonAdd: "ചേർക്കുക",
    packAddDog: "നായയെ ചേർക്കുക",
    packLetsGo: "നമുക്ക് പോകാം",
    packBack: "പാർക്കുകൾ",
    packLeave: "വിടുക",
    homeWhat: "ഇതെന്താണ്?",
    "dog.one": "{n} നായ",
    "dog.other": "{n} നായ്ക്കൾ"
  }));

  put("mr-IN", chrome({
    navAria: "साइट",
    navSupport: "मदत",
    motto: "नोंद तुमच्याकडे राहते.",
    homeLede: "लॉन्चवर दोन अॅप्स. तुमच्या डिव्हाइसवर. खाते नाही. आधी मदत.",
    alisonEmpty: "अद्याप काही नाही.",
    alisonAdd: "जोडा",
    packAddDog: "कुत्रा जोडा",
    packLetsGo: "चल",
    packBack: "पार्क",
    packLeave: "सोडा",
    homeWhat: "हे काय आहे?",
    "dog.one": "{n} कुत्रा",
    "dog.other": "{n} कुत्रे"
  }));

  put("or-IN", chrome({
    navAria: "ସାଇଟ",
    navSupport: "ସହାୟତା",
    motto: "ରେକର୍ଡ ଆପଣଙ୍କ ପାଖରେ ରହେ।",
    homeLede: "ଲଞ୍ଚରେ ଦୁଇ ଆପ୍। ଆପଣଙ୍କ ଡିଭାଇସରେ। ଆକାଉଣ୍ଟ ନାହିଁ। ପ୍ରଥମେ ସାହାଯ୍ୟ।",
    alisonEmpty: "ଏପର୍ଯ୍ୟନ୍ତ କିଛି ନାହିଁ।",
    alisonAdd: "ଯୋଡନ୍ତୁ",
    packAddDog: "କୁକୁର ଯୋଡନ୍ତୁ",
    packLetsGo: "ଚାଲନ୍ତୁ",
    packBack: "ପାର୍କ",
    packLeave: "ଛାଡନ୍ତୁ",
    homeWhat: "ଏହା କ’ଣ?",
    "dog.one": "{n} କୁକୁର",
    "dog.other": "{n} କୁକୁର"
  }));

  put("pa-IN", chrome({
    navAria: "ਸਾਈਟ",
    navSupport: "ਸਹਾਇਤਾ",
    motto: "ਰਿਕਾਰਡ ਤੁਹਾਡੇ ਕੋਲ ਰਹਿੰਦਾ ਹੈ।",
    homeLede: "ਲਾਂਚ ਤੇ ਦੋ ਐਪਾਂ। ਤੁਹਾਡੀ ਡਿਵਾਈਸ ਤੇ। ਕੋਈ ਖਾਤਾ ਨਹੀਂ। ਪਹਿਲਾਂ ਮਦਦ।",
    alisonEmpty: "ਹਾਲੇ ਕੁਝ ਨਹੀਂ।",
    alisonAdd: "ਜੋੜੋ",
    packAddDog: "ਕੁੱਤਾ ਜੋੜੋ",
    packLetsGo: "ਚਲੋ",
    packBack: "ਪਾਰਕ",
    packLeave: "ਛੱਡੋ",
    homeWhat: "ਇਹ ਕੀ ਹੈ?",
    "dog.one": "{n} ਕੁੱਤਾ",
    "dog.other": "{n} ਕੁੱਤੇ"
  }));

  put("ta-IN", chrome({
    navAria: "தளம்",
    navSupport: "ஆதரவு",
    motto: "பதிவு உங்களிடம் இருக்கும்.",
    homeLede: "வெளியீட்டில் இரண்டு ஆப்ஸ். உங்கள் சாதனத்தில். கணக்கு இல்லை. முதலில் உதவி.",
    alisonEmpty: "இன்னும் ஒன்றுமில்லை.",
    alisonAdd: "சேர்",
    packAddDog: "நாயைச் சேர்",
    packLetsGo: "போவோம்",
    packBack: "பூங்காக்கள்",
    packLeave: "விட்டுச்செல்",
    homeWhat: "இது என்ன?",
    "dog.one": "{n} நாய்",
    "dog.other": "{n} நாய்கள்"
  }));

  put("te-IN", chrome({
    navAria: "సైట్",
    navSupport: "సహాయం",
    motto: "రికార్డు మీ దగ్గరే ఉంటుంది.",
    homeLede: "లాంచ్‌లో రెండు యాప్‌లు. మీ పరికరంలో. ఖాతా లేదు. ముందు సహాయం.",
    alisonEmpty: "ఇంకా ఏమీ లేదు.",
    alisonAdd: "జోడించు",
    packAddDog: "కుక్కను జోడించు",
    packLetsGo: "వెళ్దాం",
    packBack: "పార్కులు",
    packLeave: "వదిలివెళ్లు",
    homeWhat: "ఇది ఏమిటి?",
    "dog.one": "{n} కుక్క",
    "dog.other": "{n} కుక్కలు"
  }));

  I.indic = {
    locales: ["bn-BD", "gu-IN", "hi", "kn-IN", "ml-IN", "mr-IN", "or-IN", "pa-IN", "ta-IN", "te-IN"]
  };
})();
