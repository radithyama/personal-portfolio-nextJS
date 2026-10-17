import Reveal from "@/components/reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">{description}</p>}
    </Reveal>
  );
}
