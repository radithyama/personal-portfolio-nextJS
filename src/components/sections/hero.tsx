"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import pp from "@/assets/images/profile.jpeg";
import { profile, socials, stats } from "@/data/profile";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Backdrop: faint grid + brand glow */}
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -top-32 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-500/20 via-indigo-500/20 to-sky-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1fr_auto] md:pb-24 md:pt-20">
        <div className="space-y-7">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.currently}
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              <span className="text-gradient inline-block pb-1">{profile.name}</span>
            </h1>
            <p className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4" />
              {profile.role} · {profile.location}
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.16)} className="space-y-3">
            <h2 className="max-w-xl text-xl font-semibold leading-snug sm:text-2xl">{profile.headline}</h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">{profile.intro}</p>
          </motion.div>

          <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-3">
            <Link href="/#projects"
              className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-transform hover:scale-[1.03]">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
              Get in touch
            </Link>
            <div className="ml-1 flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-white">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-48 sm:w-60 md:mx-0 md:w-72"
        >
          <div aria-hidden className="bg-gradient-brand absolute -inset-1 rounded-[2rem] opacity-70 blur-xl" />
          <div className="bg-gradient-brand relative rounded-[2rem] p-[3px]">
            <Image src={pp} alt={`Portrait of ${profile.name}`} priority placeholder="blur"
              sizes="(min-width: 768px) 288px, 256px"
              className="aspect-[4/5] w-full rounded-[calc(2rem-3px)] object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <motion.dl {...fadeUp(0.32)}
          className="grid grid-cols-1 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/60 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950/60">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 p-5 sm:flex-col sm:items-start sm:gap-1">
              <dt className="text-gradient w-32 shrink-0 whitespace-nowrap text-3xl font-bold tracking-tight sm:w-auto">{s.value}</dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
