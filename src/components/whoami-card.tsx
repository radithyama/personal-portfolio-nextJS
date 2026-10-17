"use client"

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { snapshot } from "@/data/profile";

// Terminal-style profile snapshot shown beside the hero introduction
export default function WhoamiCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative w-full md:w-[23rem]"
    >
      <div aria-hidden className="bg-gradient-brand absolute -inset-2 rounded-3xl opacity-25 blur-2xl" />
      <div className="bg-gradient-brand relative rounded-2xl p-px shadow-2xl shadow-cyan-500/10">
        <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-white/95 backdrop-blur dark:bg-zinc-950/95">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-zinc-500">radithya@portfolio: ~</span>
          </div>

          <div className="space-y-4 p-5 text-sm">
            <p className="text-zinc-500">
              <span className="text-emerald-600 dark:text-emerald-400">$</span> whoami
            </p>

            <dl className="space-y-2">
              {snapshot.map(({ key, value }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                  className="grid grid-cols-[5.5rem_1fr] gap-3"
                >
                  <dt className="text-cyan-700 dark:text-cyan-400">{key}</dt>
                  <dd className="text-zinc-800 dark:text-zinc-200">{value}</dd>
                </motion.div>
              ))}
            </dl>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + snapshot.length * 0.07 }}
              className="flex items-center gap-2 border-t border-zinc-200 pt-4 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Secure by default · open to collaborations</span>
              <span aria-hidden className="ml-auto inline-block h-4 w-2 animate-pulse bg-cyan-500/70" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
