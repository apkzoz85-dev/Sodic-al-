import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand-2 pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <p className="latin font-bold tracking-[.25em] text-paper text-lg mb-3">SODIC</p>
          <p className="leading-7">
            هذا الموقع مُدار بواسطة <strong className="text-paper">{SITE.brand}</strong> — وكيل مبيعات معتمد لمشاريع سوديك،
            وليس الموقع الرسمي للمطوّر.
          </p>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">المشاريع</p>
          <ul className="grid grid-cols-2 gap-2">
            {PROJECTS.map((p) => (
              <li key={p.slug}><Link href={`/${p.slug}`} className="latin hover:text-gold-2">{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">روابط</p>
          <ul className="grid gap-2">
            <li><Link href="/about" className="hover:text-gold-2">من نحن</Link></li>
            <li><Link href="/privacy" className="hover:text-gold-2">سياسة الخصوصية</Link></li>
            <li><Link href="/disclaimer" className="hover:text-gold-2">إخلاء المسؤولية</Link></li>
            <li><a href={`mailto:${SITE.email}`} className="latin hover:text-gold-2">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs">
          <p>جميع الأسعار استرشادية وقابلة للتغيير دون إشعار. الصور للتوضيح فقط.</p>
          <p className="latin">
            © {new Date().getFullYear()} {SITE.brand} ·{" "}
            <a href={SITE.agencyUrl} target="_blank" rel="nofollow noopener" className="hover:text-gold-2">
              Designed &amp; Managed by {SITE.agencyName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
