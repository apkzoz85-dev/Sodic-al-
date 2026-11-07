"use client";
import Link from "next/link";
import { getProjects } from "@/lib/content";
import { href } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { useLang } from "./useLang";

export default function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="bg-ink text-sand-2 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <p className="latin font-bold tracking-[.25em] text-paper text-lg mb-3">SODIC</p>
          <p className="leading-7">{t.footAgent(SITE.brand)}</p>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">{t.footProjects}</p>
          <ul className="grid grid-cols-2 gap-2">
            {getProjects(lang).map((p) => (
              <li key={p.slug}><Link href={href(lang, `/${p.slug}`)} className="latin hover:text-gold-2">{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">{t.footLinks}</p>
          <ul className="grid gap-2">
            <li><Link href={href(lang, "/about")} className="hover:text-gold-2">{t.about}</Link></li>
            <li><Link href={href(lang, "/privacy")} className="hover:text-gold-2">{t.privacy}</Link></li>
            <li><Link href={href(lang, "/disclaimer")} className="hover:text-gold-2">{t.disclaimer}</Link></li>
            <li><a href={`mailto:${SITE.email}`} className="latin hover:text-gold-2">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs">
          <p>{t.footNote}</p>
          <p className="latin">
            © {new Date().getFullYear()} {SITE.brand} ·{" "}
            <a href={SITE.agencyUrl} target="_blank" rel="nofollow noopener" className="hover:text-gold-2">Designed &amp; Managed by {SITE.agencyName}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
