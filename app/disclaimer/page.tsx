import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "إخلاء المسؤولية", alternates: { canonical: "/disclaimer" } };

export default function Page() {
  return (
    <LegalPage title="إخلاء المسؤولية">
      <p>هذا الموقع مُدار بواسطة {SITE.brand} بصفته وكيل مبيعات معتمد لمشاريع سوديك، وهو ليس الموقع الرسمي لشركة سوديك (SODIC).</p>
      <h2>الأسعار</h2>
      <p>جميع الأسعار وخطط السداد المعروضة استرشادية وقابلة للتغيير في أي وقت حسب المطوّر والمرحلة والوحدة، ولا تُعد عرضاً ملزماً. السعر النهائي يُحدد في عقد الحجز.</p>
      <h2>الصور والمحتوى</h2>
      <p>الصور والمخططات للتوضيح فقط وقد تختلف عن الواقع. أسماء المشاريع والعلامات التجارية ملك أصحابها.</p>
    </LegalPage>
  );
}
