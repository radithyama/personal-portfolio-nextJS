import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/reveal";
import type { Project } from "@/data/projects";

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">{title}</h3>
      {children}
    </div>
  );
}

export default function ProjectDetail({
  project: p,
  next,
}: {
  project: Project;
  next: { slug: string; title: string; summary: string };
}) {
  const info = [
    ["Status", p.status],
    ["Type", p.type],
    ["Year", p.year],
    ["Category", p.category],
  ];

  return (
    <article className="relative isolate">
      <div aria-hidden className="bg-grid absolute inset-x-0 top-0 -z-10 h-[32rem] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" />
      <div aria-hidden className="absolute -top-24 left-1/2 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-blue-500/15 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6">
        <Link href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        {/* Header */}
        <Reveal className="mx-auto mb-12 max-w-3xl space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
            {p.category} · {p.year}
          </p>
          <h1 className="text-gradient pb-1 text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">{p.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={p.live.href} target="_blank" rel="noopener noreferrer"
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03]">
              <ExternalLink className="h-4 w-4" />
              {p.live.label}
            </a>
            {p.source ? (
              <a href={p.source} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
                <FaGithub className="h-4 w-4" />
                View Source
              </a>
            ) : (
              <Link href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
                <Mail className="h-4 w-4" />
                Ask me about it
              </Link>
            )}
          </div>
        </Reveal>

        {/* Screenshot in a browser frame */}
        <Reveal delay={0.1} className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-2xl shadow-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-1.5 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 truncate text-xs text-zinc-500">{p.live.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
            </div>
            <Image src={p.image} alt={`${p.title} screenshot`} priority placeholder="blur"
              sizes="(min-width: 1024px) 976px, 100vw" className="h-auto w-full" />
          </div>
        </Reveal>

        {/* Body */}
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <Reveal className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">About the Project</h2>
              {p.about.map((para) => (
                <p key={para.slice(0, 32)} className="leading-relaxed text-zinc-600 dark:text-zinc-400">{para}</p>
              ))}
            </Reveal>

            <Reveal className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                    <span className="bg-gradient-brand mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {p.highlight && (
              <Reveal className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6 sm:p-8 dark:border-zinc-800">
                <h2 className="mb-3 text-xl font-semibold">{p.highlight.title}</h2>
                {p.highlight.body && <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">{p.highlight.body}</p>}
                {p.highlight.points && (
                  <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
                    {p.highlight.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal className="space-y-5">
              <SideCard title="Tech Stack">
                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{t}</li>
                  ))}
                </ul>
              </SideCard>
              <SideCard title="Project Info">
                <dl className="space-y-2.5 text-sm">
                  {info.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-zinc-500">{k}</dt>
                      <dd className="flex items-center gap-1.5 text-right font-medium">
                        {k === "Status" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </SideCard>
              {p.extras?.map((x) => (
                <SideCard key={x.title} title={x.title}>
                  {x.body && <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{x.body}</p>}
                  {x.points && (
                    <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      {x.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  )}
                </SideCard>
              ))}
            </Reveal>
          </aside>
        </div>

        {/* Next project */}
        <Reveal className="mt-20">
          <Link href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-zinc-200 p-6 transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 sm:p-8 dark:border-zinc-800 dark:hover:border-cyan-500">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Next project</p>
              <p className="text-2xl font-semibold tracking-tight">{next.title}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{next.summary}</p>
            </div>
            <span className="bg-gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-full text-white transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
