import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.domain, priority: 1 },
    ...PROJECTS.map((p) => ({ url: `${SITE.domain}/${p.slug}`, priority: 0.9 })),
    { url: `${SITE.domain}/about` },
    { url: `${SITE.domain}/privacy` },
    { url: `${SITE.domain}/disclaimer` },
  ];
}
