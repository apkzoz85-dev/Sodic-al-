import type { Metadata } from "next";
import { SITE } from "./site";
import type { Lang } from "./i18n";
import { getProject } from "./content";

const alt = (path: string) => ({
  canonical: path,
  languages: { ar: path.replace(/^\/en/, "") || "/", en: path.startsWith("/en") ? path : `/en${path === "/" ? "" : path}` },
});

export function homeMeta(lang: Lang): Metadata {
  const ar = lang === "ar";
  return {
    metadataBase: new URL(SITE.domain),
    title: ar
      ? "مشاريع سوديك 2026 | VYE · Karmell · The Estates · SODIC East · East Vale"
      : "SODIC Projects 2026 | VYE · Karmell · The Estates · SODIC East · East Vale",
    description: ar
      ? "أسعار وخطط سداد مشاريع سوديك: VYE وKarmell وThe Estates في نيو زايد، وSODIC East في هليوبوليس الجديدة، وEast Vale في المستقبل سيتي. مقدم 5% وتقسيط حتى 10 سنوات."
      : "Prices and payment plans for SODIC projects: VYE, Karmell and The Estates in New Zayed, SODIC East in New Heliopolis and East Vale in Mostakbal City. 5% down, up to 10 years.",
    alternates: alt(ar ? "/" : "/en"),
  };
}

export function projectMeta(slug: string, lang: Lang): Metadata {
  const p = getProject(slug, lang);
  if (!p) return {};
  const ar = lang === "ar";
  const loc = p.location.split("—")[0].trim();
  return {
    metadataBase: new URL(SITE.domain),
    title: ar ? `${p.name} سوديك 2026 | الأسعار وخطط السداد — ${loc}` : `${p.name} SODIC 2026 | Prices & Payment Plans — ${loc}`,
    description: ar
      ? `${p.name} من سوديك في ${p.location}. ${p.tagline}. تبدأ من ${p.startPrice} جنيه، مقدم ${p.downPayment} وتقسيط ${p.years} سنوات.`
      : `${p.name} by SODIC in ${p.location}. ${p.tagline}. From EGP ${p.startPrice}, ${p.downPayment} down, up to ${p.years} years.`,
    keywords: p.keywords,
    alternates: alt(ar ? `/${slug}` : `/en/${slug}`),
  };
}
