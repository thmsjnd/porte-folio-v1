/* =====================================================================
   MUSIQUE D'AMBIANCE : jazz calme, en lecture continue
   ---------------------------------------------------------------------
   Deux sources possibles :
   1. un fichier audio/ambiance.mp3 s'il existe (morceau libre de droits que vous déposez vous-même) ;
   2. sinon, un jazz « lo-fi » composé en direct par le navigateur (Web Audio) : piano électrique,
      contrebasse, balais et craquement de vinyle sur une grille ii-V-I. Aucun fichier, aucun droit.
   Les navigateurs interdisent le son avant une action de l'utilisateur : la musique démarre au premier
   clic, toucher ou appui sur une touche, et le bouton « ♪ » du bandeau permet de la couper ou la relancer.
   ===================================================================== */
(function () {
  const btn = document.getElementById('music');
  if (!btn) return;
  const store = { get: () => { try { return localStorage.getItem('musique'); } catch (e) { return null; } },
                  set: v => { try { localStorage.setItem('musique', v); } catch (e) {} } };
  let wanted = store.get() !== 'off';          // par défaut : musique activée dès la première interaction
  let playing = false;

  /* ---------- 1. Fichier audio, s'il est présent ---------- */
  const file = new Audio('audio/ambiance.mp3');
  file.loop = true; file.volume = .45; file.preload = 'auto';
  let fileOK = false;
  file.addEventListener('canplaythrough', () => { fileOK = true; }, { once: true });
  file.addEventListener('error', () => { fileOK = false; }, { once: true });

  /* ---------- 2. Jazz composé en direct ---------- */
  const Jazz = (() => {
    let ctx, out, timer, step = 0, nextT = 0, noise;
    const BPM = 72, EIGHTH = 60 / BPM / 2, SWING = .62;   // croches ternaires : la première plus longue
    const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
    // grille : Dm9 – G13 – Cmaj9 – A7(b9), voicings sans fondamentale (main droite) + fondamentale à la basse
    const BAR = [
      { root: 38, voice: [53, 57, 60, 64] },   // Ré mineur 9
      { root: 43, voice: [53, 57, 59, 64] },   // Sol 13
      { root: 36, voice: [52, 55, 59, 62] },   // Do majeur 9
      { root: 45, voice: [55, 58, 61, 64] },   // La 7 (9 bémol)
    ];
    const SCALE = [62, 64, 65, 67, 69, 72, 74, 76];          // notes de mélodie (ré dorien)
    const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();

    function init() {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      // chaîne de sortie : filtre doux + compresseur + volume général
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.ratio.value = 3;
      out = ctx.createGain(); out.gain.value = 0;
      lp.connect(comp).connect(out).connect(ctx.destination);
      out.input = lp;
      // bruit blanc réutilisé pour les balais et le vinyle
      noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      vinyl();
    }
    // piano électrique : deux sinusoïdes (fondamentale + « tine » à l'octave qui s'éteint vite)
    function ep(t, midi, dur, vel) {
      const f = mtof(midi), g = ctx.createGain(), o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), g2 = ctx.createGain();
      o1.type = 'sine'; o1.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2.001;
      g2.gain.setValueAtTime(vel * .35, t); g2.gain.exponentialRampToValueAtTime(.0001, t + .25);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vel, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o1.connect(g); o2.connect(g2).connect(g); g.connect(out.input);
      o1.start(t); o2.start(t); o1.stop(t + dur + .05); o2.stop(t + dur + .05);
    }
    // contrebasse : triangle filtré, attaque douce
    function bass(t, midi, dur) {
      const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'triangle'; o.frequency.value = mtof(midi); f.type = 'lowpass'; f.frequency.value = 600;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.32, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o.connect(f).connect(g).connect(out.input); o.start(t); o.stop(t + dur + .05);
    }
    // balais sur la caisse claire / charleston : bruit filtré très court
    function brush(t, vel, len) {
      const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      s.buffer = noise; s.playbackRate.value = .8 + rnd() * .3; f.type = 'highpass'; f.frequency.value = 5000;
      g.gain.setValueAtTime(vel, t); g.gain.exponentialRampToValueAtTime(.0001, t + len);
      s.connect(f).connect(g).connect(out.input); s.start(t, rnd()); s.stop(t + len + .02);
    }
    // grosse caisse feutrée
    function kick(t) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(42, t + .18);
      g.gain.setValueAtTime(.35, t); g.gain.exponentialRampToValueAtTime(.0001, t + .3);
      o.connect(g).connect(out.input); o.start(t); o.stop(t + .32);
    }
    // craquement de vinyle en fond, en boucle
    function vinyl() {
      const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      s.buffer = noise; s.loop = true; f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = .7; g.gain.value = .012;
      s.connect(f).connect(g).connect(out.input); s.start();
    }
    // une croche de musique (8 croches par mesure, une mesure par accord)
    function play(n, t) {
      const pos = n % 8, bar = BAR[Math.floor(n / 8) % BAR.length], next = BAR[(Math.floor(n / 8) + 1) % BAR.length];
      const beat = EIGHTH * 2;
      // accords : sur le 1, et parfois anticipés sur le « et » du 2
      if (pos === 0 || (pos === 3 && rnd() < .45)) bar.voice.forEach((m, k) => ep(t + k * .012, m, beat * (pos ? 1.6 : 2.6), .07));
      // basse : fondamentale, quinte, puis note d'approche vers l'accord suivant
      if (pos === 0) bass(t, bar.root, beat * .95);
      if (pos === 2) bass(t, bar.root + 7, beat * .95);
      if (pos === 4) bass(t, bar.root + (rnd() < .5 ? 10 : 12), beat * .95);
      if (pos === 6) bass(t, next.root + (rnd() < .5 ? -1 : 1), beat * .95);
      // batterie : balais sur chaque croche, accent sur 2 et 4, grosse caisse discrète sur 1 et 3
      brush(t, pos % 2 ? .03 : .05, pos % 2 ? .06 : .12);
      if (pos === 2 || pos === 6) brush(t, .09, .25);
      if (pos === 0 || (pos === 4 && rnd() < .5)) kick(t);
      // mélodie clairsemée : quelques notes douces, une octave au-dessus
      if (rnd() < .22) ep(t, SCALE[Math.floor(rnd() * SCALE.length)] + 12, beat * 1.4, .05);
    }
    // planificateur : on prépare les notes 0,2 s à l'avance, croche par croche (swing sur les croches paires)
    function tick() {
      while (nextT < ctx.currentTime + .2) {
        play(step, nextT);
        nextT += EIGHTH * 2 * (step % 2 === 0 ? SWING : 1 - SWING);
        step++;
      }
    }
    return {
      start() {
        if (!ctx) init();
        ctx.resume();
        if (!timer) { nextT = ctx.currentTime + .1; timer = setInterval(tick, 50); }
        out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setTargetAtTime(.5, ctx.currentTime, .8);   // fondu d'entrée
      },
      stop() {
        if (!ctx) return;
        out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setTargetAtTime(0, ctx.currentTime, .3);      // fondu de sortie
        setTimeout(() => { if (!playing) { clearInterval(timer); timer = null; ctx.suspend(); } }, 1200);
      },
    };
  })();

  /* ---------- Lecture, arrêt, bouton ---------- */
  function render() {
    btn.setAttribute('aria-pressed', String(playing));
    btn.title = playing ? 'Couper la musique' : 'Lancer la musique';
    btn.classList.toggle('on', playing);
  }
  function start() {
    playing = true; render();
    if (fileOK) file.play().catch(() => Jazz.start()); else Jazz.start();
  }
  function stop() { playing = false; render(); file.pause(); Jazz.stop(); }
  btn.addEventListener('click', e => {
    e.stopPropagation();
    wanted = !playing; store.set(wanted ? 'on' : 'off');
    wanted ? start() : stop();
  });
  // première interaction : on lance la musique si l'utilisateur ne l'a pas coupée
  const first = e => { if (btn.contains(e.target)) return; ['pointerdown', 'keydown', 'touchend'].forEach(ev => removeEventListener(ev, first)); if (wanted && !playing) start(); };
  ['pointerdown', 'keydown', 'touchend'].forEach(ev => addEventListener(ev, first));
  // onglet caché : silence ; retour sur l'onglet : on reprend
  document.addEventListener('visibilitychange', () => { if (!playing) return; if (document.hidden) { file.pause(); Jazz.stop(); } else start(); });
  render();
})();
