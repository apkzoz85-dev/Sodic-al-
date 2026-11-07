"use client";
import { useMemo, useState } from "react";
import type { CatKey, LProject } from "@/lib/content";
import { fmt } from "@/lib/projects";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { useLang } from "./useLang";
import T from "./T";

const ORDER: CatKey[] = ["apt", "duplex", "family", "townhouse", "twin", "villa"];
const years = (plan: string) => {
  const m = plan.match(/(\d+)\s*(سنوات|years)/g);
  return m ? Math.max(...m.map((x) => parseInt(x))) : null;
};

export default function UnitCards({ p }: { p: LProject }) {
  const { lang, t } = useLang();
  const units = useMemo(() => p.phases.flatMap((ph) => ph.units.map((u) => ({ ...u, phase: ph }))), [p]);
  const cats = ORDER.filter((c) => units.some((u) => u.cat === c));
  const [active, setActive] = useState<CatKey | "all">("all");
  const [ready, setReady] = useState(false);
  const hasReady = units.some((u) => u.phase.ready);
  const list = units
    .filter((u) => (active === "all" || u.cat === active) && (!ready || u.phase.ready))
    .sort((a, b) => (a.price ?? 1e9) - (b.price ?? 1e9));

  const chip = (on: boolean) =>
    `shrink-0 px-4 py-2 rounded-full text-sm border transition whitespace-nowrap ${on ? "bg-gold-2 text-ink border-gold-2 font-semibold" : "border-white/20 hover:border-gold-2"}`;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 sm:mx-0 sm:px-0 sm:flex-wrap [scrollbar-width:none]">
          {(["all", ...cats] as const).map((c) => (
            <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>
              {c === "all" ? t.all : t.cats[c]}{" "}
              <span className="num text-xs opacity-70">({c === "all" ? units.length : units.filter((u) => u.cat === c).length})</span>
            </button>
          ))}
        </div>
        {hasReady && (
          <button onClick={() => setReady(!ready)} className={`${chip(ready)} sm:ms-auto`}>
            {ready ? "✓ " : ""}{t.readyOnly}
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((u, i) => {
          const down = u.price && !p.indicative ? fmt(u.price * 0.05) : null;
          const y = years(u.phase.plan);
          const isFlat = u.cat === "apt" || u.cat === "duplex";
          return (
            <article key={i} className="bg-ink-2 rounded-2xl overflow-hidden flex flex-col border-t-4" style={{ borderColor: p.accent }}>
              <div
                className="relative h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/${p.slug}/unit-${u.cat}.jpg), url(/images/${p.slug}/card.jpg)` }}
                role="img"
                aria-label={`${p.name} — ${u.type}`}
              >
                <div className="absolute inset-x-0 top-0 p-3 flex justify-between gap-2">
                  <span className="text-[11px] font-semibold bg-ink/80 backdrop-blur text-paper px-2.5 py-1 rounded-full"><T>{u.phase.name}</T></span>
                  {u.phase.discount && (
                    <span className="text-[11px] font-bold bg-gold-2 text-ink px-2.5 py-1 rounded-full whitespace-nowrap">
                      {t.cash} <span className="num">{u.phase.discount}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-4"><T>{u.type}</T></h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mb-5">
                  <div><dt className="text-sand-2 text-xs">{t.area}</dt><dd className="font-semibold"><T>{u.bua}</T> {t.sqm}</dd></div>
                  <div><dt className="text-sand-2 text-xs">{isFlat ? t.gardenRoof : t.land}</dt><dd className="font-semibold">{u.land ? <><T>{u.land}</T> {t.sqm}</> : "—"}</dd></div>
                  <div><dt className="text-sand-2 text-xs">{t.finishing}</dt><dd className="font-semibold"><T>{u.finishing}</T></dd></div>
                  <div><dt className="text-sand-2 text-xs">{t.delivery}</dt><dd className="font-semibold"><T>{u.phase.delivery}</T></dd></div>
                </dl>
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <p className="text-xs text-sand-2">{t.priceFrom}</p>
                  <p className="text-2xl font-bold mb-1">
                    {u.price ? <><span className="num">{fmt(u.price)}</span> <span className="text-sm text-sand-2 font-normal">{t.egp}</span></> : t.onRequest}
                  </p>
                  <p className="text-sm text-sand mb-5">
                    {down ? <>{t.down} <span className="num font-semibold text-gold-2">{down}</span> · </> : null}
                    {y ? t.installUpTo(y) : ""}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={waLink(`${p.name} — ${u.phase.name} — ${u.type}`, lang)} target="_blank" rel="noopener" onClick={() => track("whatsapp")}
                      className="text-center bg-[#25D366] text-white font-semibold text-sm py-2.5 rounded-lg">{t.whatsapp}</a>
                    <a href="#lead" className="text-center bg-gold text-ink font-semibold text-sm py-2.5 rounded-lg hover:bg-gold-2">{t.book}</a>
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
