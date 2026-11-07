import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "من نحن", alternates: { canonical: "/about" } };

export default function Page() {
  return (
    <LegalPage title="من نحن">
      <p>{SITE.brand} شركة تسويق ومبيعات عقارية في القاهرة، ووكيل مبيعات معتمد لعدد من كبار المطوّرين في مصر منهم سوديك.</p>
      <p>بنساعد العملاء يقارنوا بين المشاريع ويختاروا الوحدة وخطة السداد المناسبة، من غير أي رسوم إضافية على العميل.</p>
      <h2>تواصل معنا</h2>
      <p>الهاتف / واتساب: <span className="num">{SITE.phone}</span><br />البريد: <span className="latin">{SITE.email}</span></p>
    </LegalPage>
  );
}
