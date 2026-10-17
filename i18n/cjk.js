/** Site chrome: ja, zh-Hans, zh-Hant, ko, th, vi. Real rooms, not POC toys. OSM names stay. No medical. mailto:support@nightorders.app */
(function (root) {
 var LOCALES = ["ja", "zh-Hans", "zh-Hant", "ko", "th", "vi"];

 var SCRIPT = {
 ja: {
 htmlLang: "ja",
 dir: "ltr",
 fonts: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "YuGothic", "Yu Gothic", "Noto Sans JP", "Noto Sans CJK JP", system-ui, sans-serif',
 wordBreak: "normal",
 lineBreak: "strict"
 },
 "zh-Hans": {
 htmlLang: "zh-Hans",
 dir: "ltr",
 fonts: '"PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Source Han Sans SC", "Songti SC", system-ui, sans-serif',
 wordBreak: "normal",
 lineBreak: "strict"
 },
 "zh-Hant": {
 htmlLang: "zh-Hant",
 dir: "ltr",
 fonts: '"PingFang TC", "Hiragino Sans CNS", "Noto Sans TC", "Source Han Sans TC", "Songti TC", "LiHei Pro", system-ui, sans-serif',
 wordBreak: "normal",
 lineBreak: "strict"
 },
 ko: {
 htmlLang: "ko",
 dir: "ltr",
 fonts: '"Apple SD Gothic Neo", "AppleGothic", "Noto Sans KR", "Noto Sans CJK KR", "Malgun Gothic", system-ui, sans-serif',
 wordBreak: "keep-all",
 lineBreak: "strict"
 },
 th: {
 htmlLang: "th",
 dir: "ltr",
 fonts: '"Thonburi", "Sukhumvit Set", "Sathu", "Noto Sans Thai", "Tahoma", system-ui, sans-serif',
 wordBreak: "keep-all",
 lineBreak: "auto"
 },
 vi: {
 htmlLang: "vi",
 dir: "ltr",
 fonts: '"Be Vietnam Pro", "Helvetica Neue", "Noto Sans", "Noto Sans Vietnamese", Arial, system-ui, sans-serif',
 wordBreak: "normal",
 lineBreak: "normal"
 }
 };

 function dogs(locale, n) {
 var c = Math.max(0, Number(n) || 0);
 if (locale === "ja") return c + "匹";
 if (locale === "zh-Hans") return c + " 只";
 if (locale === "zh-Hant") return c + " 隻";
 if (locale === "ko") return c + "마리";
 if (locale === "th") return c + " ตัว";
 if (c === 0) return "0 con";
 if (c === 1) return "1 con";
 return c + " con";
 }

 var COPY = {
 ja: {
 studio: "Night Orders",
 motto: "記録はあなたのもとに残る。",
 lede: "3本。端末の中。アカウントなし。先に助け。",
 navSite: "サイト",
 alison: "アリソン",
 packRun: "パックラン",
 support: "サポート",
 privacy: "プライバシー",
 legal: "法務",
 faq: "よくある質問",
 coming: "App Storeにまもなく",
 what: "これは何？",
 whatA: "小さなスタジオ。3本：アリソン、パックラン、Stellar Anvil。記録はあなたのもとに残る。",
    anvilBlurb: "MarksからIgnite、Star Ashへ。App Store有料ダウンロード $0.99。アプリ内課金なし。アカウントなし。広告なし。",
    anvilOneLiner: "MarksからIgnite、Star Ashへ。",
 where: "データはどこ？",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "アカウントは？広告は？",
 accountA: "アカウントなし。広告なし。このサイトにもアプリにも解析なし。",
 keepQ: "キープとは？",
 reach: "連絡先は？",
 mail: "support@nightorders.app",
 foot: "Night Orders。広告なし。アカウントなし。",
 alisonWhisper: "食事 · この端末",
 addMeal: "食事を追加",
 add: "追加",
 nothingYet: "まだありません。",
 pairShowed: "一緒に出た組",
 observational: "観察。予測ではありません。",
 alisonBlurb: "端末上の記録。医療機器ではありません。",
 alisonMore: "使い方、キープ、プライバシー",
 alisonCap: "食事を追加。組が出ることがある。",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "犬を追加",
 letsGo: "はじめる",
 parks: "公園",
 checkIn: "Directions",
 leave: "離れる",
 erases: "Directions open in Apple Maps.",
 noPhoto: "写真なし。GPSの軌跡なし。",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "使い方、キープ、プライバシー",
 packCap: "Add a dog. Then find a park.",
 home: "ホーム",
 food: "食事",
 journal: "記録",
 health: "ヘルス",
 yours: "あなた",
 start: "開始",
 stop: "停止",
 keep: "キープ",
 dim: "暗く",
 notDevice: "個人の記録です。医療機器ではありません。",
 noAds: "広告なし、ずっと",
 open: "開く",
 live: "いま",
 packTab: "パック",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 },
 "zh-Hans": {
 studio: "Night Orders",
 motto: "记录留在你这边。",
 lede: "三款应用。在你的设备上。无账号。先帮你。",
 navSite: "站点",
 alison: "Alison",
 packRun: "遛狗",
 support: "支持",
 privacy: "隐私",
 legal: "法律",
 faq: "常见问题",
 coming: "即将登陆 App Store",
 what: "这是什么？",
 whatA: "一家小工作室。三款应用：Alison、Pack Run 和 Stellar Anvil。记录留在你这边。",
    anvilBlurb: "Marks 到 Ignite 到 Star Ash。App Store 付费下载 $0.99。无应用内购买。无账号。无广告。",
    anvilOneLiner: "Marks 到 Ignite 到 Star Ash。",
 where: "数据在哪？",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "要账号吗？有广告吗？",
 accountA: "无账号。无广告。本站和 App 都没有分析。",
 keepQ: "续订是什么？",
 reach: "怎么联系？",
 mail: "support@nightorders.app",
 foot: "Night Orders。无广告。无账号。",
 alisonWhisper: "饮食 · 本机",
 addMeal: "加一餐",
 add: "添加",
 nothingYet: "还没有。",
 pairShowed: "一起出现过的组合",
 observational: "观察。不是预测。",
 alisonBlurb: "设备上的记录。不是医疗器械。",
 alisonMore: "用法、续订、隐私",
 alisonCap: "加一餐。可能出现一组。",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "加一只狗",
 letsGo: "开始",
 parks: "公园",
 checkIn: "Directions",
 leave: "离开",
 erases: "Directions open in Apple Maps.",
 noPhoto: "无照片。无 GPS 轨迹。",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "用法、续订、隐私",
 packCap: "Add a dog. Then find a park.",
 home: "首页",
 food: "饮食",
 journal: "记录",
 health: "健康",
 yours: "你的",
 start: "开始",
 stop: "停止",
 keep: "续订",
 dim: "变暗",
 notDevice: "这是个人记录。不是医疗器械。",
 noAds: "永不广告",
 open: "打开",
 live: "现场",
 packTab: "狗队",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 },
 "zh-Hant": {
 studio: "Night Orders",
 motto: "紀錄留在你這邊。",
 lede: "三款應用。在你的裝置上。無帳號。先幫你。",
 navSite: "站點",
 alison: "Alison",
 packRun: "遛狗",
 support: "支援",
 privacy: "隱私",
 legal: "法律",
 faq: "常見問題",
 coming: "即將登陸 App Store",
 what: "這是什麼？",
 whatA: "一家小工作室。三款應用：Alison、Pack Run 和 Stellar Anvil。紀錄留在你這邊。",
    anvilBlurb: "Marks 到 Ignite 到 Star Ash。App Store 付費下載 $0.99。無應用內購買。無帳號。無廣告。",
    anvilOneLiner: "Marks 到 Ignite 到 Star Ash。",
 where: "資料在哪？",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "要帳號嗎？有廣告嗎？",
 accountA: "無帳號。無廣告。本站和 App 都沒有分析。",
 keepQ: "續訂是什麼？",
 reach: "怎麼聯絡？",
 mail: "support@nightorders.app",
 foot: "Night Orders。無廣告。無帳號。",
 alisonWhisper: "飲食 · 本機",
 addMeal: "加一餐",
 add: "新增",
 nothingYet: "還沒有。",
 pairShowed: "一起出現過的組合",
 observational: "觀察。不是預測。",
 alisonBlurb: "裝置上的紀錄。不是醫療器材。",
 alisonMore: "用法、續訂、隱私",
 alisonCap: "加一餐。可能出現一組。",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "加一隻狗",
 letsGo: "開始",
 parks: "公園",
 checkIn: "Directions",
 leave: "離開",
 erases: "Directions open in Apple Maps.",
 noPhoto: "無照片。無 GPS 軌跡。",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "用法、續訂、隱私",
 packCap: "Add a dog. Then find a park.",
 home: "首頁",
 food: "飲食",
 journal: "紀錄",
 health: "健康",
 yours: "你的",
 start: "開始",
 stop: "停止",
 keep: "續訂",
 dim: "變暗",
 notDevice: "這是個人紀錄。不是醫療器材。",
 noAds: "永不廣告",
 open: "打開",
 live: "現場",
 packTab: "狗隊",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 },
 ko: {
 studio: "Night Orders",
 motto: "기록은 당신 곁에 남습니다.",
 lede: "앱 세 개. 기기 안. 계정 없음. 도움이 먼저.",
 navSite: "사이트",
 alison: "Alison",
 packRun: "팩런",
 support: "지원",
 privacy: "개인정보",
 legal: "법률",
 faq: "자주 묻는 질문",
 coming: "곧 App Store",
 what: "이게 뭐죠?",
 whatA: "작은 스튜디오. 앱 세 개: Alison, Pack Run, Stellar Anvil. 기록은 당신 곁에 남습니다.",
    anvilBlurb: "Marks에서 Ignite, Star Ash로. App Store 유료 다운로드 $0.99. 인앱 구매 없음. 계정 없음. 광고 없음.",
    anvilOneLiner: "Marks에서 Ignite, Star Ash로.",
 where: "데이터는 어디에?",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "계정이요? 광고요?",
 accountA: "계정 없음. 광고 없음. 이 사이트와 앱에 분석 없음.",
 keepQ: "킵이 뭐죠?",
 reach: "연락은?",
 mail: "support@nightorders.app",
 foot: "Night Orders. 광고 없음. 계정 없음.",
 alisonWhisper: "식사 · 이 기기",
 addMeal: "식사 추가",
 add: "추가",
 nothingYet: "아직 없음.",
 pairShowed: "같이 나타난 짝",
 observational: "관찰. 예측이 아닙니다.",
 alisonBlurb: "기기 위 기록. 의료기기가 아닙니다.",
 alisonMore: "사용법, 킵, 개인정보",
 alisonCap: "식사를 추가. 짝이 나타날 수 있음.",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "개 추가",
 letsGo: "시작",
 parks: "공원",
 checkIn: "Directions",
 leave: "나가기",
 erases: "Directions open in Apple Maps.",
 noPhoto: "사진 없음. GPS 궤적 없음.",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "사용법, 킵, 개인정보",
 packCap: "Add a dog. Then find a park.",
 home: "홈",
 food: "식사",
 journal: "기록",
 health: "건강",
 yours: "나의",
 start: "시작",
 stop: "종료",
 keep: "킵",
 dim: "어둡게",
 notDevice: "개인 기록입니다. 의료기기가 아닙니다.",
 noAds: "광고 없음, 계속",
 open: "열기",
 live: "지금",
 packTab: "팩",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 },
 th: {
 studio: "Night Orders",
 motto: "บันทึกอยู่กับคุณ",
 lede: "สามแอป บนเครื่องคุณ ไม่มีบัญชี ช่วยก่อน",
 navSite: "ไซต์",
 alison: "Alison",
 packRun: "แพ็กรัน",
 support: "สนับสนุน",
 privacy: "ความเป็นส่วนตัว",
 legal: "กฎหมาย",
 faq: "คำถาม",
 coming: "ใกล้เข้า App Store",
 what: "นี่คืออะไร",
 whatA: "สตูดิโอเล็ก สามแอป: Alison, Pack Run และ Stellar Anvil บันทึกอยู่กับคุณ",
    anvilBlurb: "Marks ไป Ignite ไป Star Ash ดาวน์โหลด App Store ชำระเงิน $0.99 ไม่มีการซื้อในแอป ไม่มีบัญชี ไม่มีโฆษณา",
    anvilOneLiner: "Marks ไป Ignite ไป Star Ash",
 where: "ข้อมูลอยู่ที่ไหน",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "มีบัญชีไหม มีโฆษณาไหม",
 accountA: "ไม่มีบัญชี ไม่มีโฆษณา ไม่มีวิเคราะห์ทั้งไซต์และแอป",
 keepQ: "คีปคืออะไร",
 reach: "ติดต่ออย่างไร",
 mail: "support@nightorders.app",
 foot: "Night Orders ไม่มีโฆษณา ไม่มีบัญชี",
 alisonWhisper: "อาหาร · เครื่องนี้",
 addMeal: "เพิ่มมื้อ",
 add: "เพิ่ม",
 nothingYet: "ยังไม่มี",
 pairShowed: "คู่ที่โผล่ด้วยกัน",
 observational: "สังเกต ไม่ใช่พยากรณ์",
 alisonBlurb: "บันทึกบนเครื่อง ไม่ใช่เครื่องมือแพทย์",
 alisonMore: "วิธีใช้ คีป ความเป็นส่วนตัว",
 alisonCap: "เพิ่มมื้อ คู่อาจโผล่",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "เพิ่มสุนัข",
 letsGo: "ไปกัน",
 parks: "สวน",
 checkIn: "Directions",
 leave: "ออก",
 erases: "Directions open in Apple Maps.",
 noPhoto: "ไม่มีรูป ไม่มีเส้น GPS",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "วิธีใช้ คีป ความเป็นส่วนตัว",
 packCap: "Add a dog. Then find a park.",
 home: "หน้าหลัก",
 food: "อาหาร",
 journal: "บันทึก",
 health: "สุขภาพ",
 yours: "ของคุณ",
 start: "เริ่ม",
 stop: "หยุด",
 keep: "คีป",
 dim: "มืด",
 notDevice: "บันทึกส่วนตัว ไม่ใช่เครื่องมือแพทย์",
 noAds: "ไม่มีโฆษณาตลอดไป",
 open: "เปิด",
 live: "สด",
 packTab: "ฝูง",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 },
 vi: {
 studio: "Night Orders",
 motto: "Hồ sơ ở lại với bạn.",
 lede: "Ba ứng dụng. Trên máy bạn. Không tài khoản. Giúp trước.",
 navSite: "Trang",
 alison: "Alison",
 packRun: "Đàn chạy",
 support: "Hỗ trợ",
 privacy: "Riêng tư",
 legal: "Pháp lý",
 faq: "Hỏi đáp",
 coming: "Sắp lên App Store",
 what: "Đây là gì?",
 whatA: "Studio nhỏ. Ba ứng dụng: Alison, Pack Run và Stellar Anvil. Hồ sơ ở lại với bạn.",
    anvilBlurb: "Marks đến Ignite đến Star Ash. Tải App Store trả phí $0.99. Không mua trong ứng dụng. Không tài khoản. Không quảng cáo.",
    anvilOneLiner: "Marks đến Ignite đến Star Ash.",
 where: "Dữ liệu ở đâu?",
 whereA: "On your device. No Night Orders account. Alison does not upload the journal. Pack Run sends nothing to a Night Orders server.",
 account: "Có tài khoản? Quảng cáo?",
 accountA: "Không tài khoản. Không quảng cáo. Không phân tích trên trang này hay trong ứng dụng.",
 keepQ: "Keep là gì?",
 reach: "Liên hệ thế nào?",
 mail: "support@nightorders.app",
 foot: "Night Orders. Không quảng cáo. Không tài khoản.",
 alisonWhisper: "Ăn · máy này",
 addMeal: "Thêm bữa",
 add: "Thêm",
 nothingYet: "Chưa có gì.",
 pairShowed: "Cặp đã hiện cùng",
 observational: "Quan sát. Không phải dự báo.",
 alisonBlurb: "Nhật ký trên máy. Không phải thiết bị y tế.",
 alisonMore: "Cách dùng, Keep, riêng tư",
 alisonCap: "Thêm bữa. Một cặp có thể hiện.",
 packWhisperDogs: "Your dogs. On this phone.",
 packWhisperParks: "Nearby dog parks.",
 addDog: "Thêm chó",
 letsGo: "Đi",
 parks: "Công viên",
 checkIn: "Directions",
 leave: "Rời",
 erases: "Directions open in Apple Maps.",
 noPhoto: "Không ảnh. Không vết GPS.",
 packBlurb: "Pack Run finds dog parks near you. Pack Run sends nothing to a Night Orders server.",
 packMore: "Cách dùng, Keep, riêng tư",
 packCap: "Add a dog. Then find a park.",
 home: "Trang chủ",
 food: "Ăn",
 journal: "Nhật ký",
 health: "Sức khỏe",
 yours: "Của bạn",
 start: "Bắt đầu",
 stop: "Dừng",
 keep: "Keep",
 dim: "Tối",
 notDevice: "Nhật ký cá nhân. Không phải thiết bị y tế.",
 noAds: "Không quảng cáo mãi",
 open: "Mở",
 live: "Trực",
 packTab: "Đàn",
 onePark: "Dog parks near you.",
 ninety: "A live park count is not part of this version."
 }
 };

 function pick(raw) {
 var s = String(raw || "").trim().toLowerCase().replace(/_/g, "-");
 if (!s) return null;
 if (s === "ja" || s.indexOf("ja-") === 0) return "ja";
 if (s === "ko" || s.indexOf("ko-") === 0) return "ko";
 if (s === "th" || s.indexOf("th-") === 0) return "th";
 if (s === "vi" || s.indexOf("vi-") === 0) return "vi";
 if (s.indexOf("zh") === 0) {
 if (s.indexOf("hant") !== -1 || s.indexOf("tw") !== -1 || s.indexOf("hk") !== -1 || s.indexOf("mo") !== -1) {
 return "zh-Hant";
 }
 return "zh-Hans";
 }
 return null;
 }

 function cssFor(locale) {
 var s = SCRIPT[locale];
 if (!s) return "";
 return (
 'html[lang="' + s.htmlLang + '"]{' +
 "font-family:" + s.fonts + ";" +
 "overflow-wrap:anywhere;" +
 "word-break:" + s.wordBreak + ";" +
 "line-break:" + s.lineBreak + ";" +
 "letter-spacing:normal;" +
 "}" +
 'html[lang="' + s.htmlLang + '"].mast-nav a,' +
 'html[lang="' + s.htmlLang + '"].pack-tabbar,' +
 'html[lang="' + s.htmlLang + '"] [data-pack-pill]{white-space:nowrap;letter-spacing:normal;}' +
 'html[lang="' + s.htmlLang + '"] input,' +
 'html[lang="' + s.htmlLang + '"] textarea{font-family:inherit;ime-mode:active;}'
 );
 }

 function apply(locale, doc) {
 if (!locale || !SCRIPT[locale]) return;
 var d = doc || (typeof document !== "undefined" ? document : null);
 if (!d) return;
 var html = d.documentElement;
 var s = SCRIPT[locale];
 html.lang = s.htmlLang;
 html.dir = "ltr";
 html.setAttribute("data-script", "cjk");
 html.setAttribute("data-locale", locale);
 html.style.fontFamily = s.fonts;
 html.style.overflowWrap = "anywhere";
 html.style.wordBreak = s.wordBreak;
 var id = "no-cjk-fit";
 var tag = d.getElementById(id);
 if (!tag) {
 tag = d.createElement("style");
 tag.id = id;
 d.head.appendChild(tag);
 }
 tag.textContent = cssFor(locale);
 }

 var api = {
 family: "cjk",
 locales: LOCALES,
 script: SCRIPT,
 copy: COPY,
 pick: pick,
 chrome: function (locale) {
 return COPY[locale] || null;
 },
 dogs: dogs,
 css: cssFor,
 apply: apply,
 ime: function (locale) {
 var s = SCRIPT[locale];
 if (!s) return null;
 return {
 lang: s.htmlLang,
 inputMode: "text",
 autocapitalize: locale === "vi" ? "sentences" : "none",
 spellcheck: false,
 autocomplete: "off",
 autocorrect: "off",
 enterkeyhint: "done"
 };
 }
 };

 if (typeof window !== "undefined") window.NO_CJK = api;
 root.NO_CJK = api;
 if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
