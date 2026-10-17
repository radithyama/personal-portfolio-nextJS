import { GraduationCap } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { education, experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-zinc-200 bg-zinc-50/70 dark:border-zinc-900 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Building payments people use every day"
          description="From an internship to the backend of a national bank's super app: engineering money movement where reliability and security aren't optional."
        />

        <ol className="relative space-y-6 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              <span aria-hidden
                className={`absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white sm:-left-[39px] dark:border-black ${i === 0 ? "bg-gradient-brand ring-4 ring-cyan-500/20" : "bg-zinc-300 dark:bg-zinc-700"}`} />
              <Reveal delay={i * 0.06}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-black">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-zinc-500">{job.period}</p>
                </div>
                <p className="font-medium text-cyan-700 dark:text-cyan-400">{job.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{job.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <li key={t} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{t}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <Reveal className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-xl font-semibold">Education</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.06}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                <p className="text-xs text-zinc-500">{e.period}</p>
                <p className="mt-2 font-semibold leading-snug">{e.degree}</p>
                <p className="text-sm text-cyan-700 dark:text-cyan-400">{e.school}</p>
                {e.detail && <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.detail}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
