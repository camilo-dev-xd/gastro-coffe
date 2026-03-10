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
}

// SplitText Utility (Vanilla JS sin plugins de pago)
function splitTextWords(selector) {
    document.querySelectorAll(selector).forEach(el => {
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
