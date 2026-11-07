"use client";
import Link from "next/link";
import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { SITE, telLink } from "@/lib/site";
import { track } from "@/lib/track";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur text-paper border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="latin font-bold tracking-[.25em] text-lg">SODIC</span>
          <span className="text-xs text-sand-2">مشاريع</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="latin hover:text-gold-2 transition">
              {p.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={telLink} onClick={() => track("call")} className="hidden sm:inline-flex items-center gap-2 bg-gold text-ink px-4 py-2 text-sm font-semibold rounded-full hover:bg-gold-2 transition">
            <span className="num">{SITE.phone}</span>
          </a>
          <button aria-label="القائمة" onClick={() => setOpen(!open)} className="lg:hidden p-2">
            <span className="block w-6 h-0.5 bg-paper mb-1.5" />
            <span className="block w-6 h-0.5 bg-paper mb-1.5" />
            <span className="block w-4 h-0.5 bg-paper" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-ink px-4 py-3 grid gap-1">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} onClick={() => setOpen(false)} className="flex justify-between py-2 border-b border-white/5">
              <span className="latin">{p.name}</span>
              <span className="text-xs text-sand-2">{p.location.split("—")[0]}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
