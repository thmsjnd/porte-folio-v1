# Portfolio — Thomas Jondeau

En ligne : **https://thomas-jondeau.fr**

Portfolio 3D (Three.js) servi par Nginx dans un conteneur Docker non root.
Site accessible sur **http://localhost:8090** (port modifiable dans `.env`).

## En local

```bash
cd portfolio-thomas-jondeau
docker compose down --remove-orphans        # nettoie les essais précédents
docker compose up -d --build                # construit et lance en arrière-plan
docker compose ps                           # doit afficher 0.0.0.0:8090->8080 et (healthy)
curl http://localhost:8090/healthz          # doit répondre « ok »
open http://localhost:8090                  # ouvre le site
```

Mode développement (modifier `src/` puis recharger la page, sans reconstruire) :

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

Port déjà pris :

```bash
PORT=8095 docker compose up -d --build
```

Journaux : `docker compose logs -f` — Arrêt : `docker compose down`

## Mise en ligne : hébergement web OVH

Le site est entièrement statique (HTML, CSS, JavaScript, bibliothèque 3D comprise dans `src/js/vendor/`) :
il suffit de copier le dossier `src/` sur l'hébergement. Aucun service tiers, aucun serveur à administrer.
Docker reste l'outil de développement en local (`make dev` / `make up`).

Les règles de sécurité, le passage forcé en HTTPS et le cache sont dans `src/.htaccess`
(équivalent Apache de la configuration Nginx).

### 1. Commander (une fois)
Chez OVH : le nom de domaine + l'hébergement **Starter** (certificat HTTPS gratuit inclus).

### 2. Activer le HTTPS (une fois)
Espace client OVH → *Hébergements* → votre hébergement → *Multisite* : vérifier que le domaine (et `www`)
pointe vers le dossier `www` avec **SSL activé**, puis *Commander un certificat SSL* (Let's Encrypt, gratuit) si besoin.

### 3. Envoyer le site
Identifiants FTP : *Hébergements → FTP - SSH* (serveur `ftp.clusterXXX.hosting.ovh.net`, identifiant, mot de passe à définir).

- **Automatiquement avec GitHub** (recommandé) : chaque `git push` sur `main` construit et teste l'image Docker,
  puis envoie `src/` dans `www/` (fichier `.github/workflows/deploy.yml`).
  Secrets à créer dans *Settings → Secrets and variables → Actions* : `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`.
  Si l'envoi chiffré est refusé par l'hébergeur, ajouter la variable `FTP_TLS` = `false` (onglet *Variables*).
- **À la main** avec FileZilla : se connecter en *FTP explicite sur TLS*, puis copier **le contenu** de `src/`
  (y compris le fichier caché `.htaccess`) dans le dossier `www/`.

### 4. Vérifier
- `https://votre-domaine.fr` s'affiche, et `http://` redirige bien vers `https://`.
- Note de sécurité : tester l'adresse sur securityheaders.com.

## Contenu du projet

| Fichier | Rôle |
|---|---|
| `src/index.html` | la structure de la page |
| `src/css/style.css` | les styles |
| `src/js/main.js` | la scène 3D et le contenu : textes dans le tableau `STEPS`, caméra dans `SHOTS` |
| `docker/security-headers.conf` | en-têtes de sécurité communs, inclus par `nginx.conf` |
| `docker/nginx.conf` | compression, en-têtes de sécurité, route `/healthz` |
| `Dockerfile` | image de production, Nginx sans root, port interne 8080 |
| `docker-compose.yml` | production : conteneur en lecture seule, redémarrage automatique |
| `docker-compose.dev.yml` | développement : `src/` monté en direct |
| `src/.htaccess` | sécurité, HTTPS forcé et cache sur l'hébergement OVH (Apache) |
| `src/js/vendor/three.min.js` | bibliothèque 3D Three.js 0.128 (licence MIT), servie par le site |
| `.github/workflows/deploy.yml` | à chaque push : test de l'image Docker puis mise en ligne par FTP sur OVH |
| `.env.example` | port, nom et étiquette de l'image (local) |

## Musique d'ambiance

Par défaut, un jazz calme est composé en direct par le navigateur (aucun fichier, aucun droit d'auteur).
Pour utiliser un vrai morceau libre de droits à la place, déposez-le sous `src/audio/ambiance.mp3` puis reconstruisez l'image :

```bash
docker compose up -d --build
```

La musique démarre au premier clic ou appui sur une touche (les navigateurs interdisent le son avant), et le bouton ♪ du bandeau la coupe ou la relance (choix mémorisé).
