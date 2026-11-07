import Link from "next/link";
import type { Project } from "@/lib/projects";
import T from "./T";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/${p.slug}`}
      style={{ ["--accent" as string]: p.accent, ["--img" as string]: `url(/images/${p.slug}/card.jpg)` }}
      className="card-bg group relative flex flex-col justify-end min-h-[420px] rounded-2xl overflow-hidden text-paper p-6 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      {p.badge && (
        <span className="absolute top-5 right-5 text-xs font-semibold bg-paper/90 text-ink px-3 py-1 rounded-full"><T>{p.badge}</T></span>
      )}
      <p className="text-xs text-sand mb-2">{p.location}</p>
      <h3 className="latin text-4xl font-bold tracking-tight mb-1">{p.name}</h3>
      <p className="text-sm text-sand/90 mb-5"><T>{p.tagline}</T></p>
      <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4 mb-5">
        <div><p className="num text-xl font-bold">{p.startPrice}</p><p className="text-[11px] text-sand-2">تبدأ من</p></div>
        <div><p className="num text-xl font-bold">{p.downPayment}</p><p className="text-[11px] text-sand-2">مقدم</p></div>
        <div><p className="num text-xl font-bold">{p.years}</p><p className="text-[11px] text-sand-2">سنوات</p></div>
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-2 group-hover:gap-3 transition-all">
        تفاصيل المشروع والأسعار <span aria-hidden>←</span>
      </span>
    </Link>
  );
}
