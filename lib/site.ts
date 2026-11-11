// ====== إعدادات الموقع — عدّل هنا فقط ======
export const SITE = {
  name: "SODIC Projects",
  brand: "Grandeur Spaces",
  brandAr: "جراندير سبيسيز",
  domain: "https://sodic-properties.net", // TODO: الدومين النهائي
  phone: "01119436202",
  whatsapp: "201119436202",
  email: "leads@sodic-properties.net",
  web3formsKey: "09fb44ce-8c73-4438-bf9f-9bf890f15f6d", // TODO: مفتاح Web3Forms
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
