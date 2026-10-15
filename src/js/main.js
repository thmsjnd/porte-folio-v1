/* =====================================================================
   1. CONTENU : une étape = un plan de caméra + un fichier dans l'éditeur
   ===================================================================== */
const STEPS = [
  { zone:'tronc', file:'profil.ts', title:'Thomas Jondeau', h1:true,
    org:'Ingénieur logiciel full stack · Chef de projet informatique · Formateur',
    meta:'Toulouse · disponible mi-novembre 2026',
    stats:[['6 ans +','d’expérience'],['≈ 60','apprenants encadrés'],['Bac + 5','ingénieur ENSEEIHT']],
    pitch:'Je conçois des applications métier, j’orchestre des agents IA, je pilote des projets informatiques et je forme des développeurs. Je lance aussi ma propre entreprise : édition logicielle et développement sur mesure.',
    zones:true },

  { zone:'tronc', file:'etudes.ts', projetsKey:'diplômes',
    title:'Études', org:'Diplôme d’ingénieur · ENSEEIHT', meta:'Toulouse · 2021',
    pitch:'Un socle d’ingénieur en génie logiciel : concevoir, architecturer et livrer des logiciels fiables.',
    projets:[
      ['Diplôme d’ingénieur · ENSEEIHT','École d’ingénieurs de Toulouse, bac + 5, spécialité génie logiciel, diplômé en 2021.']],
    items:['Conception et architecture logicielle, tests et qualité','Développement web front et back','Linux et réseaux, déploiement automatisé, gestion de versions','Bases de données SQL et NoSQL, méthodes Agile'],
    itemsKey:'acquis' },

  // ---------- Quartier 01 : développement — expériences dans l'ordre, puis compétences techniques
  { zone:'dev', file:'developpement/01-webinage.ts', tl:0,
    title:'Ingénieur full stack', org:'Webinage', meta:'02/2021 → 05/2022 · entreprise de services du numérique',
    pitch:'Conception et développement d’applications métier pour des clients, du schéma de données à l’interface.',
    items:['Applications web full stack sur mesure','Interfaces de programmation REST et SOAP','Données géographiques avec PostgreSQL et PostGIS','Conteneurisation Docker et intégration continue'],
    stack:['PHP','Laravel','Symfony','Python','Node.js','React','Vue.js','PostgreSQL','PostGIS','MySQL'] },

  { zone:'dev', file:'developpement/02-allopass.ts', tl:1,
    title:'Ingénieur logiciel', org:'Allopass', meta:'05/2022 → 06/2026 · CDI',
    pitch:'Plateforme française de micropaiement : paiement par mobile, facturation opérateur, infrastructure historique à faire évoluer.',
    projets:[
      ['Facturation opérateur','Migration de Docomo Digital vers une intégration directe Bouygues Telecom Internet+ Mobile, avec plan de remédiation en vagues : correctifs de sécurité puis migration.'],
      ['Cartographie de la plateforme','Documentation technique de l’existant : quatre bases PostgreSQL sur deux machines virtuelles, schémas et diagrammes générés automatiquement.'],
      ['Applications métier','Évolutions full stack, interfaces sécurisées (authentification, double facteur), pipelines d’intégration continue.']],
    stack:['Python','Laravel','Symfony','Vue.js','React','PostgreSQL','Docker','GitLab CI','Jenkins'] },

  { zone:'dev', file:'developpement/competences.ts',
    projetsKey:'domaines', itemsKey:'aussi', title:'Compétences de développeur', org:'Full stack · IA agentique · automatisation · Docker', meta:'ce que j’apporte à une équipe technique',
    projets:[
      ['Orchestration d’agents IA','Agents avec appel de fonctions, serveurs Model Context Protocol, enchaînement de plusieurs agents sur une tâche, intégration de modèles locaux (Ollama) et hébergés (GitHub Models).'],
      ['Automatisation','Chaînes de génération de documents et de diagrammes (Playwright), pipelines d’intégration et de déploiement continus, environnements qui démarrent en une commande.'],
      ['Conteneurisation et déploiement','Tous mes projets tournent dans Docker : Docker Compose multi-services (jusqu’à neuf services sur Argo), images de production légères, environnements identiques en local et en production, déploiement automatisé via GitLab CI.'],
      ['Full stack','Applications métier de la base de données à l’interface : Laravel, Symfony, Node.js, FastAPI, Vue.js, React, applications mobiles Flutter et React Native.']],
    items:['Architecture multi-bases et données géographiques (PostgreSQL, PostGIS)','Interfaces de programmation sécurisées : authentification, double facteur','Assistants de code au quotidien : GitHub Copilot, Claude Code'],
    stack:['Docker','Docker Compose','Nginx','GitLab CI','Model Context Protocol','Ollama','Playwright','Laravel','FastAPI','Vue.js','Flutter'] },

  // ---------- Quartier 02 : formation
  { zone:'form', file:'formation/holberton.ts', tl:2,
    title:'Software Engineer · Formateur & coach technique', org:'Holberton Digital School', meta:'06/2026 → 11/2026 · CDD · Toulouse',
    stats:[['≈ 60','apprenants suivis'],['Hebdo','stand-up et reporting']],
    pitch:'Ingénieur logiciel au service de la pédagogie : je code les corrigés, je fais les revues de code et je coache les promotions jusqu’à la certification.',
    items:['Revue de code, évaluation des projets, organisation des soutenances','Coaching technique : ateliers à la demande, déblocage individuel','Préparation à la certification : relecture des dossiers, entraînement à l’oral','Médiation et gestion de la dynamique de groupe'],
    stack:['Python','C','Docker','SQLAlchemy','Vue.js','FastAPI'] },

  { zone:'form', file:'formation/cursus.ts', tl:2,
    projetsKey:'cursus', title:'Cursus encadrés', org:'Holberton Digital School', meta:'temps plein et alternance',
    stats:[['Niveau 5','année des fondamentaux'],['Niveau 6','seconde année spécialisée']],
    pitch:'J’accompagne les apprenants de la première année jusqu’à leur spécialisation, en formation à temps plein comme en alternance.',
    projets:[
      ['Fondamentaux','Première année, titre professionnel de niveau 5 : les bases solides de la programmation et du développement logiciel.'],
      ['Spécialisations de seconde année','Titre de niveau 6 : cybersécurité, machine learning, IA agentique (l’ancien cursus full stack remanié), ainsi que des promotions full stack encore en cours.'],
      ['Stage « Crée ton app avec l’IA »','Conçu de A à Z : 5 jours pour amener des adultes débutants à une application full stack avec assistant IA, sans aucune installation.']],
    stack:['Cybersécurité','Machine learning','IA agentique','Full stack'] },

  // ---------- Quartier 03 : gestion de projet
  { zone:'pm', file:'gestion-de-projet/cadrer.ts',
    title:'Cadrer et prioriser', org:'Compétences de chef de projet informatique', meta:'Product Owner · Scrum · Kanban · SAFe',
    pitch:'Un profil technique qui parle aussi le langage du métier : je sais ce qu’une user story coûte vraiment à développer.',
    items:['Recueil des besoins métier et rédaction de user stories','Construction et priorisation du backlog, animation de la roadmap','Découpage en lots et en vagues, comme pour la migration de facturation opérateur','Rédaction de cahiers des charges, comme celui d’Argo','Arbitrages entre valeur, délai et risque technique'],
    stack:['User stories','Backlog','Roadmap','Jira','Cahier des charges'] },

  { zone:'pm', file:'gestion-de-projet/piloter.ts',
    title:'Piloter et livrer', org:'Compétences de chef de projet informatique', meta:'planning · indicateurs · qualité · communication',
    items:['Planning, suivi d’avancement et indicateurs, reporting hebdomadaire','Animation des rituels : stand-up, revues, démonstrations','Coordination entre développeurs, équipes métier et direction','Qualité de livraison : intégration continue, tests, mises en production','Gestion des risques : plan de remédiation sécurité avant migration','Anglais professionnel : très bonne compréhension, écrit fluide'],
    stack:['Scrum','SAFe','Jira','GitLab CI','Reporting'] },

  // ---------- Quartier 04 : mon entreprise
  { zone:'ent', file:'entreprise/argo.ts', projetsKey:'modules', itemsKey:'aussi',
    title:'Argo', org:'Produit de mon entreprise · en développement', meta:'tournées · flotte · gains · carbone',
    pitch:'Un logiciel en ligne multi-métier pour les entreprises de terrain (aide à domicile, propreté, livraison) : planifier et optimiser les tournées, gérer la flotte de véhicules et mesurer les gains, jusqu’à l’empreinte carbone. Objectif : la France en un an, l’Europe en trois.',
    projets:[
      ['Optimisation des tournées','Calcul d’itinéraires et répartition des interventions avec des moteurs d’optimisation, sur des données géographiques.'],
      ['Gestion de flotte','Référentiel véhicules en cascade marque → modèle → finition → motorisation, alimenté par les données officielles françaises et européennes.'],
      ['Gains et reporting carbone','Calcul des économies avec un modèle de vieillissement des véhicules, émissions selon le GHG Protocol, historique figé pour des rapports fiables.'],
      ['Multi-entreprise et abonnements','Chaque client isolé, identités pseudonymisées dans une base chiffrée séparée, offres et paiements intégrés.']],
    items:['Application mobile pour les intervenants sur le terrain','Site vitrine traduit en quatre langues','Démarrage complet en une seule commande : neuf services orchestrés'],
    stack:['Laravel','Filament','Vue.js','Inertia','Flutter','PostgreSQL','PostGIS','Redis','OSRM','OR-Tools','Docker Compose'] },

  { zone:'ent', file:'entreprise/symbioze.ts',
    title:'Symbioze', org:'Produit de mon entreprise · en développement', meta:'application mobile de recrutement tech',
    pitch:'La mise en relation entre développeurs et entreprises tech, façon application de rencontre : il faut un intérêt mutuel, et c’est l’entreprise qui écrit en premier.',
    items:['Match mutuel, puis messagerie en temps réel','Géolocalisation des profils et des offres','Mise en avant des profils de développeurs','Paiements et abonnements intégrés'],
    stack:['React Native','Expo','Node.js','Express','PostgreSQL','PostGIS','Socket.io','Stripe'] },

  { zone:'ent', file:'entreprise/sur-mesure.ts', projetsKey:'prestations',
    title:'Développement sur mesure', org:'Prestation de mon entreprise', meta:'applications web & mobiles · logiciels SaaS · automatisation',
    pitch:'De l’idée au produit en ligne : je conçois, développe et héberge votre application web, votre app mobile ou votre logiciel SaaS, prêts à accueillir vos utilisateurs.',
    projets:[
      ['Cadrage produit','Atelier de découverte, parcours utilisateurs, maquettes et feuille de route : le produit est validé avant la première ligne de code.'],
      ['Applications web et SaaS','Plateformes en ligne multi-utilisateurs, abonnements et paiements intégrés, back-office et tableaux de bord.'],
      ['Apps mobiles','Applications iOS et Android (Flutter, React Native), publiées sur l’App Store et Google Play.'],
      ['Automatisation et IA','Agents IA, connecteurs entre vos outils et automatisation des tâches répétitives.'],
      ['Hébergement et maintenance','Mise en ligne, nom de domaine, sécurité, sauvegardes, supervision et évolutions continues.']],
    stack:['PHP','Laravel','Symfony','Node.js','Express','Python','FastAPI','Java','Angular','Vue.js','React','React Native','Flutter',
           'PostgreSQL','PostGIS','MySQL','API REST','SOAP','Docker','Nginx','GitLab CI'] },

  { zone:'ent', file:'entreprise/jury.ts',
    title:'Jury d’examen', org:'Titres professionnels enregistrés au répertoire national', meta:'en auto-entreprise · développeur logiciel en activité',
    pitch:'En tant que professionnel du développement en activité, je siège comme jury lors des examens de titres professionnels du développement : j’évalue les candidats qui veulent faire reconnaître officiellement leurs compétences.',
    items:['Évaluation des dossiers professionnels et des projets présentés','Entretiens techniques et mises en situation devant le jury','Vérification des compétences au regard du référentiel du titre','Délibération et décision d’attribution du titre'],
    stack:['Évaluation','Référentiels de compétences','Développement logiciel'] },

  { zone:null, file:'contact.ts', title:'Construisons la suite ensemble', contact:true,
    org:'Disponible à partir de mi-novembre 2026', meta:'Toulouse · télétravail partiel possible',
    pitch:'Vous cherchez un <b>développeur senior</b>, un <b>chef de projet informatique</b> ou un <b>Product Owner</b> ? Je réunis les trois : développer, piloter, transmettre.' },
];
const ZNAME = { tronc:'00 · Profil', dev:'01 · Développement', form:'02 · Formation', pm:'03 · Gestion de projet', ent:'04 · Entreprise' };
const ZPATH = { tronc:'~/toulouse/00-profil', dev:'~/toulouse/01-developpement', form:'~/toulouse/02-formation', pm:'~/toulouse/03-gestion-de-projet', ent:'~/toulouse/04-entreprise' };
// première étape de chaque quartier, calculée à partir de STEPS
const ZFIRST = Object.fromEntries(Object.keys(ZNAME).map(z => [z, STEPS.findIndex(s => s.zone === z)]));
const TIMELINE = ['Webinage', 'Allopass', 'Holberton'];

/* Construction des fiches et de la barre de progression */
const panel = document.getElementById('panel'), prog = document.getElementById('prog');
const list = (key, arr, cls) => arr ? `<p class="key">${key}</p><ul class="${cls}">${arr.map(x => `<li>${x}</li>`).join('')}</ul>` : '';
const cards = STEPS.map((s, i) => {
  const el = document.createElement('section');
  el.className = 'card z-' + (s.zone || 'none');
  const H = s.h1 ? 'h1' : 'h2';
  el.innerHTML = `<div class="ed">
    <div class="ed-bar"><span class="file">${s.file}</span><span class="zone">${s.zone ? ZNAME[s.zone] : (s.contact ? 'contact' : 'profil')}</span></div>
    <div class="ed-body">
      ${s.tl !== undefined ? `<ol class="tl">${TIMELINE.map((t, k) => `<li class="${k < s.tl ? 'done' : k === s.tl ? 'now' : ''}">${t}</li>`).join('')}</ol>` : ''}
      <${H}>${s.title}</${H}>
      <p class="org">${s.org}</p><p class="meta">${s.meta}</p>
      ${s.stats ? `<div class="stats">${s.stats.map(([b, t]) => `<div><b>${b}</b><span>${t}</span></div>`).join('')}</div>` : ''}
      ${s.pitch ? `<p class="pitch">${s.pitch}</p>` : ''}
      ${s.zones ? `<p class="key">quartiers</p><ul class="zones">
        <li class="z-dev"><button type="button" data-go="dev"><i></i><span><b>Développement</b> · Webinage, Allopass, compétences</span></button></li>
        <li class="z-form"><button type="button" data-go="form"><i></i><span><b>Formation</b> · Holberton, cursus encadrés</span></button></li>
        <li class="z-pm"><button type="button" data-go="pm"><i></i><span><b>Gestion de projet</b> · cadrer, prioriser, livrer</span></button></li>
        <li class="z-ent"><button type="button" data-go="ent"><i></i><span><b>Entreprise</b> · Argo, Symbioze, sur mesure, jury d’examen</span></button></li></ul>
        <p class="hint">↓ faites défiler ou utilisez les flèches</p>` : ''}
      ${s.projets ? `<p class="key">${s.projetsKey || 'projets'}</p><ul class="projets">${s.projets.map(([n, d]) => `<li><b>${n}</b><span>${d}</span></li>`).join('')}</ul>` : ''}
      ${list(s.itemsKey || (s.zone === 'pm' ? 'competences' : 'missions'), s.items, 'items')}
      ${list('stack', s.stack, 'chips')}
      ${s.contact ? `
        <ul class="trio">
          <li class="z-dev"><b>Développer</b><span>6 ans + · full stack, agents IA, Docker</span></li>
          <li class="z-pm"><b>Piloter</b><span>backlog, planning, livraisons</span></li>
          <li class="z-form"><b>Transmettre</b><span>≈ 60 apprenants encadrés</span></li>
        </ul>
        <a class="cta" href="mailto:contact@thomas-jondeau.fr?subject=Prise%20de%20contact%20depuis%20votre%20portfolio">Écrire un e-mail <span aria-hidden="true">→</span></a>
        <div class="mailrow"><span class="mail" id="mail">contact@thomas-jondeau.fr</span><button class="copyic" id="copy" type="button" aria-label="Copier l’adresse e-mail" title="Copier l’adresse"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 15V5a1 1 0 0 1 1-1h9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><span id="copied" role="status"></span></div>
        <button class="again" type="button" id="again">↺ revoir le parcours</button>` : ''}
    </div></div>`;
  panel.appendChild(el);
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'z-' + (s.zone || 'none'); b.setAttribute('aria-label', 'Étape ' + (i + 1) + ' : ' + s.title);
  b.addEventListener('click', () => goTo(i));
  prog.appendChild(b);
  return { el, dot: b };
});
// Raccourcis de la fiche d'accueil vers chaque quartier
panel.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => goTo(ZFIRST[b.dataset.go])));

/* Copie de l'adresse (repli : sélection du texte) */
document.getElementById('again').addEventListener('click', () => goTo(0));
document.getElementById('copy').addEventListener('click', () => {
  const el = document.getElementById('mail'), out = document.getElementById('copied');
  const sel = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); out.textContent = 'sélectionnée'; };
  try { navigator.clipboard.writeText(el.textContent.trim()).then(() => out.textContent = '✓ copiée', sel); } catch (e) { sel(); }
});

/* Défilement : un écran par étape */
const track = document.getElementById('track');
const setTrack = () => track.style.height = (STEPS.length * 100) + 'vh';
setTrack();
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const progress = () => { const max = document.documentElement.scrollHeight - innerHeight; return max > 0 ? scrollY / max * (STEPS.length - 1) : 0; };
function goTo(i) { const max = document.documentElement.scrollHeight - innerHeight; scrollTo({ top: max * i / (STEPS.length - 1), behavior: reduce ? 'auto' : 'smooth' }); }
addEventListener('keydown', e => {
  const cur = Math.round(progress());
  if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(Math.min(STEPS.length - 1, cur + 1)); }
  if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(Math.max(0, cur - 1)); }
});

/* Invite de commande : la commande se tape quand on change de quartier */
const cmdEl = document.getElementById('cmd'), pathEl = document.getElementById('path');
let typeTimer = null;
function typeCmd(text, path) {
  clearInterval(typeTimer); cmdEl.textContent = '';
  if (reduce) { cmdEl.textContent = text; pathEl.textContent = path; return; }
  let k = 0;
  typeTimer = setInterval(() => { cmdEl.textContent = text.slice(0, ++k); if (k >= text.length) { clearInterval(typeTimer); setTimeout(() => { pathEl.textContent = path; cmdEl.textContent = ''; }, 500); } }, 28);
}

/* =====================================================================
   2. LA VILLE ROSE
   Une ville réaliste : rues en quadrillage, îlots de brique, la Garonne au milieu avec ses ponts.
   Chaque partie du parcours est une place de la ville, avec ses bâtiments :
     rive droite  place du Capitole (profil), quartier d'affaires (développement),
                  Cité de l'espace (gestion de projet)
     rive gauche  campus (formation), zone d'activités (entreprise)
   ===================================================================== */
(function () {
  if (!window.THREE) { cards.forEach(c => c.el.classList.add('on')); return; }
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const rand = (() => { let s = 42; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
  const pick = a => a[Math.floor(rand() * a.length)];
  const mobile = innerWidth < 780;

  /* ---------- Moteur de rendu, ciel, lumière ---------- */
  const canvas = document.getElementById('scene');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  // Ciel pastel en dégradé : lavande en haut, pêche à l'horizon
  const skyC = document.createElement('canvas'); skyC.width = 2; skyC.height = 256;
  const sg = skyC.getContext('2d'), grad = sg.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#8e7aae'); grad.addColorStop(.45, '#d9a9c0'); grad.addColorStop(.8, '#f7c2a6'); grad.addColorStop(1, '#ffd9b0');
  sg.fillStyle = grad; sg.fillRect(0, 0, 2, 256);
  scene.background = new THREE.CanvasTexture(skyC);
  scene.fog = new THREE.Fog('#f2bfae', 80, 430);              // brume dorée : la profondeur se lit au sol

  const camera = new THREE.PerspectiveCamera(40, 1, 0.5, 1200);
  scene.add(new THREE.HemisphereLight('#e2d2f6', '#f4bba4', 0.85));
  const sun = new THREE.DirectionalLight('#ffc896', 1.0);          // soleil bas, couleur fin de journée
  sun.position.set(70, 110, 55); sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -85, right: 85, top: 85, bottom: -85, near: 10, far: 400 });   // l'ombre suit la caméra (voir la boucle)
  scene.add(sun.target);
  sun.shadow.bias = -0.0008;
  scene.add(sun);

  /* ---------- Matériaux pastel partagés ---------- */
  const M = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .9, metalness: 0, flatShading: true, ...extra });
  const MAT = {
    ground: M('#f4e7da'), quay: M('#eab1a3'), river: M('#a7d6ef', { roughness: .35 }), cream: M('#fff6ec'), stone: M('#f1e3d3'),
    roofGrey: M('#b8b2cc'), glass: M('#bfe0f7', { roughness: .2 }), dark: M('#4a4660'), white: M('#ffffff'),
    leaf: M('#9fdcbf'), trunk: M('#c79a83'), gold: M('#f3c97f'), former: M('#b9a6f4'), piloter: M('#86d9bd'), dev: M('#89c2ff'), ent: M('#f3c46b'),
    skinA: M('#f3cdb5'), skinB: M('#d9a688'), skinC: M('#a9765d'),
    grass: M('#a9d9a5'), avenue: M('#ddd3cf'),
  };
  const BRICKS = ['#ef9f95', '#f2b1a5', '#f6c2b4', '#e98f87', '#f3a99c', '#f8cbbd'];

  /* ---------- Petits utilitaires de construction ---------- */
  function box(w, h, d, mat, x, y, z, parent = scene) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y + h / 2, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m;
  }
  function cyl(rt, rb, h, seg, mat, x, y, z, parent = scene) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    m.position.set(x, y + h / 2, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m;
  }
  function plate(w, d, mat, x, z, y = .06) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; scene.add(m); return m;
  }
  function disc(r, mat, x, z, y) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 64), mat); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; scene.add(m); return m;
  }
  // Ruban posé au sol le long d'une courbe (rivière, quais, route)
  function ribbon(curve, width, y, mat) {
    const pts = curve.getSpacedPoints(300), pos = [], idx = [];
    pts.forEach((p, i) => {
      const t = curve.getTangentAt(i / 300), n = V(-t.z, 0, t.x).normalize().multiplyScalar(width / 2);
      pos.push(p.x + n.x, y, p.z + n.z, p.x - n.x, y, p.z - n.z);
      if (i) { const a = i * 2; idx.push(a - 2, a - 1, a, a - 1, a + 1, a); }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: mat.color, roughness: mat.roughness, side: THREE.DoubleSide }));
    m.receiveShadow = true; scene.add(m); return m;
  }
  const dummy = new THREE.Object3D();
  const dyn = o => { o.userData.dynamic = true; return o; }; // objet mobile : ignoré dans le calcul des obstacles

  /* ---------- Plan de la ville ----------
     Une ville française ne se dessine pas au cordeau : son tissu est fait d'îlots de formes et de tailles
     variées, petits et serrés dans le centre historique, plus grands vers les faubourgs, séparés par des
     rues qui ne sont jamais parallèles. On obtient ce tissu avec un pavage de Voronoï :
       1. on sème des points, serrés autour du Capitole, plus espacés en s'éloignant ;
       2. chaque point devient un îlot (la zone plus proche de lui que de ses voisins) ;
       3. les frontières entre îlots sont les rues ; on bâtit des immeubles en brique le long de chaque rue,
          avec une cour au milieu de l'îlot quand il est assez grand.
     La Garonne traverse la ville avec ses quais et ses ponts. Les étapes du parcours sont des places :
     les îlots autour de chaque lieu sont dégagés.
       centre        place du Capitole (profil) — Saint-Sernin au nord
       rive droite   quartier d'affaires (Développement), Cité de l'espace (Gestion de projet)
       rive gauche   campus (Formation), zone d'activités (Entreprise) */
  const C = V(60, 0, 0);                                     // place du Capitole
  const STREET = 7, CITY_R = 240;                            // largeur des rues, rayon de la ville

  /* ---------- La Garonne ---------- */
  const river = new THREE.CatmullRomCurve3([V(-50, 0, -280), V(-18, 0, -150), V(-6, 0, -50), V(-20, 0, 30), V(2, 0, 130), V(-20, 0, 280)]);
  const riverPts = river.getSpacedPoints(500);
  ribbon(river, 34, 0.02, MAT.grass);                                     // berges en pelouse
  ribbon(river, 21, 0.04, MAT.quay);
  ribbon(river, 14, 0.09, MAT.river);
  const SPARK = 120, sparkPos = new Float32Array(SPARK * 3), sparks = [];
  for (let i = 0; i < SPARK; i++) sparks.push({ t: rand(), off: (rand() - .5) * 10, s: 0.0004 + rand() * 0.0006 });
  const sparkGeo = new THREE.BufferGeometry(); sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
  scene.add(new THREE.Points(sparkGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 0.5, transparent: true, opacity: .85 })));
  const distRiver = (x, z) => { let d = 1e9; for (const p of riverPts) d = Math.min(d, Math.hypot(p.x - x, p.z - z)); return d; };

  /* ---------- Places : centre et rayon dégagé ---------- */
  const Q = {
    tronc: { c: C.clone(),           r: 30, ground: '#f6e9dc' },
    dev:   { c: V(110, 0, -92),      r: 30, ground: '#e9eef8' },
    pm:    { c: V(150, 0, 78),       r: 32, ground: null },        // Cité de l'espace : un parc
    form:  { c: V(-82, 0, -82),      r: 31, ground: '#efe9f8' },
    ent:   { c: V(-84, 0, 86),       r: 32, ground: '#f7ebe4' },
  };
  const SAINT_SERNIN = V(30, 0, -64);
  const DV = Q.dev.c, FO = Q.form.c, PM = Q.pm.c, EN = Q.ent.c;
  const HUB = Q.tronc.r;

  /* ---------- 1. Semis des centres d'îlots (serré au centre, lâche en périphérie) ---------- */
  const spacing = p => 15 + .085 * p.distanceTo(C);
  const sites = [];
  Object.values(Q).forEach(q => sites.push(q.c.clone()));          // chaque place est un îlot à elle seule
  sites.push(SAINT_SERNIN.clone());
  for (let n = 0; n < 9000 && sites.length < 520; n++) {
    const a = rand() * Math.PI * 2, d = Math.sqrt(rand()) * CITY_R, p = V(C.x + Math.cos(a) * d - 20, 0, C.z + Math.sin(a) * d);
    // aucun centre d'îlot trop près d'une place : la cellule de la place couvre alors au moins (rayon + 6 m) dans toutes les directions,
    // et aucune rue ne passe sur les bâtiments du quartier
    if (Object.values(Q).some(q => p.distanceTo(q.c) < 2 * (q.r + 6)) || p.distanceTo(SAINT_SERNIN) < 40) continue;
    if (sites.every(s => s.distanceTo(p) > spacing(p))) sites.push(p);
  }

  /* ---------- 2. Îlots de Voronoï, par découpage successif ---------- */
  // découpe un polygone par le demi-plan des points plus proches de a que de b
  function clipHalf(poly, a, b) {
    const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2, nx = b.x - a.x, nz = b.z - a.z, out = [];
    const side = p => (p.x - mx) * nx + (p.z - mz) * nz;
    for (let i = 0; i < poly.length; i++) {
      const p = poly[i], q = poly[(i + 1) % poly.length], sp = side(p), sq = side(q);
      if (sp <= 0) out.push(p);
      if ((sp < 0) !== (sq < 0)) { const t = sp / (sp - sq); out.push(V(p.x + (q.x - p.x) * t, 0, p.z + (q.z - p.z) * t)); }
    }
    return out;
  }
  const blocks = sites.map((s, i) => {
    const R = 90; let poly = [V(s.x - R, 0, s.z - R), V(s.x + R, 0, s.z - R), V(s.x + R, 0, s.z + R), V(s.x - R, 0, s.z + R)];
    sites.forEach((o, j) => { if (j !== i && o.distanceTo(s) < 2 * R) poly = clipHalf(poly, s, o); });
    return { site: s, poly };
  });
  // rétrécit un polygone vers son centre d'une distance donnée (approximation suffisante pour des îlots convexes)
  const centroid = poly => poly.reduce((a, p) => a.add(p), V(0, 0, 0)).multiplyScalar(1 / poly.length);
  function inset(poly, d) {
    const out = [];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[(i - 1 + poly.length) % poly.length], p = poly[i], b = poly[(i + 1) % poly.length];
      const n1 = V(a.z - p.z, 0, p.x - a.x).normalize(), n2 = V(p.z - b.z, 0, b.x - p.x).normalize();   // normales des deux côtés
      const c = centroid(poly); if (n1.dot(c.clone().sub(p)) < 0) n1.negate(); if (n2.dot(c.clone().sub(p)) < 0) n2.negate();
      const bis = n1.clone().add(n2).normalize(), cosH = Math.max(.4, n1.dot(bis));   // décalage d / cos(demi-angle)
      out.push(p.clone().add(bis.multiplyScalar(d / cosH)));
    }
    return out;
  }
  const area = poly => Math.abs(poly.reduce((s, p, i) => { const q = poly[(i + 1) % poly.length]; return s + p.x * q.z - q.x * p.z; }, 0) / 2);
  function inPoly(poly, x, z) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const a = poly[i], b = poly[j];
      if ((a.z > z) !== (b.z > z) && x < (b.x - a.x) * (z - a.z) / (b.z - a.z) + a.x) inside = !inside;
    }
    return inside;
  }
  // îlots dégagés en place : celui de chaque lieu
  Object.values(Q).forEach(q => { q.block = blocks.find(b => b.site.distanceTo(q.c) < .01); q.poly = q.block.poly; });
  const ssBlock = blocks.find(b => b.site.distanceTo(SAINT_SERNIN) < .01);
  const anyPlaza = (x, z) => Object.values(Q).some(q => inPoly(q.poly, x, z));
  const inZoneRand = q => { for (let n = 0; n < 60; n++) { const p = V(q.c.x + (rand() - .5) * 60, 0, q.c.z + (rand() - .5) * 60); if (inPoly(inset(q.poly, STREET / 2 + 2), p.x, p.z) && p.distanceTo(q.c) < q.r - 2) return p; } return q.c.clone(); };
  const inDisc = () => inZoneRand(Q.tronc);
  function polyPlate(poly, mat, y) {
    const sh = new THREE.Shape(poly.map(p => new THREE.Vector2(p.x, -p.z)));
    const m = new THREE.Mesh(new THREE.ShapeGeometry(sh), mat); m.rotation.x = -Math.PI / 2; m.position.y = y; m.receiveShadow = true; scene.add(m); return m;
  }

  /* ---------- Sol : la chaussée, le pavé des places ---------- */
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), M('#f1e7dd'));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -.3; ground.receiveShadow = true; scene.add(ground);
  ground.material.color.set('#cfe3bf');                                  // la campagne autour de la ville
  { const town = new THREE.Mesh(new THREE.CircleGeometry(CITY_R + 6, 64), M('#f1e7dd'));
    town.rotation.x = -Math.PI / 2; town.position.set(C.x, -.2, C.z); town.receiveShadow = true; scene.add(town); }
  Object.values(Q).forEach(q => polyPlate(inset(q.poly, STREET / 2 - 1), q.ground ? M(q.ground) : MAT.grass, .03));

  /* ---------- 3. Immeubles en bordure des rues, cour au centre ---------- */
  const cells = [];       // un immeuble = { x, z, w (façade), d (profondeur), h, rot }
  const courtMat = M('#bfe0b0'), courtTrees = [];
  const DEPTH = 7;
  blocks.forEach(b => {
    if (Object.values(Q).some(q => q.block === b) || b === ssBlock) return;
    const dC = b.site.distanceTo(C); if (dC > CITY_R) return;
    const lot = inset(b.poly, STREET / 2); if (lot.length < 3 || area(lot) < 40) return;
    const c = centroid(lot), center = dC < 110;
    const hMin = center ? 5 : 3, hMax = center ? 9.5 : 5.5;
    // une rangée d'immeubles le long de chaque côté d'un polygone (on laisse 2 m aux angles pour éviter les chevauchements)
    const row = (poly, h0, h1) => {
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i], e = poly[(i + 1) % poly.length], len = a.distanceTo(e); if (len < 4) continue;
        const dir = e.clone().sub(a).normalize(), n = V(-dir.z, 0, dir.x); if (n.dot(c.clone().sub(a)) < 0) n.negate();
        let t = 2;
        while (t < len - 3) {
          const w = Math.min(len - 2 - t, 5 + rand() * 4); if (w < 2.5) break;
          const p = a.clone().add(dir.clone().multiplyScalar(t + w / 2)).add(n.clone().multiplyScalar(DEPTH / 2));
          if (distRiver(p.x, p.z) > 15 && inPoly(poly, p.x, p.z)) cells.push({ x: p.x, z: p.z, w, d: DEPTH, h: h0 + rand() * (h1 - h0), rot: -Math.atan2(dir.z, dir.x) });
          t += w;
        }
      }
    };
    row(lot, hMin, hMax);                                                    // façades sur rue
    // Îlot dense comme dans le centre de Toulouse : une deuxième rangée, plus basse, derrière les façades
    const inner = inset(lot, DEPTH + 1), okInner = inner.length > 2 && inner.every(p => inPoly(lot, p.x, p.z));
    const second = okInner && area(inner) > 320;
    if (second) row(inner, hMin * .7, hMax * .75);
    // ce qui reste au cœur de l'îlot : un jardin planté d'arbres
    const court = second ? inset(lot, 2 * DEPTH + 1.6) : inset(lot, DEPTH + .5);
    if (court.length > 2 && court.every(p => inPoly(lot, p.x, p.z)) && area(court) > 30 && distRiver(c.x, c.z) > 20) {
      polyPlate(court, courtMat, .02);
      const cc = centroid(court), nT = Math.min(5, Math.floor(area(court) / 60));
      for (let k = 0, tries = 0; k < nT && tries < 30; tries++) {
        const tp = cc.clone().add(V((rand() - .5) * 14, 0, (rand() - .5) * 14));
        if (inPoly(inset(court, 1.6), tp.x, tp.z)) { courtTrees.push([tp.x, tp.z]); k++; }
      }
    }
  });
  /* ---------- Ponts : tracé ----------
     Six ponts perpendiculaires à la Garonne. De chaque côté, le pont se prolonge par une rue droite jusqu'à la première
     rue existante après la rampe : les immeubles sur ce tracé sont supprimés, la chaussée est dessinée plus bas.
     Ainsi chaque pont part d'une rue et arrive sur une rue, sans traverser de maison. */
  const DECK = 5, RAMP = 6, HALF = 12.5;                 // hauteur du tablier, longueur des rampes, demi-longueur plate
  const bridges = [];
  {
    const seen = new Set(), segs = [], key = p => Math.round(p.x * 10) + ',' + Math.round(p.z * 10);
    blocks.forEach(b => { if (b.site.distanceTo(C) > CITY_R) return; for (let i = 0; i < b.poly.length; i++) { const a = b.poly[i], e = b.poly[(i + 1) % b.poly.length], k = [key(a), key(e)].sort().join('|'); if (a.distanceTo(e) > .5 && !seen.has(k)) { seen.add(k); segs.push([a, e]); } } });
    const segDist = (x, z) => { let d = 1e9; for (const [a, e] of segs) { const L2 = a.distanceToSquared(e), t = Math.max(0, Math.min(1, ((x - a.x) * (e.x - a.x) + (z - a.z) * (e.z - a.z)) / L2)); d = Math.min(d, Math.hypot(x - a.x - (e.x - a.x) * t, z - a.z - (e.z - a.z) * t)); } return d; };
    [-150, -95, -40, 18, 75, 130].forEach(zz => {
      let t = 0, bd = 1e9; for (let u = 0; u <= 1; u += .001) { const q = river.getPointAt(u); if (Math.abs(q.z - zz) < bd) { bd = Math.abs(q.z - zz); t = u; } }
      const p = river.getPointAt(t), tg = river.getTangentAt(t), dir = V(-tg.z, 0, tg.x).normalize();
      const len = [-1, 1].map(sd => { for (let s0 = HALF + RAMP; s0 < 70; s0 += .5) { const x = p.x + dir.x * sd * s0, z = p.z + dir.z * sd * s0; if (segDist(x, z) < .8) return s0; } return null; });
      if (len.includes(null)) return;
      // pas de pont qui débouche sur une place ou sur Saint-Sernin
      for (let s0 = -len[0]; s0 <= len[1]; s0 += 1) { const x = p.x + dir.x * s0, z = p.z + dir.z * s0; if (anyPlaza(x, z) || Math.hypot(x - SAINT_SERNIN.x, z - SAINT_SERNIN.z) < 22) return; }
      bridges.push({ p, dir, half: HALF, len, rot: Math.atan2(-dir.z, dir.x) });
    });
  }
  const allBridges = bridges.slice();                    // tous les ponts, Pont Neuf compris (il sera mis à part plus bas)
  // dans le couloir d'un pont ? (s = position le long du pont, w = écart latéral)
  const inCorridor = (x, z, m = 0) => allBridges.some(B => { const dx = x - B.p.x, dz = z - B.p.z, s0 = dx * B.dir.x + dz * B.dir.z, w = -dx * B.dir.z + dz * B.dir.x;
    return s0 > -B.len[0] - m && s0 < B.len[1] + m && Math.abs(w) < STREET / 2 + m; });
  // les immeubles sur le tracé sont supprimés
  for (let i = cells.length - 1; i >= 0; i--) {
    const c = cells[i], ux = Math.cos(c.rot), uz = -Math.sin(c.rot); let hitC = false;
    for (let a = -.5; a <= .5 && !hitC; a += .25) for (let b = -.5; b <= .5 && !hitC; b += .25) {
      const x = c.x + ux * a * c.w - uz * b * c.d, z = c.z + uz * a * c.w + ux * b * c.d; if (inCorridor(x, z, .6)) hitC = true; }
    if (hitC) cells.splice(i, 1);
  }
  for (let i = courtTrees.length - 1; i >= 0; i--) if (inCorridor(courtTrees[i][0], courtTrees[i][1], 2)) courtTrees.splice(i, 1);

  const boxGeo = new THREE.BoxGeometry(1, 1, 1); boxGeo.translate(0, .5, 0);
  const roofShape = new THREE.Shape(); roofShape.moveTo(-.5, 0); roofShape.lineTo(.5, 0); roofShape.lineTo(0, .5); roofShape.lineTo(-.5, 0);
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: 1, bevelEnabled: false }); roofGeo.translate(0, 0, -.5);
  // Façade toulousaine : brique, fenêtres hautes et volets bleu pastel (texture dessinée une fois, teintée par immeuble)
  const facade = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#ece4e0'; g.fillRect(0, 118, 128, 10);                       // soubassement
    for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) {
      const x = 14 + k * 40, y = 18 + r * 52;
      g.fillStyle = '#a9cbe4'; g.fillRect(x - 7, y, 6, 30); g.fillRect(x + 15, y, 6, 30);   // volets
      g.fillStyle = '#5f5a78'; g.fillRect(x, y, 14, 30);                                   // fenêtre
      g.fillStyle = '#fff6ec'; g.fillRect(x - 2, y + 30, 18, 3);                           // appui
    }
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  })();
  const bodies = new THREE.InstancedMesh(boxGeo, M('#ffffff', { map: facade }), cells.length);
  const roofs = new THREE.InstancedMesh(roofGeo, M('#ffffff'), cells.length);
  [bodies, roofs].forEach(m => { m.castShadow = m.receiveShadow = true; scene.add(m); });
  cells.forEach((c, i) => {
    c.delay = Math.hypot(c.x - C.x, c.z - C.z) / 240 * 1.6 + rand() * .4; // la ville pousse depuis le Capitole
    // autour de chaque place, les toits prennent la couleur du quartier : en vue d'ensemble on repère les quartiers
    const wall = new THREE.Color(pick(BRICKS)), roof = new THREE.Color(pick(['#e48a76', '#ea9a80', '#d97f6c', '#f0a98f']));
    for (const [k, col] of [['dev', '#7fb8f5'], ['form', '#ab95ee'], ['pm', '#74cfae'], ['ent', '#efbd55']]) {
      const q = Q[k], d = Math.hypot(c.x - q.c.x, c.z - q.c.z), f = Math.min(1, Math.max(0, (q.r + 62 - d) / 30));
      if (f > 0) { roof.lerp(new THREE.Color(col), f); wall.lerp(new THREE.Color('#fbf3ec'), f * .45); }
    }
    bodies.setColorAt(i, wall);
    roofs.setColorAt(i, roof);
  });
  // w = largeur de façade (le long de la rue), d = profondeur ; le faîtage du toit suit la façade
  function placeBuildings(time) {
    cells.forEach((c, i) => {
      const k = reduce ? 1 : Math.min(1, Math.max(0, (time - c.delay) / .7));
      const e = 1 - Math.pow(1 - k, 3), h = Math.max(0.001, c.h * e);
      dummy.position.set(c.x, 0, c.z); dummy.rotation.set(0, c.rot, 0); dummy.scale.set(c.w - .25, h, c.d); dummy.updateMatrix();
      bodies.setMatrixAt(i, dummy.matrix);
      dummy.position.y = h; dummy.rotation.set(0, c.rot + Math.PI / 2, 0); dummy.scale.set(c.d + .3, 2.2 * e + .001, c.w - .1); dummy.updateMatrix();
      roofs.setMatrixAt(i, dummy.matrix);
    });
    bodies.instanceMatrix.needsUpdate = roofs.instanceMatrix.needsUpdate = true;
  }
  placeBuildings(0);

  /* ---------- Les rues : frontières entre îlots (segments), pour les piétons et les voitures ---------- */
  const streets = [];
  blocks.forEach(b => { if (b.site.distanceTo(C) > CITY_R - 10) return; for (let i = 0; i < b.poly.length; i++) { const a = b.poly[i], e = b.poly[(i + 1) % b.poly.length]; if (a.distanceTo(e) > 12) streets.push([a, e]); } });

  /* ---------- Chaussée : chaque frontière entre deux îlots est une rue goudronnée ---------- */
  {
    const seen = new Set(), segs = [];
    const key = p => Math.round(p.x * 10) + ',' + Math.round(p.z * 10);
    blocks.forEach(b => {
      if (b.site.distanceTo(C) > CITY_R) return;
      for (let i = 0; i < b.poly.length; i++) {
        const a = b.poly[i], e = b.poly[(i + 1) % b.poly.length], k = [key(a), key(e)].sort().join('|');
        if (a.distanceTo(e) < .5 || seen.has(k)) continue; seen.add(k); segs.push([a, e]);
      }
    });
    // un seul maillage pour toutes les rues : un rectangle par tronçon, prolongé aux extrémités pour fermer les carrefours
    const RW = STREET - 2.2, pos = [], dash = [];
    segs.forEach(([a, e]) => {
      const dir = e.clone().sub(a).normalize(), n = V(-dir.z, 0, dir.x).multiplyScalar(RW / 2), ext = dir.clone().multiplyScalar(RW / 2);
      const a2 = a.clone().sub(ext), e2 = e.clone().add(ext);
      const q = [a2.clone().add(n), e2.clone().add(n), e2.clone().sub(n), a2.clone().sub(n)];
      [0, 1, 2, 0, 2, 3].forEach(j => pos.push(q[j].x, .015, q[j].z));
      // pointillés blancs au milieu de la chaussée, sauf sur les places et au-dessus de la Garonne
      const len = a.distanceTo(e);
      for (let t = 3; t < len - 3; t += 6) { const p = a.clone().add(dir.clone().multiplyScalar(t)); if (distRiver(p.x, p.z) > 12 && !anyPlaza(p.x, p.z)) dash.push([p, Math.atan2(dir.x, dir.z)]); }
    });
    // rue d'accès de chaque pont, de la rampe jusqu'à la rue existante (un peu au-dessus des jardins qu'elle traverse)
    allBridges.forEach(B => [-1, 1].forEach((sd, k) => {
      const n = V(-B.dir.z, 0, B.dir.x).multiplyScalar(RW / 2), a = B.p.clone().addScaledVector(B.dir, sd * (B.half - 1)), e = B.p.clone().addScaledVector(B.dir, sd * (B.len[k] + RW / 2));
      const q = [a.clone().add(n), e.clone().add(n), e.clone().sub(n), a.clone().sub(n)];
      [0, 1, 2, 0, 2, 3].forEach(j => pos.push(q[j].x, .03, q[j].z));
    }));
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
    const road = new THREE.Mesh(g, M('#a9adbb', { side: THREE.DoubleSide })); road.receiveShadow = true; scene.add(road);
    const dm = new THREE.InstancedMesh(new THREE.PlaneGeometry(.35, 2.6).rotateX(-Math.PI / 2), M('#ffffff'), dash.length);
    dash.forEach(([p, r], i) => { dummy.position.set(p.x, .03, p.z); dummy.rotation.set(0, r, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); dm.setMatrixAt(i, dummy.matrix); });
    scene.add(dm);
  }
  // Lampadaires dans l'angle libre de certains îlots (les immeubles s'arrêtent à 2 m des coins)
  const lamps = [], lampMat = M('#fff1c9', { emissive: '#ffd98a', emissiveIntensity: .6 });   // s'illumine à la dernière étape
  blocks.forEach(b => {
    if (Object.values(Q).some(q => q.block === b) || b.site.distanceTo(C) > CITY_R - 20) return;
    const lot = inset(b.poly, STREET / 2), c = centroid(lot);
    lot.forEach(p => { if (rand() < .35) { const q = p.clone().lerp(c, .6 / Math.max(1, p.distanceTo(c))); if (distRiver(q.x, q.z) > 14 && !inCorridor(q.x, q.z, 1)) lamps.push(q); } });
  });
  {
    const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(.09, .12, 4.2, 6).translate(0, 2.1, 0), MAT.dark, lamps.length);
    const bulb = new THREE.InstancedMesh(new THREE.SphereGeometry(.32, 8, 6), lampMat, lamps.length);
    lamps.forEach((p, i) => {
      dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1);
      dummy.position.set(p.x, 0, p.z); dummy.updateMatrix(); pole.setMatrixAt(i, dummy.matrix);
      dummy.position.set(p.x, 4.3, p.z); dummy.updateMatrix(); bulb.setMatrixAt(i, dummy.matrix);
    });
    scene.add(pole, bulb);
  }

  /* ---------- Ponts : construction (tracé calculé plus haut) ---------- */
  bridges.forEach(b => {
    // piles : de part et d'autre de l'eau, là où l'on arrive sur le quai
    b.piers = [-1, 1].map(sd => { let s0 = 0; while (s0 < b.half && distRiver(b.p.x + b.dir.x * sd * s0, b.p.z + b.dir.z * sd * s0) < 8.6) s0 += .2; return sd * s0; });
    b.ends = [-1, 1].map((sd, k) => b.p.clone().addScaledVector(b.dir, sd * b.len[k]));     // arrivée sur la rue existante
  });
  // le Pont Neuf : le plus proche du Capitole ; les autres, des tabliers simples
  bridges.sort((a, b) => a.p.distanceTo(C) - b.p.distanceTo(C));
  const PONT_NEUF = bridges.shift();
  function bridgeShape(g, mat, width, B) {
    box(B.half * 2, .6, width, mat, 0, DECK - .6, 0, g);                                    // tablier plat
    const L = Math.hypot(RAMP, DECK), a = Math.atan2(DECK, RAMP);
    [-1, 1].forEach(sd => {
      const r = new THREE.Mesh(new THREE.BoxGeometry(L, .6, width), mat);
      r.position.set(sd * (B.half + RAMP / 2), DECK / 2 - .3, 0); r.rotation.z = -sd * a; r.castShadow = r.receiveShadow = true; g.add(r);
      box(B.half * 2, .5, .3, MAT.cream, 0, DECK, sd * (width / 2 - .15), g);            // garde-corps
    });
    B.piers.forEach(x => box(1.4, DECK - .6, width - .6, mat, x, 0, 0, g));               // piles sur les quais
  }
  bridges.forEach(b => {
    const g = new THREE.Group(); g.position.copy(b.p); g.rotation.y = b.rot; scene.add(g);
    bridgeShape(g, MAT.stone, STREET, b);
  });

  /* ---------- Arbres sur les quais de la Garonne, bosquets de la Cité de l'espace ---------- */
  const trees = [...courtTrees];                                          // arbres des cours intérieures
  for (let i = 0; i < 500; i += 4) {
    const t = i / 500, p = river.getPointAt(t), tg = river.getTangentAt(t), n = V(-tg.z, 0, tg.x);
    [-13, 13].forEach(o => trees.push([p.x + n.x * o, p.z + n.z * o]));   // ceux qui gênent un pont ou une rue sont retirés à la plantation
  }
  { const lot = inset(Q.pm.poly, STREET / 2 + 2); for (let k = 0; k < 400 && trees.length < 9999; k++) { const p = V(PM.x + (rand() - .5) * 120, 0, PM.z + (rand() - .5) * 120); if (inPoly(lot, p.x, p.z) && p.distanceTo(PM) > Q.pm.r) trees.push([p.x, p.z]); } }


  /* ---------- Péniches qui descendent et remontent la Garonne ---------- */
  const boats = [];
  [['#e85d75', .1, 1], ['#5b8def', .45, -1], ['#3fb58f', .75, 1]].forEach(([col, t, way]) => {
    const g = new THREE.Group(); dyn(g);
    box(2.6, .9, 9, M('#fff6ec'), 0, -.2, 0, g); box(2.2, 1.2, 4, M(col), 0, .7, -1, g); box(2.3, .2, 4.1, MAT.white, 0, 1.9, -1, g);
    scene.add(g); boats.push({ g, t, way, off: way * 2.6, s: .006 + rand() * .004 });
  });

  /* ---------- Circulation : tronçons de rue sans rivière ni place ---------- */
  const traffic = [];
  const pathOK = pts => pts.every(p => distRiver(p.x, p.z) > 13 && !anyPlaza(p.x, p.z) && p.distanceTo(C) < CITY_R - 10);
  // décale une polyligne d'une distance latérale (voie de circulation ou trottoir)
  const offsetLine = (pts, off) => pts.map((p, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], d = b.clone().sub(a).normalize(); return V(p.x - d.z * off, 0, p.z + d.x * off); });
  // un tronçon de rue (frontière entre deux îlots), échantillonné en n points
  const streetPiece = n => { const [a, e] = pick(streets); return Array.from({ length: n }, (_, i) => a.clone().lerp(e, .1 + .8 * i / (n - 1))); };


  /* ---------- Écran avec du code qui défile (texture canvas animée) ---------- */
  const CODE_LINES = [
    ["k", "Route::get('/api/projets', [ProjetController::class, 'index']);"],
    ["c", "// tri du backlog par valeur métier"],
    ["p", "const backlog = stories.sort((a, b) => b.valeur - a.valeur);"],
    ["k", "async function deployer(env) {"], ["p", "  await pipeline.run(env);"], ["k", "}"],
    ["c", "# FastAPI : assistant avec appel de fonctions"], ["s", "@app.post('/assistant')"],
    ["p", "SELECT id, ST_AsGeoJSON(trajet) FROM tournees;"], ["k", "docker compose up -d --build"],
    ["p", "export default defineComponent({ name: 'Tableau' })"], ["c", "// tests : 128 passés, 0 échec"],
  ];
  const screens = [];
  function codeScreen(w, h, x, y, z, ry = 0, accent = '#89c2ff') {
    const c = document.createElement('canvas'); c.width = 512; c.height = Math.round(512 * h / w);
    const tex = new THREE.CanvasTexture(c);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex }));
    m.position.set(x, y, z); m.rotation.y = ry; scene.add(m);
    const sx = { k: '#c8b8ff', p: '#e9eefc', c: '#8fa0bf', s: '#f4a9b8' };
    let off = Math.floor(rand() * 40);
    const draw = () => {
      const g = c.getContext('2d'); g.fillStyle = '#2b2840'; g.fillRect(0, 0, c.width, c.height);
      g.fillStyle = accent; g.fillRect(0, 0, c.width, 14);
      g.font = '19px monospace';
      for (let r = 0; r < Math.ceil(c.height / 30); r++) {
        const pair = CODE_LINES[(off + r) % CODE_LINES.length];
        g.fillStyle = '#5c5878'; g.fillText(String((off + r) % 99 + 1).padStart(2, ' '), 10, 44 + r * 30);
        g.fillStyle = sx[pair[0]]; g.fillText(pair[1], 50, 44 + r * 30);
      }
      tex.needsUpdate = true;
    };
    draw(); screens.push(() => { off++; draw(); });
    return m;
  }

  /* ---------- Personnages low-poly animés ----------
     Chaque personne tire au sort sa couleur de peau, sa coiffure (courte, longue, chignon, rasée), la couleur
     de ses cheveux, son haut et son bas : la foule est variée. Les yeux donnent un visage et le sens de la marche. */
  const SKINS = ['#f6d5c0', '#ecbf9f', '#d39c76', '#a8714f', '#7a4b35', '#5a3626'].map(c => M(c));
  const HAIRS = ['#2a2220', '#2a2220', '#4a3426', '#6e4a30', '#a87a48', '#e2c27e', '#b0502f', '#8c8a96'].map(c => M(c));
  const TOPS = ['#5b8def', '#e85d75', '#3fb58f', '#f2a541', '#8e6cd8', '#2f3e5c', '#ffffff', '#e9dcc8', '#d9534f', '#4fb3c8', '#f2a5c4', '#6b8f3a'].map(c => M(c));
  const BOTTOMS = ['#3d5a8a', '#2f4a78', '#2b2a33', '#c8b48f', '#6b6b78', '#5a4a3c'].map(c => M(c));
  const shirtMats = TOPS;
  const headGeo = new THREE.IcosahedronGeometry(.42, 1), torsoGeo = new THREE.CylinderGeometry(.42, .5, 1.25, 7),
        limbGeo = new THREE.BoxGeometry(.24, .9, .24);
  limbGeo.translate(0, -.45, 0); // pivot en haut : hanche ou épaule
  const capGeo = new THREE.SphereGeometry(.47, 10, 6, 0, Math.PI * 2, 0, Math.PI * .55);   // calotte de cheveux
  const longGeo = new THREE.BoxGeometry(.8, .75, .22), bunGeo = new THREE.IcosahedronGeometry(.2, 0);
  const eyeGeo = new THREE.BoxGeometry(.08, .1, .04), eyeMat = M('#2b2840'), shoeMat = M('#3b3346');
  const people = [];
  function person(x, z, opts = {}) {
    const g = new THREE.Group(), shirt = opts.shirt || pick(TOPS), skin = pick(SKINS), pants = pick(BOTTOMS);
    const legL = new THREE.Mesh(limbGeo, pants), legR = new THREE.Mesh(limbGeo, pants);
    legL.position.set(-.2, .95, 0); legR.position.set(.2, .95, 0);
    const torso = new THREE.Mesh(torsoGeo, shirt); torso.position.y = 1.6;
    const armL = new THREE.Mesh(limbGeo, shirt), armR = new THREE.Mesh(limbGeo, shirt);
    armL.position.set(-.58, 2.12, 0); armR.position.set(.58, 2.12, 0);
    // mains couleur peau au bout des bras
    [armL, armR].forEach(a => { const h = new THREE.Mesh(eyeGeo, skin); h.scale.set(2.6, 1.6, 4); h.position.y = -.95; a.add(h); });
    const head = new THREE.Mesh(headGeo, skin); head.position.y = 2.65;
    // coiffure : la calotte couvre le haut et l'arrière du crâne
    const hm = pick(HAIRS), style = rand();
    if (style > .08) { const cap = new THREE.Mesh(capGeo, hm); cap.position.set(0, .04, -.05); cap.rotation.x = -.35; head.add(cap); }
    if (style > .55) { const lg = new THREE.Mesh(longGeo, hm); lg.position.set(0, -.35, -.3); head.add(lg); }          // cheveux longs
    else if (style > .45) { const bn = new THREE.Mesh(bunGeo, hm); bn.position.set(0, .42, -.3); head.add(bn); }      // chignon
    // yeux
    [-.15, .15].forEach(ex => { const e = new THREE.Mesh(eyeGeo, eyeMat); e.position.set(ex, .05, .39); head.add(e); });
    g.add(legL, legR, torso, armL, armR, head);
    torso.castShadow = head.castShadow = true; // ombres limitées au tronc et à la tête (performances)
    if (opts.seated) { legL.rotation.x = legR.rotation.x = -Math.PI / 2; g.position.y = -.5; }
    g.position.x = x; g.position.z = z; g.scale.setScalar(opts.scale || 1);
    dyn(g);                                                   // une personne n'est pas un mur pour les autres marcheurs
    (opts.parent || scene).add(g);
    const P = { g, legL, legR, armL, armR, head, phase: rand() * 6.28, ...opts };
    people.push(P); return P;
  }
  // Les marcheurs sont créés en fin de construction, une fois tous les obstacles connus :
  // un trajet qui traverse un mur, une voiture, un arbre ou la Garonne est refusé, puis retiré au sort.
  const pendingWalkers = [];
  function makeWalker(a, b, opts) { const P = person(a.x, a.z, opts); P.walk = { a, b, t: rand() * 6, speed: .25 + rand() * .2 }; return P; }
  function walker(a, b, opts = {}) { return opts.parent ? makeWalker(a, b, opts) : pendingWalkers.push({ gen: () => [a, b], opts, tries: 1 }); }
  function walkerRand(gen, opts = {}, tries = 40) { pendingWalkers.push({ gen, opts, tries }); }
  // point au hasard dans un disque (pour les promeneurs d'un quartier)

  /* ======================= PROFIL : PLACE DU CAPITOLE ======================= */
  // Le Capitole, au fond de la place
  const CAP = V(C.x, 0, C.z - 16);
  box(30, 10, 8, M('#f1a497'), CAP.x, 0, CAP.z);
  box(14, 13.5, 9, M('#f4b3a6'), CAP.x, 0, CAP.z + .5);
  box(30.6, .8, 8.6, MAT.cream, CAP.x, 10, CAP.z);
  for (let i = 0; i < 8; i++) cyl(.38, .42, 9, 10, MAT.cream, CAP.x - 5.6 + i * 1.6, 1.8, CAP.z + 5.4);
  box(14.4, 1.8, 1, MAT.cream, CAP.x, 0, CAP.z + 5.4);
  const pedShape = new THREE.Shape(); pedShape.moveTo(-7.4, 0); pedShape.lineTo(7.4, 0); pedShape.lineTo(0, 2.6); pedShape.lineTo(-7.4, 0);
  const ped = new THREE.Mesh(new THREE.ExtrudeGeometry(pedShape, { depth: 1, bevelEnabled: false }), MAT.cream);
  ped.position.set(CAP.x, 13.5, CAP.z + 4.5); ped.castShadow = true; scene.add(ped);
  box(30.6, 2.2, 7.8, MAT.roofGrey, CAP.x, 10.8, CAP.z);
  // Croix occitane dorée au centre de la place
  const cross = new THREE.Group(); cross.position.set(C.x, .1, C.z + 6); scene.add(cross);
  for (let a = 0; a < 4; a++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(2, .08, 7), MAT.gold);
    arm.position.set(Math.sin(a * Math.PI / 2) * 3.2, 0, Math.cos(a * Math.PI / 2) * 3.2); arm.rotation.y = a * Math.PI / 2; cross.add(arm);
    [-1, 0, 1].forEach(o => { const ball = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .12, 14), MAT.gold);
      const ang = a * Math.PI / 2 + o * .28; ball.position.set(Math.sin(ang) * 7.3, 0, Math.cos(ang) * 7.3); cross.add(ball); });
  }
  // Études : ENSEEIHT, sur le côté de la place
  const N7 = V(C.x - 17, 0, C.z + 5);
  box(11, 7, 7, M('#efa092'), N7.x, 0, N7.z); box(11.4, .6, 7.4, MAT.cream, N7.x, 7, N7.z);
  for (let i = 0; i < 3; i++) box(1.8, 3.2, .2, MAT.glass, N7.x - 3.2 + i * 3.2, 2.4, N7.z + 3.6);
  for (let i = 0; i < 8; i++) walkerRand(() => [inDisc(C, HUB - 3), inDisc(C, HUB - 3)]);

  // Basilique Saint-Sernin, au nord : repère toulousain
  const ss = new THREE.Group(); ss.position.copy(SAINT_SERNIN); scene.add(ss);
  box(26, 6, 8, M('#f0a698'), 0, 0, 0, ss); box(8, 5, 18, M('#f0a698'), 0, 0, 0, ss);
  [[4.6, 3.4], [3.9, 2.8], [3.2, 2.8], [2.5, 2.6]].reduce((y, [r, h]) => { cyl(r * .86, r, h, 8, M('#efa294'), 0, y, 0, ss); return y + h; }, 6);
  cyl(0, 1.6, 6, 8, M('#e48a76'), 0, 17.6, 0, ss);

  // Pont Neuf sur la Garonne
  const pn = new THREE.Group(); scene.add(pn);
  { pn.position.copy(PONT_NEUF.p); pn.rotation.y = PONT_NEUF.rot;   // le pont le plus proche du Capitole
    // pont en brique surélevé ; ses oculi caractéristiques percent les piles au-dessus de l'eau
    bridgeShape(pn, M('#eda394'), STREET + 1, PONT_NEUF);
    PONT_NEUF.piers.forEach(x => [1, -1].forEach(f => { const o = new THREE.Mesh(new THREE.TorusGeometry(.5, .14, 6, 14), MAT.cream); o.position.set(x, 2.6, f * (STREET / 2 + .2)); pn.add(o); }));
    // deux promeneurs sur la partie plate du tablier, chacun sur son trottoir (ils ne se croisent jamais)
    for (let i = 0; i < 2; i++) walker(V(-PONT_NEUF.half + 1.5, DECK, (i % 2 ? 2.6 : -2.6)), V(PONT_NEUF.half - 1.5, DECK, (i % 2 ? 2.6 : -2.6)), { parent: pn, scale: .8 });
  }

  // Terrasses de café en bas de la place : tables, chaises et parasols
  [[-12, 19], [12, 19]].forEach(([ox, oz]) => {
    for (let k = 0; k < 3; k++) {
      const x = C.x + ox + (k - 1) * 4.2, z = C.z + oz;
      cyl(.7, .7, .1, 10, MAT.white, x, .9, z); cyl(.08, .08, .9, 6, MAT.dark, x, 0, z);
      cyl(.05, .05, 2.6, 6, MAT.dark, x, 1, z); cyl(0, 1.7, .7, 10, k % 2 ? M('#e85d75') : M('#fff6ec'), x, 3.5, z);
      const cl = person(x - 1, z, { seated: true, scale: .85 }); cl.g.rotation.y = Math.PI / 2; cl.idle = true;
    }
  });

  /* ======================= QUARTIER 01 : DÉVELOPPEMENT ======================= */
  // Les trois entreprises, dans l'ordre du parcours, reliées par un flux de données
  const WEB = V(DV.x - 16, 0, DV.z + 4), CG = V(DV.x, 0, DV.z - 12), AP = V(DV.x + 16, 0, DV.z + 4);
  // Webinage : agence
  box(12, 7, 8, M('#f4b8aa'), WEB.x, 0, WEB.z); box(12.4, .6, 8.4, MAT.dev, WEB.x, 7, WEB.z);
  for (let i = 0; i < 3; i++) box(2, 3, .2, MAT.glass, WEB.x - 3.4 + i * 3.4, 2.2, WEB.z + 4.1);
  // tour de verre du quartier des affaires (décor)
  box(10, 26, 10, MAT.glass, CG.x, 0, CG.z);
  for (let y = 3; y < 26; y += 3) box(10.3, .35, 10.3, M('#e9f3ff'), CG.x, y, CG.z);
  box(10.6, 1.2, 10.6, MAT.dev, CG.x, 26, CG.z);
  // Allopass : bureaux avec un grand écran de code
  box(13, 10, 9, M('#f6c2b4'), AP.x, 0, AP.z); box(13.4, .8, 9.4, MAT.dev, AP.x, 10, AP.z);
  codeScreen(9, 5.4, AP.x, 5.6, AP.z + 4.56, 0, '#89c2ff');
  // Compétences techniques : une pile de conteneurs (Docker), au premier plan du quartier
  const STACK = V(DV.x, 0, DV.z + 16);
  const contCols = ['#89c2ff', '#86d9bd', '#b9a6f4', '#f6b8a8', '#f3d38b', '#a0e0e8'];
  [[-3.2, 0], [3.2, 0], [0, 0], [-1.6, 2.6], [1.6, 2.6], [0, 5.2]].forEach(([dx, y], i) => { box(3, 2.4, 6, M(contCols[i]), STACK.x + dx * 1.05, y, STACK.z); });
  // Flux de données entre les bâtiments du quartier
  const links = [[V(WEB.x, 7.8, WEB.z), V(CG.x, 27, CG.z)], [V(CG.x, 27, CG.z), V(AP.x, 11, AP.z)]]
    .map(([a, b]) => new THREE.QuadraticBezierCurve3(a, a.clone().lerp(b, .5).add(V(0, 8, 0)), b));
  links.forEach(c => { const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(c.getPoints(40)), new THREE.LineDashedMaterial({ color: '#6aa9f2', dashSize: .8, gapSize: .6 })); l.computeLineDistances(); scene.add(l); });
  const packets = links.flatMap(c => [0, .5].map(o => { const m = dyn(new THREE.Mesh(new THREE.BoxGeometry(.6, .6, .6), MAT.dev)); scene.add(m); return { c, o, m }; }));
  for (let i = 0; i < 5; i++) walkerRand(() => [inZoneRand(Q.dev), inZoneRand(Q.dev)]);

  /* ======================= QUARTIER 02 : FORMATION ======================= */
  // Campus Holberton, salle de cours en plein air : un formateur, une soixantaine d'apprenants
  const HB = V(FO.x, 0, FO.z - 16);
  box(24, 10, 8, M('#f7f1ff'), HB.x, 0, HB.z); box(24.4, 1, 8.4, MAT.former, HB.x, 10, HB.z);
  for (let i = 0; i < 5; i++) box(3, 5.6, .2, MAT.glass, HB.x - 9.6 + i * 4.8, 2.4, HB.z + 4.1);
  box(10.6, 6, .4, MAT.dark, HB.x, 1.2, HB.z + 6.4);
  codeScreen(9.8, 5.2, HB.x, 4.3, HB.z + 6.65, 0, '#b9a6f4');
  const teacher = person(HB.x + 7, HB.z + 8, { shirt: MAT.former }); teacher.teach = true;
  const deskGeo = new THREE.BoxGeometry(1.5, .12, .9), lapGeo = new THREE.BoxGeometry(.9, .55, .06), lapMat = new THREE.MeshBasicMaterial({ color: '#cfe6ff' });
  for (let r = 0; r < 6; r++) for (let c = 0; c < 10; c++) {
    const x = FO.x - 12.6 + c * 2.8, z = FO.z - 4 + r * 2.6;
    const d = new THREE.Mesh(deskGeo, MAT.stone); d.position.set(x, 1.5, z - .7); d.castShadow = true; scene.add(d);
    const l = new THREE.Mesh(lapGeo, lapMat); l.position.set(x, 1.85, z - .95); l.rotation.x = -.25; scene.add(l);
    const s = person(x, z, { seated: true, scale: .8 }); s.g.rotation.y = Math.PI; s.student = true;
  }
  // Stage « Crée ton app avec l'IA » : table ronde et assistant IA flottant
  const IA = V(FO.x + 18, 0, FO.z + 20);
  cyl(4, 4, 1.6, 24, MAT.stone, IA.x, 0, IA.z);
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, s = person(IA.x + Math.sin(a) * 5.4, IA.z + Math.cos(a) * 5.4, { seated: true, scale: .85 });
    s.g.rotation.y = a + Math.PI; s.student = true;
    const l = new THREE.Mesh(lapGeo, lapMat); l.position.set(IA.x + Math.sin(a) * 3.4, 1.95, IA.z + Math.cos(a) * 3.4); l.rotation.y = a; scene.add(l);
  }
  const brain = dyn(new THREE.Group()); brain.position.set(IA.x, 6.5, IA.z); scene.add(brain);
  brain.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 0), M('#d6cbff', { emissive: '#8f78f0', emissiveIntensity: .35 })));
  const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.1, 1)), new THREE.LineBasicMaterial({ color: '#7457e8', transparent: true, opacity: .6 }));
  brain.add(wire);
  const orbit = new THREE.Group(); brain.add(orbit);
  for (let i = 0; i < 6; i++) { const o = new THREE.Mesh(new THREE.OctahedronGeometry(.28, 0), MAT.former); const a = i / 6 * Math.PI * 2; o.position.set(Math.cos(a) * 3.1, Math.sin(a * 2) * .5, Math.sin(a) * 3.1); orbit.add(o); }
  for (let i = 0; i < 4; i++) walkerRand(() => [inZoneRand(Q.form), inZoneRand(Q.form)]);

  /* ======================= QUARTIER 03 : GESTION DE PROJET — façon Cité de l'espace =======================
     Une mission spatiale, c'est de la gestion de projet : un tableau de mission (Kanban), une fusée Ariane 5
     sur son pas de tir, un planétarium, la télémétrie (indicateurs) et le compte à rebours des jalons. */
  // Fusée Ariane 5 sur son pas de tir
  const RK = V(PM.x + 14, 0, PM.z - 12);
  cyl(6, 6.4, .8, 24, M('#cfcbd9'), RK.x, 0, RK.z);                                   // pas de tir
  cyl(2.2, 2.2, 22, 20, MAT.white, RK.x, .8, RK.z);                                   // étage principal
  cyl(0, 2.2, 5, 20, MAT.white, RK.x, 22.8, RK.z);                                    // coiffe
  cyl(2.25, 2.25, 1.2, 20, MAT.piloter, RK.x, 18, RK.z);                              // bandeau à la couleur du quartier
  [-3.4, 3.4].forEach(dx => { cyl(1, 1, 13, 14, MAT.white, RK.x + dx, .8, RK.z); cyl(0, 1, 2.6, 14, M('#f6b8a8'), RK.x + dx, 13.8, RK.z); }); // propulseurs
  box(1, 26, 1, M('#b8b2cc'), RK.x, 0, RK.z - 4.6);                                   // tour de lancement
  // Planétarium : grand dôme blanc
  const PL = V(PM.x - 20, 0, PM.z + 4);
  cyl(7.4, 7.4, 1, 32, M('#e9e4f5'), PL.x, 0, PL.z);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(6.8, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), MAT.white);
  dome.position.set(PL.x, 1, PL.z); dome.castShadow = dome.receiveShadow = true; scene.add(dome);

  // Grand tableau Kanban : un ticket voyage de « À faire » à « Livré »
  const board = new THREE.Group(); board.position.set(PM.x - 4, 0, PM.z - 10); scene.add(board);
  box(15, 8.4, .5, MAT.white, 0, 1.4, 0, board);
  box(.4, 1.4, .4, MAT.dark, -6, 0, 0, board); box(.4, 1.4, .4, MAT.dark, 6, 0, 0, board);
  const colX = [-5.4, -1.8, 1.8, 5.4];
  colX.forEach(x => box(3.2, .5, .1, MAT.dark, x, 9, .3, board));
  const cardMats = ['#f6b8a8', '#f3d38b', '#b9a6f4', '#86d9bd', '#89c2ff'].map(c => M(c));
  [4, 3, 2, 3].forEach((n, ci) => { for (let r = 0; r < n; r++) { const t = box(2.6, 1.3, .12, pick(cardMats), colX[ci], 7.2 - r * 1.6, .32, board); t.castShadow = false; } });
  const moving = dyn(box(2.6, 1.3, .14, cardMats[3], colX[0], 1.9, .42, board));
  // L'équipe devant le tableau, le Product Owner montre le backlog
  const po = person(PM.x - 3, PM.z - 6, { shirt: MAT.piloter }); po.pointing = true;
  for (let i = 0; i < 5; i++) { const p = person(PM.x - 8.4 + i * 2.2, PM.z - 1 + (i % 2), {}); p.g.rotation.y = Math.PI; p.idle = true; }
  // Indicateurs : un histogramme en 3D dont les barres respirent
  const KPI = V(PM.x + 14, 0, PM.z + 8);
  plate(14, 8, MAT.white, KPI.x, KPI.z, .08);
  const bars = ['#86d9bd', '#89c2ff', '#b9a6f4', '#f3d38b', '#f6b8a8'].map((col, i) => {
    const b = dyn(box(1.6, 1, 1.6, M(col), KPI.x - 5 + i * 2.5, 0, KPI.z)); b.userData.base = 2 + i * 1.3; return b;
  });
  // Compte à rebours des jalons : quatre bornes de plus en plus hautes, du cadrage (J-3) à la livraison (J0)
  for (let i = 0; i < 4; i++) { const x = PM.x - 12 + i * 5, z = PM.z + 18; cyl(.9, .9, 1.4 + i * 1.1, 8, M(['#f3d38b', '#b9a6f4', '#89c2ff', '#86d9bd'][i]), x, 0, z); }
  for (let i = 0; i < 4; i++) walkerRand(() => [inZoneRand(Q.pm), inZoneRand(Q.pm)]);

  /* ======================= QUARTIER 04 : ENTREPRISE ======================= */
  // Siège de l'entreprise
  const HQ = V(EN.x, 0, EN.z - 18);
  box(12, 9, 10, M('#ffffff'), HQ.x, 0, HQ.z);
  box(12.4, 1, 10.4, MAT.ent, HQ.x, 9, HQ.z);
  for (let i = 0; i < 3; i++) box(2.6, 5, .2, MAT.glass, HQ.x - 3.6 + i * 3.6, 1.6, HQ.z + 5.1);
  // Argo : parking de flotte, bornes de recharge, route en anneau, jauge carbone
  const A = V(EN.x - 12, 0, EN.z - 2);
  plate(22, 12, M('#b9b4cc'), A.x, A.z - 3, .07);
  for (let i = 0; i < 5; i++) box(.15, .02, 4, MAT.white, A.x - 8 + i * 4, .07, A.z - 4);
  const carCols = ['#89c2ff', '#86d9bd', '#f6b8a8', '#f3d38b', '#b9a6f4'];
  const wheelGeo = new THREE.CylinderGeometry(.42, .42, .3, 10); wheelGeo.rotateZ(Math.PI / 2);
  function car(color) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, .8, 3.8), M(color)); body.position.y = .75;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.6, .7, 2), M('#e9f3ff')); cab.position.set(0, 1.5, -.2);
    g.add(body, cab);
    [[-.95, 1.2], [.95, 1.2], [-.95, -1.2], [.95, -1.2]].forEach(([x, z]) => { const w = new THREE.Mesh(wheelGeo, MAT.dark); w.position.set(x, .42, z); g.add(w); });
    g.traverse(o => o.castShadow = true); scene.add(g); return g;
  }
  for (let i = 0; i < 4; i++) { const c = car(carCols[i]); c.position.set(A.x - 6 + i * 4, 0, A.z - 4); }
  for (let i = 0; i < 2; i++) { cyl(.3, .3, 2.2, 8, MAT.white, A.x - 6 + i * 8, 0, A.z - 7.2); box(.5, .5, .3, MAT.piloter, A.x - 6 + i * 8, 1.6, A.z - 6.9); }
  const drivers = [dyn(car(carCols[4])), dyn(car('#f2a5c4'))];
  const loop = new THREE.CatmullRomCurve3([V(A.x - 10, 0, A.z + 6), V(A.x + 10, 0, A.z + 6), V(A.x + 14, 0, A.z + 10), V(A.x + 10, 0, A.z + 14), V(A.x - 10, 0, A.z + 14), V(A.x - 14, 0, A.z + 10)], true, 'centripetal');
  const loopPts = loop.getSpacedPoints(240);
  ribbon(loop, 3.6, .08, M('#8f8aa6'));       // la chaussée
  ribbon(loop, .25, .1, MAT.white);           // ligne centrale
  const gauge = new THREE.Group(); gauge.position.set(A.x, 9, A.z - 2); scene.add(gauge);
  gauge.add(new THREE.Mesh(new THREE.TorusGeometry(2.6, .28, 8, 48), M('#e4e1ee')));
  const arc = new THREE.Mesh(new THREE.TorusGeometry(2.6, .36, 8, 48, Math.PI * 1.3), M('#86d9bd', { emissive: '#3fae8a', emissiveIntensity: .25 }));
  gauge.add(arc);
  const leaf = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), M('#9fdcbf')); leaf.scale.set(.7, 1.2, .3); gauge.add(leaf);
  // Symbioze : développeurs et entreprise qui « matchent », cœurs qui montent
  const SY = V(EN.x + 16, 0, EN.z + 2);
  box(8, 7, 7, M('#dff0ff'), SY.x + 5, 0, SY.z - 3); box(8.3, .6, 7.3, MAT.dev, SY.x + 5, 7, SY.z - 3);
  const phoneGeo = new THREE.BoxGeometry(.35, .6, .06), phoneMat = new THREE.MeshBasicMaterial({ color: '#f2a5c4' });
  for (let i = 0; i < 4; i++) {
    const p = person(SY.x - 6 + (i % 2) * 2.2, SY.z - 2 + Math.floor(i / 2) * 3, {}); p.g.rotation.y = Math.PI / 2; p.phone = true;
    const ph = new THREE.Mesh(phoneGeo, phoneMat); ph.position.set(.5, 1.95, .35); p.g.add(ph);
  }
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, -.9); heartShape.bezierCurveTo(-1.4, .1, -.8, 1.1, 0, .45); heartShape.bezierCurveTo(.8, 1.1, 1.4, .1, 0, -.9);
  const heartGeo = new THREE.ExtrudeGeometry(heartShape, { depth: .25, bevelEnabled: false });
  const hearts = Array.from({ length: 6 }, (_, i) => {
    const h = new THREE.Mesh(heartGeo, new THREE.MeshStandardMaterial({ color: '#f2a5c4', transparent: true, flatShading: true }));
    dyn(h); scene.add(h); return { h, o: i / 6 };
  });
  // Jury d'examen (activité d'auto-entrepreneur) : trois jurés face au candidat qui présente son projet
  const JU = V(EN.x + 5, 0, EN.z + 13);   // au milieu de la place, à l'écart de la route d'Argo
  box(7, 1.4, 1.6, MAT.stone, JU.x, 0, JU.z - 1.2);
  for (let i = -1; i <= 1; i++) { const j = person(JU.x + i * 2.2, JU.z - 2.6, { seated: true, scale: .9, shirt: i ? undefined : MAT.ent }); j.idle = true; }
  box(3.2, 2, .2, MAT.dark, JU.x + 3.2, 1, JU.z + 3.4);                       // écran de présentation
  const cand = person(JU.x, JU.z + 3, { scale: .9 }); cand.g.rotation.y = Math.PI; cand.pointing = true;
  for (let i = 0; i < 4; i++) walkerRand(() => [inZoneRand(Q.ent), inZoneRand(Q.ent)]);

  /* ---------- Promeneurs sur les trottoirs ---------- */
  for (let k = 0; k < 170; k++) walkerRand(() => {
    const piece = offsetLine(streetPiece(5), (rand() < .5 ? -1 : 1) * (STREET / 2 - .55));
    return [piece[0], piece[piece.length - 1]];
  }, {}, 60);



  // le Pont Neuf : bout du tablier côté Capitole (pour le dernier plan)
  const pnEast = (() => { const e1 = PONT_NEUF.ends[0], e2 = PONT_NEUF.ends[1]; return { p: e1.distanceTo(C) < e2.distanceTo(C) ? e1 : e2 }; })();

  /* ---------- Plantation des arbres ----------
     Un arbre n'est gardé que si sa couronne (2 m de rayon) ne touche aucun immeuble, aucun bâtiment ou objet du décor
     et aucune chaussée : plus d'arbre qui sort à moitié d'une maison. */
  {
    scene.updateMatrixWorld(true);
    const solid = [];
    scene.traverse(o => { if (!o.isMesh || o.isInstancedMesh) return; for (let q = o; q; q = q.parent) if (q.userData.dynamic) return;
      const b = new THREE.Box3().setFromObject(o); if (b.max.y > .5 && b.max.x - b.min.x < 120 && b.max.z - b.min.z < 120) solid.push(b); });
    const R = 2.0;
    const free = ([x, z]) => {
      for (const c of cells) { const ux = Math.cos(c.rot), uz = -Math.sin(c.rot), dx = x - c.x, dz = z - c.z;
        if (Math.abs(dx * ux + dz * uz) < c.w / 2 + R && Math.abs(-dx * uz + dz * ux) < c.d / 2 + R) return false; }
      for (const b of solid) if (x > b.min.x - R && x < b.max.x + R && z > b.min.z - R && z < b.max.z + R) return false;
      if (distRiver(x, z) > 12) for (const [a, e] of streets) {                       // pas sur la chaussée
        const L = a.distanceTo(e), t = Math.max(0, Math.min(1, ((x - a.x) * (e.x - a.x) + (z - a.z) * (e.z - a.z)) / (L * L)));
        if (Math.hypot(x - (a.x + (e.x - a.x) * t), z - (a.z + (e.z - a.z) * t)) < STREET / 2 + .5) return false;
      }
      return true;
    };
    const stillPeople = people.filter(P => !P.walk && P.g.parent === scene).map(P => P.g.position);
    const kept = trees.filter(t => free(t) && !inCorridor(t[0], t[1], 2) && stillPeople.every(q => Math.hypot(q.x - t[0], q.z - t[1]) > 2.4)); trees.length = 0; trees.push(...kept);
  }
  const crowns = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.5, 0), MAT.leaf, trees.length);
  const stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(.18, .22, 1.6, 5), MAT.trunk, trees.length);
  trees.forEach(([x, z], i) => {
    const s = .85 + rand() * .45;
    dummy.position.set(x, 2.4 * s, z); dummy.rotation.set(rand(), rand(), 0); dummy.scale.setScalar(s); dummy.updateMatrix(); crowns.setMatrixAt(i, dummy.matrix);
    dummy.position.set(x, .8, z); dummy.rotation.set(0, 0, 0); dummy.scale.setScalar(1); dummy.updateMatrix(); stems.setMatrixAt(i, dummy.matrix);
  });
  [crowns, stems].forEach(m => { m.castShadow = true; scene.add(m); });

  /* ---------- Obstacles : tout ce qu'un piéton ne doit pas traverser ----------
     Grille de cases de 4 m : chaque case garde la liste des rectangles (vus du dessus) qui la touchent. */
  const CELL = 4, grid = new Map(), RADIUS = .55;   // rayon d'un piéton
  const gkey = (i, j) => i * 100003 + j;
  function addRect(x0, x1, z0, z1) {
    const r = [x0 - RADIUS, x1 + RADIUS, z0 - RADIUS, z1 + RADIUS];
    for (let i = Math.floor(r[0] / CELL); i <= Math.floor(r[1] / CELL); i++)
      for (let j = Math.floor(r[2] / CELL); j <= Math.floor(r[3] / CELL); j++) {
        const k = gkey(i, j); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(r);
      }
  }
  // rectangle orienté (immeuble ou voie de circulation) : rangé dans la grille selon son emprise,
  // testé exactement dans son propre repère
  function addOriented(cx, cz, ux, uz, hw, hd) {
    const o = { cx, cz, ux, uz, hw: hw + RADIUS, hd: hd + RADIUS }, ex = Math.abs(ux) * o.hw + Math.abs(uz) * o.hd, ez = Math.abs(uz) * o.hw + Math.abs(ux) * o.hd;
    for (let i = Math.floor((cx - ex) / CELL); i <= Math.floor((cx + ex) / CELL); i++)
      for (let j = Math.floor((cz - ez) / CELL); j <= Math.floor((cz + ez) / CELL); j++) {
        const k = gkey(i, j); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(o);
      }
  }
  const hit = (r, x, z) => r.ux === undefined ? (x > r[0] && x < r[1] && z > r[2] && z < r[3])
    : (Math.abs((x - r.cx) * r.ux + (z - r.cz) * r.uz) < r.hw && Math.abs(-(x - r.cx) * r.uz + (z - r.cz) * r.ux) < r.hd);
  const blocked = (x, z) => {
    if (distRiver(x, z) < 10.5) return true;
    const list = grid.get(gkey(Math.floor(x / CELL), Math.floor(z / CELL)));
    return !!list && list.some(r => hit(r, x, z));
  };
  // immeubles : leur vrai rectangle, orienté le long de la rue
  cells.forEach(c => addOriented(c.x, c.z, Math.cos(c.rot), -Math.sin(c.rot), c.w / 2, c.d / 2));
  lamps.forEach(p => addRect(p.x - .2, p.x + .2, p.z - .2, p.z + .2));
  // personnes immobiles (élèves, équipe, clients des terrasses, jurés) : on ne leur passe pas au travers
  people.forEach(P => { if (!P.walk && P.g.parent === scene) addRect(P.g.position.x - .5, P.g.position.x + .5, P.g.position.z - .5, P.g.position.z + .5); });
  trees.forEach(([x, z]) => addRect(x - 1.6, x + 1.6, z - 1.6, z + 1.6));   // tronc + couronne basse
  loopPts.forEach((p, i) => { if (i % 3 === 0) addRect(p.x - 2.2, p.x + 2.2, p.z - 2.2, p.z + 2.2); });
  scene.updateMatrixWorld(true);
  const bb = new THREE.Box3();
  (function walk(o) {
    if (o.userData.dynamic) return;
    if (o.isMesh && !o.isInstancedMesh) {
      bb.setFromObject(o);
      if (bb.max.y > .4 && bb.min.y < 2.6 && bb.max.x - bb.min.x < 120) addRect(bb.min.x, bb.max.x, bb.min.z, bb.max.z);
    }
    o.children.forEach(walk);
  })(scene);
  function pathFree(a, b) {
    const n = Math.max(2, Math.ceil(a.distanceTo(b) / .5));
    for (let i = 0; i <= n; i++) { const t = i / n; if (blocked(a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return false; }
    return true;
  }
  /* ---------- Voitures : allers-retours sur des tronçons de rue ----------
     Chaque voiture roule sur sa voie (1,2 m de l'axe), loin des carrefours, sur une rue que personne d'autre
     n'emprunte ; son trajet est vérifié contre les obstacles, puis la voie devient interdite aux piétons. */
  const carPieces = [];
  for (let k = 0, n = 0; k < 2000 && n < 36; k++) {
    const [sa, se] = pick(streets), len = sa.distanceTo(se); if (len < 24) continue;
    const m = 7 / len, side = rand() < .5 ? -1 : 1;
    const piece = offsetLine(Array.from({ length: 14 }, (_, i) => sa.clone().lerp(se, m + (1 - 2 * m) * i / 13)), side * 1.2);
    if (!pathOK(piece)) continue;
    if (piece.some(p => blocked(p.x, p.z))) continue;                                   // bâtiment, arbre, lampadaire, objet
    if (carPieces.some(o => o.some(q => piece.some(p => p.distanceTo(q) < 6)))) continue; // une seule voiture par rue
    carPieces.push(piece);
    traffic.push({ car: dyn(car(pick(carCols))), pts: piece, t: rand() * 6, speed: .1 + rand() * .08 }); n++;
  }
  // voies occupées par les voitures (et leur longueur de carrosserie) : les piétons ne les traversent pas
  carPieces.forEach(pc => { const a = pc[0], b = pc[pc.length - 1], d = b.clone().sub(a), L = d.length(); d.normalize();
    addOriented((a.x + b.x) / 2, (a.z + b.z) / 2, d.x, d.z, L / 2 + 2.2, 1.05); });

  // chaque trajet accepté devient un couloir réservé : les trajets suivants ne peuvent ni le croiser ni le longer de trop près
  pendingWalkers.forEach(w => {
    for (let k = 0; k < w.tries; k++) {
      const [a, b] = w.gen();
      if (a.distanceTo(b) > 3 && pathFree(a, b)) {
        makeWalker(a, b, w.opts);
        const d = b.clone().sub(a), L = d.length(); d.normalize();
        addOriented((a.x + b.x) / 2, (a.z + b.z) / 2, d.x, d.z, L / 2 + .6, .55);
        return;
      }
    }
  });

  /* ---------- Avion de ligne (Toulouse, capitale de l'aéronautique) ----------
     Long-courrier bimoteur blanc, dérive rose : il traverse le champ de la caméra toutes les 20 secondes,
     quelle que soit l'étape, au-dessus des toits. */
  const plane = dyn(new THREE.Group()); scene.add(plane);
  {
    const white = M('#ffffff'), pink = M('#f08a9a'), grey = M('#c9cfe0'), glass = M('#3b3346');
    const fus = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 24, 14), white); fus.rotation.x = Math.PI / 2; plane.add(fus);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(1.5, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), white); nose.rotation.x = Math.PI / 2; nose.position.z = 12; nose.scale.y = 1.8; plane.add(nose);
    const tailc = new THREE.Mesh(new THREE.ConeGeometry(1.5, 6, 14), white); tailc.rotation.x = -Math.PI / 2; tailc.position.set(0, .35, -15); plane.add(tailc);
    const cockpit = new THREE.Mesh(new THREE.BoxGeometry(1.6, .5, .9), glass); cockpit.position.set(0, .75, 12.6); plane.add(cockpit);
    // ailes en flèche
    const wingShape = new THREE.Shape(); wingShape.moveTo(0, 2.5); wingShape.lineTo(16, -3.5); wingShape.lineTo(16, -5); wingShape.lineTo(0, -2.5); wingShape.lineTo(0, 2.5);
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: .35, bevelEnabled: false }); wingGeo.rotateX(Math.PI / 2);
    [1, -1].forEach(sd => {
      const w = new THREE.Mesh(wingGeo, grey); w.scale.x = sd; w.position.set(0, -.6, 0); plane.add(w);
      const eng = new THREE.Mesh(new THREE.CylinderGeometry(.75, .65, 3.2, 12), white); eng.rotation.x = Math.PI / 2; eng.position.set(sd * 5.5, -1.6, 1); plane.add(eng);
      const st = new THREE.Mesh(new THREE.BoxGeometry(6.5, .2, 1.8), grey); st.position.set(sd * 3.2, .6, -15.5); plane.add(st);   // empennage horizontal
    });
    const fin = new THREE.Mesh(new THREE.BoxGeometry(.3, 6, 3.4), pink); fin.position.set(0, 3.6, -15); fin.rotation.x = -.35; plane.add(fin);
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(1.52, 1.52, 22, 14, 1, true, Math.PI * .42, Math.PI * .16), pink); stripe.rotation.x = Math.PI / 2; plane.add(stripe);
    plane.traverse(o => { if (o.isMesh) o.castShadow = false; });
  }
  const TRAIL = 60, trailPos = new Float32Array(TRAIL * 3), trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  scene.add(new THREE.Points(trailGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, transparent: true, opacity: .7 })));

  /* ---------- Nuages ---------- */
  const clouds = [];
  for (let i = 0; i < 9; i++) {
    const c = new THREE.Group();
    for (let k = 0; k < 5; k++) { const s = new THREE.Mesh(new THREE.IcosahedronGeometry(3 + rand() * 3, 0), MAT.white); s.position.set(k * 3.5 - 7, rand() * 2, rand() * 3); c.add(s); }
    c.position.set(C.x + (rand() - .5) * 760, 70 + rand() * 30, (rand() < .5 ? -1 : 1) * (280 + rand() * 80));   // au nord et au sud, hors de la ville scene.add(c); clouds.push(c);
  }

  /* ---------- Étiquettes (HTML projeté sur la scène) ----------
     main = nom de quartier, visible sur les vues d'ensemble ; les autres n'apparaissent que de près. */
  const labelsEl = document.getElementById('labels'), LABELS = [];
  const SUBS = {};                                         // pas de sous-titre sous les noms de quartier
  function label(text, pos, zone, main = false) {
    const el = document.createElement('div'); el.className = 'lab' + (main ? ' big' : '') + (zone ? ' z-' + zone : ''); el.style.opacity = 0;
    const nm = document.createElement('span'); nm.className = 'nm'; nm.textContent = text; el.appendChild(nm);
    if (SUBS[text]) { const sb = document.createElement('span'); sb.className = 'sub'; sb.textContent = SUBS[text]; el.appendChild(sb); }
    labelsEl.appendChild(el); LABELS.push({ el, pos, main });
  }
  label('Profil', V(C.x, 22, C.z - 16), 'tronc', true);
  label('Développement', V(DV.x, 32, DV.z - 12), 'dev', true);
  label('Formation', V(FO.x, 16, FO.z - 16), 'form', true);
  label('GestionDeProjet', V(PM.x + 14, 30, PM.z - 12), 'pm', true);
  label('Entreprise', V(EN.x, 14, EN.z - 18), 'ent', true);
  label('ENSEEIHT', V(N7.x, 10, N7.z), 'tronc');
  label('Webinage', V(WEB.x, 10, WEB.z), 'dev'); label('Allopass', V(AP.x, 13, AP.z), 'dev'); label('Docker', V(STACK.x, 10, STACK.z), 'dev');
  label('Holberton', V(HB.x, 13.5, HB.z), 'form'); label('StageIA', V(IA.x, 10, IA.z), 'form'); label('Jury', V(JU.x, 6, JU.z), 'ent');
  label('Backlog', V(PM.x - 4, 12, PM.z - 10), 'pm'); label('Indicateurs', V(KPI.x, 11, KPI.z), 'pm'); label('Ariane5', V(RK.x, 30, RK.z), 'pm'); label('Planétarium', V(PL.x, 10, PL.z), 'pm'); label('Jalons', V(PM.x - 4.5, 7, PM.z + 18), 'pm');
  label('Argo', V(A.x, 13, A.z - 2), 'ent'); label('Symbioze', V(SY.x + 3, 10, SY.z - 3), 'ent');
  label('Garonne', river.getPointAt(.45).add(V(0, 3, 0))); label('PontNeuf', pn.position.clone().add(V(0, 8, 0))); label('SaintSernin', V(SAINT_SERNIN.x, 26, SAINT_SERNIN.z));

  /* ======================= CAMÉRA ======================= */
  // Plan = cible + distance + hauteur + angle autour de la cible (0 = vu depuis le sud)
  const shot = (t, d, h, az = 0) => [V(t.x + Math.sin(az) * d, t.y + h, t.z + Math.cos(az) * d), t.clone()];
  const SHOT_BY_STEP = {
    'profil.ts':                        shot(V(C.x, 7, C.z - 12), 42, 9, .35),           // la place du Capitole au soleil couchant
    'etudes.ts':                        shot(V(C.x, 4, C.z), 52, 24),
    'developpement/01-webinage.ts':     shot(V(WEB.x + 2, 4, WEB.z), 34, 18, .1),
    'developpement/02-allopass.ts':     shot(V(AP.x, 5, AP.z), 30, 18, .35),
    'developpement/competences.ts':     shot(V(DV.x, 4, DV.z + 4), 72, 46, 0),
    'formation/holberton.ts':           shot(V(FO.x, 3, FO.z - 2), 46, 26, .15),
    'formation/cursus.ts':              shot(V(IA.x, 3, IA.z), 28, 16, .35),
    'gestion-de-projet/cadrer.ts':      shot(V(PM.x - 4, 5, PM.z - 6), 30, 12, 0),
    'gestion-de-projet/piloter.ts':     shot(V(PM.x + 2, 8, PM.z), 62, 34, .25),
    'entreprise/argo.ts':               shot(V(A.x, 2, A.z + 4), 38, 26, -.15),
    'entreprise/symbioze.ts':           shot(V(SY.x, 3, SY.z), 26, 14, .3),
    'entreprise/sur-mesure.ts':         shot(V(EN.x, 4, EN.z - 2), 74, 48, 0),
    'entreprise/jury.ts':               shot(V(JU.x, 2, JU.z), 13, 7, .5),
    'contact.ts':                       [PONT_NEUF.p.clone().add(V(-52, 46, 52)), V((PONT_NEUF.p.x + C.x) / 2, 8, (PONT_NEUF.p.z + C.z) / 2 - 12)],   // au-dessus de la Garonne : Pont Neuf, quais et Capitole au soleil couchant
  };
  const SHOTS = STEPS.map(s => SHOT_BY_STEP[s.file]);


  /* ---------- Rendu « maquette » : flou de bascule (tilt-shift), vignettage et teinte chaude ----------
     L'image est rendue dans une texture puis floutée en haut et en bas de l'écran : la bande nette au centre
     donne l'effet de ville miniature. Deux passes de flou (horizontal puis vertical) + étalonnage final. */
  const POST = !mobile && !reduce;
  const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), postScene = new THREE.Scene();
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2)); postScene.add(quad);
  const RT = () => new THREE.WebGLRenderTarget(2, 2, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
  const rtA = renderer.capabilities.isWebGL2 ? new THREE.WebGLMultisampleRenderTarget(2, 2) : RT(), rtB = RT();
  const blurFrag = `
    uniform sampler2D tex; uniform vec2 px, dir; uniform float focus, band, amount, grade; varying vec2 vUv;
    void main() {
      float d = max(0.0, abs(vUv.y - focus) - band);
      float r = clamp(d * amount, 0.0, 1.0) * 1.6;
      vec4 c = vec4(0.0); float ws = 0.0;
      for (int i = -6; i <= 6; i++) { float w = exp(-float(i * i) / 18.0); c += texture2D(tex, vUv + dir * px * float(i) * r) * w; ws += w; }
      c /= ws;
      if (grade > 0.5) {
        vec2 q = vUv - 0.5; float v = smoothstep(0.85, 0.25, length(q * vec2(1.1, 1.0)));
        c.rgb = mix(c.rgb * vec3(0.86, 0.78, 0.88), c.rgb, v);          // vignettage mauve
        c.rgb = c.rgb * vec3(1.03, 1.0, 0.97);                           // teinte chaude
      }
      gl_FragColor = c;
    }`;
  const blurMat = new THREE.ShaderMaterial({
    uniforms: { tex: { value: null }, px: { value: new THREE.Vector2() }, dir: { value: new THREE.Vector2(1, 0) }, focus: { value: .48 }, band: { value: .27 }, amount: { value: 3.0 }, grade: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: blurFrag, depthTest: false, depthWrite: false,
  });
  quad.material = blurMat;
  function sizePost() {
    const v = new THREE.Vector2(); renderer.getDrawingBufferSize(v);
    rtA.setSize(v.x, v.y); rtB.setSize(v.x, v.y); blurMat.uniforms.px.value.set(1 / v.x, 1 / v.y);
  }
  function renderFrame() {
    if (!POST) { renderer.render(scene, camera); return; }
    renderer.setRenderTarget(rtA); renderer.render(scene, camera);
    blurMat.uniforms.tex.value = rtA.texture; blurMat.uniforms.dir.value.set(1, 0); blurMat.uniforms.grade.value = 0;
    renderer.setRenderTarget(rtB); renderer.render(postScene, postCam);
    blurMat.uniforms.tex.value = rtB.texture; blurMat.uniforms.dir.value.set(0, 1); blurMat.uniforms.grade.value = 1;
    renderer.setRenderTarget(null); renderer.render(postScene, postCam);
  }

  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Sur grand écran, la scène se décale à droite pour laisser la place à la fiche
    if (w > 780) camera.setViewOffset(w, h, -w * 0.2, 0, w, h); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); setTrack(); if (POST) sizePost();
  }
  addEventListener('resize', resize); resize();

  let mx = 0, my = 0;
  addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });

  /* ======================= BOUCLE D'ANIMATION ======================= */
  const ease = x => x * x * (3 - 2 * x);
  const camPos = SHOTS[0][0].clone().add(V(0, 60, 40)), camLook = SHOTS[0][1].clone(); // à l'ouverture, la caméra descend sur la place
  
  const tP = V(0, 0, 0), tL = V(0, 0, 0), proj = V(0, 0, 0), tmp = V(0, 0, 0);
  const t0 = performance.now(); let prev = t0, lastActive = -1, lastZone, screenClock = 0, built = false;
  const stepn = document.getElementById('stepn');


  /* Hauteur des obstacles, case par case (4 m) : la caméra en vol reste toujours 5 m au-dessus de ce qu'elle survole
     (immeubles, tour de verre, fusée, clocher de Saint-Sernin...) */
  const HCELL = 4, HMAP = new Map(), hk = (i, j) => i * 100003 + j;
  {
    const put = (x0, x1, z0, z1, h) => { for (let i = Math.floor(x0 / HCELL); i <= Math.floor(x1 / HCELL); i++) for (let j = Math.floor(z0 / HCELL); j <= Math.floor(z1 / HCELL); j++) { const k = hk(i, j); if ((HMAP.get(k) || 0) < h) HMAP.set(k, h); } };
    cells.forEach(c => { const r = Math.hypot(c.w, c.d) / 2; put(c.x - r, c.x + r, c.z - r, c.z + r, c.h + 2.4); });
    scene.updateMatrixWorld(true);
    scene.traverse(o => { if (o.isMesh && !o.isInstancedMesh) { for (let q = o; q; q = q.parent) if (q.userData.dynamic) return; const b = new THREE.Box3().setFromObject(o); if (b.max.y > 1 && b.max.x - b.min.x < 120 && b.max.z - b.min.z < 120) put(b.min.x, b.max.x, b.min.z, b.max.z, b.max.y); } });
  }
  // hauteur sûre autour d'un point (on regarde les cases voisines dans un rayon de 8 m)
  const safeY = (x, z) => { let h = 0; for (let di = -2; di <= 2; di++) for (let dj = -2; dj <= 2; dj++) h = Math.max(h, HMAP.get(hk(Math.floor(x / HCELL) + di, Math.floor(z / HCELL) + dj)) || 0); return h + 5; };
  function camTarget(i, e, P, L) {
    const A = SHOTS[i], B = SHOTS[i + 1];
    P.lerpVectors(A[0], B[0], e); L.lerpVectors(A[1], B[1], e);
    const hop = Math.sin(Math.PI * e) * Math.min(70, A[0].distanceTo(B[0]) * .35);
    P.y = Math.max(P.y + hop, e > .001 && e < .999 ? safeY(P.x, P.z) : 0);
    return P;
  }
  function frame(now) {
    const time = Math.max(0, (now - t0) / 1000), dt = Math.max(0, Math.min(.1, (now - prev) / 1000)); prev = now; // l'horodatage d'image peut précéder t0
    const p = progress(), active = Math.round(p);
    const i = Math.min(STEPS.length - 2, Math.floor(p)), f = Math.min(1, p - i);

    // Caméra : un plan fixe par étape ; entre deux plans, elle passe en arc au-dessus de la ville
    // (montée, glissé, descente) et reste toujours 5 m au-dessus de ce qu'elle survole
    camTarget(i, ease(f), tP, tL);
    // dernière étape : la nuit tombe doucement, les lampadaires s'allument
    const dusk = Math.max(0, p - (STEPS.length - 2));
    lampMat.emissiveIntensity = .6 + dusk * 2.4; sun.intensity = 1 - dusk * .35;
    tP.x += mx * 4; tP.y -= my * 3;
    const k = reduce ? 1 : 1 - Math.exp(-dt * 6);
    camPos.lerp(tP, k); camLook.lerp(tL, k);
    camera.position.copy(camPos); camera.lookAt(camLook);
    // l'ombre portée suit ce que regarde la caméra (soleil bas à l'ouest : ombres longues)
    sun.target.position.copy(camLook); sun.position.copy(camLook).add(V(-110, 75, 60));

    // Les maisons poussent pendant les premières secondes
    if (!built) { placeBuildings(reduce ? 99 : time); if (reduce || time > 3.4) built = true; }

    // Personnages
    for (const P of people) {
      const s = time * 6 + P.phase;
      if (P.walk) {
        const W = P.walk; if (!reduce) W.t += W.speed * dt;
        const f = (Math.sin(W.t) + 1) / 2, dir = Math.cos(W.t) >= 0 ? 1 : -1;
        tmp.lerpVectors(W.a, W.b, f);
        P.g.position.set(tmp.x, W.a.y, tmp.z);
        P.g.rotation.y = Math.atan2((W.b.x - W.a.x) * dir, (W.b.z - W.a.z) * dir);
        if (!reduce) { P.legL.rotation.x = Math.sin(s) * .6; P.legR.rotation.x = -Math.sin(s) * .6; P.armL.rotation.x = -Math.sin(s) * .5; P.armR.rotation.x = Math.sin(s) * .5; }
      } else if (!reduce) {
        if (P.teach) { P.armR.rotation.z = 1.2 + Math.sin(time * 2) * .5; P.g.rotation.y = Math.PI + Math.sin(time * .7) * .5; }
        else if (P.pointing) { P.armR.rotation.x = -2.2 + Math.sin(time * 2.5) * .25; }
        else if (P.student) { const up = Math.sin(time * .9 + P.phase * 3) > .93; P.armR.rotation.x = up ? -2.8 : -.9; P.armL.rotation.x = -.9; P.head.position.y = 2.65 + Math.sin(s * .5) * .04; }
        else if (P.phone) { P.armR.rotation.x = -1.3; P.head.rotation.x = .35; }
        else if (P.idle) { P.head.rotation.y = Math.sin(time + P.phase) * .4; }
      }
    }

    // Ticket qui avance sur le tableau Kanban : À faire → En cours → Revue → Livré
    const cyc = (time / 2.2) % 4, col = Math.floor(cyc), fr = ease(Math.min(1, (cyc - col) * 2));
    moving.position.x = colX[col] + (col < 3 ? (colX[col + 1] - colX[col]) * fr : 0);
    moving.position.y = 2.6 + Math.sin(fr * Math.PI) * .8;

    if (!reduce) {
      // Indicateurs : les barres de l'histogramme montent et descendent
      bars.forEach((b, q) => { const h = b.userData.base + Math.sin(time * 1.2 + q) * .8; b.scale.y = h; b.position.y = h / 2; });
      // Argo : deux véhicules qui tournent sur leur route, jauge carbone qui respire
      drivers.forEach((c, q) => { const t = (time * .05 + q * .5) % 1, N = loopPts.length, k = Math.floor(t * N); c.position.copy(loopPts[k % N]); c.lookAt(loopPts[(k + 2) % N]); });
      gauge.rotation.y = Math.sin(time * .6) * .5; arc.rotation.z = time * .4; leaf.rotation.y = time * 1.2;
      // Symbioze : les cœurs montent entre les développeurs et l'entreprise
      hearts.forEach(H => { const t = (time * .18 + H.o) % 1; H.h.position.set(SY.x - 3 + t * 6, 3 + t * 7, SY.z - .5 + Math.sin(t * 6 + H.o * 9) * .8); H.h.material.opacity = Math.sin(t * Math.PI); H.h.rotation.y = time; });
      brain.rotation.y = time * .5; wire.rotation.x = time * .3; orbit.rotation.y = -time * .9; brain.position.y = 6.5 + Math.sin(time * 1.4) * .4;
      // Circulation : chaque voiture fait l'aller-retour sur son tronçon de rue
      traffic.forEach(T => { T.t += T.speed * dt; const f = (Math.sin(T.t) + 1) / 2 * (T.pts.length - 1.001), i = Math.floor(f), a = T.pts[i], b = T.pts[i + 1], dir = Math.cos(T.t) >= 0 ? 1 : -1; T.car.position.lerpVectors(a, b, f - i); T.car.rotation.y = Math.atan2((b.x - a.x) * dir, (b.z - a.z) * dir); });
      packets.forEach(P => { P.c.getPoint((time * .25 + P.o) % 1, P.m.position); P.m.rotation.set(time, time, 0); });
      sparks.forEach((S, q) => { S.t = (S.t + S.s) % 1; const pp = riverPts[Math.floor(S.t * 300)], tg = river.getTangentAt(S.t); sparkPos[q * 3] = pp.x - tg.z * S.off; sparkPos[q * 3 + 1] = .25; sparkPos[q * 3 + 2] = pp.z + tg.x * S.off; });
      sparkGeo.attributes.position.needsUpdate = true;
      boats.forEach(B => { B.t = (B.t + B.way * B.s * dt + 1) % 1; const pp = river.getPointAt(B.t), tg = river.getTangentAt(B.t);
        B.g.position.set(pp.x - tg.z * B.off, .1, pp.z + tg.x * B.off); B.g.rotation.y = Math.atan2(tg.x * B.way, tg.z * B.way); });
      clouds.forEach((c, q) => { c.position.x += dt * (1.2 + q * .1); if (c.position.x > C.x + 380) c.position.x = C.x - 380; });
      screenClock += dt; if (screenClock > .35) { screenClock = 0; screens.forEach(f => f()); }
    }
    // Avion : toutes les 20 s, un long-courrier traverse le haut de l'image de gauche à droite, à 240 m,
    // dans le ciel au-dessus des toits (on part d'un point de l'écran et on suit le rayon de la caméra)
    {
      const ph = (time % 20) / 20;
      camera.updateMatrixWorld();
      const ray = tmp.set(-1.3 + ph * 2.6, .6, .5).unproject(camera).sub(camera.position).normalize();
      plane.position.copy(camera.position).addScaledVector(ray, 240);
      plane.position.y = Math.max(plane.position.y, safeY(plane.position.x, plane.position.z) + 25);
      const right = V(1, 0, 0).applyQuaternion(camera.quaternion); right.y = 0; right.normalize();
      plane.lookAt(plane.position.clone().add(right)); plane.rotateZ(-.1); plane.updateMatrixWorld();
    }
    tmp.set(0, 0, -17).applyMatrix4(plane.matrixWorld); trailPos[0] = tmp.x; trailPos[1] = tmp.y; trailPos[2] = tmp.z;
    trailGeo.attributes.position.needsUpdate = true;

    // Étiquettes : vues d'ensemble = noms des quartiers seulement ; de près = les lieux à proximité
    const w = innerWidth, h = innerHeight;
    camera.updateMatrixWorld();

    for (const L of LABELS) {
      proj.copy(L.pos).project(camera);
      const d = camera.position.distanceTo(L.pos);
      const vis = proj.z < 1 && Math.abs(proj.x) < .95 && Math.abs(proj.y) < .9 && d < (L.main ? 230 : 75) && (L.main ? d > 25 : true);
      L.el.style.opacity = vis ? 1 : 0;
      L.el.style.transform = `translate(${(proj.x * .5 + .5) * w}px,${(-proj.y * .5 + .5) * h}px) translate(-50%,-50%)`;
    }

    // Fiche, progression, invite de commande
    if (active !== lastActive) {
      cards.forEach((c, ci) => {
        c.el.classList.toggle('on', ci === active); c.el.classList.toggle('before', ci > active); c.el.classList.toggle('after', ci < active);
        c.dot.classList.toggle('on', ci === active);
      });
      stepn.textContent = String(active + 1).padStart(2, '0') + '/' + String(STEPS.length).padStart(2, '0');
      const z = STEPS[active].zone;
      if (z !== lastZone) {
        typeCmd(z ? 'cd ' + ZPATH[z] : 'cat contact.ts', z ? ZPATH[z] : '~/toulouse');
        lastZone = z;
      }
      lastActive = active;
    }

    renderFrame();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
