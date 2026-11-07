import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import T from "@/components/T";
import UnitCards from "@/components/UnitCards";
import Gallery from "@/components/Gallery";
import fs from "node:fs";
import path from "node:path";
import { DETAILS, DEVELOPER } from "@/lib/details";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} سوديك 2026 | الأسعار وخطط السداد — ${p.location.split("—")[0].trim()}`,
    description: `${p.name} من سوديك في ${p.location}. ${p.tagline}. تبدأ من ${p.startPrice} جنيه، مقدم ${p.downPayment} وتقسيط ${p.years} سنوات.`,
    keywords: p.keywords,
    alternates: { canonical: `/${p.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const d = DETAILS[p.slug];
  const gdir = path.join(process.cwd(), "public", "images", p.slug);
  const gcount = fs.existsSync(gdir) ? fs.readdirSync(gdir).filter((f) => /^g\d+\.jpg$/.test(f)).length : 0;
  const others = PROJECTS.filter((o) => o.slug !== p.slug);
  const accent = { ["--accent" as string]: p.accent } as React.CSSProperties;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div style={accent}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="hero-bg text-paper" style={{ ["--img" as string]: `url(/images/${p.slug}/hero.jpg)` }}>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <nav className="text-xs text-sand-2 mb-6">
              <Link href="/" className="hover:text-gold-2">مشاريع سوديك</Link> <span className="mx-1">/</span> <span className="latin">{p.name}</span>
            </nav>
            {p.badge && <span className="inline-block text-xs font-semibold bg-paper text-ink px-3 py-1 rounded-full mb-4"><T>{p.badge}</T></span>}
            <p className="eyebrow mb-3">SODIC · {p.region === "west" ? "West Cairo" : "East Cairo"}</p>
            <h1 className="mb-4">
              <span className="latin block text-5xl lg:text-7xl font-bold tracking-tight">{p.name}</span>
              <span className="block text-2xl lg:text-3xl font-bold text-sand mt-2">{p.nameAr} سوديك — <T>{p.tagline}</T></span>
            </h1>
            <p className="text-sand-2 mb-8">{p.location}</p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {p.stats.map((s) => (
                <div key={s.label} className="border-s-2 ps-3" style={{ borderColor: p.accent }}>
                  <p className="num text-3xl font-bold">{s.value}</p>
                  <p className="text-xs text-sand-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="lead" className="bg-ink-2/90 border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
            <p className="eyebrow mb-2">{p.name} Price List</p>
            <h2 className="text-2xl font-bold mb-1">أسعار <span className="latin">{p.name}</span> 2026</h2>
            <p className="text-sm text-sand-2 mb-6">البرايس ليست والوحدات المتاحة على واتساب خلال دقائق.</p>
            <LeadForm project={p.name} dark compact />
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      {d && (
        <section className="bg-ink-2 text-paper border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {d.facts.map((f) => (
              <div key={f.label}>
                <p className="num text-2xl lg:text-3xl font-bold" style={{ color: p.accent === "#2a4a6b" ? "#9cc0e6" : "var(--color-gold-2)" }}>{f.value}</p>
                <p className="text-xs text-sand-2 mt-1"><T>{f.label}</T></p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">About {p.name}</p>
            <h2 className="text-3xl font-bold mb-5">عن مشروع <span className="latin">{p.name}</span></h2>
            <div className="grid gap-4 text-ink/75 leading-8 mb-7">
              {(d?.about ?? [p.intro]).map((t, i) => <p key={i}><T>{t}</T></p>)}
            </div>
            <ul className="grid gap-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 items-start">
                  <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: p.accent }} />
                  <span><T>{h}</T></span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={60}>
            <div
              className="card-bg aspect-[4/3] rounded-[4px_36px_36px_4px] border-s-4"
              style={{ borderColor: p.accent, ["--img" as string]: `url(/images/${p.slug}/about.jpg)` }}
              role="img"
              aria-label={`${p.name} SODIC`}
            />
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      {gcount > 0 && (
        <section className="py-20 bg-sand/40">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <p className="eyebrow mb-3">Gallery</p>
              <h2 className="text-3xl font-bold mb-8">صور <span className="latin">{p.name}</span></h2>
            </Reveal>
            <Gallery slug={p.slug} count={gcount} name={p.name} />
          </div>
        </section>
      )}

      {/* UNITS & PRICES */}
      <section className="bg-ink text-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">Units & Prices</p>
            <h2 className="text-3xl font-bold mb-8">الوحدات والأسعار في <span className="latin">{p.name}</span></h2>
          </Reveal>
          <UnitCards p={p} />
          <p className="text-xs text-sand-2 mt-6">{p.priceNote ?? (p.indicative ? "* أسعار استرشادية — تواصل معنا لآخر برايس ليست." : "* الأسعار حسب آخر فاكت شيت من سوديك، وقابلة للتغيير حسب المرحلة والدور والإطلالة.")}</p>
        </div>
      </section>

      {/* PAYMENT */}
      <section className="py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">Payment Plan</p>
            <h2 className="text-3xl font-bold mb-10">خطط السداد</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {p.payment.map((x, i) => (
              <Reveal key={x.title} delay={i * 60}>
                <div className="bg-paper rounded-2xl p-7 h-full">
                  <p className="text-2xl font-bold mb-2" style={{ color: p.accent }}><T>{x.title}</T></p>
                  <p className="text-ink/70 leading-7"><T>{x.detail}</T></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES + LOCATION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="eyebrow mb-3">Amenities</p>
            <h2 className="text-3xl font-bold mb-8">الخدمات والمميزات</h2>
            <div className="grid grid-cols-2 gap-3">
              {p.amenities.map((a) => (
                <div key={a} className="border border-sand-2 rounded-xl px-4 py-3 text-sm"><T>{a}</T></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow mb-3">Location</p>
            <h2 className="text-3xl font-bold mb-3">الموقع</h2>
            <p className="text-ink/60 mb-8">{p.location}</p>
            <ul className="divide-y divide-sand-2 border-y border-sand-2">
              {p.nearby.map((n) => (
                <li key={n.place} className="flex justify-between py-4">
                  <span><T>{n.place}</T></span>
                  <span className="font-semibold" style={{ color: p.accent }}><T>{n.time}</T></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PHASES / ZONES */}
      {d?.zones && (
        <section className="py-20 bg-sand/40">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <p className="eyebrow mb-3">Phases</p>
              <h2 className="text-3xl font-bold mb-10">مراحل <span className="latin">{p.name}</span> المتاحة</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {d.zones.map((z, i) => (
                <Reveal key={z.name} delay={i * 50}>
                  <div className="h-full rounded-2xl p-6 bg-paper">
                    <p className="num text-sm font-bold mb-3" style={{ color: p.accent }}>{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="text-lg font-bold mb-2"><T>{z.name}</T></h3>
                    <p className="text-sm text-ink/65 leading-7"><T>{z.detail}</T></p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEVELOPER */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <Reveal>
            <p className="eyebrow mb-3">The Developer</p>
            <h2 className="text-3xl font-bold mb-5">عن المطوّر — سوديك <span className="latin">SODIC</span></h2>
            <p className="text-ink/70 leading-8"><T>{DEVELOPER.text}</T></p>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-2 gap-4">
              {DEVELOPER.facts.map((f) => (
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
      <section className="py-20 bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-4">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="text-3xl font-bold mb-8">أسئلة شائعة عن <span className="latin">{p.name}</span></h2>
          <div className="grid gap-3">
            {p.faq.map((f) => (
              <details key={f.q} className="group bg-ink-2 rounded-xl px-5 py-4 open:pb-5">
                <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
                  <span><T>{f.q}</T></span><span className="text-gold-2 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-sand mt-3 leading-7"><T>{f.a}</T></p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">احجز وحدتك في <span className="latin">{p.name}</span></h2>
          <p className="text-ink/60 mb-8">مستشار من {SITE.brand} هيتواصل معاك بالوحدات المتاحة وأفضل خطة سداد.</p>
          <LeadForm project={p.name} />
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4">
          <p className="eyebrow mb-3">More from SODIC</p>
          <h2 className="text-3xl font-bold mb-10">مشاريع سوديك الأخرى</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => <ProjectCard key={o.slug} p={o} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
