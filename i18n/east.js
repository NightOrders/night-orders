/** LANG-EAST chrome. pl cs sk sl-SI hr hu ro ru uk tr id ms.
 * Real script. Real CLDR plurals. lang+dir. No medical. mailto:support@nightorders.app.
 * Merge into i18n index. No /es/ hops. */
(function (g) {
  var LOCALES = ["cs", "hr", "hu", "id", "ms", "pl", "ro", "ru", "sk", "sl-SI", "tr", "uk"];

  function iAbs(n) {
    n = Number(n);
    if (!isFinite(n)) return 0;
    return Math.abs(Math.trunc(n));
  }

  function catPl(n) {
    var i = iAbs(n);
    var m10 = i % 10;
    var m100 = i % 100;
    if (m10 === 1 && m100 !== 11) return "one";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "few";
    return "many";
  }
  function catCs(n) {
    var i = iAbs(n);
    if (i === 1) return "one";
    if (i >= 2 && i <= 4) return "few";
    return "other";
  }
  function catSl(n) {
    var i = iAbs(n);
    var m = i % 100;
    if (m === 1) return "one";
    if (m === 2) return "two";
    if (m === 3 || m === 4) return "few";
    return "other";
  }
  function catHr(n) {
    var i = iAbs(n);
    var m10 = i % 10;
    var m100 = i % 100;
    if (m10 === 1 && m100 !== 11) return "one";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "few";
    return "other";
  }
  function catOne(n) {
    return iAbs(n) === 1 ? "one" : "other";
  }
  function catRo(n) {
    var i = iAbs(n);
    if (i === 1) return "one";
    var m100 = i % 100;
    if (i === 0 || (m100 >= 1 && m100 <= 19)) return "few";
    return "other";
  }
  function catRu(n) {
    var i = iAbs(n);
    var m10 = i % 10;
    var m100 = i % 100;
    if (m10 === 1 && m100 !== 11) return "one";
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "few";
    return "many";
  }
  function catOther() {
    return "other";
  }

  var CATS = {
    cs: catCs,
    hr: catHr,
    hu: catOne,
    id: catOther,
    ms: catOther,
    pl: catPl,
    ro: catRo,
    ru: catRu,
    sk: catCs,
    "sl-SI": catSl,
    tr: catOne,
    uk: catRu
  };

  function count(cat, forms) {
    return function (n) {
      var k = cat(n);
      var word = forms[k] || forms.other;
      return iAbs(n) + "\u00a0" + word;
    };
  }

  function row(base, extra) {
    var o = {};
    var k;
    for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) o[k] = base[k];
    for (k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k];
    o.dir = "ltr";
    o.mailto = "mailto:support@nightorders.app";
    o.supportMail = "support@nightorders.app";
    return o;
  }

  var CS = row(
    {
      lang: "cs",
      script: "Latn",
      site: "Night Orders",
      motto: "Záznam zůstává u vás.",
      lede: "Dvě aplikace při startu. Na vašem zařízení. Bez účtu. Nejdřív pomoc.",
      coming: "Přichází do App Store",
      navAlison: "Alison",
      navPack: "Pack Run",
      navSupport: "Podpora",
      navPrivacy: "Soukromí",
      navFaq: "FAQ",
      usageKeepPrivacy: "Použití, Keep, soukromí",
      alisonBlurb: "Deník na vašem zařízení. Není zdravotnický prostředek.",
      packBlurb: "Jsou v parku psi. Check-in trvá 90 minut a pak se smaže.",
      open: "OTEVŘÍT",
      privacy: "Soukromí",
      privacyPolicy: "Zásady soukromí",
      support: "Podpora",
      noAds: "Bez reklam navždy",
      keep: "Keep",
      keepOn: "Keep běží",
      notNow: "Teď ne",
      close: "Zavřít",
      back: "Zpět",
      home: "Domů",
      food: "Jídlo",
      journal: "Deník",
      health: "Zdraví",
      yours: "Tvoje",
      start: "Start",
      stop: "Stop",
      save: "Uložit",
      add: "Přidat",
      dim: "Tlumené",
      bright: "Světlé",
      pulse: "Puls",
      journalNotDx: "Osobní deník. Ne diagnóza.",
      nothingYet: "Zatím nic.",
      addMeal: "Přidat jídlo",
      live: "Živě",
      pack: "Smečka",
      quiet: "Ticho",
      few: "Pár",
      busy: "Plno",
      checkIn: "Check-in",
      leave: "Odejít",
      addDog: "Přidat psa",
      letsGo: "Jdeme",
      parks: "Parky",
      ninetyThenGone: "Devadesát minut a pryč.",
      erases90: "Smaže se za 90 minut.",
      noNames: "Bez jmen.",
      noPhotoNoGps: "Bez fotky. Bez stopy GPS.",
      titlePack: "Jeden park. Jeden počet.",
      thisPhoneOnly: "Jen tento telefon.",
      dogsN: count(catCs, { one: "pes", few: "psi", other: "psů" }),
      minutesN: count(catCs, { one: "minuta", few: "minuty", other: "minut" }),
      mealsN: count(catCs, { one: "jídlo", few: "jídla", other: "jídel" }),
      daysN: count(catCs, { one: "den", few: "dny", other: "dní" }),
      hoursN: count(catCs, { one: "hodina", few: "hodiny", other: "hodin" })
    },
    {}
  );

  var SK = row(CS, {
    lang: "sk",
    motto: "Záznam ostáva u vás.",
    lede: "Dve aplikácie pri štarte. Na vašom zariadení. Bez účtu. Najprv pomoc.",
    coming: "Prichádza do App Store",
    navSupport: "Podpora",
    navPrivacy: "Súkromie",
    usageKeepPrivacy: "Použitie, Keep, súkromie",
    alisonBlurb: "Denník na vašom zariadení. Nie je zdravotnícka pomôcka.",
    packBlurb: "Sú v parku psy. Check-in trvá 90 minút a potom sa vymaže.",
    open: "OTVORIŤ",
    privacy: "Súkromie",
    privacyPolicy: "Zásady súkromia",
    support: "Podpora",
    noAds: "Bez reklám navždy",
    keepOn: "Keep beží",
    notNow: "Teraz nie",
    close: "Zavrieť",
    back: "Späť",
    home: "Domov",
    food: "Jedlo",
    journal: "Denník",
    health: "Zdravie",
    yours: "Tvoje",
    save: "Uložiť",
    add: "Pridať",
    dim: "Tlmené",
    bright: "Svetlé",
    pulse: "Pulz",
    journalNotDx: "Osobný denník. Nie diagnóza.",
    nothingYet: "Zatiaľ nič.",
    addMeal: "Pridať jedlo",
    live: "Naživo",
    pack: "Svorka",
    addDog: "Pridať psa",
    letsGo: "Ideme",
    parks: "Parky",
    ninetyThenGone: "Deväťdesiat minút a preč.",
    erases90: "Vymaže sa za 90 minút.",
    noNames: "Bez mien.",
    noPhotoNoGps: "Bez fotky. Bez stopy GPS.",
    titlePack: "Jeden park. Jeden počet.",
    thisPhoneOnly: "Len tento telefón.",
    dogsN: count(catCs, { one: "pes", few: "psy", other: "psov" }),
    minutesN: count(catCs, { one: "minúta", few: "minúty", other: "minút" }),
    mealsN: count(catCs, { one: "jedlo", few: "jedlá", other: "jedál" }),
    daysN: count(catCs, { one: "deň", few: "dni", other: "dní" }),
    hoursN: count(catCs, { one: "hodina", few: "hodiny", other: "hodín" })
  });

  var SL = row(CS, {
    lang: "sl-SI",
    motto: "Zapis ostane pri vas.",
    lede: "Dve aplikaciji ob zagonu. Na vaši napravi. Brez računa. Najprej pomoč.",
    coming: "Prihaja v App Store",
    navSupport: "Podpora",
    navPrivacy: "Zasebnost",
    usageKeepPrivacy: "Uporaba, Keep, zasebnost",
    alisonBlurb: "Dnevnik na vaši napravi. Ni medicinski pripomoček.",
    packBlurb: "So v parku psi. Prijava traja 90 minut, nato se izbriše.",
    open: "ODPRI",
    privacy: "Zasebnost",
    privacyPolicy: "Pravilnik o zasebnosti",
    support: "Podpora",
    noAds: "Brez oglasov za vedno",
    keepOn: "Keep je vklopljen",
    notNow: "Zdaj ne",
    close: "Zapri",
    back: "Nazaj",
    home: "Domov",
    food: "Hrana",
    journal: "Dnevnik",
    health: "Zdravje",
    yours: "Tvoje",
    save: "Shrani",
    add: "Dodaj",
    dim: "Temno",
    bright: "Svetlo",
    pulse: "Utrip",
    journalNotDx: "Osebni dnevnik. Ni diagnoza.",
    nothingYet: "Še nič.",
    addMeal: "Dodaj obrok",
    live: "V živo",
    pack: "Krdelo",
    quiet: "Tiho",
    few: "Malo",
    busy: "Polno",
    checkIn: "Prijava",
    leave: "Odidi",
    addDog: "Dodaj psa",
    letsGo: "Gremo",
    parks: "Parki",
    ninetyThenGone: "Devetdeset minut, potem nič.",
    erases90: "Izbriše se čez 90 minut.",
    noNames: "Brez imen.",
    noPhotoNoGps: "Brez fotografije. Brez sledi GPS.",
    titlePack: "En park. Eno število.",
    thisPhoneOnly: "Samo ta telefon.",
    dogsN: count(catSl, { one: "pes", two: "psa", few: "psi", other: "psov" }),
    minutesN: count(catSl, { one: "minuta", two: "minuti", few: "minute", other: "minut" }),
    mealsN: count(catSl, { one: "obrok", two: "obroka", few: "obroki", other: "obrokov" }),
    daysN: count(catSl, { one: "dan", two: "dneva", few: "dnevi", other: "dni" }),
    hoursN: count(catSl, { one: "ura", two: "uri", few: "ure", other: "ur" })
  });

  var HR = row(CS, {
    lang: "hr",
    motto: "Zapis ostaje kod vas.",
    lede: "Dvije aplikacije na startu. Na vašem uređaju. Bez računa. Prvo pomoć.",
    coming: "Dolazi u App Store",
    navSupport: "Podrška",
    navPrivacy: "Privatnost",
    usageKeepPrivacy: "Uporaba, Keep, privatnost",
    alisonBlurb: "Dnevnik na vašem uređaju. Nije medicinski uređaj.",
    packBlurb: "Ima li pasa u parku. Prijava traje 90 minuta, zatim se briše.",
    open: "OTVORI",
    privacy: "Privatnost",
    privacyPolicy: "Pravila privatnosti",
    support: "Podrška",
    noAds: "Bez oglasa zauvijek",
    keepOn: "Keep je uključen",
    notNow: "Ne sada",
    close: "Zatvori",
    back: "Natrag",
    home: "Početna",
    food: "Hrana",
    journal: "Dnevnik",
    health: "Zdravlje",
    yours: "Tvoje",
    save: "Spremi",
    add: "Dodaj",
    dim: "Prigušeno",
    bright: "Svijetlo",
    pulse: "Puls",
    journalNotDx: "Osobni dnevnik. Nije dijagnoza.",
    nothingYet: "Još ništa.",
    addMeal: "Dodaj obrok",
    live: "Uživo",
    pack: "Čopor",
    quiet: "Tiho",
    few: "Malo",
    busy: "Gužva",
    checkIn: "Prijava",
    leave: "Odi",
    addDog: "Dodaj psa",
    letsGo: "Idemo",
    parks: "Parkovi",
    ninetyThenGone: "Devedeset minuta, onda nestane.",
    erases90: "Briše se za 90 minuta.",
    noNames: "Bez imena.",
    noPhotoNoGps: "Bez fotografije. Bez GPS traga.",
    titlePack: "Jedan park. Jedan broj.",
    thisPhoneOnly: "Samo ovaj telefon.",
    dogsN: count(catHr, { one: "pas", few: "psa", other: "pasa" }),
    minutesN: count(catHr, { one: "minuta", few: "minute", other: "minuta" }),
    mealsN: count(catHr, { one: "obrok", few: "obroka", other: "obroka" }),
    daysN: count(catHr, { one: "dan", few: "dana", other: "dana" }),
    hoursN: count(catHr, { one: "sat", few: "sata", other: "sati" })
  });

  var HU = row(CS, {
    lang: "hu",
    motto: "A feljegyzés nálad marad.",
    lede: "Két app induláskor. A készülékeden. Nincs fiók. Először a segítség.",
    coming: "Jön az App Store-ba",
    navSupport: "Támogatás",
    navPrivacy: "Adatok",
    usageKeepPrivacy: "Használat, Keep, adatvédelem",
    alisonBlurb: "Napló a készülékeden. Nem orvostechnikai eszköz.",
    packBlurb: "Vannak-e kutyák a parkban. A bejelentkezés 90 percig él, aztán törlődik.",
    open: "MEGNYITÁS",
    privacy: "Adatok",
    privacyPolicy: "Adatvédelem",
    support: "Támogatás",
    noAds: "Soha nincs reklám",
    keepOn: "Keep be van kapcsolva",
    notNow: "Most nem",
    close: "Bezárás",
    back: "Vissza",
    home: "Otthon",
    food: "Étel",
    journal: "Napló",
    health: "Egészség",
    yours: "Saját",
    save: "Mentés",
    add: "Hozzáad",
    dim: "Halvány",
    bright: "Világos",
    pulse: "Pulzus",
    journalNotDx: "Személyes napló. Nem diagnózis.",
    nothingYet: "Még semmi.",
    addMeal: "Étkezés hozzáadása",
    live: "Élő",
    pack: "Falka",
    quiet: "Csend",
    few: "Pár",
    busy: "Tele",
    checkIn: "Bejelentkezés",
    leave: "Kilépés",
    addDog: "Kutya hozzáadása",
    letsGo: "Gyerünk",
    parks: "Parkok",
    ninetyThenGone: "Kilencven perc, aztán nincs.",
    erases90: "90 perc múlva törlődik.",
    noNames: "Nincs név.",
    noPhotoNoGps: "Nincs fotó. Nincs GPS-nyom.",
    titlePack: "Egy park. Egy szám.",
    thisPhoneOnly: "Csak ez a telefon.",
    dogsN: count(catOne, { one: "kutya", other: "kutya" }),
    minutesN: count(catOne, { one: "perc", other: "perc" }),
    mealsN: count(catOne, { one: "étkezés", other: "étkezés" }),
    daysN: count(catOne, { one: "nap", other: "nap" }),
    hoursN: count(catOne, { one: "óra", other: "óra" })
  });

  var RO = row(CS, {
    lang: "ro",
    motto: "Înregistrarea rămâne la tine.",
    lede: "Două aplicații la lansare. Pe dispozitivul tău. Fără cont. Ajutorul întâi.",
    coming: "Vine în App Store",
    navSupport: "Suport",
    navPrivacy: "Confidențial",
    usageKeepPrivacy: "Utilizare, Keep, confidențialitate",
    alisonBlurb: "Un jurnal pe dispozitivul tău. Nu este dispozitiv medical.",
    packBlurb: "Sunt câini în parc. Check-in-ul ține 90 de minute, apoi se șterge.",
    open: "DESCHIDE",
    privacy: "Confidențial",
    privacyPolicy: "Politica de confidențialitate",
    support: "Suport",
    noAds: "Fără reclame, mereu",
    keepOn: "Keep e activ",
    notNow: "Nu acum",
    close: "Închide",
    back: "Înapoi",
    home: "Acasă",
    food: "Mâncare",
    journal: "Jurnal",
    health: "Sănătate",
    yours: "Ale tale",
    save: "Salvează",
    add: "Adaugă",
    dim: "Estompat",
    bright: "Luminos",
    pulse: "Puls",
    journalNotDx: "Jurnal personal. Nu e diagnostic.",
    nothingYet: "Nimic încă.",
    addMeal: "Adaugă o masă",
    live: "Live",
    pack: "Haită",
    quiet: "Lin",
    few: "Puțini",
    busy: "Plin",
    checkIn: "Check-in",
    leave: "Pleacă",
    addDog: "Adaugă un câine",
    letsGo: "Hai",
    parks: "Parcuri",
    ninetyThenGone: "Nouăzeci de minute, apoi dispare.",
    erases90: "Se șterge în 90 de minute.",
    noNames: "Fără nume.",
    noPhotoNoGps: "Fără poză. Fără urmă GPS.",
    titlePack: "Un parc. Un număr.",
    thisPhoneOnly: "Doar telefonul ăsta.",
    dogsN: count(catRo, { one: "câine", few: "câini", other: "de câini" }),
    minutesN: count(catRo, { one: "minut", few: "minute", other: "de minute" }),
    mealsN: count(catRo, { one: "masă", few: "mese", other: "de mese" }),
    daysN: count(catRo, { one: "zi", few: "zile", other: "de zile" }),
    hoursN: count(catRo, { one: "oră", few: "ore", other: "de ore" })
  });

  var PL = row(CS, {
    lang: "pl",
    motto: "Zapis zostaje u ciebie.",
    lede: "Dwie aplikacje na start. Na twoim urządzeniu. Bez konta. Najpierw pomoc.",
    coming: "Wkrótce w App Store",
    navSupport: "Pomoc",
    navPrivacy: "Prywatność",
    usageKeepPrivacy: "Użycie, Keep, prywatność",
    alisonBlurb: "Dziennik na twoim urządzeniu. To nie wyrób medyczny.",
    packBlurb: "Czy w parku są psy. Check-in trwa 90 minut, potem znika.",
    open: "OTWÓRZ",
    privacy: "Prywatność",
    privacyPolicy: "Polityka prywatności",
    support: "Pomoc",
    noAds: "Bez reklam na zawsze",
    keepOn: "Keep jest włączony",
    notNow: "Nie teraz",
    close: "Zamknij",
    back: "Wstecz",
    home: "Dom",
    food: "Jedzenie",
    journal: "Dziennik",
    health: "Zdrowie",
    yours: "Twoje",
    save: "Zapisz",
    add: "Dodaj",
    dim: "Przygaszone",
    bright: "Jasne",
    pulse: "Puls",
    journalNotDx: "Osobisty dziennik. To nie diagnoza.",
    nothingYet: "Jeszcze nic.",
    addMeal: "Dodaj posiłek",
    live: "Teraz",
    pack: "Sfora",
    quiet: "Cicho",
    few: "Kilka",
    busy: "Tłoczno",
    checkIn: "Zamelduj",
    leave: "Wyjdź",
    addDog: "Dodaj psa",
    letsGo: "Chodźmy",
    parks: "Parki",
    ninetyThenGone: "Dziewięćdziesiąt minut i znika.",
    erases90: "Znika po 90 minutach.",
    noNames: "Bez imion.",
    noPhotoNoGps: "Bez zdjęcia. Bez śladu GPS.",
    titlePack: "Jeden park. Jeden stan.",
    thisPhoneOnly: "Tylko ten telefon.",
    dogsN: count(catPl, { one: "pies", few: "psy", many: "psów", other: "psa" }),
    minutesN: count(catPl, { one: "minuta", few: "minuty", many: "minut", other: "minuty" }),
    mealsN: count(catPl, { one: "posiłek", few: "posiłki", many: "posiłków", other: "posiłku" }),
    daysN: count(catPl, { one: "dzień", few: "dni", many: "dni", other: "dnia" }),
    hoursN: count(catPl, { one: "godzina", few: "godziny", many: "godzin", other: "godziny" })
  });

  var RU = row(CS, {
    lang: "ru",
    script: "Cyrl",
    motto: "Запись остаётся у вас.",
    lede: "Два приложения на старте. На вашем устройстве. Без аккаунта. Сначала помощь.",
    coming: "Скоро в App Store",
    navSupport: "Поддержка",
    navPrivacy: "Приватность",
    usageKeepPrivacy: "Использование, Keep, приватность",
    alisonBlurb: "Дневник на вашем устройстве. Это не медицинское изделие.",
    packBlurb: "Есть ли в парке собаки. Чек-ин живёт 90 минут, потом стирается.",
    open: "ОТКРЫТЬ",
    privacy: "Приватность",
    privacyPolicy: "Политика конфиденциальности",
    support: "Поддержка",
    noAds: "Без рекламы навсегда",
    keepOn: "Keep включён",
    notNow: "Не сейчас",
    close: "Закрыть",
    back: "Назад",
    home: "Дом",
    food: "Еда",
    journal: "Журнал",
    health: "Здоровье",
    yours: "Твоё",
    save: "Сохранить",
    add: "Добавить",
    dim: "Тускло",
    bright: "Ярко",
    pulse: "Пульс",
    journalNotDx: "Личный дневник. Не диагноз.",
    nothingYet: "Пока ничего.",
    addMeal: "Добавить приём",
    live: "Сейчас",
    pack: "Стая",
    quiet: "Тихо",
    few: "Мало",
    busy: "Много",
    checkIn: "Чек-ин",
    leave: "Уйти",
    addDog: "Добавить собаку",
    letsGo: "Пошли",
    parks: "Парки",
    ninetyThenGone: "Девяносто минут — и нет.",
    erases90: "Стирается через 90 минут.",
    noNames: "Без имён.",
    noPhotoNoGps: "Без фото. Без GPS-следа.",
    titlePack: "Один парк. Один счёт.",
    thisPhoneOnly: "Только этот телефон.",
    dogsN: count(catRu, { one: "собака", few: "собаки", many: "собак", other: "собаки" }),
    minutesN: count(catRu, { one: "минута", few: "минуты", many: "минут", other: "минуты" }),
    mealsN: count(catRu, { one: "приём", few: "приёма", many: "приёмов", other: "приёма" }),
    daysN: count(catRu, { one: "день", few: "дня", many: "дней", other: "дня" }),
    hoursN: count(catRu, { one: "час", few: "часа", many: "часов", other: "часа" })
  });

  var UK = row(CS, {
    lang: "uk",
    script: "Cyrl",
    motto: "Запис лишається у вас.",
    lede: "Дві програми на старті. На вашому пристрої. Без облікового запису. Спочатку допомога.",
    coming: "Незабаром в App Store",
    navSupport: "Підтримка",
    navPrivacy: "Приватність",
    usageKeepPrivacy: "Користування, Keep, приватність",
    alisonBlurb: "Щоденник на вашому пристрої. Це не медичний виріб.",
    packBlurb: "Чи є в парку собаки. Чек-ін живе 90 хвилин, потім стирається.",
    open: "ВІДКРИТИ",
    privacy: "Приватність",
    privacyPolicy: "Політика приватності",
    support: "Підтримка",
    noAds: "Без реклами назавжди",
    keepOn: "Keep увімкнено",
    notNow: "Не зараз",
    close: "Закрити",
    back: "Назад",
    home: "Дім",
    food: "Їжа",
    journal: "Журнал",
    health: "Здоров’я",
    yours: "Твоє",
    save: "Зберегти",
    add: "Додати",
    dim: "Приглушено",
    bright: "Яскраво",
    pulse: "Пульс",
    journalNotDx: "Особистий щоденник. Не діагноз.",
    nothingYet: "Поки нічого.",
    addMeal: "Додати прийом",
    live: "Зараз",
    pack: "Зграя",
    quiet: "Тихо",
    few: "Мало",
    busy: "Багато",
    checkIn: "Чек-ін",
    leave: "Вийти",
    addDog: "Додати собаку",
    letsGo: "Ходімо",
    parks: "Парки",
    ninetyThenGone: "Дев’яносто хвилин — і немає.",
    erases90: "Стирається за 90 хвилин.",
    noNames: "Без імен.",
    noPhotoNoGps: "Без фото. Без GPS-сліду.",
    titlePack: "Один парк. Один рахунок.",
    thisPhoneOnly: "Лише цей телефон.",
    dogsN: count(catRu, { one: "собака", few: "собаки", many: "собак", other: "собаки" }),
    minutesN: count(catRu, { one: "хвилина", few: "хвилини", many: "хвилин", other: "хвилини" }),
    mealsN: count(catRu, { one: "прийом", few: "прийоми", many: "прийомів", other: "прийому" }),
    daysN: count(catRu, { one: "день", few: "дні", many: "днів", other: "дня" }),
    hoursN: count(catRu, { one: "година", few: "години", many: "годин", other: "години" })
  });

  var TR = row(CS, {
    lang: "tr",
    motto: "Kayıt sende kalır.",
    lede: "Başlangıçta iki uygulama. Cihazında. Hesap yok. Önce yardım.",
    coming: "App Store’a geliyor",
    navSupport: "Destek",
    navPrivacy: "Gizlilik",
    usageKeepPrivacy: "Kullanım, Keep, gizlilik",
    alisonBlurb: "Cihazındaki günlük. Tıbbi cihaz değil.",
    packBlurb: "Parkta köpek var mı. Check-in 90 dakika sürer, sonra silinir.",
    open: "AÇ",
    privacy: "Gizlilik",
    privacyPolicy: "Gizlilik politikası",
    support: "Destek",
    noAds: "Sonsuza dek reklamsız",
    keepOn: "Keep açık",
    notNow: "Şimdi değil",
    close: "Kapat",
    back: "Geri",
    home: "Ana",
    food: "Yemek",
    journal: "Günlük",
    health: "Sağlık",
    yours: "Senin",
    save: "Kaydet",
    add: "Ekle",
    dim: "Loş",
    bright: "Parlak",
    pulse: "Nabız",
    journalNotDx: "Kişisel günlük. Tanı değil.",
    nothingYet: "Henüz yok.",
    addMeal: "Öğün ekle",
    live: "Canlı",
    pack: "Sürü",
    quiet: "Sessiz",
    few: "Az",
    busy: "Dolu",
    checkIn: "Check-in",
    leave: "Ayrıl",
    addDog: "Köpek ekle",
    letsGo: "Gidelim",
    parks: "Parklar",
    ninetyThenGone: "Doksan dakika, sonra yok.",
    erases90: "90 dakikada silinir.",
    noNames: "İsim yok.",
    noPhotoNoGps: "Foto yok. GPS izi yok.",
    titlePack: "Bir park. Bir sayı.",
    thisPhoneOnly: "Yalnız bu telefon.",
    dogsN: count(catOne, { one: "köpek", other: "köpek" }),
    minutesN: count(catOne, { one: "dakika", other: "dakika" }),
    mealsN: count(catOne, { one: "öğün", other: "öğün" }),
    daysN: count(catOne, { one: "gün", other: "gün" }),
    hoursN: count(catOne, { one: "saat", other: "saat" })
  });

  var ID = row(CS, {
    lang: "id",
    motto: "Catatan tetap milik Anda.",
    lede: "Dua aplikasi saat peluncuran. Di perangkat Anda. Tanpa akun. Bantuan dulu.",
    coming: "Segera di App Store",
    navSupport: "Dukungan",
    navPrivacy: "Privasi",
    usageKeepPrivacy: "Penggunaan, Keep, privasi",
    alisonBlurb: "Jurnal di perangkat Anda. Bukan alat medis.",
    packBlurb: "Ada anjing di taman ini. Check-in 90 menit, lalu dihapus.",
    open: "BUKA",
    privacy: "Privasi",
    privacyPolicy: "Kebijakan privasi",
    support: "Dukungan",
    noAds: "Tanpa iklan selamanya",
    keepOn: "Keep aktif",
    notNow: "Nanti",
    close: "Tutup",
    back: "Kembali",
    home: "Beranda",
    food: "Makanan",
    journal: "Jurnal",
    health: "Kesehatan",
    yours: "Milikmu",
    save: "Simpan",
    add: "Tambah",
    dim: "Redup",
    bright: "Terang",
    pulse: "Nadi",
    journalNotDx: "Jurnal pribadi. Bukan diagnosis.",
    nothingYet: "Belum ada.",
    addMeal: "Tambah makanan",
    live: "Langsung",
    pack: "Pak",
    quiet: "Sepi",
    few: "Sedikit",
    busy: "Ramai",
    checkIn: "Check-in",
    leave: "Keluar",
    addDog: "Tambah anjing",
    letsGo: "Ayo",
    parks: "Taman",
    ninetyThenGone: "Sembilan puluh menit, lalu hilang.",
    erases90: "Terhapus dalam 90 menit.",
    noNames: "Tanpa nama.",
    noPhotoNoGps: "Tanpa foto. Tanpa jejak GPS.",
    titlePack: "Satu taman. Satu hitungan.",
    thisPhoneOnly: "Hanya telepon ini.",
    dogsN: count(catOther, { other: "anjing" }),
    minutesN: count(catOther, { other: "menit" }),
    mealsN: count(catOther, { other: "makanan" }),
    daysN: count(catOther, { other: "hari" }),
    hoursN: count(catOther, { other: "jam" })
  });

  var MS = row(CS, {
    lang: "ms",
    motto: "Rekod kekal dengan anda.",
    lede: "Dua apl semasa pelancaran. Pada peranti anda. Tiada akaun. Bantuan dahulu.",
    coming: "Akan datang ke App Store",
    navSupport: "Sokongan",
    navPrivacy: "Privasi",
    usageKeepPrivacy: "Penggunaan, Keep, privasi",
    alisonBlurb: "Jurnal pada peranti anda. Bukan peranti perubatan.",
    packBlurb: "Ada anjing di taman ini. Check-in 90 minit, kemudian dipadam.",
    open: "BUKA",
    privacy: "Privasi",
    privacyPolicy: "Dasar privasi",
    support: "Sokongan",
    noAds: "Tanpa iklan selamanya",
    keepOn: "Keep dihidupkan",
    notNow: "Bukan sekarang",
    close: "Tutup",
    back: "Kembali",
    home: "Laman",
    food: "Makanan",
    journal: "Jurnal",
    health: "Kesihatan",
    yours: "Milikmu",
    save: "Simpan",
    add: "Tambah",
    dim: "Malap",
    bright: "Terang",
    pulse: "Nadi",
    journalNotDx: "Jurnal peribadi. Bukan diagnosis.",
    nothingYet: "Belum ada.",
    addMeal: "Tambah hidangan",
    live: "Langsung",
    pack: "Pak",
    quiet: "Senyap",
    few: "Sedikit",
    busy: "Ramai",
    checkIn: "Check-in",
    leave: "Keluar",
    addDog: "Tambah anjing",
    letsGo: "Jom",
    parks: "Taman",
    ninetyThenGone: "Sembilan puluh minit, kemudian hilang.",
    erases90: "Dipadam dalam 90 minit.",
    noNames: "Tiada nama.",
    noPhotoNoGps: "Tiada foto. Tiada jejak GPS.",
    titlePack: "Satu taman. Satu kiraan.",
    thisPhoneOnly: "Telefon ini sahaja.",
    dogsN: count(catOther, { other: "anjing" }),
    minutesN: count(catOther, { other: "minit" }),
    mealsN: count(catOther, { other: "hidangan" }),
    daysN: count(catOther, { other: "hari" }),
    hoursN: count(catOther, { other: "jam" })
  });

  var EAST = {
    cs: CS,
    hr: HR,
    hu: HU,
    id: ID,
    ms: MS,
    pl: PL,
    ro: RO,
    ru: RU,
    sk: SK,
    "sl-SI": SL,
    tr: TR,
    uk: UK
  };

  function parseEast(raw) {
    var s = String(raw || "")
      .trim()
      .toLowerCase()
      .replace(/_/g, "-");
    if (!s) return null;
    if (s === "sl" || s.indexOf("sl-") === 0) return "sl-SI";
    var base = s.split("-")[0];
    var i;
    for (i = 0; i < LOCALES.length; i++) {
      var loc = LOCALES[i];
      if (loc.toLowerCase() === s || loc.toLowerCase() === base) return loc;
    }
    return null;
  }

  function category(locale, n) {
    var fn = CATS[locale];
    return fn ? fn(n) : "other";
  }

  g.NO_I18N = g.NO_I18N || {};
  g.NO_I18N.east = {
    locales: LOCALES,
    copy: EAST,
    parse: parseEast,
    category: category,
    dir: "ltr"
  };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = g.NO_I18N.east;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
