"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { fmt } from "@/lib/projects";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import T from "./T";

const category = (type: string) => {
  if (/Garden House|Sky House|دوبلكس/.test(type)) return "دوبلكس";
  if (/Family House/.test(type)) return "Family House";
  if (/توين/.test(type)) return "توين هاوس";
  if (/تاون/.test(type)) return "تاون هاوس";
  if (/ڤيلا|Villa|^V0/.test(type)) return "ڤيلات";
  return "شقق";
};
const IMG_KEY: Record<string, string> = { "شقق": "apt", "دوبلكس": "duplex", "Family House": "family", "تاون هاوس": "townhouse", "توين هاوس": "twin", "ڤيلات": "villa" };
const ORDER = ["شقق", "دوبلكس", "Family House", "تاون هاوس", "توين هاوس", "ڤيلات"];
const shortPlan = (plan: string) => {
  const m = plan.match(/(\d+) سنوات/g);
  const yrs = m ? Math.max(...m.map((x) => parseInt(x))) : null;
  return yrs ? `تقسيط حتى ${yrs} سنوات` : "تقسيط";
};

export default function UnitCards({ p }: { p: Project }) {
  const units = useMemo(
    () => p.phases.flatMap((ph) => ph.units.map((u) => ({ ...u, phase: ph, cat: category(u.type) }))),
    [p]
  );
  const cats = ORDER.filter((c) => units.some((u) => u.cat === c));
  const [active, setActive] = useState("الكل");
  const [ready, setReady] = useState(false);
  const list = units
    .filter((u) => (active === "الكل" || u.cat === active) && (!ready || u.phase.delivery === "استلام فوري"))
    .sort((a, b) => (a.price ?? 1e9) - (b.price ?? 1e9));
  const hasReady = units.some((u) => u.phase.delivery === "استلام فوري");

  const chip = (on: boolean) =>
    `px-4 py-2 rounded-full text-sm border transition ${on ? "bg-gold-2 text-ink border-gold-2 font-semibold" : "border-white/20 hover:border-gold-2"}`;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {["الكل", ...cats].map((c) => (
          <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>
            <T>{c}</T> <span className="num text-xs opacity-70">({c === "الكل" ? units.length : units.filter((u) => u.cat === c).length})</span>
          </button>
        ))}
        {hasReady && (
          <button onClick={() => setReady(!ready)} className={`${chip(ready)} ms-auto`}>
            {ready ? "✓ " : ""}استلام فوري فقط
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((u, i) => {
          const down = u.price && !p.indicative ? fmt(u.price * 0.05) : null;
          return (
            <article key={i} className="bg-ink-2 rounded-[0_24px_24px_0] border-s-4 overflow-hidden flex flex-col" style={{ borderColor: p.accent }}>
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/${p.slug}/unit-${IMG_KEY[u.cat]}.jpg), url(/images/${p.slug}/card.jpg)` }}
                role="img"
                aria-label={`${p.name} — ${u.type}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
              </div>
              <div className="p-6 pt-4 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-xs text-sand-2 bg-white/5 px-2.5 py-1 rounded-full"><T>{u.phase.name}</T></span>
                {u.phase.discount && (
                  <span className="text-[11px] font-bold bg-gold-2 text-ink px-2.5 py-1 rounded-full whitespace-nowrap">
                    خصم كاش <span className="num">{u.phase.discount}</span>
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4"><T>{u.type}</T></h3>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mb-5">
                <div><dt className="text-sand-2 text-xs">المساحة</dt><dd className="font-semibold"><T>{u.bua}</T> م²</dd></div>
                <div><dt className="text-sand-2 text-xs">{u.cat === "شقق" || u.cat === "دوبلكس" ? "جاردن / روف" : "مساحة الأرض"}</dt><dd className="font-semibold">{u.land ? <><T>{u.land}</T> م²</> : "—"}</dd></div>
                <div><dt className="text-sand-2 text-xs">التشطيب</dt><dd className="font-semibold"><T>{u.finishing}</T></dd></div>
                <div><dt className="text-sand-2 text-xs">التسليم</dt><dd className="font-semibold"><T>{u.phase.delivery}</T></dd></div>
              </dl>

              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-xs text-sand-2">السعر يبدأ من</p>
                <p className="text-2xl font-bold mb-1">
                  {u.price ? <><span className="num">{fmt(u.price)}</span> <span className="text-sm text-sand-2 font-normal">ج.م</span></> : "عند الطلب"}
                </p>
                <p className="text-sm text-sand mb-5">
                  {down ? <>مقدم <span className="num font-semibold text-gold-2">{down}</span> · </> : null}
                  {shortPlan(u.phase.plan)}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a href={waLink(`${p.name} — ${u.phase.name} — ${u.type}`)} target="_blank" rel="noopener" onClick={() => track("whatsapp")}
                    className="text-center bg-[#25D366] text-white font-semibold text-sm py-2.5 rounded-lg">واتساب</a>
                  <a href="#lead" className="text-center bg-gold text-ink font-semibold text-sm py-2.5 rounded-lg hover:bg-gold-2">احجز معاينة</a>
                </div>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
