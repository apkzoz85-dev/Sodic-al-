"use client";
import Link from "next/link";
import { useState } from "react";
import { getProjects } from "@/lib/content";
import { href, stripLang } from "@/lib/i18n";
import { SITE, telLink } from "@/lib/site";
import { track } from "@/lib/track";
import { useLang } from "./useLang";

export default function Header() {
  const { lang, t, path } = useLang();
  const [open, setOpen] = useState(false);
  const projects = getProjects(lang);
  const other = lang === "ar" ? href("en", stripLang(path)) : stripLang(path);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur text-paper border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href={href(lang)} className="flex items-baseline gap-2 shrink-0">
          <span className="latin font-bold tracking-[.25em] text-lg">SODIC</span>
          <span className="text-xs text-sand-2">{t.brandLine}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {projects.map((p) => (
            <Link key={p.slug} href={href(lang, `/${p.slug}`)} className="latin hover:text-gold-2 transition">{p.name}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={other} className="text-xs font-semibold border border-white/25 rounded-full px-3 py-1.5 hover:border-gold-2 hover:text-gold-2 transition">
            {t.otherLang}
          </a>
          <a href={telLink} onClick={() => track("call")} className="hidden sm:inline-flex items-center bg-gold text-ink px-4 py-2 text-sm font-semibold rounded-full hover:bg-gold-2 transition">
            <span className="num">{SITE.phone}</span>
          </a>
          <button aria-label={t.menu} onClick={() => setOpen(!open)} className="lg:hidden p-2 -me-2">
            <span className="block w-6 h-0.5 bg-paper mb-1.5" />
            <span className="block w-6 h-0.5 bg-paper mb-1.5" />
            <span className="block w-4 h-0.5 bg-paper" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-ink px-4 py-2 grid">
          {projects.map((p) => (
            <Link key={p.slug} href={href(lang, `/${p.slug}`)} onClick={() => setOpen(false)} className="flex justify-between items-center gap-4 py-3 border-b border-white/5 last:border-0">
              <span className="latin font-semibold">{p.name}</span>
              <span className="text-xs text-sand-2 text-end">{p.location.split("—")[0]}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
