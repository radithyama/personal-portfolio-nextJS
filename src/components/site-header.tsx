"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-zinc-200/70 bg-white/75 backdrop-blur-lg dark:border-zinc-800/70 dark:bg-black/70"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight" aria-label="Home">
          <Image src={logo} alt="" width={36} height={36} priority
            className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
          <span className="hidden sm:inline">Radithya Mirza</span>
        </Link>

        <nav className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === item.id
                      ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="bg-gradient-brand mr-1 rounded-full px-4 py-1.5 text-sm font-medium text-white md:hidden"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
      <motion.div style={{ scaleX: progress }} className="bg-gradient-brand absolute inset-x-0 bottom-0 h-0.5 origin-left" />
    </header>
  );
}
