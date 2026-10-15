# =============================================================================
# Portfolio Thomas Jondeau — image de production
# Site statique servi par Nginx, exécuté sans droits root (port 8080).
# =============================================================================
FROM nginxinc/nginx-unprivileged:1.27-alpine

LABEL org.opencontainers.image.title="portfolio-thomas-jondeau" \
      org.opencontainers.image.description="Portfolio 3D de Thomas Jondeau (Three.js, servi par Nginx)" \
      org.opencontainers.image.authors="Thomas Jondeau"

# Configuration Nginx : compression, cache, en-têtes de sécurité, route de santé
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf

# Contenu du site : appartient à root, lisible mais non modifiable par l'utilisateur nginx
COPY src/ /usr/share/nginx/html/

EXPOSE 8080

# Docker vérifie que le serveur répond ; le conteneur passe « unhealthy » sinon
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
