#!/usr/bin/env bash
# One-time VM bootstrap: Node.js, nginx + Let's Encrypt TLS, swap, deploy user, app clone, systemd service.
# Usage (on the VM, as root): bash setup-vm.sh [repo-url] [branch]
set -euo pipefail

REPO_URL="${1:-https://github.com/radithyama/personal-portfolio-nextJS.git}"
BRANCH="${2:-main}"
APP_DIR=/opt/portfolio
APP_USER=deploy
DOMAIN=radithyama.site

export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y ca-certificates curl git nginx certbot

# Node.js 22 LTS
if ! command -v node >/dev/null || [[ "$(node -v)" != v22* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

# Swap so `next build` doesn't OOM on small instances
if ! swapon --show | grep -q /swapfile; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

# Deploy user (CI/CD connects as this user)
id "$APP_USER" >/dev/null 2>&1 || useradd -m -s /bin/bash "$APP_USER"
install -d -m 700 -o "$APP_USER" -g "$APP_USER" /home/$APP_USER/.ssh
echo "$APP_USER ALL=(root) NOPASSWD: /usr/bin/systemctl restart portfolio, /usr/bin/systemctl status portfolio *" \
  > /etc/sudoers.d/portfolio-deploy
chmod 440 /etc/sudoers.d/portfolio-deploy

# App checkout + first build
if [[ ! -d "$APP_DIR/.git" ]]; then
  install -d -o "$APP_USER" -g "$APP_USER" "$APP_DIR"
  sudo -u "$APP_USER" git clone -b "$BRANCH" "$REPO_URL" "$APP_DIR"
fi
sudo -u "$APP_USER" bash -c "cd $APP_DIR && npm ci --no-audit --no-fund && npm run build"

# TLS certificate. Issued with certbot's standalone server; the hooks stop nginx
# for the few seconds it needs port 80, both now and on automatic renewal.
if [[ ! -d "/etc/letsencrypt/live/$DOMAIN" ]]; then
  certbot certonly --standalone -d "$DOMAIN" --non-interactive --agree-tos \
    --register-unsafely-without-email \
    --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"
fi

# systemd + nginx
install -m 644 "$APP_DIR/deploy/portfolio.service" /etc/systemd/system/portfolio.service
install -m 644 "$APP_DIR/deploy/nginx.conf" /etc/nginx/sites-available/portfolio
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
rm -f /etc/nginx/sites-enabled/default

systemctl daemon-reload
systemctl enable --now portfolio
nginx -t && systemctl reload nginx
echo "Setup complete."
