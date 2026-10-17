import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [project.image.src] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const next = projects[(index + 1) % projects.length];
  return <ProjectDetail project={projects[index]} next={{ slug: next.slug, title: next.title, summary: next.summary }} />;
}
