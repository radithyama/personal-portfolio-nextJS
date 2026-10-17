#!/usr/bin/env bash
# Pull the latest main, rebuild, and restart. Run on the VM as the deploy user (called by GitHub Actions).
set -euo pipefail

# Wrapped in a function so bash parses the whole script before `git reset` can rewrite it.
main() {
  APP_DIR=/opt/portfolio
  local BRANCH="${1:-main}"

  cd "$APP_DIR"
  git fetch --prune origin "$BRANCH"
  git checkout -f -B "$BRANCH" "origin/$BRANCH"

  npm ci --no-audit --no-fund
  npm run build

  sudo /usr/bin/systemctl restart portfolio

  # Wait for the app to come back up
  for i in {1..30}; do
    if curl -fsS -o /dev/null http://127.0.0.1:3000; then
      echo "Deployed $(git rev-parse --short HEAD)"
      exit 0
    fi
    sleep 2
  done
  echo "App did not respond after restart" >&2
  sudo /usr/bin/systemctl status portfolio --no-pager || true
  exit 1
}

main "$@"
