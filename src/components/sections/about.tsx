import { Code2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { about, techStack } from "@/data/profile";

const pillars = [
  { icon: Code2, title: "Software Engineering", body: about.engineering, tint: "from-cyan-500/15 to-blue-500/10", iconColor: "text-cyan-500" },
  { icon: ShieldCheck, title: "Cybersecurity Research", body: about.security, tint: "from-emerald-500/15 to-cyan-500/10", iconColor: "text-emerald-500" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="About" title="Two disciplines, one goal: software people can trust." />

      <div className="grid gap-5 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, body, tint, iconColor }, i) => (
          <Reveal key={title} delay={i * 0.08}
            className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <div aria-hidden className={`absolute inset-0 -z-0 bg-gradient-to-br ${tint} opacity-60`} />
            <div className="relative space-y-4">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-8">
        <p className="mb-3 text-sm font-medium text-zinc-500">Tools I work with every day</p>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <li key={t}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 transition-colors hover:border-cyan-500 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-cyan-500 dark:hover:text-white">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
