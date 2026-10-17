# personal-portfolio-nextJS

Radithya's personal portfolio website, built with Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui and Framer Motion.

## Project structure

```
.
├── .github/workflows/ci-cd.yml   # Lint + build on every push/PR, deploy to the VM on main
├── deploy/
│   ├── setup-vm.sh               # One-time VM bootstrap (Node, nginx, TLS cert, swap, systemd)
│   ├── deploy.sh                 # Pull, build, restart (run by CI on the VM)
│   ├── portfolio.service         # systemd unit running `next start` on 127.0.0.1:3000
│   └── nginx.conf                # HTTPS reverse proxy; HTTP redirects to https://radithyama.site
├── src/
│   ├── app/                      # Routes: home page + /projects/[slug] (statically generated)
│   ├── assets/images/            # Portrait and project screenshots (static imports)
│   ├── components/
│   │   ├── sections/             # Home page sections: hero, about, experience, expertise, projects, contact
│   │   ├── project-detail.tsx    # Shared case-study layout for every project page
│   │   ├── site-header.tsx       # Sticky nav with active-section highlight and scroll progress
│   │   └── ui/                   # shadcn/ui primitives
│   ├── data/
│   │   ├── profile.ts            # Bio, experience, education, expertise, socials
│   │   └── projects.ts           # Project content; add an entry here to publish a new project page
│   └── lib/utils.ts
├── vercel.json                   # Disables Vercel Git deployments (hosting is the VM)
└── package.json, next.config.ts, tailwind.config.ts, tsconfig.json, ...
```

Imports use the `@/` alias, which maps to `src/`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

The site is served at https://radithyama.site (TLS via Let's Encrypt, auto-renewed by certbot). Pushing to `main` triggers GitHub Actions: it lints and builds, then SSHes into the GCE VM and runs `deploy/deploy.sh`. That script checks out the latest `main` in `/opt/portfolio`, runs `npm ci && npm run build`, and restarts the `portfolio` systemd service. nginx terminates TLS on port 443 and proxies to the app.

Required repository secrets: `VM_HOST`, `VM_USER`, `VM_SSH_KEY` (private key for the deploy user), `VM_KNOWN_HOSTS`.
