// English content. Numbers/prices come from lib/projects.ts (single source).
import type { Details } from "./details";

export const DICT_EN: Record<string, string> = {
  // phases
  "VYE — شقق (MF)": "VYE — Apartments (MF)",
  "VYE — ڤيلات (SF)": "VYE — Villas (SF)",
  "Karmell — استلام فوري": "Karmell — Ready to move",
  "Karmell 01 — تسليم 2028": "Karmell 01 — Delivery 2028",
  "Karmell 01 — تسليم 2029": "Karmell 01 — Delivery 2029",
  "The Estates Residences — شقق": "The Estates Residences — Apartments",
  "The Estates Residences III — ڤيلات": "The Estates Residences III — Villas",
  "The Estates — ڤيلات استلام فوري": "The Estates — Ready-to-move villas",
  "Oak — شقق": "Oak — Apartments",
  "Orchid & IVY — استلام فوري": "Orchid & IVY — Ready to move",
  "East Vale — شقق": "East Vale — Apartments",
  "East Vale — ڤيلات": "East Vale — Villas",
  // delivery
  "استلام فوري": "Ready to move",
  "سبتمبر 2026": "Sep 2026",
  "أكتوبر 2026": "Oct 2026",
  "مارس 2027": "Mar 2027",
  "مارس 2028": "Mar 2028",
  "مارس 2029": "Mar 2029",
  "يونيو 2028": "Jun 2028",
  "يونيو 2028 / يونيو 2029": "Jun 2028 / Jun 2029",
  "ديسمبر 2026 / سبتمبر 2027": "Dec 2026 / Sep 2027",
  "سنتين ونص": "2.5 years",
  // plans
  "5% مقدم — 3% بعد 6 شهور — 8% بعد 9 شهور — والباقي على 8 سنوات أقساط متساوية": "5% down — 3% after 6 months — 8% after 9 months — balance over 8 years in equal installments",
  "5% مقدم — والباقي على 10 سنوات (Back-loaded)": "5% down — balance over 10 years (back-loaded)",
  "5% مقدم — أول قسط بعد 6 شهور — على 8 سنوات": "5% down — first installment after 6 months — over 8 years",
  "5% مقدم وأول قسط بعد 6 شهور — 8 سنوات لتسليم 2026، و10 سنوات Back-loaded لتسليم 2027": "5% down, first installment after 6 months — 8 years for 2026 delivery, 10 years back-loaded for 2027 delivery",
  "5% مقدم — والباقي على 10 سنوات": "5% down — balance over 10 years",
  "5% مقدم — والباقي حتى 9 سنوات أقساط متساوية": "5% down — balance over up to 9 years in equal installments",
  // finishing
  "كامل التشطيب": "Fully finished",
  "كامل التشطيب بالتكييفات": "Fully finished with ACs",
  "نصف تشطيب": "Semi-finished",
  // unit types
  "شقة غرفة": "1-bedroom apartment",
  "شقة غرفتين": "2-bedroom apartment",
  "شقة 3 غرف": "3-bedroom apartment",
  "شقة غرفتين (II)": "2-bedroom apartment (II)",
  "شقة غرفتين (III)": "2-bedroom apartment (III)",
  "شقة 3 غرف (II)": "3-bedroom apartment (II)",
  "شقة 3 غرف (III)": "3-bedroom apartment (III)",
  "شقة 3 غرف + ناني": "3 bedrooms + nanny",
  "شقة 3 غرف + ناني بجاردن": "3 bedrooms + nanny with garden",
  "غرفتين + بنتهاوس": "2 bedrooms + penthouse",
  "3 غرف + بنتهاوس": "3 bedrooms + penthouse",
  "غرفتين (تسليم 2026)": "2 bedrooms (2026 delivery)",
  "غرفتين (تسليم 2027)": "2 bedrooms (2027 delivery)",
  "3 غرف (تسليم 2026)": "3 bedrooms (2026 delivery)",
  "3 غرف (تسليم 2027)": "3 bedrooms (2027 delivery)",
  "بنتهاوس": "Penthouse",
  "Garden House دوبلكس": "Garden House duplex",
  "Sky House دوبلكس": "Sky House duplex",
  "Family House أرضي": "Family House (ground)",
  "تاون هاوس": "Townhouse",
  "تاون هاوس ميدل": "Townhouse (middle)",
  "تاون هاوس كورنر": "Townhouse (corner)",
  "تاون هاوس (IVY)": "Townhouse (IVY)",
  "تاون هاوس (Orchid)": "Townhouse (Orchid)",
  "توين هاوس": "Twin house",
  "ڤيلا مستقلة": "Standalone villa",
  "ڤيلا مستقلة كبيرة": "Large standalone villa",
  "ڤيلا V1": "Villa V1",
  "ڤيلا V2": "Villa V2",
  "ڤيلا V3": "Villa V3",
  "ڤيلا (IVY)": "Villa (IVY)",
  "ڤيلا LVb (Orchid)": "Villa LVb (Orchid)",
};

export type ProjectEN = {
  nameAr?: string;
  location: string;
  tagline: string;
  intro: string;
  badge?: string;
  downPayment?: string;
  stats: string[]; // labels, same order
  payment: { title: string; detail: string }[];
  highlights: string[];
  amenities: string[];
  nearby: { place: string; time: string }[];
  faq: { q: string; a: string }[];
  keywords: string[];
  priceNote?: string;
};

const VK_AMEN = ["13-feddan clubhouse", "International school", "Supermarket & pharmacy", "3.7 km bike & jogging trail", "Mosque", "Retail, F&B & medical", "EDARA facility management", "Neighbourhood services"];
const VK_NEAR = [
  { place: "Sphinx International Airport", time: "3 min" },
  { place: "SODIC West (Beverly Hills)", time: "5 min" },
  { place: "Hyper One", time: "15 min" },
  { place: "26th of July Corridor", time: "15 min" },
];

export const PROJECTS_EN: Record<string, ProjectEN> = {
  vye: {
    location: "New Zayed — West Cairo",
    tagline: "Ready-to-move apartments and townhouses in New Zayed",
    intro: "VYE is the first phase of SODIC's VYE & Karmell community in New Zayed — apartments, penthouses, townhouses and twin houses, with ready-to-move units.",
    badge: "Ready to move",
    stats: ["Down payment", "Years to pay", "Cash discount up to"],
    payment: [
      { title: "Ready to move", detail: "5% down, 3% after 6 months, 8% after 9 months, balance over 8 years" },
      { title: "VYE 08 / VYE 09", detail: "5% down, balance over 10 years (back-loaded)" },
      { title: "Cash discount", detail: "29.1% on ready-to-move units and 37.19% on new phases" },
    ],
    highlights: ["Part of the 464-feddan VYE & Karmell community", "Directly on the Dabaa Corridor", "13-feddan clubhouse", "3.7 km of bike and jogging trails"],
    amenities: VK_AMEN,
    nearby: VK_NEAR,
    faq: [
      { q: "What are VYE SODIC prices?", a: "Apartments start from EGP 14,100,000, townhouses from EGP 28,100,000 and twin houses from EGP 39,100,000." },
      { q: "Are there ready-to-move units in VYE?", a: "Yes — apartments, townhouses and twin houses, with 5% down and 8 years to pay." },
      { q: "What is the cash discount in VYE?", a: "29.1% on ready-to-move units and 37.19% on VYE 08 and VYE 09." },
    ],
    keywords: ["VYE SODIC", "VYE New Zayed", "VYE prices", "SODIC New Zayed"],
  },
  karmell: {
    location: "New Zayed — West Cairo",
    tagline: "Apartments and villas — 5% down over 10 years",
    intro: "Karmell is SODIC's second community within VYE & Karmell in New Zayed, with a calm Californian character and green spaces between buildings.",
    badge: "From EGP 8.8M",
    stats: ["Down payment", "Years to pay", "From (EGP)"],
    payment: [
      { title: "5% down", detail: "Balance over 10 years (back-loaded) for Karmell 01 and 04" },
      { title: "Ready to move", detail: "5% down, 3% after 6 months, 8% after 9 months, balance over 8 years" },
      { title: "37.19% cash discount", detail: "On new phases, and 29.1% on ready-to-move units" },
    ],
    highlights: ["Apartments from EGP 8.8M with 5% down", "Garden House and Sky House duplexes", "Ready and near-ready villas", "Shares all VYE amenities"],
    amenities: VK_AMEN,
    nearby: VK_NEAR,
    faq: [
      { q: "What are Karmell SODIC prices?", a: "Apartments start from EGP 8,800,000 (1-bedroom, core & shell) and villas from EGP 48,400,000." },
      { q: "What is the Karmell payment plan?", a: "5% down, balance over 10 years (back-loaded), with a 37.19% cash discount." },
      { q: "Garden House vs Sky House?", a: "Both are duplexes — the Garden House is on the ground floor with a private garden, the Sky House is on the top floors." },
    ],
    keywords: ["Karmell SODIC", "Karmell New Zayed", "Karmell prices", "SODIC apartments New Zayed"],
  },
  "the-estates": {
    location: "New Zayed — on the Cairo–Alexandria Desert Road",
    tagline: "Ready villas and The Estates Residences, home to Nobu",
    intro: "One of SODIC's most exclusive communities in New Zayed — ready-to-move villas in The Estates and the new Estates Residences with Egypt's first Nobu.",
    badge: "Nobu Residences",
    stats: ["Down payment", "Years to pay", "Footprint"],
    payment: [
      { title: "The Estates Residences", detail: "5% down, first installment after 6 months, balance over 8 years" },
      { title: "Ready-to-move villas", detail: "5% down, 3% after 6 months, 8% after 9 months, balance over 8 years" },
      { title: "Fully finished apartments", detail: "From EGP 22,197,000 with 2028 – 2029 delivery" },
    ],
    highlights: ["Egypt's first Nobu hotel, restaurant and residences", "The Estates: only 446 villas on 150 feddans", "Residences: G+2 buildings, 10 – 15 families each", "Ready villas with 5% down"],
    amenities: ["Nobu Hotel & Restaurant", "BVL Spa", "Nursery", "Commercial area", "Offices", "Green trails", "Swimming pools", "24/7 security"],
    nearby: [
      { place: "Sphinx International Airport", time: "3 min" },
      { place: "SODIC West", time: "Minutes" },
      { place: "Cairo–Alexandria Desert Road", time: "Direct" },
    ],
    faq: [
      { q: "What are The Estates Residences prices?", a: "Fully finished apartments start from EGP 22,197,000 and townhouses from EGP 38,560,000." },
      { q: "Are there ready villas in The Estates?", a: "Yes — core & shell villas from EGP 58,400,000 with 5% down and 8 years to pay." },
      { q: "How is Nobu part of the project?", a: "The Estates Residences includes Egypt's first Nobu hotel, restaurant and branded residences (7% of the project)." },
    ],
    keywords: ["The Estates SODIC", "The Estates Residences", "Nobu New Zayed", "SODIC villas New Zayed"],
  },
  "sodic-east": {
    location: "New Heliopolis — East Cairo",
    tagline: "655 feddans masterplanned by Sasaki — Oak apartments from EGP 13.7M",
    intro: "A complete 655-feddan city in New Heliopolis, masterplanned by Sasaki (USA). Over 1,250 homes delivered and a thriving community.",
    badge: "Delivered & lived-in",
    stats: ["Feddans", "Down payment", "Years to pay"],
    payment: [
      { title: "Hazel — 10 years", detail: "5% down, balance over 10 years, fully finished" },
      { title: "Oak apartments", detail: "5% down, first installment after 6 months, up to 10 years back-loaded" },
      { title: "Ready to move", detail: "Orchid & IVY: 5% down, 3% after 6 months, 8% after 9 months, 8 years" },
    ],
    highlights: ["Sasaki masterplan — 70% villas", "41-feddan S-Sporting Club", "2 km Green Spine and 14-feddan Raven Garden", "1,250+ homes delivered"],
    amenities: ["41-feddan S-Sporting Club", "International school", "14-feddan Raven Garden", "2 km Green Spine", "4.1 km bike trail", "31-feddan retail & F&B", "Medical facility", "Transportation hub"],
    nearby: [
      { place: "LRT station", time: "10 min" },
      { place: "New Cairo", time: "30 min" },
      { place: "Cairo International Airport", time: "35 min" },
      { place: "New Administrative Capital", time: "35 min" },
    ],
    faq: [
      { q: "What are SODIC East prices?", a: "Oak fully finished apartments start from EGP 13,740,000, Family Houses from EGP 30,900,000 and villas from EGP 42,700,000." },
      { q: "What is the SODIC East payment plan?", a: "5% down with up to 10 years to pay, depending on the phase." },
      { q: "Are there ready units in SODIC East?", a: "Yes — townhouses and villas in Orchid and IVY, with 5% down over 8 years." },
    ],
    keywords: ["SODIC East", "SODIC East New Heliopolis", "SODIC East prices", "Oak SODIC East"],
  },
  "east-vale": {
    location: "Mostakbal City (Mada) — East Cairo",
    tagline: "SODIC's newest 500-feddan launch — fully finished with ACs",
    intro: "East Vale is SODIC's newest and largest East Cairo project: 500 feddans in Mada City, Mostakbal City, with every home fully finished with ACs.",
    badge: "New launch",
    stats: ["Feddans", "Down payment", "Years to pay"],
    payment: [
      { title: "5% down", detail: "Balance in equal, interest-free installments over up to 9 years" },
      { title: "Fully finished with ACs", detail: "Every home delivered finished, designed by PBD Architects" },
      { title: "EOI", detail: "EGP 250,000 for apartments — EGP 500,000 for villas" },
    ],
    highlights: ["EDSA masterplan — only 13% footprint", "85% villas, 15% apartments — 4,500 homes", "1.3 km × 80 m Wellness Boulevard", "15-feddan Club S + Wellness Club"],
    amenities: ["1.3 km Wellness Boulevard", "Wellness Club", "15-feddan Club S", "Garden Trails", "Retail Village", "Business District", "20,000 m² water features", "24/7 security"],
    nearby: [
      { place: "Government District — New Capital", time: "5 min" },
      { place: "SODIC Villette", time: "15 min" },
      { place: "American University in Cairo", time: "20 min" },
      { place: "Cairo International Airport", time: "30 min" },
    ],
    faq: [
      { q: "What are East Vale SODIC prices?", a: "Apartments start from around EGP 9,736,000, townhouses from around EGP 34,081,000 and standalone villas from around EGP 54,370,000." },
      { q: "What is the East Vale payment plan?", a: "5% down, balance in equal installments over up to 9 years." },
      { q: "Where is East Vale?", a: "In Mada City, Mostakbal City — East Cairo, 5 minutes from the Government District in the New Capital." },
      { q: "Are the units finished?", a: "Yes, every East Vale home is fully finished with ACs." },
    ],
    keywords: ["East Vale SODIC", "SODIC Mostakbal City", "East Vale prices", "Eastvale"],
    priceNote: "* East Vale prices reflect the latest market listings (Nov 2026) and may change by phase and location.",
  },
};

const VK_FACTS_EN = ["Feddans (community)", "Feddan clubhouse", "Feddans retail, medical & offices", "Bike & jogging trails", "To Sphinx Airport", "Years to pay"];

export const DETAILS_EN: Record<string, Omit<Details, "facts"> & { facts: string[] }> = {
  vye: {
    facts: VK_FACTS_EN,
    lead: "The first phase of SODIC's VYE & Karmell community in New Zayed — apartments, townhouses and twin houses, including ready-to-move units.",
    points: [
      { title: "Location", text: "Directly on the Dabaa Corridor — 3 min from Sphinx Airport and 5 min from SODIC West." },
      { title: "Community", text: "464 feddans with the VYE Town Center and 33 feddans of retail, medical and offices." },
      { title: "Homes", text: "2- and 3-bedroom apartments and penthouses, townhouses and twin houses." },
      { title: "Payment", text: "Ready units over 8 years; new phases over 10 years with up to 37.19% cash discount." },
    ],
    zones: [
      { name: "VYE — Apartments", detail: "Ready-to-move apartments and penthouses — semi or fully finished" },
      { name: "VYE — Villas", detail: "Ready-to-move corner townhouses and twin houses" },
      { name: "VYE 08", detail: "Middle and corner townhouses — Sep 2026 delivery" },
      { name: "VYE 09", detail: "Townhouses and twin houses — Mar 2027 delivery" },
    ],
  },
  karmell: {
    facts: VK_FACTS_EN,
    lead: "SODIC's second community within VYE & Karmell in New Zayed — a calm, Californian-inspired neighbourhood with greenery between buildings.",
    points: [
      { title: "Homes", text: "Apartments from 1 bedroom (82 m²) to 3 bedrooms, Garden House and Sky House duplexes, and standalone villas." },
      { title: "Amenities", text: "Shares VYE's clubhouse, international school, retail area and trails." },
      { title: "Phases", text: "Karmell 01 core & shell (2028) or finished (2029), plus Karmell 04 villas." },
      { title: "Payment", text: "5% down over 10 years, with a 37.19% cash discount." },
    ],
    zones: [
      { name: "Karmell — Ready to move", detail: "Fully finished 3-bedroom apartments and Villa 02" },
      { name: "Karmell 04", detail: "Villa 02 and Villa 03 — Sep 2026 delivery" },
      { name: "Karmell 01", detail: "Apartments, Garden House and Sky House duplexes — 2028 / 2029 delivery" },
    ],
  },
  "the-estates": {
    facts: ["Feddans — The Estates", "Villas only", "Footprint", "Feddans — Residences", "Homes in Residences", "Hotel, restaurant & residences"],
    lead: "One of SODIC's most exclusive New Zayed communities — ready villas in The Estates, and The Estates Residences with Egypt's first Nobu.",
    points: [
      { title: "The Estates", text: "150 feddans with only 446 villas and a 10.5% footprint — BVL spa, nursery and commercial area." },
      { title: "The Estates Residences", text: "115 feddans: 60% villas, 33% apartments & duplexes, and 7% Nobu branded residences." },
      { title: "Privacy", text: "G+2 buildings with just 10 – 15 families each." },
      { title: "Payment", text: "5% down over 8 years — finished apartments and ready villas." },
    ],
    zones: [
      { name: "Residences II & III — Apartments", detail: "Fully finished 2- and 3-bedroom apartments — 2028 / 2029 delivery" },
      { name: "Residences I — Town & Twin", detail: "Core & shell townhouses and twin houses — Oct 2026 delivery" },
      { name: "Residences III — Villas", detail: "Fully finished villas V01, V02, V03 — 2028 delivery" },
      { name: "The Estates — Ready to move", detail: "Small, Medium, Large and Family villas — core & shell" },
    ],
  },
  "sodic-east": {
    facts: ["Feddans", "Villas (SF)", "Homes delivered", "Feddan sports club", "Feddan Raven Garden", "Launched"],
    lead: "A complete 655-feddan city in New Heliopolis — delivered and lived-in, masterplanned by Sasaki (USA).",
    points: [
      { title: "Location", text: "Between the Suez and Ismailia roads, next to El Shorouk and 35 min from the New Capital." },
      { title: "Club & open space", text: "41-feddan S-Sporting Club, 14-feddan Raven Garden and a 2 km Green Spine." },
      { title: "Services", text: "International school, medical facility, 31 feddans of retail & F&B, and a transport hub." },
      { title: "Now selling", text: "Oak apartments, Hazel family houses and villas, and ready townhouses and villas." },
    ],
    zones: [
      { name: "Oak", detail: "Fully finished 2- and 3-bedroom apartments — 2026 / 2027 delivery" },
      { name: "Hazel", detail: "Family houses, townhouses and villas, fully finished — 2.5-year delivery" },
      { name: "Orchid", detail: "Townhouses and LVb villa — ready to move" },
      { name: "IVY", detail: "Townhouses and villas — ready to move" },
    ],
  },
  "east-vale": {
    facts: ["Feddans", "Footprint", "Homes", "Villas (SF)", "Wellness Boulevard", "Feddan Club S"],
    lead: "SODIC's newest and largest East Cairo project — 500 feddans in Mada City, Mostakbal City, with every home fully finished with ACs.",
    points: [
      { title: "Location", text: "On Mehwar El Amal, 5 min from the Government District and 20 min from AUC." },
      { title: "Masterplan", text: "By EDSA with a 13% footprint — 85% villas, 15% apartments, 4,500 homes." },
      { title: "Amenities", text: "1.3 km Wellness Boulevard, Wellness Club and the 15-feddan Club S." },
      { title: "Buildings", text: "G+4 with only 20 – 21 homes and two elevators each, designed by PBD Architects." },
    ],
    zones: [
      { name: "Apartments", detail: "1 to 3 bedrooms + nanny and penthouses — fully finished with ACs" },
      { name: "Town & twin houses", detail: "180 m² 3-bed townhouses and 217 m² 4-bed twin houses" },
      { name: "Standalone villas", detail: "Small 220 m², Medium 250 m² and Large 310 m²" },
      { name: "Urban Villa", detail: "215 m² — 3 bedrooms + penthouse and a master suite" },
    ],
  },
};

export const DEVELOPER_EN = {
  facts: ["Founded", "Listed on the EGX", "Owned by Aldar / ADQ", "Residents"],
  text: "SODIC is one of Egypt's leading real estate developers, listed on the Egyptian Exchange since 1996 and backed by the Aldar Properties and ADQ consortium, which acquired 85% of the company. Its communities span West Cairo, East Cairo and the North Coast and are home to more than 30,000 residents.",
};
