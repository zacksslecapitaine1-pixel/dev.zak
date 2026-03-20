/* ═══════════════════════════════════════════════════════════════
   DEV.ZAK — Upgraded JavaScript
   + Custom cursor + Page loader + All original features intact
   ═══════════════════════════════════════════════════════════════ */

/* ── Page Loader ── */
function initLoader() {
  const loader = document.getElementById('dz-loader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 1900);
}

/* ── Custom Cursor ── */
function initCursor() {
  const cursor = document.getElementById('dz-cursor');
  if (!cursor || window.matchMedia('(hover:none)').matches) return;
  const dot  = cursor.querySelector('.dz-cursor-dot');
  const ring = cursor.querySelector('.dz-cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll('a, button, .service-card, .prop-card, .portfolio-card, .skill-chip, .tech-chip, .hero-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ── Translations ── */
const TRANSLATIONS = {
  fr: {
    nav_home: 'Accueil', nav_about: 'À propos', nav_services: 'Services',
    nav_portfolio: 'Portfolio', nav_propositions: 'Propositions', nav_contact: 'Contact',
    nav_prop_ia: 'Agent IA', nav_prop_web: 'Développement Web', nav_prop_streaming: 'Logiciel Streaming',
    nav_cta: 'Démarrer un projet',
    hero_badge: 'Disponible pour nouveaux projets',
    hero_title_1: 'Construisons votre', hero_title_2: 'présence numérique', hero_title_3: 'de demain.',
    hero_typed: ['Développeur Full Stack', 'Expert en Intelligence Artificielle', 'Concepteur d\'Agents IA', 'Consultant Digital', 'Expert en Automatisation'],
    hero_desc: 'Je conçois des sites web sur mesure, des applications performantes et des agents intelligents qui transforment votre activité — avec précision, élégance et résultats garantis.',
    hero_btn_primary: 'Voir mes services', hero_btn_secondary: 'Me contacter',
    stat_1: 'Projets livrés', stat_2: 'Ans d\'expérience', stat_3: 'Clients satisfaits', stat_4: 'Technologies',
    services_tag: 'Expertise',
    services_subtitle: 'Du développement web à l\'intelligence artificielle — je couvre l\'intégralité de votre transformation digitale.',
    about_tag: 'À propos', about_title: 'Technologie & passion au service de vos projets',
    about_desc: 'Je suis Oumate Razakou, développeur Full Stack et expert en Intelligence Artificielle basé à Lomé, Togo. Depuis plusieurs années, je conçois des solutions numériques innovantes pour les structures qui veulent prendre une longueur d\'avance dans leur transformation digitale.',
    about_vision: 'Ma vision est simple : chaque structure, quelle que soit sa taille ou son secteur, mérite des outils numériques de qualité professionnelle. Je mets cette expertise au service de vos ambitions.',
    portfolio_tag: 'Portfolio',
    props_tag: 'Propositions', props_title: 'Mes offres de services détaillées',
    props_subtitle: 'Consultez mes propositions complètes pour chaque domaine d\'expertise. Chaque document présente les fonctionnalités, avantages et conditions de chaque service.',
    contact_tag: 'Contact', contact_title: 'Démarrons votre projet',
    contact_subtitle: 'Décrivez votre projet et je vous réponds sous 24h avec une analyse personnalisée.',
    form_name: 'Nom complet', form_email: 'Adresse email', form_phone: 'Téléphone / WhatsApp',
    form_service: 'Service souhaité', form_message: 'Décrivez votre projet', form_submit: 'Envoyer le message',
    form_ph_name: 'Votre nom', form_ph_email: 'votre@email.com', form_ph_phone: '+228 XX XX XX XX',
    form_ph_message: 'Décrivez votre projet, vos besoins, votre budget...',
    footer_desc: 'Développeur Full Stack & Expert IA basé à Lomé, Togo. Je crée des solutions numériques sur mesure pour les structures ambitieuses.',
    footer_nav: 'Navigation', footer_services_title: 'Services', footer_contact_title: 'Contact',
    cta_title: 'Prêt à transformer votre présence numérique ?',
    cta_sub: 'Un entretien découverte gratuit pour analyser vos besoins et définir la solution idéale.',
    cta_btn: 'Réserver un entretien gratuit',
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services',
    nav_portfolio: 'Portfolio', nav_propositions: 'Proposals', nav_contact: 'Contact',
    nav_prop_ia: 'AI Agent', nav_prop_web: 'Web Development', nav_prop_streaming: 'Streaming Software',
    nav_cta: 'Start a project',
    hero_badge: 'Available for new projects',
    hero_title_1: 'Let\'s build your', hero_title_2: 'digital presence', hero_title_3: 'of tomorrow.',
    hero_typed: ['Full Stack Developer', 'Artificial Intelligence Expert', 'AI Agent Designer', 'Digital Consultant', 'Automation Expert'],
    hero_desc: 'I design custom websites, high-performance applications and intelligent agents that transform your business — with precision, elegance and guaranteed results.',
    hero_btn_primary: 'See my services', hero_btn_secondary: 'Contact me',
    stat_1: 'Projects delivered', stat_2: 'Years experience', stat_3: 'Happy clients', stat_4: 'Technologies',
    services_tag: 'Expertise',
    services_subtitle: 'From web development to artificial intelligence — I cover your entire digital transformation.',
    about_tag: 'About', about_title: 'Technology & passion serving your projects',
    about_desc: 'I am Oumate Razakou, Full Stack developer and AI expert based in Lomé, Togo. For several years, I have been designing innovative digital solutions for businesses that want to stay ahead in their digital transformation.',
    about_vision: 'My vision is simple: every structure, regardless of its size or sector, deserves professional-quality digital tools. I put this expertise at the service of your ambitions.',
    portfolio_tag: 'Portfolio',
    props_tag: 'Proposals', props_title: 'My detailed service proposals',
    props_subtitle: 'Browse my complete proposals for each area of expertise. Each document presents features, benefits and conditions for each service.',
    contact_tag: 'Contact', contact_title: 'Let\'s start your project',
    contact_subtitle: 'Describe your project and I\'ll respond within 24h with a personalized analysis.',
    form_name: 'Full name', form_email: 'Email address', form_phone: 'Phone / WhatsApp',
    form_service: 'Desired service', form_message: 'Describe your project', form_submit: 'Send message',
    form_ph_name: 'Your name', form_ph_email: 'your@email.com', form_ph_phone: '+228 XX XX XX XX',
    form_ph_message: 'Describe your project, needs, budget...',
    footer_desc: 'Full Stack Developer & AI Expert based in Lomé, Togo. I create custom digital solutions for ambitious businesses.',
    footer_nav: 'Navigation', footer_services_title: 'Services', footer_contact_title: 'Contact',
    cta_title: 'Ready to transform your digital presence?',
    cta_sub: 'A free discovery meeting to analyze your needs and define the ideal solution.',
    cta_btn: 'Book a free meeting',
  }
};

let currentLang = localStorage.getItem('devzak_lang') || 'fr';
function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS['fr'][key] || key; }
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val) { el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' ? el.placeholder = val : el.textContent = val; }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang));
  document.documentElement.lang = currentLang;
  if (window._typedInstance) { window._typedInstance.destroy(); initTyped(); }
}
function setLang(lang) { currentLang = lang; localStorage.setItem('devzak_lang', lang); applyTranslations(); }

/* ── Particles Canvas ── */
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, particles = [], mouse = { x: null, y: null };
  const PARTICLE_COUNT = 80, MAX_DIST = 130;
  function resize() { width = canvas.width = canvas.offsetWidth; height = canvas.height = canvas.offsetHeight; }
  class Particle {
    constructor() { this.reset(); }
    reset() { this.x = Math.random()*width; this.y = Math.random()*height; this.vx = (Math.random()-.5)*.5; this.vy = (Math.random()-.5)*.5; this.r = Math.random()*2.5+1; this.alpha = Math.random()*.6+.2; this.color = Math.random()>.5 ? '26,86,219' : '6,182,212'; }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      if (mouse.x) { const dx=this.x-mouse.x, dy=this.y-mouse.y, dist=Math.sqrt(dx*dx+dy*dy); if(dist<80){this.x+=dx*.03;this.y+=dy*.03;} }
    }
    draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fillStyle=`rgba(${this.color},${this.alpha})`; ctx.fill(); }
  }
  function drawLines() {
    for(let i=0;i<particles.length;i++) for(let j=i+1;j<particles.length;j++) {
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y, dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<MAX_DIST) { ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.strokeStyle=`rgba(26,86,219,${(1-dist/MAX_DIST)*.25})`; ctx.lineWidth=.8; ctx.stroke(); }
    }
  }
  function animate() { ctx.clearRect(0,0,width,height); particles.forEach(p=>{p.update();p.draw();}); drawLines(); requestAnimationFrame(animate); }
  resize(); for(let i=0;i<PARTICLE_COUNT;i++) particles.push(new Particle()); animate();
  window.addEventListener('resize', resize);
  canvas.addEventListener('mousemove', e => { const r=canvas.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });
  canvas.addEventListener('mouseleave', () => { mouse.x=null; mouse.y=null; });
}

/* ── Typed Text ── */
function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const strings = t('hero_typed');
  let si=0, ci=0, deleting=false, paused=false;
  function type() {
    const current = strings[si];
    if (paused) { setTimeout(type, 1800); paused=false; return; }
    if (!deleting) { el.textContent=current.slice(0,ci+1); ci++; if(ci===current.length){paused=true;deleting=true;} setTimeout(type,90); }
    else { el.textContent=current.slice(0,ci-1); ci--; if(ci===0){deleting=false;si=(si+1)%strings.length;} setTimeout(type,45); }
  }
  window._typedInstance = { destroy: () => {} }; type();
}

/* ── Scroll Reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Navbar scroll ── */
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));
}

/* ── Active nav link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === path || (path==='' && a.getAttribute('href')==='index.html')));
}

/* ── Mobile nav ── */
function initMobileNav() {
  const btn = document.getElementById('nav-hamburger');
  const nav = document.getElementById('mobile-nav');
  const close = document.getElementById('mobile-nav-close');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => { btn.classList.add('open'); nav.classList.add('open'); document.body.style.overflow='hidden'; });
  if (close) close.addEventListener('click', () => { btn.classList.remove('open'); nav.classList.remove('open'); document.body.style.overflow=''; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { btn.classList.remove('open'); nav.classList.remove('open'); document.body.style.overflow=''; }));
}

/* ── Smooth counters ── */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target') || el.textContent);
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0; const step = target/60;
    const obs = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        const timer = setInterval(() => { current=Math.min(current+step,target); el.textContent=Math.floor(current)+suffix; if(current>=target)clearInterval(timer); },25);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ── Contact form → WhatsApp ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const name    = (form.querySelector('[name=name]')?.value    || '').trim();
    const email   = (form.querySelector('[name=email]')?.value   || '').trim();
    const phone   = (form.querySelector('[name=phone]')?.value   || '').trim();
    const service = (form.querySelector('[name=service]')?.value || '').trim();
    const message = (form.querySelector('[name=message]')?.value || '').trim();
    if (!name || !email || !message) {
      btn.textContent = currentLang==='fr' ? 'Remplissez les champs requis' : 'Fill required fields';
      btn.style.background='#EA580C';
      setTimeout(() => { btn.textContent=t('form_submit'); btn.style.background=''; }, 2500);
      return;
    }
    const serviceLabels = { web: currentLang==='fr'?'Développement Web':'Web Development', ia: currentLang==='fr'?'Agent IA':'AI Agent', streaming:'Logiciel Streaming', marketing:'Marketing Digital', conseil: currentLang==='fr'?'Conseil Digital':'Digital Consulting', autre: currentLang==='fr'?'Autre':'Other' };
    const serviceLabel = service ? (serviceLabels[service]||service) : (currentLang==='fr'?'Non précisé':'Not specified');
    const waMessage = currentLang==='fr'
      ? `*Nouveau message depuis Dev.zak*\n\n*Nom :* ${name}\n*Email :* ${email}\n*Téléphone :* ${phone||'Non renseigné'}\n*Service :* ${serviceLabel}\n\n*Message :*\n${message}`
      : `*New message from Dev.zak*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone||'Not provided'}\n*Service:* ${serviceLabel}\n\n*Message:*\n${message}`;
    window.open(`https://wa.me/22892101969?text=${encodeURIComponent(waMessage)}`, '_blank', 'noopener,noreferrer');
    btn.textContent = currentLang==='fr' ? 'Redirection WhatsApp...' : 'Opening WhatsApp...';
    btn.style.background='#16A34A';
    setTimeout(() => { btn.textContent=t('form_submit'); btn.style.background=''; form.reset(); }, 3000);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initReveal();
  setActiveNav();
  initMobileNav();
  animateCounters();
  initContactForm();
  applyTranslations();
  initParticles('particles-canvas');
  initTyped();
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang'))));
});
