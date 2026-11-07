import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { getProjects, getDetails, getDeveloper, type LProject } from "@/lib/content";
import { href, UI, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import LeadForm from "../LeadForm";
import Reveal from "../Reveal";
import ProjectCard from "../ProjectCard";
import UnitCards from "../UnitCards";
import Gallery from "../Gallery";
import T from "../T";

function Head({ eyebrow, title, light = false }: { eyebrow: string; title: React.ReactNode; light?: boolean }) {
  return (
    <Reveal>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className={`text-[1.7rem] lg:text-4xl font-bold mb-8 lg:mb-10 leading-tight ${light ? "text-paper" : ""}`}>{title}</h2>
    </Reveal>
  );
}

export default function ProjectPage({ p, lang }: { p: LProject; lang: Lang }) {
  const t = UI[lang];
  const d = getDetails(p.slug, lang);
  const dev = getDeveloper(lang);
  const gdir = path.join(process.cwd(), "public", "images", p.slug);
  const gcount = fs.existsSync(gdir) ? fs.readdirSync(gdir).filter((f) => /^g\d+\.jpg$/.test(f)).length : 0;
  const others = getProjects(lang).filter((o) => o.slug !== p.slug);
  const N = <span className="latin">{p.name}</span>;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={{ ["--accent" as string]: p.accent }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="hero-bg text-paper" style={{ ["--img" as string]: `url(/images/${p.slug}/hero.jpg)` }}>
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 lg:py-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <nav className="text-xs text-sand-2 mb-6">
              <Link href={href(lang)} className="hover:text-gold-2">{t.crumb}</Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="latin">{p.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {p.badge && <span className="text-xs font-semibold bg-paper text-ink px-3 py-1 rounded-full"><T>{p.badge}</T></span>}
              <span className="eyebrow !text-gold-2">SODIC · {p.region === "west" ? "West Cairo" : "East Cairo"}</span>
            </div>
            <h1 className="mb-5">
              <span className="latin block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">{p.name}</span>
              <span className="block text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-sand mt-4 leading-snug">
                {lang === "ar" ? <>{p.nameAr} سوديك — </> : null}<T>{p.tagline}</T>
              </span>
            </h1>
            <p className="text-sm text-sand-2 mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
              <T>{p.location}</T>
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {p.stats.map((s) => (
                <div key={s.label} className="border-s-2 ps-3" style={{ borderColor: p.accent }}>
                  <p className="num text-2xl sm:text-3xl font-bold">{s.value}</p>
                  <p className="text-xs text-sand-2 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="lead" className="bg-ink-2/90 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-7 scroll-mt-24">
            <p className="eyebrow mb-2 !text-gold-2">{p.name} Price List</p>
            <h2 className="text-2xl font-bold mb-1">{lang === "ar" ? <>أسعار {N} 2026</> : <>{N} prices 2026</>}</h2>
            <p className="text-sm text-sand-2 mb-5">{t.priceListSub}</p>
            <LeadForm project={p.name} dark compact />
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      {d && (
        <section className="bg-ink-2 text-paper">
          <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-7">
            {d.facts.map((f) => (
              <div key={f.label} className="border-s border-white/15 ps-4">
                <p className="num text-2xl lg:text-3xl font-bold text-gold-2">{f.value}</p>
                <p className="text-xs text-sand-2 mt-1.5 leading-5"><T>{f.label}</T></p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <Reveal>
            <p className="eyebrow mb-3">About {p.name}</p>
            <h2 className="text-[1.7rem] lg:text-4xl font-bold mb-5 leading-tight">{lang === "ar" ? <>عن مشروع {N}</> : <>About {N}</>}</h2>
            <p className="text-lg text-ink/75 leading-8 mb-8"><T>{d?.lead ?? p.intro}</T></p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {(d?.points ?? []).map((pt, i) => (
                <li key={pt.title} className="bg-white rounded-xl p-5 border border-sand">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="num text-xs font-bold w-7 h-7 rounded-full grid place-items-center text-paper shrink-0" style={{ background: p.accent }}>{i + 1}</span>
                    <h3 className="font-bold"><T>{pt.title}</T></h3>
                  </div>
                  <p className="text-sm text-ink/70 leading-7"><T>{pt.text}</T></p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={60} className="lg:sticky lg:top-24">
            <img
              src={`/images/${p.slug}/about.jpg`}
              alt={`${p.name} SODIC`}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl border-s-4"
              style={{ borderColor: p.accent }}
            />
            <ul className="mt-6 grid gap-2.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 items-start text-sm">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={p.accent} strokeWidth="2.2" aria-hidden><path d="M4 10.5l4 4 8-9" /></svg>
                  <span><T>{h}</T></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      {gcount > 0 && (
        <section className="py-16 lg:py-20 bg-sand/40">
          <div className="mx-auto max-w-7xl px-4">
            <Head eyebrow="Gallery" title={lang === "ar" ? <>صور {N}</> : <>{N} gallery</>} />
            <Gallery slug={p.slug} count={gcount} name={p.name} />
          </div>
        </section>
      )}

      {/* UNITS */}
      <section className="bg-ink text-paper py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Head eyebrow="Units & Prices" light title={lang === "ar" ? <>الوحدات والأسعار في {N}</> : <>{N} units & prices</>} />
          <UnitCards p={p} />
          <p className="text-xs text-sand-2 mt-6">{p.priceNote ?? t.factSheetNote}</p>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="py-16 lg:py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4">
          <Head eyebrow="Payment Plan" title={t.paymentTitle} />
          <div className="grid md:grid-cols-3 gap-5">
            {p.payment.map((x, i) => (
              <Reveal key={x.title} delay={i * 60}>
                <div className="bg-paper rounded-2xl p-6 h-full border-t-4" style={{ borderColor: p.accent }}>
                  <p className="text-xl font-bold mb-2" style={{ color: p.accent }}><T>{x.title}</T></p>
                  <p className="text-ink/70 leading-7"><T>{x.detail}</T></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES + LOCATION */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <Head eyebrow="Amenities" title={t.amenitiesTitle} />
            <div className="grid grid-cols-2 gap-3">
              {p.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2.5 border border-sand-2 rounded-xl px-4 py-3 text-sm min-h-14">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
                  <span><T>{a}</T></span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Head eyebrow="Location" title={t.locationTitle} />
            <p className="text-ink/60 -mt-4 mb-6"><T>{p.location}</T></p>
            <ul className="divide-y divide-sand-2 border-y border-sand-2">
              {p.nearby.map((n) => (
                <li key={n.place} className="flex justify-between items-center gap-4 py-4">
                  <span><T>{n.place}</T></span>
                  <span className="font-semibold whitespace-nowrap" style={{ color: p.accent }}><T>{n.time}</T></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PHASES */}
      {d?.zones && (
        <section className="py-16 lg:py-20 bg-sand/40">
          <div className="mx-auto max-w-7xl px-4">
            <Head eyebrow="Phases" title={lang === "ar" ? <>مراحل {N} المتاحة</> : <>Available phases in {N}</>} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {d.zones.map((z, i) => (
                <Reveal key={z.name} delay={i * 50}>
                  <div className="h-full rounded-2xl p-6 bg-paper">
                    <p className="num text-sm font-bold mb-3" style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="text-lg font-bold mb-2 leading-snug"><T>{z.name}</T></h3>
                    <p className="text-sm text-ink/65 leading-7"><T>{z.detail}</T></p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEVELOPER */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <Reveal>
            <p className="eyebrow mb-3">The Developer</p>
            <h2 className="text-[1.7rem] lg:text-4xl font-bold mb-5">{t.devTitle}</h2>
            <p className="text-ink/70 leading-8"><T>{dev.text}</T></p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-2 gap-4">
              {dev.facts.map((f) => (
                <div key={f.label} className="bg-sand/50 rounded-2xl p-5 border-s-4" style={{ borderColor: p.accent }}>
                  <p className="num text-2xl font-bold">{f.value}</p>
                  <p className="text-xs text-ink/60 mt-1"><T>{f.label}</T></p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-4">
          <Head eyebrow="FAQ" light title={lang === "ar" ? <>أسئلة شائعة عن {N}</> : <>{N} FAQ</>} />
          <div className="grid gap-3">
            {p.faq.map((f) => (
              <details key={f.q} className="group bg-ink-2 rounded-xl px-5 py-4">
                <summary className="cursor-pointer font-semibold list-none flex justify-between items-start gap-4">
                  <span><T>{f.q}</T></span>
                  <span className="text-gold-2 text-xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-sand mt-3 leading-7"><T>{f.a}</T></p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-[1.7rem] lg:text-3xl font-bold mb-3">{t.bookTitle} {N}</h2>
          <p className="text-ink/60 mb-8">{t.bookSub(SITE.brand)}</p>
          <div className="text-start"><LeadForm project={p.name} /></div>
        </div>
      </section>

      {/* OTHERS */}
      <section className="py-16 lg:py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4">
          <Head eyebrow="More from SODIC" title={t.othersTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => <ProjectCard key={o.slug} p={o} lang={lang} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
