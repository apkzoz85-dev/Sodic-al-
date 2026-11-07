import Link from "next/link";
import { getProjects } from "@/lib/content";
import { href, UI, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import ProjectCard from "../ProjectCard";
import LeadForm from "../LeadForm";
import Reveal from "../Reveal";
import T from "../T";

export default function Home({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const projects = getProjects(lang);
  const west = projects.filter((p) => p.region === "west");
  const east = projects.filter((p) => p.region === "east");

  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-paper" style={{ ["--img" as string]: "url(/images/hero.jpg)" }}>
        <div className="mx-auto max-w-7xl px-4 pt-14 pb-12 lg:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">{t.hEyebrow}</p>
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-5">
              {t.hTitle[0]}<br />{t.hTitle[1]}
            </h1>
            <p className="text-base lg:text-lg text-sand max-w-xl leading-8 mb-7"><T>{t.hSub}</T></p>
            <div className="flex flex-wrap gap-2 mb-9">
              {projects.map((p) => (
                <Link key={p.slug} href={href(lang, `/${p.slug}`)} className="latin text-sm border border-white/25 hover:border-gold-2 hover:text-gold-2 px-4 py-2 rounded-full transition">
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {t.hStats.map(([v, l]) => (
                <div key={l} className="border-s-2 border-gold-2/60 ps-3">
                  <p className="num text-3xl font-bold text-gold-2">{v}</p>
                  <p className="text-xs text-sand-2 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="lead" className="bg-ink-2/90 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-7 scroll-mt-24">
            <p className="eyebrow mb-2">{t.formEyebrow}</p>
            <h2 className="text-2xl font-bold mb-1">{t.formTitle}</h2>
            <p className="text-sm text-sand-2 mb-5">{t.formSub}</p>
            <LeadForm dark compact />
          </div>
        </div>
      </section>

      {/* WEST */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">West Cairo · New Zayed</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">{t.westTitle}</h2>
            <p className="text-ink/60 max-w-2xl mb-10">{t.westSub}</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {west.map((p, i) => <Reveal key={p.slug} delay={i * 60}><ProjectCard p={p} lang={lang} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* EAST */}
      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rule mb-16" />
          <Reveal>
            <p className="eyebrow mb-3">East Cairo · New Heliopolis · Mostakbal City</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">{t.eastTitle}</h2>
            <p className="text-ink/60 max-w-2xl mb-10"><T>{t.eastSub}</T></p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {east.map((p, i) => <Reveal key={p.slug} delay={i * 60}><ProjectCard p={p} lang={lang} tall /></Reveal>)}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-ink text-paper py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">Compare</p>
            <h2 className="text-3xl font-bold mb-8">{t.cmpTitle}</h2>
          </Reveal>
          {/* mobile: stacked rows */}
          <div className="grid gap-3 md:hidden">
            {projects.map((p) => (
              <Link key={p.slug} href={href(lang, `/${p.slug}`)} className="bg-ink-2 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="latin font-bold text-lg">{p.name}</p>
                  <p className="text-xs text-sand-2 truncate">{p.location.split("—")[0]}</p>
                </div>
                <div className="text-end shrink-0">
                  <p className="num font-bold text-gold-2">EGP {p.startPrice}</p>
                  <p className="text-xs text-sand-2"><span className="num">{p.downPayment}</span> · <span className="num">{p.years}</span> {t.years}</p>
                </div>
              </Link>
            ))}
          </div>
          <table className="hidden md:table w-full text-sm">
            <thead>
              <tr className="text-sand-2 border-b border-white/15">
                {t.cmpCols.map((c) => <th key={c} className="text-start py-3 font-medium">{c}</th>)}
                <th className="py-3" />
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.slug} className="border-b border-white/5">
                  <td className="py-4 latin font-semibold text-base">{p.name}</td>
                  <td className="py-4 text-sand"><T>{p.location.split("—")[0]}</T></td>
                  <td className="py-4"><span className="num">EGP {p.startPrice}</span></td>
                  <td className="py-4"><span className="num">{p.downPayment}</span></td>
                  <td className="py-4"><span className="num">{p.years}</span> {t.years}</td>
                  <td className="py-4 text-end"><Link href={href(lang, `/${p.slug}`)} className="text-gold-2 hover:underline">{t.cmpDetails} {t.arrow}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-sand-2 mt-4">{t.cmpNote}</p>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 lg:py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-5">
          {t.why.map(([e, title, d], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="bg-paper rounded-2xl p-7 h-full border-s-4 border-gold">
                <p className="eyebrow mb-2">{e}</p>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-ink/60 leading-7"><T>{d}</T></p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">{t.ctaTitle}</h2>
          <p className="text-ink/60 mb-8">{t.ctaSub(SITE.brand)}</p>
          <div className="text-start"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
