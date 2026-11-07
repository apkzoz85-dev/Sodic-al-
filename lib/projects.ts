// Source: SODIC Fact Sheet — All Projects (Nov 2026). Prices in EGP millions.
// East Vale is not in the fact sheet — prices from current market listings (Nov 2026).

export type Unit = { type: string; bua: string; land?: string; finishing: string; price: number | null };
export type Phase = { name: string; delivery: string; plan: string; discount?: string; units: Unit[] };
export type Project = {
  slug: string;
  name: string;
  nameAr: string;
  region: "west" | "east";
  location: string;
  tagline: string;
  intro: string;
  accent: string;
  startPrice: string;
  downPayment: string;
  years: string;
  badge?: string;
  indicative?: boolean;
  priceNote?: string;
  stats: { value: string; label: string }[];
  phases: Phase[];
  payment: { title: string; detail: string }[];
  highlights: string[];
  amenities: string[];
  nearby: { place: string; time: string }[];
  faq: { q: string; a: string }[];
  keywords: string[];
};

const FF = "كامل التشطيب";
const SEMI = "نصف تشطيب";
const CS = "Core & Shell";
const FF_AC = "كامل التشطيب بالتكييفات";
const PLAN_RTM = "5% مقدم — 3% بعد 6 شهور — 8% بعد 9 شهور — والباقي على 8 سنوات أقساط متساوية";
const PLAN_10 = "5% مقدم — والباقي على 10 سنوات (Back-loaded)";
const PLAN_ER = "5% مقدم — أول قسط بعد 6 شهور — على 8 سنوات";

export const fmt = (m: number) => Math.round(m * 1_000_000).toLocaleString("en-US");

export const PROJECTS: Project[] = [
  {
    slug: "vye",
    name: "VYE",
    nameAr: "ڤاي",
    region: "west",
    location: "نيو زايد — غرب القاهرة",
    tagline: "شقق وتاون هاوس جاهزة للاستلام في نيو زايد",
    intro:
      "VYE وKarmell مجتمع مختلط الاستخدامات على 464 فدان في نيو زايد على محور الضبعة مباشرة، من أكبر مشاريع سوديك في غرب القاهرة. VYE بيقدّم شقق وبنتهاوس وتاون هاوس وتوين هاوس، منها وحدات استلام فوري.",
    accent: "#2f7d74",
    startPrice: "14.1M",
    downPayment: "5%",
    years: "10",
    badge: "استلام فوري",
    stats: [
      { value: "5%", label: "مقدم" },
      { value: "10", label: "سنوات تقسيط" },
      { value: "37.19%", label: "خصم كاش حتى" },
    ],
    phases: [
      {
        name: "VYE — شقق (MF)", delivery: "استلام فوري", plan: PLAN_RTM, discount: "29.1%",
        units: [
          { type: "شقة غرفتين", bua: "120", finishing: SEMI, price: 14.1 },
          { type: "غرفتين + بنتهاوس", bua: "120 – 170", land: "50 – 60", finishing: SEMI, price: 14.7 },
          { type: "غرفتين + بنتهاوس", bua: "108", land: "60", finishing: FF, price: 19.9 },
          { type: "شقة 3 غرف", bua: "158", land: "78", finishing: SEMI, price: 18.7 },
          { type: "3 غرف + بنتهاوس", bua: "142 – 158", land: "30 – 60", finishing: SEMI, price: 19 },
          { type: "شقة 3 غرف", bua: "158", finishing: FF, price: 20.5 },
          { type: "3 غرف + بنتهاوس", bua: "158", land: "40", finishing: FF, price: 26.4 },
        ],
      },
      {
        name: "VYE — ڤيلات (SF)", delivery: "استلام فوري", plan: PLAN_RTM, discount: "29.1%",
        units: [
          { type: "تاون هاوس كورنر", bua: "197", land: "316", finishing: SEMI, price: 31.2 },
          { type: "توين هاوس", bua: "229", land: "325", finishing: SEMI, price: 39.1 },
        ],
      },
      {
        name: "VYE 08", delivery: "سبتمبر 2026", plan: PLAN_10, discount: "37.19%",
        units: [
          { type: "تاون هاوس ميدل", bua: "197 – 228", land: "219", finishing: CS, price: 28.1 },
          { type: "تاون هاوس كورنر", bua: "238", land: "300", finishing: CS, price: 36.3 },
        ],
      },
      {
        name: "VYE 09", delivery: "مارس 2027", plan: PLAN_10, discount: "37.19%",
        units: [
          { type: "تاون هاوس ميدل", bua: "197 – 228", land: "219", finishing: CS, price: 28.1 },
          { type: "تاون هاوس كورنر", bua: "238", land: "300", finishing: CS, price: 35.6 },
          { type: "توين هاوس", bua: "229", land: "306", finishing: CS, price: 41 },
        ],
      },
    ],
    payment: [
      { title: "استلام فوري", detail: "5% مقدم، 3% بعد 6 شهور، 8% بعد 9 شهور، والباقي على 8 سنوات" },
      { title: "VYE 08 / VYE 09", detail: "5% مقدم والباقي على 10 سنوات Back-loaded" },
      { title: "خصم الكاش", detail: "29.1% على الاستلام الفوري و37.19% على المراحل الجديدة" },
    ],
    highlights: [
      "جزء من مجتمع VYE & Karmell على 464 فدان",
      "على محور الضبعة مباشرة في نيو زايد",
      "كلوب هاوس على 13 فدان",
      "3.7 كم مسارات دراجات وجري",
    ],
    amenities: ["كلوب هاوس 13 فدان", "مدرسة دولية", "سوبر ماركت وصيدلية", "مسارات جري ودراجات 3.7 كم", "مسجد", "تجاري و F&B وطبي", "إدارة مرافق EDARA", "خدمات أحياء"],
    nearby: [
      { place: "مطار سفنكس الدولي", time: "3 دقائق" },
      { place: "SODIC West (بيڤرلي هيلز)", time: "5 دقائق" },
      { place: "هايبر وان", time: "15 دقيقة" },
      { place: "محور 26 يوليو", time: "15 دقيقة" },
    ],
    faq: [
      { q: "أسعار VYE سوديك تبدأ من كام؟", a: "الشقق تبدأ من 14,100,000 جنيه، والتاون هاوس من 28,100,000 جنيه، والتوين هاوس من 39,100,000 جنيه." },
      { q: "فيه وحدات استلام فوري في VYE؟", a: "أيوه، شقق وتاون هاوس وتوين هاوس استلام فوري بمقدم 5% وتقسيط على 8 سنوات." },
      { q: "إيه خصم الكاش في VYE؟", a: "29.1% على وحدات الاستلام الفوري و37.19% على مرحلتي VYE 08 وVYE 09." },
    ],
    keywords: ["VYE سوديك", "ڤاي نيو زايد", "كمبوند VYE", "أسعار VYE سوديك"],
  },
  {
    slug: "karmell",
    name: "Karmell",
    nameAr: "كارميل",
    region: "west",
    location: "نيو زايد — غرب القاهرة",
    tagline: "شقق وڤيلات بمقدم 5% وتقسيط 10 سنين",
    intro:
      "Karmell تاني مجتمع لسوديك داخل VYE & Karmell في نيو زايد، بطابع كاليفورني ومساحات خضراء. بيضم شقق من غرفة لـ3 غرف، وGarden House وSky House دوبلكس، وڤيلات استلام فوري وقريبة الاستلام.",
    accent: "#b0643f",
    startPrice: "8.8M",
    downPayment: "5%",
    years: "10",
    badge: "تبدأ من 8.8 مليون",
    stats: [
      { value: "5%", label: "مقدم" },
      { value: "10", label: "سنوات تقسيط" },
      { value: "8.8M", label: "تبدأ من (ج.م)" },
    ],
    phases: [
      {
        name: "Karmell — استلام فوري", delivery: "استلام فوري", plan: PLAN_RTM, discount: "29.1%",
        units: [
          { type: "شقة 3 غرف", bua: "149", land: "112", finishing: FF, price: 20.9 },
          { type: "Villa 02", bua: "287", land: "370", finishing: SEMI, price: 54.2 },
        ],
      },
      {
        name: "Karmell 04", delivery: "سبتمبر 2026", plan: PLAN_10, discount: "37.19%",
        units: [
          { type: "Villa 03", bua: "251", land: "400", finishing: CS, price: 48.4 },
          { type: "Villa 02", bua: "287", land: "410", finishing: CS, price: 55.3 },
          { type: "Villa 03", bua: "383", land: "560", finishing: CS, price: 80.2 },
        ],
      },
      {
        name: "Karmell 01 — تسليم 2028", delivery: "مارس 2028", plan: PLAN_10, discount: "37.19%",
        units: [
          { type: "شقة غرفة", bua: "82", land: "80", finishing: CS, price: 8.8 },
          { type: "شقة غرفتين", bua: "122", land: "102", finishing: CS, price: 13 },
          { type: "شقة 3 غرف", bua: "153", land: "87", finishing: CS, price: 15.1 },
          { type: "Garden House دوبلكس", bua: "202", land: "55", finishing: CS, price: 21.6 },
          { type: "Sky House دوبلكس", bua: "179 – 195", finishing: CS, price: 21.6 },
        ],
      },
      {
        name: "Karmell 01 — تسليم 2029", delivery: "مارس 2029", plan: PLAN_10, discount: "37.19%",
        units: [
          { type: "شقة غرفة", bua: "82", land: "80", finishing: FF, price: 14.8 },
          { type: "شقة غرفتين", bua: "122", land: "95", finishing: FF, price: 18.9 },
          { type: "شقة 3 غرف", bua: "159", land: "87", finishing: FF, price: 20.1 },
          { type: "Garden House دوبلكس", bua: "179 – 195", land: "55", finishing: FF, price: 23.2 },
          { type: "Sky House دوبلكس", bua: "179 – 200", finishing: FF, price: 24.4 },
        ],
      },
    ],
    payment: [
      { title: "مقدم 5%", detail: "والباقي على 10 سنوات Back-loaded لمراحل Karmell 01 و04" },
      { title: "استلام فوري", detail: "5% مقدم، 3% بعد 6 شهور، 8% بعد 9 شهور، والباقي على 8 سنوات" },
      { title: "خصم كاش 37.19%", detail: "على المراحل الجديدة، و29.1% على الاستلام الفوري" },
    ],
    highlights: [
      "شقق تبدأ من 8.8 مليون بمقدم 5%",
      "Garden House وSky House دوبلكس",
      "ڤيلات استلام فوري وقريبة الاستلام",
      "ملاصق لـ VYE ويشارك خدماته",
    ],
    amenities: ["كلوب هاوس 13 فدان", "مدرسة دولية", "سوبر ماركت وصيدلية", "مسارات جري ودراجات 3.7 كم", "مسجد", "تجاري و F&B وطبي", "إدارة مرافق EDARA", "خدمات أحياء"],
    nearby: [
      { place: "مطار سفنكس الدولي", time: "3 دقائق" },
      { place: "SODIC West (بيڤرلي هيلز)", time: "5 دقائق" },
      { place: "هايبر وان", time: "15 دقيقة" },
      { place: "محور 26 يوليو", time: "15 دقيقة" },
    ],
    faq: [
      { q: "أسعار Karmell سوديك تبدأ من كام؟", a: "الشقق تبدأ من 8,800,000 جنيه (غرفة Core & Shell)، والڤيلات من 48,400,000 جنيه." },
      { q: "إيه نظام السداد في Karmell؟", a: "5% مقدم والباقي على 10 سنوات Back-loaded، وخصم كاش 37.19%." },
      { q: "إيه الفرق بين Garden House وSky House؟", a: "الاتنين دوبلكس — Garden House دور أرضي بجنينة، وSky House دور علوي." },
    ],
    keywords: ["كارميل سوديك", "Karmell SODIC", "أسعار كارميل نيو زايد", "شقق كارميل"],
  },
  {
    slug: "the-estates",
    name: "The Estates",
    nameAr: "ذا إستيتس",
    region: "west",
    location: "نيو زايد — على طريق مصر–إسكندرية الصحراوي",
    tagline: "ڤيلات استلام فوري و The Estates Residences بجوار Nobu",
    intro:
      "The Estates من سوديك مجتمع ڤيلات على 150 فدان بـ446 وحدة فقط و10.5% بناء، دقايق من SODIC West. وجنبه The Estates Residences على 115 فدان — شقق وتاون هاوس وتوين هاوس وڤيلات، مع أول فندق ومطعم وريزيدنسز Nobu في مصر.",
    accent: "#6b7a4a",
    startPrice: "22.2M",
    downPayment: "5%",
    years: "8",
    badge: "Nobu Residences",
    stats: [
      { value: "5%", label: "مقدم" },
      { value: "8", label: "سنوات تقسيط" },
      { value: "10.5%", label: "نسبة البناء" },
    ],
    phases: [
      {
        name: "The Estates Residences — شقق", delivery: "يونيو 2028 / يونيو 2029", plan: PLAN_ER,
        units: [
          { type: "شقة غرفتين (III)", bua: "117 – 159", finishing: FF, price: 22.197 },
          { type: "شقة غرفتين (II)", bua: "115 – 157", finishing: FF, price: 23.587 },
          { type: "شقة 3 غرف (III)", bua: "148 – 210", finishing: FF, price: 26.31 },
          { type: "شقة 3 غرف (II)", bua: "148 – 193", finishing: FF, price: 29.127 },
        ],
      },
      {
        name: "The Estates Residences I", delivery: "أكتوبر 2026", plan: PLAN_ER,
        units: [
          { type: "تاون هاوس", bua: "263", land: "260", finishing: CS, price: 38.56 },
          { type: "تاون هاوس", bua: "263", land: "261", finishing: CS, price: 38.575 },
          { type: "توين هاوس", bua: "283", land: "415", finishing: CS, price: 49.269 },
        ],
      },
      {
        name: "The Estates Residences III — ڤيلات", delivery: "يونيو 2028", plan: PLAN_ER,
        units: [
          { type: "V03", bua: "245", land: "406 – 531", finishing: FF, price: 60.75 },
          { type: "V02", bua: "282", land: "404 – 518", finishing: FF, price: 67.525 },
          { type: "V01", bua: "338", land: "450 – 769", finishing: FF, price: 81.93 },
        ],
      },
      {
        name: "The Estates — ڤيلات استلام فوري", delivery: "استلام فوري", plan: PLAN_RTM,
        units: [
          { type: "Small Villa", bua: "308", land: "486", finishing: CS, price: 58.4 },
          { type: "Medium Villa", bua: "353", land: "565", finishing: CS, price: 72.7 },
          { type: "Large Villa", bua: "444", land: "780", finishing: CS, price: 97.7 },
          { type: "Family Villa", bua: "631", land: "1036", finishing: CS, price: 208 },
        ],
      },
    ],
    payment: [
      { title: "The Estates Residences", detail: "5% مقدم وأول قسط بعد 6 شهور، والباقي على 8 سنوات" },
      { title: "ڤيلات استلام فوري", detail: "5% مقدم، 3% بعد 6 شهور، 8% بعد 9 شهور، والباقي على 8 سنوات" },
      { title: "شقق كاملة التشطيب", detail: "تبدأ من 22,197,000 جنيه بتسليم 2028 – 2029" },
    ],
    highlights: [
      "أول فندق ومطعم وريزيدنسز Nobu في مصر",
      "The Estates: 446 ڤيلا فقط على 150 فدان",
      "Residences: مباني G+2 بـ10 – 15 عائلة لكل مبنى",
      "ڤيلات استلام فوري بمقدم 5%",
    ],
    amenities: ["Nobu Hotel & Restaurant", "سبا BVL", "حضانة", "منطقة تجارية", "مكاتب", "مسارات خضراء", "حمامات سباحة", "أمن 24 ساعة"],
    nearby: [
      { place: "مطار سفنكس الدولي", time: "3 دقائق" },
      { place: "SODIC West", time: "دقائق" },
      { place: "طريق مصر–إسكندرية الصحراوي", time: "مباشرة" },
    ],
    faq: [
      { q: "أسعار The Estates Residences تبدأ من كام؟", a: "الشقق الكاملة التشطيب تبدأ من 22,197,000 جنيه، والتاون هاوس من 38,560,000 جنيه." },
      { q: "فيه ڤيلات استلام فوري في The Estates؟", a: "أيوه، ڤيلات Core & Shell تبدأ من 58,400,000 جنيه بمقدم 5% وتقسيط 8 سنوات." },
      { q: "إيه علاقة Nobu بالمشروع؟", a: "The Estates Residences بيضم أول فندق ومطعم وريزيدنسز Nobu في مصر (7% من المشروع)." },
    ],
    keywords: ["ذا إستيتس سوديك", "The Estates SODIC", "The Estates Residences", "نوبو نيو زايد"],
  },
  {
    slug: "sodic-east",
    name: "SODIC East",
    nameAr: "سوديك إيست",
    region: "east",
    location: "هليوبوليس الجديدة — شرق القاهرة",
    tagline: "655 فدان بماستر بلان Sasaki — شقق Oak من 13.7 مليون",
    intro:
      "SODIC East مدينة متكاملة على 655 فدان في هليوبوليس الجديدة بين طريق السويس والإسماعيلية، بماستر بلان من Sasaki الأمريكية. أكتر من 1,250 وحدة اتسلّمت والمشروع مسكون، والطرح الحالي بيضم شقق Oak وFamily Houses وڤيلات Hazel، وتاون هاوس وڤيلات استلام فوري.",
    accent: "#9a7b4f",
    startPrice: "13.7M",
    downPayment: "5%",
    years: "10",
    badge: "مسكون ومُسلّم",
    stats: [
      { value: "655", label: "فدان" },
      { value: "5%", label: "مقدم" },
      { value: "10", label: "سنوات تقسيط" },
    ],
    phases: [
      {
        name: "Oak — شقق", delivery: "ديسمبر 2026 / سبتمبر 2027", plan: "5% مقدم وأول قسط بعد 6 شهور — 8 سنوات لتسليم 2026، و10 سنوات Back-loaded لتسليم 2027",
        units: [
          { type: "غرفتين (تسليم 2027)", bua: "125 – 141", finishing: FF, price: 13.74 },
          { type: "غرفتين (تسليم 2026)", bua: "125 – 141", finishing: FF, price: 14.316 },
          { type: "3 غرف (تسليم 2027)", bua: "153 – 232", finishing: FF, price: 15.336 },
          { type: "3 غرف (تسليم 2026)", bua: "153 – 232", finishing: FF, price: 16.544 },
        ],
      },
      {
        name: "Hazel", delivery: "سنتين ونص", plan: "5% مقدم — والباقي على 10 سنوات",
        units: [
          { type: "Family House", bua: "223", finishing: FF, price: 30.9 },
          { type: "Family House أرضي", bua: "183", finishing: FF, price: 32.4 },
          { type: "تاون هاوس ميدل", bua: "219", land: "220", finishing: FF, price: 32.9 },
          { type: "تاون هاوس كورنر", bua: "221", land: "403", finishing: FF, price: 39.2 },
          { type: "ڤيلا V3", bua: "237", land: "415", finishing: FF, price: 44.6 },
          { type: "ڤيلا V2", bua: "326", land: "497", finishing: FF, price: 58.1 },
          { type: "ڤيلا V1", bua: "392", land: "556", finishing: FF, price: 68.3 },
        ],
      },
      {
        name: "Orchid & IVY — استلام فوري", delivery: "استلام فوري", plan: PLAN_RTM,
        units: [
          { type: "تاون هاوس (Orchid)", bua: "234", land: "225", finishing: CS, price: 30.3 },
          { type: "تاون هاوس (IVY)", bua: "234", land: "200", finishing: CS, price: 39.8 },
          { type: "ڤيلا (IVY)", bua: "251", land: "377", finishing: CS, price: 42.7 },
          { type: "ڤيلا LVb (Orchid)", bua: "395", land: "640", finishing: CS, price: 69.6 },
        ],
      },
    ],
    payment: [
      { title: "Hazel — 10 سنوات", detail: "5% مقدم والباقي على 10 سنوات، كامل التشطيب" },
      { title: "Oak — شقق", detail: "5% مقدم، أول قسط بعد 6 شهور، حتى 10 سنوات Back-loaded" },
      { title: "استلام فوري", detail: "Orchid وIVY: 5% مقدم، 3% بعد 6 شهور، 8% بعد 9 شهور، 8 سنوات" },
    ],
    highlights: [
      "ماستر بلان Sasaki الأمريكية — 70% فيلات",
      "نادي رياضي S-Sporting Club على 41 فدان",
      "Green Spine بطول 2 كم و Raven Garden على 14 فدان",
      "أكتر من 1,250 وحدة مُسلّمة ومجتمع مسكون",
    ],
    amenities: ["S-Sporting Club 41 فدان", "مدرسة دولية", "Raven Garden 14 فدان", "Green Spine 2 كم", "مسار دراجات 4.1 كم", "تجاري و F&B 31 فدان", "منشأة طبية", "Transportation Hub"],
    nearby: [
      { place: "محطة LRT", time: "10 دقائق" },
      { place: "القاهرة الجديدة", time: "30 دقيقة" },
      { place: "مطار القاهرة الدولي", time: "35 دقيقة" },
      { place: "العاصمة الإدارية", time: "35 دقيقة" },
    ],
    faq: [
      { q: "أسعار سوديك إيست تبدأ من كام؟", a: "شقق Oak كاملة التشطيب تبدأ من 13,740,000 جنيه، وFamily House من 30,900,000، والڤيلات من 42,700,000 جنيه." },
      { q: "إيه نظام السداد في سوديك إيست؟", a: "5% مقدم والباقي حتى 10 سنوات حسب المرحلة." },
      { q: "فيه استلام فوري في سوديك إيست؟", a: "أيوه، تاون هاوس وڤيلات في Orchid وIVY استلام فوري بمقدم 5% وتقسيط 8 سنوات." },
    ],
    keywords: ["سوديك إيست", "SODIC East", "سوديك إيست هليوبوليس الجديدة", "أسعار سوديك إيست"],
  },
  {
    slug: "east-vale",
    name: "East Vale",
    nameAr: "إيست ڤيل",
    region: "east",
    location: "مدينة المستقبل (مدى) — شرق القاهرة",
    tagline: "أحدث مشاريع سوديك على 500 فدان — كامل التشطيب بالتكييفات",
    intro:
      "East Vale أحدث وأكبر مشاريع سوديك في شرق القاهرة، على 500 فدان داخل مدينة مدى بالمستقبل سيتي، 5 دقائق من الحي الحكومي بالعاصمة الإدارية. كل الوحدات كاملة التشطيب بالتكييفات، بمقدم 5% وتقسيط حتى 9 سنين.",
    accent: "#4d7a6a",
    startPrice: "9.7M",
    downPayment: "5%",
    years: "9",
    badge: "أحدث إطلاق",
    priceNote: "* أسعار East Vale حسب آخر الأسعار المعروضة في السوق (نوفمبر 2026)، وقابلة للتغيير حسب المرحلة والموقع.",
    stats: [
      { value: "500", label: "فدان" },
      { value: "5%", label: "مقدم" },
      { value: "9", label: "سنوات تقسيط" },
    ],
    phases: [
      {
        name: "East Vale — شقق", delivery: "2029 – 2030", plan: "5% مقدم — والباقي حتى 9 سنوات أقساط متساوية",
        units: [
          { type: "شقة غرفة", bua: "70 – 80", finishing: FF_AC, price: 9.736 },
          { type: "شقة غرفتين", bua: "122 – 128", finishing: FF_AC, price: 14.331 },
          { type: "شقة 3 غرف + ناني", bua: "165 – 175", finishing: FF_AC, price: 17.9 },
          { type: "شقة 3 غرف + ناني بجاردن", bua: "184 – 185", finishing: FF_AC, price: 26 },
          { type: "بنتهاوس", bua: "174", finishing: FF_AC, price: 26.369 },
        ],
      },
      {
        name: "East Vale — ڤيلات", delivery: "2029 – 2030", plan: "5% مقدم — والباقي حتى 9 سنوات أقساط متساوية",
        units: [
          { type: "تاون هاوس", bua: "176 – 180", finishing: FF_AC, price: 34.081 },
          { type: "توين هاوس", bua: "217 – 218", finishing: FF_AC, price: 39.318 },
          { type: "ڤيلا مستقلة", bua: "220 – 250", land: "452", finishing: FF_AC, price: 54.37 },
          { type: "ڤيلا مستقلة كبيرة", bua: "311", land: "560", finishing: FF_AC, price: 65 },
        ],
      },
    ],
    payment: [
      { title: "مقدم 5%", detail: "والباقي على أقساط متساوية حتى 9 سنوات بدون فوايد" },
      { title: "كامل التشطيب بالتكييفات", detail: "كل الوحدات متسلّمة متشطبة بتصميم PBD Architects" },
      { title: "حجز EOI", detail: "250,000 للشقق — 500,000 للڤيلات" },
    ],
    highlights: [
      "ماستر بلان EDSA العالمية — 13% بناء بس",
      "85% ڤيلات و15% شقق — 4,500 وحدة",
      "Wellness Boulevard بطول 1.3 كم وعرض 80 متر",
      "نادي Club S على 15 فدان + Wellness Club",
    ],
    amenities: ["Wellness Boulevard 1.3 كم", "Wellness Club", "Club S 15 فدان", "Garden Trails", "Retail Village", "Business District", "مسطحات مائية 20,000 م²", "أمن 24 ساعة"],
    nearby: [
      { place: "الحي الحكومي — العاصمة الإدارية", time: "5 دقائق" },
      { place: "Villette سوديك", time: "15 دقيقة" },
      { place: "الجامعة الأمريكية", time: "20 دقيقة" },
      { place: "مطار القاهرة الدولي", time: "30 دقيقة" },
    ],
    faq: [
      { q: "أسعار East Vale سوديك تبدأ من كام؟", a: "الشقق تبدأ من حوالي 9,736,000 جنيه، والتاون هاوس من حوالي 34,081,000، والڤيلات المستقلة من حوالي 54,370,000 جنيه." },
      { q: "إيه نظام السداد في East Vale؟", a: "5% مقدم والباقي على أقساط متساوية حتى 9 سنوات." },
      { q: "East Vale فين؟", a: "في مدينة مدى بالمستقبل سيتي — شرق القاهرة، 5 دقائق من الحي الحكومي بالعاصمة الإدارية." },
      { q: "الوحدات متشطبة؟", a: "أيوه، كل وحدات East Vale كاملة التشطيب بالتكييفات." },
    ],
    keywords: ["ايست فيل سوديك", "East Vale SODIC", "سوديك المستقبل سيتي", "أسعار ايست فيل"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
