/* ===============================================
   GASTRO-COFFE: LÓGICA Y ANIMACIONES
   Vanilla JS + GSAP 3 + ScrollTrigger
   =============================================== */

// Registrar plugins GSAP
gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// 1. NAVBAR LOGIC
// ─────────────────────────────────────────────

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Navbar scroll behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer click en un enlace
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');

      // Marcar enlace activo
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Detectar sección activa al scrollear
  window.addEventListener('scroll', () => {
    updateActiveNavLink();
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}

// ─────────────────────────────────────────────
// 2. HERO PARALLAX
// ─────────────────────────────────────────────

function initHeroParallax() {
  const heroContent = document.querySelector('.hero-content');

  if (!heroContent) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxSpeed = scrolled * 0.5;
    heroContent.style.transform = `translateY(${parallaxSpeed}px)`;
  });
}

// ─────────────────────────────────────────────
// 3. NUMBERS SECTION - ANIMACIÓN DE ROTACIÓN
// ─────────────────────────────────────────────

function initNumbersSection() {
  const animatedContent = document.querySelector('.number-card-2 .content-animated');

  if (!animatedContent) return;

  const items = [
    '🍽️ Comida casera 100% natural',
    '☕ Café de especialidad',
    '🏡 Ambiente para quedarse'
  ];

  let currentIndex = 0;

  function rotateText() {
    const nextIndex = (currentIndex + 1) % items.length;

    gsap.to(animatedContent, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        animatedContent.textContent = items[nextIndex];
        gsap.to(animatedContent, {
          opacity: 1,
          duration: 0.3
        });
      }
    });

    currentIndex = nextIndex;
  }

  setInterval(rotateText, 3000);
  animatedContent.textContent = items[0];
}

// ─────────────────────────────────────────────
// 4. ABOUT SECTION - SPLIT TEXT ANIMATION
// ─────────────────────────────────────────────

function initAboutSection() {
  const aboutParagraphs = document.querySelectorAll('.about-text p');

  if (aboutParagraphs.length === 0) return;

  aboutParagraphs.forEach((p, idx) => {
    // Dividir texto por palabras
    const words = p.innerText.split(' ');
    p.innerHTML = words
      .map(word => `<span class="about-word">${word}</span>`)
      .join(' ');

    // Animar con ScrollTrigger
    const wordSpans = p.querySelectorAll('.about-word');
    gsap.set(wordSpans, { opacity: 0, y: 20 });

    gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: {
        amount: 1,
        from: 'start'
      },
      scrollTrigger: {
        trigger: p,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// ─────────────────────────────────────────────
// 5. MANIFESTO SECTION - FADE UP STAGGERED
// ─────────────────────────────────────────────

function initManifestoSection() {
  const manifestoParagraphs = document.querySelectorAll('.manifesto-content p');

  if (manifestoParagraphs.length === 0) return;

  gsap.set(manifestoParagraphs, { opacity: 0, y: 30 });

  gsap.to(manifestoParagraphs, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.manifesto-section',
      start: 'top 60%',
      toggleActions: 'play none none none'
    }
  });
}

// ─────────────────────────────────────────────
// 6. EXPERIENCE SECTION - STACKED SCROLL
// ─────────────────────────────────────────────

function initExperienceSection() {
  const cards = document.querySelectorAll('.experience-card');

  if (cards.length === 0) return;

  cards.forEach((card, idx) => {
    gsap.set(card, { opacity: 0, y: 100 });

    // Card appears when scrolling into view
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stacked scroll effect
  cards.forEach((card, idx) => {
    if (idx < cards.length - 1) {
      gsap.to(cards[idx], {
        scale: 0.9,
        opacity: 0.5,
        filter: 'blur(10px)',
        scrollTrigger: {
          trigger: cards[idx + 1],
          start: 'top center',
          end: 'top 30%',
          scrub: true,
          onEnter: () => {
            gsap.to(cards[idx], {
              scale: 0.9,
              opacity: 0.5,
              filter: 'blur(10px)',
              duration: 0.6
            });
          }
        }
      });
    }
  });
}

// ─────────────────────────────────────────────
// 7. MENU SECTION - HOVER EFFECTS
// ─────────────────────────────────────────────

function initMenuSection() {
  const menuCards = document.querySelectorAll('.menu-card');

  menuCards.forEach(card => {
    gsap.set(card, { opacity: 0, y: 30 });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3
      });
    });
  });
}

// ─────────────────────────────────────────────
// 8. CONTACT SECTION - ZOOM IN
// ─────────────────────────────────────────────

function initContactSection() {
  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach((item, idx) => {
    gsap.set(item, { opacity: 0, scale: 0.8 });

    gsap.to(item, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay: idx * 0.1,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// ─────────────────────────────────────────────
// 9. BOTONES - EFECTO MAGNÉTICO
// ─────────────────────────────────────────────

function initButtonEffects() {
  const buttons = document.querySelectorAll('button, .btn');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.2
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.2
      });
    });

    btn.addEventListener('mousedown', () => {
      gsap.to(btn, {
        scale: 0.98,
        duration: 0.1
      });
    });

    btn.addEventListener('mouseup', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.1
      });
    });
  });
}

// ─────────────────────────────────────────────
// 10. NÚMEROS HORARIOS - CURSOR PARPADEANTE
// ─────────────────────────────────────────────

function initTimelineCard() {
  const card1Content = document.querySelector('.number-card-1 .content');

  if (!card1Content) return;

  const times = [
    'Lun – Vie  6:00 am – 7:00 pm',
    'Sáb – Dom  6:00 am – 8:00 pm'
  ];

  const innerHTML = times
    .map(time => `<div>${time}</div>`)
    .join('');

  card1Content.innerHTML = innerHTML + '<span class="cursor-blink"></span>';
}

// ─────────────────────────────────────────────
// 11. MAPA INTERACTIVO SIMULADO
// ─────────────────────────────────────────────

function initLocationCard() {
  const card3Content = document.querySelector('.number-card-3 .content-animated');

  if (!card3Content) {
    // Si no existe la sección números, crear una simple
    initLocationCardSimple();
    return;
  }

  // Mostrar ubicación inicial
  card3Content.innerHTML = `
    <div style="font-weight: 600; color: var(--naranja-calido);">Suba – Cota</div>
    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Km 3 Vía Suba-Cota<br/>Cl. 171 No. 93-55</div>
  `;
}

function initLocationCardSimple() {
  // Fallback si no existe la tarjeta de ubicación
  const locationElements = document.querySelectorAll('[data-location]');
  locationElements.forEach(el => {
    el.innerHTML = 'Km 3 Vía Suba-Cota, Cl. 171 No. 93-55, Bogotá';
  });
}

// ─────────────────────────────────────────────
// 12. SCROLL ANIMATIONS GLOBALES
// ─────────────────────────────────────────────

function initGlobalScrollAnimations() {
  // Headers que aparecen con fade-up
  const headers = document.querySelectorAll('h2:not(.hero-subtitle-italic)');

  headers.forEach(header => {
    gsap.set(header, { opacity: 0, y: 20 });

    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// ─────────────────────────────────────────────
// 13. SMOOTH SCROLL A SECCIONES
// ─────────────────────────────────────────────

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      gsap.to(window, {
        scrollTo: {
          y: target.offsetTop - 80,
          autoKill: false
        },
        duration: 0.8,
        ease: 'power2.inOut'
      });
    });
  });
}

// ─────────────────────────────────────────────
// 14. INICIALIZACIÓN GENERAL
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todas las funciones
  initNavbar();
  initHeroParallax();
  initNumbersSection();
  initAboutSection();
  initManifestoSection();
  initExperienceSection();
  initMenuSection();
  initContactSection();
  initButtonEffects();
  initTimelineCard();
  initLocationCard();
  initGlobalScrollAnimations();
  initSmoothScroll();

  // Log de inicialización
  console.log('✨ Gastro-Coffe está listo. Que disfrutes del café.');
});

// ─────────────────────────────────────────────
// 15. HELPER FUNCTIONS
// ─────────────────────────────────────────────

// Detectar si estamos en un dispositivo móvil
function isMobile() {
  return window.innerWidth <= 768;
}

// Debounce para resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Manejar cambios de tamaño de ventana
window.addEventListener('resize', debounce(() => {
  ScrollTrigger.refresh();
}, 250));
