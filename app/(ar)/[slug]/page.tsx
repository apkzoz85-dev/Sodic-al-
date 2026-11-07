import { notFound } from "next/navigation";
import ProjectPage from "@/components/pages/ProjectPage";
import { getProject, SLUGS } from "@/lib/content";
import { projectMeta } from "@/lib/meta";

export const dynamicParams = false;
export const generateStaticParams = () => SLUGS.map((slug) => ({ slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return projectMeta((await params).slug, "ar");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug, "ar");
  if (!p) notFound();
  return <ProjectPage p={p} lang="ar" />;
}
