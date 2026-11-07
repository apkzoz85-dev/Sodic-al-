// ====== إعدادات الموقع — عدّل هنا فقط ======
export const SITE = {
  name: "SODIC Projects",
  brand: "Grandeur Spaces",
  brandAr: "جراندير سبيسيز",
  domain: "https://sodic-projects.example.com", // TODO: الدومين النهائي
  phone: "01277707799",
  whatsapp: "201277707799",
  email: "leads@grandeur-spaces.com",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: مفتاح Web3Forms
  agencyName: "One Click",
  agencyUrl: "https://example.com", // TODO: رابط موقع One Click
  // Google Ads — ضع الـ IDs هنا
  gtagId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },
};

import { UI, type Lang } from "./i18n";

export const waLink = (project?: string, lang: Lang = "ar") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(UI[lang].wa(project))}`;

export const telLink = `tel:${SITE.phone}`;
