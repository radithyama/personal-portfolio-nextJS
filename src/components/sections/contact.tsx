"use client"

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import Reveal from "@/components/reveal";
import { profile, socials } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal className="bg-gradient-brand relative overflow-hidden rounded-3xl p-px">
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-white px-6 py-14 text-center sm:px-12 dark:bg-black">
          <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
          <div className="relative mx-auto max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want to <span className="text-gradient">collaborate?</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              I&apos;m always open to new opportunities, projects, and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <a href={`mailto:${profile.email}`}
                className="bg-gradient-brand group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2">
                <Mail className="h-5 w-5 group-hover:animate-bounce" />
                Email Me
              </a>
              <button type="button" onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black/60 dark:text-zinc-300 dark:hover:bg-zinc-900">
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                <span aria-live="polite">{copied ? "Copied!" : profile.email}</span>
              </button>
            </div>
            <div className="flex justify-center gap-2 pt-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="rounded-full p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-white">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
