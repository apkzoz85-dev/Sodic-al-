import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "سياسة الخصوصية", alternates: { canonical: "/privacy" } };

export default function Page() {
  return (
    <LegalPage title="سياسة الخصوصية">
      <p>يلتزم {SITE.brand} بحماية خصوصية زوّار هذا الموقع. توضّح هذه السياسة البيانات التي نجمعها وكيفية استخدامها.</p>
      <h2>البيانات التي نجمعها</h2>
      <p>الاسم ورقم الهاتف والمشروع ونوع الوحدة التي تختارها عند ملء نموذج التواصل، بالإضافة إلى بيانات تصفّح عامة عبر ملفات الكوكيز.</p>
      <h2>كيف نستخدم البيانات</h2>
      <p>للتواصل معك بخصوص الأسعار والوحدات المتاحة وخطط السداد للمشروع الذي طلبته فقط، ولقياس أداء الإعلانات (Google Ads). لا نبيع بياناتك لأي طرف ثالث.</p>
      <h2>ملفات الكوكيز</h2>
      <p>نستخدم الكوكيز وأدوات قياس من Google لتحسين تجربة الاستخدام وقياس التحويلات. يمكنك تعطيلها من إعدادات المتصفح.</p>
      <h2>حقوقك</h2>
      <p>يمكنك طلب حذف بياناتك أو تعديلها في أي وقت عبر البريد <span className="latin">{SITE.email}</span> أو الهاتف <span className="num">{SITE.phone}</span>.</p>
    </LegalPage>
  );
}
