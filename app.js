/* =====================================================
   MUSICALA × FONEH — app.js
   Funcionalidades interactivas completas
   ===================================================== */

// ─── DATA ───────────────────────────────────────────

const SERVICES_DATA = [
  {
    id: 's1', cat: 'musica',
    title: 'Guitarra', emoji: '🎸',
    img: 'assets/catalogo/guitarra.png',
    desc: 'Clases individuales y grupales de guitarra acústica, eléctrica y clásica para todos los niveles.',
    tags: ['Acústica', 'Eléctrica', 'Clásica'],
    audience: '👶 Niños · 🧑 Jóvenes · 👨 Adultos',
    catLabel: 'Música'
  },
  {
    id: 's2', cat: 'musica',
    title: 'Piano & Teclado', emoji: '🎹',
    img: 'assets/catalogo/piano.png',
    desc: 'Piano clásico, popular y teclado. Desde iniciación hasta niveles avanzados.',
    tags: ['Piano', 'Teclado', 'Clásico'],
    audience: '👶 Niños · 🧑 Jóvenes · 👨 Adultos',
    catLabel: 'Música'
  },
  {
    id: 's3', cat: 'musica',
    title: 'Canto & Voz', emoji: '🎤',
    img: 'assets/catalogo/canto.png',
    desc: 'Técnica vocal, respiración, afinación y repertorio. Coros y canto solista.',
    tags: ['Técnica Vocal', 'Coro', 'Solista'],
    audience: '🧑 Jóvenes · 👨 Adultos',
    catLabel: 'Música'
  },
  {
    id: 's4', cat: 'musica',
    title: 'Violín', emoji: '🎻',
    img: 'assets/catalogo/violin.png',
    desc: 'Violín clásico y popular. Técnica de arco, postura y repertorio progresivo.',
    tags: ['Clásico', 'Orquestal', 'Popular'],
    audience: '👶 Niños · 🧑 Jóvenes · 👨 Adultos',
    catLabel: 'Música'
  },
  {
    id: 's5', cat: 'musica',
    title: 'Música para Niños', emoji: '🎵',
    img: 'assets/catalogo/musica-ninos.png',
    desc: 'Iniciación musical lúdica para los más pequeños. Ritmo, melodía y creatividad.',
    tags: ['Iniciación', 'Lúdico', 'Ritmo'],
    audience: '👶 Niños 3-8 años',
    catLabel: 'Música'
  },
  {
    id: 's6', cat: 'danza',
    title: 'Danza Urbana', emoji: '🕺',
    img: 'assets/catalogo/danza-urbana.png',
    desc: 'Hip-Hop, Breaking, Popping y Locking. Géneros urbanos con técnica y estilo.',
    tags: ['Hip-Hop', 'Breaking', 'Freestyle'],
    audience: '👶 Niños · 🧑 Jóvenes',
    catLabel: 'Danza'
  },
  {
    id: 's7', cat: 'danza',
    title: 'Ritmos Latinos', emoji: '💃',
    img: 'assets/catalogo/ritmos-latinos.png',
    desc: 'Salsa, Merengue, Cumbia y Bachata. Aprende a bailar en pareja y en grupo.',
    tags: ['Salsa', 'Bachata', 'Cumbia'],
    audience: '👨 Adultos · 👨‍👩‍👧 Familias',
    catLabel: 'Danza'
  },
  {
    id: 's8', cat: 'danza',
    title: 'Ballet & Danza Moderna', emoji: '🩰',
    img: 'assets/catalogo/ballet.png',
    desc: 'Ballet clásico y danza contemporánea. Técnica, postura y expresión artística.',
    tags: ['Ballet', 'Contemporáneo', 'Técnica'],
    audience: '👶 Niños · 🧑 Jóvenes',
    catLabel: 'Danza'
  },
  {
    id: 's9', cat: 'teatro',
    title: 'Teatro & Expresión', emoji: '🎭',
    img: 'assets/catalogo/expresion-escenica.png',
    desc: 'Expresión corporal, manejo escénico, improvisación y montajes teatrales.',
    tags: ['Actuación', 'Improvisación', 'Escena'],
    audience: '👶 Niños · 🧑 Jóvenes · 👨 Adultos',
    catLabel: 'Teatro'
  },
  {
    id: 's10', cat: 'artes',
    title: 'Dibujo & Pintura', emoji: '🎨',
    img: 'assets/catalogo/pintura.png',
    desc: 'Dibujo técnico y artístico, pintura al óleo, acrílico y acuarela. Todas las técnicas.',
    tags: ['Dibujo', 'Pintura', 'Técnicas Mixtas'],
    audience: '👶 Niños · 🧑 Jóvenes · 👨 Adultos · 👵 Mayores',
    catLabel: 'Artes'
  },
  {
    id: 's11', cat: 'artes',
    title: 'Arte Infantil', emoji: '🖍️',
    img: 'assets/catalogo/arte-infantil.png',
    desc: 'Artes plásticas lúdicas para niños. Creatividad, colores y manualidades.',
    tags: ['Infantil', 'Manualidades', 'Creatividad'],
    audience: '👶 Niños 3-10 años',
    catLabel: 'Artes'
  },
  {
    id: 's12', cat: 'especial',
    title: 'Vacacional Artístico', emoji: '🌟',
    img: 'assets/areas/musica.png',
    desc: 'Programa intensivo en vacaciones: música, danza, teatro y artes en un solo plan.',
    tags: ['Vacacional', 'Intensivo', 'Multiáreas'],
    audience: '👶 Niños · 🧑 Jóvenes',
    catLabel: 'Especiales'
  },
  {
    id: 's13', cat: 'especial',
    title: 'Talleres Empresariales', emoji: '🏢',
    img: 'assets/cards/grupal.png',
    desc: 'Actividades artísticas diseñadas para fortalecer equipos de trabajo.',
    tags: ['Team Building', 'Bienestar', 'Empresas'],
    audience: '👨 Adultos · Empresas',
    catLabel: 'Empresarial'
  },
  {
    id: 's14', cat: 'especial',
    title: 'Clases en Casa', emoji: '🏠',
    img: 'assets/cards/personalizado.png',
    desc: 'El profesor va a tu hogar. Comodidad total sin desplazamientos.',
    tags: ['A Domicilio', 'Personalizado', 'Flexible'],
    audience: '👨‍👩‍👧 Familias · Todas las edades',
    catLabel: 'Especiales'
  }
];

const GALLERY_DATA = [
  { id: 1,  cat: 'musica',  img: 'assets/catalogo/guitarra.png',         title: 'Guitarra',            desc: 'Clases individuales y grupales · Música' },
  { id: 2,  cat: 'danza',   img: 'assets/catalogo/danza-urbana.png',     title: 'Danza Urbana',        desc: 'Hip-Hop y géneros urbanos · Danza' },
  { id: 3,  cat: 'teatro',  img: 'assets/catalogo/expresion-escenica.png', title: 'Expresión Escénica', desc: 'Actuación y montajes · Teatro' },
  { id: 4,  cat: 'artes',   img: 'assets/catalogo/pintura.png',          title: 'Pintura',             desc: 'Técnicas mixtas · Artes Plásticas' },
  { id: 5,  cat: 'musica',  img: 'assets/catalogo/piano.png',            title: 'Piano',               desc: 'Clásico y popular · Música' },
  { id: 6,  cat: 'danza',   img: 'assets/catalogo/ritmos-latinos.png',   title: 'Ritmos Latinos',      desc: 'Salsa, Bachata, Cumbia · Danza' },
  { id: 7,  cat: 'artes',   img: 'assets/catalogo/dibujo.png',           title: 'Dibujo',              desc: 'Técnica y creatividad · Artes' },
  { id: 8,  cat: 'musica',  img: 'assets/catalogo/canto.png',            title: 'Canto',               desc: 'Técnica vocal · Música' },
  { id: 9,  cat: 'danza',   img: 'assets/catalogo/ballet.png',           title: 'Ballet',              desc: 'Clásico y contemporáneo · Danza' },
  { id: 10, cat: 'musica',  img: 'assets/catalogo/violin.png',           title: 'Violín',              desc: 'Clásico y popular · Música' },
  { id: 11, cat: 'artes',   img: 'assets/catalogo/arte-infantil.png',    title: 'Arte Infantil',       desc: 'Creatividad para niños · Artes' },
  { id: 12, cat: 'musica',  img: 'assets/catalogo/musica-ninos.png',     title: 'Música para Niños',   desc: 'Iniciación musical · Música' },
];

const TESTIMONIALS_DATA = [
  [
    { name: 'Claudia Moreno', role: 'Madre de familia · Foneh', text: 'Mis hijos han crecido increíblemente con Musicala. El convenio con Foneh fue la oportunidad perfecta para acceder a una formación artística de calidad a un costo asequible. ¡Los recomiendo enormemente!', stars: 5, avatar: 'CM' },
    { name: 'Ricardo Vargas', role: 'Asociado Foneh', text: 'Participé en el taller de team building para nuestro equipo y fue transformador. Actividades artísticas que fortalecieron los lazos y la comunicación. Una experiencia que superó nuestras expectativas.', stars: 5, avatar: 'RV' },
    { name: 'Sandra Ruíz', role: 'Estudiante de Canto', text: 'Empecé desde cero y en seis meses ya tenía mi primera actuación. Los profesores de Musicala son excepcionales, pacientes y muy profesionales. Gracias al descuento de Foneh pude inscribirme.', stars: 5, avatar: 'SR' },
  ],
  [
    { name: 'Jorge Beltrán', role: 'Padre de familia · Foneh', text: 'Mi hija de 7 años tomó clases de danza y pintura. Verla crecer artísticamente ha sido un regalo. El ambiente de Musicala es cálido, seguro y muy profesional. Definitivamente continuamos el próximo semestre.', stars: 5, avatar: 'JB' },
    { name: 'Valentina Cruz', role: 'Estudiante de Guitarra', text: 'Siempre quise aprender guitarra pero no encontraba el lugar adecuado. Con Musicala encontré el ambiente perfecto: profesores expertos, instalaciones cómodas y el respaldo de mi convenio Foneh.', stars: 5, avatar: 'VC' },
    { name: 'Andrés Ospina', role: 'Recursos Humanos · Empresa Foneh', text: 'Organizamos el Día de la Familia con Musicala y fue un éxito total. Actividades para todas las edades, excelente logística y un equipo muy profesional. Nuestros empleados quedaron encantados.', stars: 5, avatar: 'AO' },
  ]
];

const ACTIVITIES_DATA = [
  { emoji: '👨‍👩‍👧', title: 'Día de la Familia', desc: 'Un día especial con actividades artísticas para toda la familia: talleres, música en vivo, danza y mucho más.', label: 'FONEH ESPECIAL', gradient: 'linear-gradient(135deg,#0057A8,#7B1FA2)' },
  { emoji: '🎈', title: 'Día del Niño', desc: 'Celebración artística especial con shows, talleres interactivos y experiencias únicas para los más pequeños.', label: 'NIÑOS', gradient: 'linear-gradient(135deg,#F59E0B,#EF4444)' },
  { emoji: '☀️', title: 'Vacaciones Recreativas', desc: 'Programa intensivo de vacaciones con música, danza, teatro y artes. Diversión y aprendizaje asegurados.', label: 'VACACIONAL', gradient: 'linear-gradient(135deg,#10B981,#059669)' },
  { emoji: '🧘', title: 'Talleres de Bienestar', desc: 'El arte como herramienta de bienestar emocional: musicoterapia, expresión corporal y relajación creativa.', label: 'BIENESTAR', gradient: 'linear-gradient(135deg,#8B5CF6,#6D28D9)' },
  { emoji: '🤝', title: 'Integraciones Empresariales', desc: 'Fortalecer equipos de trabajo mediante actividades artísticas que mejoran comunicación y cohesión.', label: 'EMPRESARIAL', gradient: 'linear-gradient(135deg,#1565C0,#0D47A1)' },
  { emoji: '🏛️', title: 'Eventos Institucionales', desc: 'Shows artísticos de alta calidad para celebraciones, aniversarios y eventos oficiales de Foneh.', label: 'INSTITUCIONAL', gradient: 'linear-gradient(135deg,#BF360C,#E64A19)' },
  { emoji: '🌟', title: 'Experiencias Personalizadas', desc: 'Diseñamos experiencias artísticas únicas y a medida según las necesidades específicas de cada asociado o grupo.', label: 'PERSONALIZADO', gradient: 'linear-gradient(135deg,#7B1FA2,#4A148C)' },
];

// ─── INIT ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNav();
  initDarkMode();
  initScrollAnimations();
  initStatsCounter();
  renderServices();
  renderActivities();
  renderGallery();
  renderTestimonials();
  loadPricing();
  initGalleryFilter();
  initLightbox();
  initTestimonialsCarousel();
  initContactForm();
  initBackToTop();
  initParticles();
});

// ─── LOADING SCREEN ──────────────────────────────────

function initLoading() {
  const overlay = document.getElementById('loading-overlay');
  if (!overlay) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      overlay.classList.add('hidden');
      setTimeout(() => overlay.remove(), 600);
    }, 800);
  });
}

// ─── HERO PARTICLES ──────────────────────────────────

function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  const icons = ['🎵','🎶','🎸','🎹','💃','🕺','🎭','🎨','🥁','🎷','🎺','🎻','🌟','✨'];
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (8 + Math.random() * 12) + 's';
    span.style.animationDelay = (Math.random() * 10) + 's';
    span.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
    container.appendChild(span);
  }
}

// ─── NAVIGATION ──────────────────────────────────────

function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('back-to-top')?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('nav').offsetHeight;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });
}

// ─── DARK MODE ───────────────────────────────────────

function initDarkMode() {
  const toggle = document.getElementById('dark-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';

  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ─── STATS COUNTER ───────────────────────────────────

function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = prefix + Math.floor(start).toLocaleString('es-CO') + suffix;
        if (start >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ─── SERVICES ────────────────────────────────────────

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.map(s => `
    <div class="service-card fade-up" data-cat="${s.cat}">
      <div class="service-img-wrap">
        <img src="${s.img}" alt="${s.title}" class="service-img-real" loading="lazy" />
        <span class="service-img-label">${s.catLabel}</span>
        <span class="service-img-emoji">${s.emoji}</span>
      </div>
      <div class="service-body">
        <div class="service-name">${s.title}</div>
        <div class="service-desc">${s.desc}</div>
        <div class="service-tags">${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}</div>
        <div class="service-audience">👥 ${s.audience}</div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.service-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
      });
      initScrollAnimations();
    });
  });
}

// ─── ACTIVITIES ──────────────────────────────────────

function renderActivities() {
  const grid = document.getElementById('activities-grid');
  if (!grid) return;
  grid.innerHTML = ACTIVITIES_DATA.map((a, i) => `
    <div class="activity-card fade-up delay-${(i % 3) + 1}">
      <div class="activity-img" style="background:${a.gradient}">
        <span>${a.emoji}</span>
        <span class="activity-label">${a.label}</span>
      </div>
      <div class="activity-body">
        <div class="activity-title">${a.title}</div>
        <div class="activity-desc">${a.desc}</div>
      </div>
    </div>
  `).join('');
  initScrollAnimations();
}

// ─── GALLERY ─────────────────────────────────────────

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = GALLERY_DATA.map(item => `
    <div class="gallery-item" data-cat="${item.cat}" data-id="${item.id}">
      <img src="${item.img}" alt="${item.title}" class="gallery-img-real" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-overlay-icon">🔍</span>
        <span class="gallery-overlay-text">${item.title}</span>
      </div>
    </div>
  `).join('');
}

function initGalleryFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        const show = cat === 'all' || item.dataset.cat === cat;
        item.style.display = show ? 'block' : 'none';
        if (show) item.classList.add('fade-in', 'visible');
      });
    });
  });
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbTitle = document.getElementById('lb-title');
  const lbDesc = document.getElementById('lb-desc');
  const lbClose = document.getElementById('lb-close');
  if (!lb) return;

  document.getElementById('gallery-grid')?.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const id = parseInt(item.dataset.id);
    const data = GALLERY_DATA.find(g => g.id === id);
    if (!data) return;
    lbImg.style.background = '';
    lbImg.innerHTML = `<img src="${data.img}" alt="${data.title}" style="width:100%;height:100%;object-fit:cover;" />`;
    lbTitle.textContent = data.title;
    lbDesc.textContent = data.desc;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeLb = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  lbClose?.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}

// ─── TESTIMONIALS ────────────────────────────────────

function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsWrap = document.getElementById('testimonials-dots');
  if (!track) return;

  track.innerHTML = TESTIMONIALS_DATA.map(slide => `
    <div class="testimonial-slide">
      <div class="testimonial-grid">
        ${slide.map(t => `
          <div class="testimonial-card">
            <div class="testimonial-stars">${'⭐'.repeat(t.stars)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">${t.avatar}</div>
              <div>
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (dotsWrap) {
    dotsWrap.innerHTML = TESTIMONIALS_DATA.map((_, i) =>
      `<span class="dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
    ).join('');
  }
}

function initTestimonialsCarousel() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  let current = 0;
  let autoTimer;

  const goTo = idx => {
    current = Math.max(0, Math.min(idx, TESTIMONIALS_DATA.length - 1));
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo((current + 1) % TESTIMONIALS_DATA.length), 6000);
  };

  document.getElementById('t-prev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('t-next')?.addEventListener('click', () => goTo(current + 1));
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
  });

  autoTimer = setInterval(() => goTo((current + 1) % TESTIMONIALS_DATA.length), 6000);
}

// ─── PRICING ─────────────────────────────────────────

async function loadPricing() {
  const container = document.getElementById('pricing-container');
  if (!container) return;

  let data;
  try {
    const res = await fetch('data/precios.json');
    if (!res.ok) throw new Error();
    data = await res.json();
  } catch {
    // Fallback inline cuando se abre como file:// sin servidor
    data = null;
  }

  if (!data || !data.grupos) {
    container.innerHTML = `
      <div style="text-align:center;padding:48px;color:var(--text-muted)">
        <div style="font-size:2rem;margin-bottom:12px">📋</div>
        <div style="font-weight:600;margin-bottom:8px">Tarifas en actualización</div>
        <div style="font-size:.9rem">Contacta a Musicala para conocer los precios del convenio Foneh.</div>
      </div>`;
    return;
  }

  const fmt = v => '$' + v.toLocaleString('es-CO');

  const html = data.grupos.map(grupo => `
    <div class="price-group fade-up">
      <div class="price-group-header">
        <div class="price-group-icon">${grupo.icono}</div>
        <div>
          <div class="price-group-name">${grupo.nombre}</div>
          <div class="price-group-desc">${grupo.descripcion}</div>
        </div>
      </div>
      <div class="price-packages">
        ${grupo.precios.map(p => `
          <div class="price-pkg">
            <span class="pkg-label">${p.paquete}</span>
            <span class="pkg-price">${fmt(p.valor)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `<div class="price-groups-grid">${html}</div>`;

  if (data.nota) {
    const noteEl = document.getElementById('pricing-note');
    if (noteEl) noteEl.textContent = '📌 ' + data.nota;
  }

  initScrollAnimations();
}

// ─── CONTACT FORM ────────────────────────────────────

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const name    = form.querySelector('#f-name').value.trim();
    const email   = form.querySelector('#f-email').value.trim();
    const interes = form.querySelector('#f-interes').value;
    const mensaje = form.querySelector('#f-mensaje').value.trim();

    if (!name || !email || !interes || !mensaje) {
      showToast('Por favor completa todos los campos.', 'error');
      return;
    }

    const wa = `https://wa.me/57XXXXXXXXXX?text=${encodeURIComponent(
      `Hola Musicala, soy *${name}* (${email}), asociado Foneh.\nMe interesa: *${interes}*.\n${mensaje}`
    )}`;

    btn.textContent = '✅ Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      window.open(wa, '_blank');
      form.reset();
      btn.textContent = 'Enviar solicitud →';
      btn.disabled = false;
      showToast('¡Mensaje enviado! Te contactaremos pronto.', 'success');
    }, 600);
  });
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position:fixed;bottom:32px;left:50%;transform:translateX(-50%);
    padding:14px 28px;border-radius:50px;font-family:var(--font);font-size:.9rem;font-weight:600;
    color:white;z-index:99999;animation:toastIn .3s ease;white-space:nowrap;
    background:${type==='success' ? 'linear-gradient(135deg,#10B981,#059669)' : 'linear-gradient(135deg,#EF4444,#DC2626)'};
    box-shadow:0 8px 30px rgba(0,0,0,.25);
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  const style = document.createElement('style');
  style.textContent = '@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(style);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity .3s'; setTimeout(()=>toast.remove(),300); }, 3500);
}

// ─── BACK TO TOP ─────────────────────────────────────

function initBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
