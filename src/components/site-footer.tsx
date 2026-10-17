import { profile, socials } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, deployed on Google Cloud via GitHub Actions.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-colors hover:text-zinc-950 dark:hover:text-white">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
