import { SITE } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

type Kind = "about" | "privacy" | "disclaimer";

const CONTENT: Record<Lang, Record<Kind, { title: string; body: [string | null, string][] }>> = {
  ar: {
    about: {
      title: "من نحن",
      body: [
        [null, `${SITE.brand} شركة تسويق ومبيعات عقارية في القاهرة، ووكيل مبيعات معتمد لعدد من كبار المطوّرين في مصر منهم سوديك.`],
        [null, "بنساعد العملاء يقارنوا بين المشاريع ويختاروا الوحدة وخطة السداد المناسبة، من غير أي رسوم إضافية على العميل."],
        ["تواصل معنا", `الهاتف / واتساب: ${SITE.phone} — البريد: ${SITE.email}`],
      ],
    },
    privacy: {
      title: "سياسة الخصوصية",
      body: [
        [null, `يلتزم ${SITE.brand} بحماية خصوصية زوّار هذا الموقع. توضّح هذه السياسة البيانات التي نجمعها وكيفية استخدامها.`],
        ["البيانات التي نجمعها", "الاسم ورقم الهاتف والمشروع ونوع الوحدة التي تختارها عند ملء نموذج التواصل، بالإضافة إلى بيانات تصفّح عامة عبر ملفات الكوكيز."],
        ["كيف نستخدم البيانات", "للتواصل معك بخصوص الأسعار والوحدات المتاحة وخطط السداد للمشروع الذي طلبته فقط، ولقياس أداء الإعلانات (Google Ads). لا نبيع بياناتك لأي طرف ثالث."],
        ["ملفات الكوكيز", "نستخدم الكوكيز وأدوات قياس من Google لتحسين تجربة الاستخدام وقياس التحويلات. يمكنك تعطيلها من إعدادات المتصفح."],
        ["حقوقك", `يمكنك طلب حذف بياناتك أو تعديلها في أي وقت عبر البريد ${SITE.email} أو الهاتف ${SITE.phone}.`],
      ],
    },
    disclaimer: {
      title: "إخلاء المسؤولية",
      body: [
        [null, `هذا الموقع مُدار بواسطة ${SITE.brand} بصفته وكيل مبيعات معتمد لمشاريع سوديك، وهو ليس الموقع الرسمي لشركة سوديك (SODIC).`],
        ["الأسعار", "جميع الأسعار وخطط السداد المعروضة استرشادية وقابلة للتغيير في أي وقت حسب المطوّر والمرحلة والوحدة، ولا تُعد عرضاً ملزماً. السعر النهائي يُحدد في عقد الحجز."],
        ["الصور والمحتوى", "الصور والمخططات للتوضيح فقط وقد تختلف عن الواقع. أسماء المشاريع والعلامات التجارية ملك أصحابها."],
      ],
    },
  },
  en: {
    about: {
      title: "About us",
      body: [
        [null, `${SITE.brand} is a Cairo-based real estate marketing and sales company, and an authorized sales agent for several of Egypt's leading developers, including SODIC.`],
        [null, "We help buyers compare projects and choose the right unit and payment plan — at no extra cost to the buyer."],
        ["Contact us", `Phone / WhatsApp: ${SITE.phone} — Email: ${SITE.email}`],
      ],
    },
    privacy: {
      title: "Privacy Policy",
      body: [
        [null, `${SITE.brand} is committed to protecting the privacy of visitors to this website. This policy explains what data we collect and how we use it.`],
        ["Data we collect", "Your name, phone number, chosen project and unit type when you submit the contact form, plus general browsing data through cookies."],
        ["How we use it", "Only to contact you about prices, available units and payment plans for the project you asked about, and to measure ad performance (Google Ads). We never sell your data to third parties."],
        ["Cookies", "We use cookies and Google measurement tools to improve your experience and measure conversions. You can disable them in your browser settings."],
        ["Your rights", `You can ask us to delete or correct your data at any time via ${SITE.email} or ${SITE.phone}.`],
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      body: [
        [null, `This website is operated by ${SITE.brand} as an authorized sales agent for SODIC projects. It is not the official website of SODIC.`],
        ["Prices", "All prices and payment plans shown are indicative and may change at any time by developer, phase and unit. They are not a binding offer; the final price is set in the reservation contract."],
        ["Images & content", "Images and plans are for illustration only and may differ from reality. Project names and trademarks belong to their respective owners."],
      ],
    },
  },
};

export const legalTitle = (lang: Lang, kind: Kind) => CONTENT[lang][kind].title;

export default function Legal({ lang, kind }: { lang: Lang; kind: Kind }) {
  const c = CONTENT[lang][kind];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-8">{c.title}</h1>
        <div className="grid gap-5 text-ink/75 leading-8">
          {c.body.map(([h, txt], i) => (
            <div key={i}>
              {h && <h2 className="text-xl font-bold text-ink mb-2">{h}</h2>}
              <p>{txt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
