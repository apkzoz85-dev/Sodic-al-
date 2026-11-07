import Link from "next/link";
import type { LProject } from "@/lib/content";
import { href, UI, type Lang } from "@/lib/i18n";
import T from "./T";

export default function ProjectCard({ p, lang, tall = false }: { p: LProject; lang: Lang; tall?: boolean }) {
  const t = UI[lang];
  return (
    <Link
      href={href(lang, `/${p.slug}`)}
      style={{ ["--accent" as string]: p.accent }}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-ink-2 text-paper shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300"
    >
      <div className={`relative overflow-hidden ${tall ? "h-64 lg:h-80" : "h-56"}`}>
        <img
          src={`/images/${p.slug}/card.jpg`}
          alt={`${p.name} SODIC`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-4 start-4 text-xs font-semibold bg-paper text-ink px-3 py-1 rounded-full shadow">
            <T>{p.badge}</T>
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6 border-t-4" style={{ borderColor: p.accent }}>
        <p className="text-xs text-sand-2 mb-1.5"><T>{p.location}</T></p>
        <h3 className="latin text-3xl font-bold tracking-tight mb-2">{p.name}</h3>
        <p className="text-sm text-sand leading-6 mb-5"><T>{p.tagline}</T></p>
        <dl className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 mb-5 mt-auto">
          <div><dt className="text-[11px] text-sand-2 mb-0.5">{t.from}</dt><dd className="num text-lg font-bold">{p.startPrice}</dd></div>
          <div><dt className="text-[11px] text-sand-2 mb-0.5">{t.down}</dt><dd className="num text-lg font-bold">{p.downPayment}</dd></div>
          <div><dt className="text-[11px] text-sand-2 mb-0.5">{t.years}</dt><dd className="num text-lg font-bold">{p.years}</dd></div>
        </dl>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-2 group-hover:gap-3 transition-all">
          {t.details} <span aria-hidden>{t.arrow}</span>
        </span>
      </div>
    </Link>
  );
}
