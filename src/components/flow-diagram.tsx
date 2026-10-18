import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";
import type { Project } from "@/data/projects";

type Flow = NonNullable<Project["flow"]>;

// Pipeline diagram: a compact strip of numbered stages (horizontal on desktop,
// vertical on mobile) followed by a plain-language explanation of each stage.
export default function FlowDiagram({ flow }: { flow: Flow }) {
  const { steps } = flow;
  return (
    <section aria-labelledby="how-it-works" className="space-y-8">
      <Reveal className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">How it works</p>
        <h2 id="how-it-works" className="text-2xl font-semibold tracking-tight sm:text-3xl">{flow.title}</h2>
        {flow.intro && <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">{flow.intro}</p>}
      </Reveal>

      {/* Diagram */}
      <Reveal className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        <ol className="relative flex flex-col items-stretch gap-2 lg:flex-row lg:items-start lg:gap-0">
          {steps.map(({ icon: Icon, title, tech }, i) => (
            <li key={title} className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-start">
              <div className="flex w-full items-center gap-4 rounded-xl border border-zinc-200 bg-white p-3 lg:flex-col lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0 lg:text-center dark:border-zinc-800 dark:bg-black lg:dark:bg-transparent">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                  <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  <span className="bg-gradient-brand absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="lg:px-1">
                  <p className="text-sm font-semibold leading-tight">{title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{tech}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  <ArrowDown aria-hidden className="my-1 h-4 w-4 text-cyan-500 lg:hidden" />
                  <ArrowRight aria-hidden className="mt-4 hidden h-4 w-4 shrink-0 text-cyan-500 lg:block" />
                </>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Step-by-step explanation */}
      <ol className="grid gap-4 sm:grid-cols-2">
        {steps.map(({ title, body }, i) => (
          <li key={title}>
          <Reveal delay={(i % 2) * 0.05}
            className="flex h-full gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{body}</p>
            </div>
          </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
