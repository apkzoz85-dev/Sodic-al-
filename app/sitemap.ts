import type { MetadataRoute } from "next";
import { SLUGS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...SLUGS.map((s) => `/${s}`), "/about", "/privacy", "/disclaimer"];
  return paths.flatMap((p) => [
    { url: `${SITE.domain}${p || "/"}`, priority: p === "" ? 1 : 0.8, alternates: { languages: { en: `${SITE.domain}/en${p}` } } },
    { url: `${SITE.domain}/en${p}`, priority: p === "" ? 0.9 : 0.7, alternates: { languages: { ar: `${SITE.domain}${p || "/"}` } } },
  ]);
}
