import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { expertise } from "@/data/profile";

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Expertise" title="What I bring to a team" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map(({ title, years, icon: Icon, color, description }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.06} className="group relative h-full rounded-2xl p-px">
            {/* Gradient border revealed on hover */}
            <div aria-hidden className="bg-gradient-brand absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-3 rounded-[calc(1rem-1px)] border border-zinc-200 bg-white p-6 transition-colors group-hover:border-transparent dark:border-zinc-800 dark:bg-black">
              <div className="flex items-center justify-between">
                <Icon className={`h-8 w-8 ${color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">{years}</span>
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
