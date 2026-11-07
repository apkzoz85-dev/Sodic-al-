import { PROJECTS as AR, type Project, type Phase, type Unit } from "./projects";
import { DETAILS, DEVELOPER, type Details } from "./details";
import { DICT_EN, PROJECTS_EN, DETAILS_EN, DEVELOPER_EN } from "./en";
import type { Lang } from "./i18n";

export type CatKey = "apt" | "duplex" | "family" | "townhouse" | "twin" | "villa";
export type LUnit = Unit & { cat: CatKey };
export type LPhase = Omit<Phase, "units"> & { ready: boolean; units: LUnit[] };
export type LProject = Omit<Project, "phases"> & { phases: LPhase[] };

export const catOf = (type: string): CatKey => {
  if (/Garden House|Sky House|دوبلكس/.test(type)) return "duplex";
  if (/Family House/.test(type)) return "family";
  if (/توين/.test(type)) return "twin";
  if (/تاون/.test(type)) return "townhouse";
  if (/ڤيلا|Villa|^V0/.test(type)) return "villa";
  return "apt";
};

const tr = (s: string) => DICT_EN[s] ?? s;

function localize(p: Project, lang: Lang): LProject {
  const phases: LPhase[] = p.phases.map((ph) => ({
    ...ph,
    ready: ph.delivery === "استلام فوري",
    name: lang === "en" ? tr(ph.name) : ph.name,
    delivery: lang === "en" ? tr(ph.delivery) : ph.delivery,
    plan: lang === "en" ? tr(ph.plan) : ph.plan,
    units: ph.units.map((u) => ({
      ...u,
      cat: catOf(u.type),
      type: lang === "en" ? tr(u.type) : u.type,
      finishing: lang === "en" ? tr(u.finishing) : u.finishing,
    })),
  }));
  if (lang === "ar") return { ...p, phases };
  const e = PROJECTS_EN[p.slug];
  return {
    ...p,
    phases,
    nameAr: p.name,
    location: e.location,
    tagline: e.tagline,
    intro: e.intro,
    badge: e.badge,
    downPayment: e.downPayment ?? p.downPayment,
    stats: p.stats.map((s, i) => ({ value: s.value, label: e.stats[i] ?? s.label })),
    payment: e.payment,
    highlights: e.highlights,
    amenities: e.amenities,
    nearby: e.nearby,
    faq: e.faq,
    keywords: e.keywords,
    priceNote: e.priceNote,
  };
}

export const getProjects = (lang: Lang) => AR.map((p) => localize(p, lang));
export const getProject = (slug: string, lang: Lang) => {
  const p = AR.find((x) => x.slug === slug);
  return p ? localize(p, lang) : undefined;
};
export const SLUGS = AR.map((p) => p.slug);

export function getDetails(slug: string, lang: Lang): Details | undefined {
  const d = DETAILS[slug];
  if (!d || lang === "ar") return d;
  const e = DETAILS_EN[slug];
  return { ...e, facts: d.facts.map((f, i) => ({ value: f.value, label: e.facts[i] ?? f.label })) };
}

export function getDeveloper(lang: Lang) {
  if (lang === "ar") return DEVELOPER;
  return { text: DEVELOPER_EN.text, facts: DEVELOPER.facts.map((f, i) => ({ value: f.value, label: DEVELOPER_EN.facts[i] })) };
}
