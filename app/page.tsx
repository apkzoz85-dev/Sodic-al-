import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import T from "@/components/T";

const west = PROJECTS.filter((p) => p.region === "west");
const east = PROJECTS.filter((p) => p.region === "east");

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-bg text-paper" style={{ ["--img" as string]: "url(/images/hero.jpg)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">SODIC · Since 1996</p>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.25] mb-5">
              مشاريع سوديك<br />في غرب وشرق القاهرة
            </h1>
            <p className="text-lg text-sand max-w-xl leading-8 mb-8">
              <span className="latin">VYE</span> و<span className="latin">Karmell</span> و<span className="latin">The Estates</span> في نيو زايد،
              و<span className="latin">SODIC East</span> في هليوبوليس الجديدة، و<span className="latin">East Vale</span> في المستقبل سيتي —
              أسعار 2026 وخطط سداد حتى 10 سنوات.
            </p>
            <div className="flex flex-wrap gap-3">
              {PROJECTS.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="latin text-sm border border-white/25 hover:border-gold-2 hover:text-gold-2 px-4 py-2 rounded-full transition">
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
              <div><p className="num text-3xl font-bold text-gold-2">5%</p><p className="text-xs text-sand-2">مقدم</p></div>
              <div><p className="num text-3xl font-bold text-gold-2">10</p><p className="text-xs text-sand-2">سنوات تقسيط</p></div>
              <div><p className="num text-3xl font-bold text-gold-2">5</p><p className="text-xs text-sand-2">مشاريع</p></div>
            </div>
          </div>
          <div id="lead" className="bg-ink-2/90 border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
            <p className="eyebrow mb-2">Price List 2026</p>
            <h2 className="text-2xl font-bold mb-1">احصل على الأسعار</h2>
            <p className="text-sm text-sand-2 mb-6">اختار المشروع وهنبعتلك البرايس ليست على واتساب.</p>
            <LeadForm dark compact />
          </div>
        </div>
      </section>

      {/* WEST */}
      <section id="west" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">West Cairo · New Zayed</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">مشاريع غرب القاهرة</h2>
            <p className="text-ink/60 max-w-2xl mb-10">ثلاث مجتمعات متجاورة في نيو زايد على طريق مصر–إسكندرية الصحراوي.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {west.map((p, i) => <Reveal key={p.slug} delay={i * 60}><ProjectCard p={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-5xl" />

      {/* EAST */}
      <section id="east" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">East Cairo · New Heliopolis · Mostakbal City</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">مشاريع شرق القاهرة</h2>
            <p className="text-ink/60 max-w-2xl mb-10">سوديك إيست في هليوبوليس الجديدة، وإيست ڤيل — أحدث مشاريع سوديك — في المستقبل سيتي.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {east.map((p, i) => <Reveal key={p.slug} delay={i * 60}><ProjectCard p={p} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-ink text-paper py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="eyebrow mb-3">Compare</p>
            <h2 className="text-3xl font-bold mb-10">مقارنة سريعة بين المشاريع</h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-sand-2 border-b border-white/15">
                  <th className="text-right py-3 font-medium">المشروع</th>
                  <th className="text-right py-3 font-medium">الموقع</th>
                  <th className="text-right py-3 font-medium">تبدأ من</th>
                  <th className="text-right py-3 font-medium">المقدم</th>
                  <th className="text-right py-3 font-medium">التقسيط</th>
                  <th className="py-3" />
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((p) => (
                  <tr key={p.slug} className="border-b border-white/5">
                    <td className="py-4 latin font-semibold text-base">{p.name}</td>
                    <td className="py-4 text-sand">{p.location.split("—")[0]}</td>
                    <td className="py-4"><span className="num">EGP {p.startPrice}</span></td>
                    <td className="py-4"><T>{p.downPayment}</T></td>
                    <td className="py-4"><span className="num">{p.years}</span> سنوات</td>
                    <td className="py-4 text-left"><Link href={`/${p.slug}`} className="text-gold-2 hover:underline">التفاصيل ←</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sand-2 mt-4">* أسعار استرشادية وقابلة للتغيير حسب المرحلة والوحدة.</p>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            ["Since 1996", "خبرة أكتر من 30 سنة", "سوديك من أكبر المطورين في مصر بمشاريع في غرب وشرق القاهرة والساحل."],
            ["Delivered", "تسليمات فعلية", "مجتمعات مسكونة ومراحل اتسلّمت قبل موعدها."],
            ["Flexible", "خطط سداد مرنة", "مقدم 5% وتقسيط حتى 10 سنوات، وخصم كاش يوصل لـ 37.19%."],
          ].map(([e, t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="bg-paper rounded-2xl p-7 h-full border-s-4 border-gold">
                <p className="eyebrow mb-2">{e}</p>
                <h3 className="text-xl font-bold mb-2">{t}</h3>
                <p className="text-ink/60 leading-7">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">محتار تختار أنهي مشروع؟</h2>
          <p className="text-ink/60 mb-8">سيب بياناتك ومستشار من {SITE.brand} هيقارنلك المشاريع حسب ميزانيتك.</p>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
