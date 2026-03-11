// ==========================================================================
// UI & INTERACCIONES GLOBALES
// ==========================================================================

function initUI() {
    // Navbar Scroll Effect + Logo Change
    const navbar = document.getElementById('navbar');
    const logoPrincipal = document.getElementById('logo-principal');

    // Detectar si estamos en una página dentro de /pages/ o en root
    const isInPages = window.location.pathname.includes('/pages/');
    const logoPath = isInPages ? '../assets/svg/' : 'assets/svg/';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (logoPrincipal) logoPrincipal.src = logoPath + 'gastro-coffe_logo_oscuro.svg';
        } else {
            navbar.classList.remove('scrolled');
            if (logoPrincipal) logoPrincipal.src = logoPath + 'gastro-coffe_logo_claro.svg';
        }
    });

    // Menú Móvil
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('open');
    });

    // Botones Magnéticos
    document.querySelectorAll('.btn-magnet').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    });

    // Back to Top Logic
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Inicializar Lightbox
    initLightbox();
}

// ==========================================================================
// LIGHTBOX DE IMÁGENES
// ==========================================================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    // Seleccionar todas las imágenes de la carta
    const menuImages = document.querySelectorAll('.menu-img');

    menuImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt.split(' - ')[0]; // Tomar el primer parte del alt como título
            document.body.style.overflow = 'hidden'; // Bloquear scroll
        });
    });

    // Cerrar Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Cerrar con Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// SplitText Utility (Vanilla JS sin plugins de pago)
function splitTextWords(selector) {
    document.querySelectorAll(selector).forEach(el => {
        // Evitar doble split si ya se ejecutó
        if (el.querySelector('.split-word')) return;

        const words = el.innerText.split(' ');
        el.innerHTML = '';
        words.forEach(word => {
            const span = document.createElement('span');
            span.className = 'split-word';
            span.innerHTML = `<span>${word}</span>&nbsp;`;
            el.appendChild(span);
        });
    });
}
