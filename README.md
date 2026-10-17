# personal-portfolio-nextJS

Radithya's personal portfolio website, built with Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui and Framer Motion.

## Project structure

```
.
├── .github/workflows/ci-cd.yml   # Lint + build on every push/PR, deploy to the VM on main
├── deploy/
│   ├── setup-vm.sh               # One-time VM bootstrap (Node, nginx, swap, systemd)
│   ├── deploy.sh                 # Pull, build, restart (run by CI on the VM)
│   ├── portfolio.service         # systemd unit running `next start` on 127.0.0.1:3000
│   └── nginx.conf                # Reverse proxy on port 80
├── src/
│   ├── app/                      # Routes: home page + /projects/<slug>
│   ├── assets/images/            # Profile picture and project screenshots (static imports)
│   ├── components/               # App components (theme toggle)
│   │   └── ui/                   # shadcn/ui primitives
│   ├── data/portfolio.ts         # Skills and portfolio project content
│   └── lib/utils.ts
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

Pushing to `main` triggers GitHub Actions: it lints and builds, then SSHes into the GCE VM and runs `deploy/deploy.sh`. That script checks out the latest `main` in `/opt/portfolio`, runs `npm ci && npm run build`, and restarts the `portfolio` systemd service. nginx serves the site on port 80.

Required repository secrets: `VM_HOST`, `VM_USER`, `VM_SSH_KEY` (private key for the deploy user), `VM_KNOWN_HOSTS`.
