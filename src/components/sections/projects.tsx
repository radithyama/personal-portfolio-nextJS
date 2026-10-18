import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-zinc-200 bg-zinc-50/70 dark:border-zinc-900 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Explore my projects that showcase my skills in software development and cybersecurity."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
              <Link href={`/projects/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-zinc-800 dark:bg-black">
                <div className="relative aspect-[2/1] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                  <Image src={p.image} alt={`${p.title} screenshot`} fill placeholder="blur"
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-2">
                      {p.featured && (
                        <span className="bg-gradient-brand rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">Featured</span>
                      )}
                      {p.category}
                    </span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className={`flex items-center gap-1 text-xl font-semibold ${p.accent}`}>
                    {p.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.summary}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{t}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
