// Extra project details (SODIC fact sheet + brochures, Nov 2026) — Arabic source. English in lib/en.ts
export type Details = {
  facts: { value: string; label: string }[];
  lead: string;
  points: { title: string; text: string }[];
  zones?: { name: string; detail: string }[];
};

const VK_FACTS = [
  { value: "464", label: "فدان مساحة المجتمع" },
  { value: "13", label: "فدان كلوب هاوس" },
  { value: "33", label: "فدان تجاري وطبي وإداري" },
  { value: "3.7 km", label: "مسارات دراجات وجري" },
  { value: "3 min", label: "من مطار سفنكس" },
  { value: "10", label: "سنوات تقسيط" },
];

export const DETAILS: Record<string, Details> = {
  vye: {
    facts: VK_FACTS,
    lead: "أول مرحلة في مجتمع VYE & Karmell من سوديك في نيو زايد — شقق وتاون هاوس وتوين هاوس، منها وحدات استلام فوري.",
    points: [
      { title: "الموقع", text: "على محور الضبعة مباشرة — 3 دقائق من مطار سفنكس و5 دقائق من SODIC West." },
      { title: "المجتمع", text: "464 فدان مع VYE Town Center ومنطقة تجارية وطبية وإدارية على 33 فدان." },
      { title: "الوحدات", text: "شقق غرفتين و3 غرف وبنتهاوس، وتاون هاوس وتوين هاوس." },
      { title: "السداد", text: "استلام فوري على 8 سنين، والمراحل الجديدة على 10 سنين بخصم كاش حتى 37.19%." },
    ],
    zones: [
      { name: "VYE — شقق", detail: "شقق وبنتهاوس استلام فوري — نصف تشطيب أو كامل التشطيب" },
      { name: "VYE — ڤيلات", detail: "تاون هاوس كورنر وتوين هاوس استلام فوري" },
      { name: "VYE 08", detail: "تاون هاوس ميدل وكورنر — تسليم سبتمبر 2026" },
      { name: "VYE 09", detail: "تاون هاوس وتوين هاوس — تسليم مارس 2027" },
    ],
  },
  karmell: {
    facts: VK_FACTS,
    lead: "تاني مجتمع لسوديك داخل VYE & Karmell في نيو زايد — بطابع كاليفورني هادي ومساحات خضراء بين المباني.",
    points: [
      { title: "الوحدات", text: "شقق من غرفة (82 م²) لـ3 غرف، ودوبلكس Garden House وSky House، وڤيلات مستقلة." },
      { title: "الخدمات", text: "بيشارك VYE الكلوب هاوس والمدرسة الدولية والمنطقة التجارية والمسارات." },
      { title: "المراحل", text: "Karmell 01 بتشطيب Core & Shell (2028) أو متشطب (2029)، وڤيلات Karmell 04." },
      { title: "السداد", text: "5% مقدم وتقسيط 10 سنين، وخصم كاش 37.19%." },
    ],
    zones: [
      { name: "Karmell — استلام فوري", detail: "شقق 3 غرف كاملة التشطيب وڤيلات Villa 02" },
      { name: "Karmell 04", detail: "ڤيلات Villa 02 وVilla 03 — تسليم سبتمبر 2026" },
      { name: "Karmell 01", detail: "شقق ودوبلكس Garden House وSky House — تسليم 2028 / 2029" },
    ],
  },
  "the-estates": {
    facts: [
      { value: "150", label: "فدان The Estates" },
      { value: "446", label: "ڤيلا فقط" },
      { value: "10.5%", label: "نسبة بناء" },
      { value: "115", label: "فدان Residences" },
      { value: "~1,000", label: "وحدة في Residences" },
      { value: "Nobu", label: "فندق ومطعم وريزيدنسز" },
    ],
    lead: "من أرقى مجتمعات سوديك في نيو زايد — ڤيلات The Estates استلام فوري، وامتداد The Estates Residences مع أول Nobu في مصر.",
    points: [
      { title: "The Estates", text: "150 فدان بـ446 ڤيلا فقط ونسبة بناء 10.5% — مع سبا BVL وحضانة ومنطقة تجارية." },
      { title: "The Estates Residences", text: "115 فدان: 60% ڤيلات، 33% شقق ودوبلكس، و7% Branded Residences لـ Nobu." },
      { title: "خصوصية", text: "مباني أرضي + دورين بـ10 – 15 عائلة بس في كل مبنى." },
      { title: "السداد", text: "5% مقدم وتقسيط 8 سنين — شقق كاملة التشطيب وڤيلات استلام فوري." },
    ],
    zones: [
      { name: "Residences II & III — شقق", detail: "شقق غرفتين و3 غرف كاملة التشطيب — تسليم 2028 / 2029" },
      { name: "Residences I — تاون وتوين", detail: "تاون هاوس وتوين هاوس Core & Shell — تسليم أكتوبر 2026" },
      { name: "Residences III — ڤيلات", detail: "ڤيلات V01 وV02 وV03 كاملة التشطيب — تسليم 2028" },
      { name: "The Estates — استلام فوري", detail: "ڤيلات Small وMedium وLarge وFamily بتشطيب Core & Shell" },
    ],
  },
  "sodic-east": {
    facts: [
      { value: "655", label: "فدان" },
      { value: "70%", label: "ڤيلات (SF)" },
      { value: "1,250+", label: "وحدة اتسلّمت" },
      { value: "41", label: "فدان نادي رياضي" },
      { value: "14", label: "فدان Raven Garden" },
      { value: "2017", label: "سنة الإطلاق" },
    ],
    lead: "مدينة متكاملة على 655 فدان في هليوبوليس الجديدة — مسكونة ومُسلّمة، بماستر بلان من Sasaki الأمريكية.",
    points: [
      { title: "الموقع", text: "بين طريق السويس والإسماعيلية، ملاصق للشروق و35 دقيقة من العاصمة الإدارية." },
      { title: "النادي والمساحات", text: "S-Sporting Club على 41 فدان، وRaven Garden على 14 فدان، وGreen Spine بطول 2 كم." },
      { title: "الخدمات", text: "مدرسة دولية، منشأة طبية، تجاري وF&B على 31 فدان، وTransportation Hub." },
      { title: "الطرح الحالي", text: "شقق Oak، وFamily Houses وڤيلات Hazel، وتاون هاوس وڤيلات استلام فوري." },
    ],
    zones: [
      { name: "Oak", detail: "شقق غرفتين و3 غرف كاملة التشطيب — تسليم 2026 / 2027" },
      { name: "Hazel", detail: "Family House وتاون هاوس وڤيلات كاملة التشطيب — تسليم خلال سنتين ونص" },
      { name: "Orchid", detail: "تاون هاوس وڤيلا LVb — استلام فوري" },
      { name: "IVY", detail: "تاون هاوس وڤيلات — استلام فوري" },
    ],
  },
  "east-vale": {
    facts: [
      { value: "500", label: "فدان" },
      { value: "13%", label: "نسبة البناء" },
      { value: "4,500", label: "وحدة" },
      { value: "85%", label: "ڤيلات (SF)" },
      { value: "1.3 km", label: "Wellness Boulevard" },
      { value: "15", label: "فدان Club S" },
    ],
    lead: "أحدث وأكبر مشاريع سوديك في شرق القاهرة — 500 فدان في مدينة مدى بالمستقبل سيتي، وكل الوحدات كاملة التشطيب بالتكييفات.",
    points: [
      { title: "الموقع", text: "على محور الأمل، 5 دقائق من الحي الحكومي و20 دقيقة من الجامعة الأمريكية." },
      { title: "الماستر بلان", text: "تصميم EDSA بنسبة بناء 13% — 85% ڤيلات و15% شقق، و4,500 وحدة." },
      { title: "الخدمات", text: "Wellness Boulevard بطول 1.3 كم، وWellness Club، ونادي Club S على 15 فدان." },
      { title: "العمارات", text: "أرضي + 4 أدوار، 20 – 21 وحدة بس في المبنى وأسانسيرين، بتصميم PBD Architects." },
    ],
    zones: [
      { name: "الشقق", detail: "من غرفة لـ3 غرف + ناني وبنتهاوس — كامل التشطيب بالتكييفات" },
      { name: "التاون والتوين هاوس", detail: "تاون هاوس 180 م² بـ3 غرف، وتوين هاوس 217 م² بـ4 غرف" },
      { name: "الڤيلات المستقلة", detail: "Small 220 م² وMedium 250 م² وLarge 310 م²" },
      { name: "Urban Villa", detail: "215 م² — 3 غرف + بنتهاوس وماستر سويت" },
    ],
  },
};

export const DEVELOPER = {
  facts: [
    { value: "1996", label: "تأسست" },
    { value: "EGX", label: "مدرجة في البورصة المصرية" },
    { value: "85%", label: "ملكية Aldar / ADQ" },
    { value: "30,000+", label: "ساكن في مجتمعاتها" },
  ],
  text: "سوديك من أكبر المطورين العقاريين في مصر، مدرجة في البورصة المصرية من 1996، ومدعومة من تحالف الدار العقارية وADQ الإماراتي اللي استحوذ على 85% من الشركة. مشاريعها في غرب القاهرة وشرق القاهرة والساحل الشمالي، وأكتر من 30,000 ساكن عايشين في مجتمعاتها.",
};
