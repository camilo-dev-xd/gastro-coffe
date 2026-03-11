// ==========================================================================
// ANIMACIONES VISTA INICIO (GSAP)
// ==========================================================================

let inicioAnimCtx;

function initInicioAnimations() {
    // Limpiar contexto anterior si existe para evitar duplicados al navegar
    if (inicioAnimCtx) inicioAnimCtx.revert();

    // El contexto ahora se aplica al document.body para ser más flexible entre páginas
    inicioAnimCtx = gsap.context(() => {

        // 1. Hero Entrada (si existe)
        if (document.querySelector('.hero-anim')) {
            gsap.fromTo(".hero-anim",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
            );
        }

        // Hero Parallax (Scroll)
        if (document.querySelector('.hero') && document.querySelector('#hero-bg')) {
            gsap.to("#hero-bg", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
            });

            // Hero Depth Effect (Mouse Move)
            const hero = document.querySelector('.hero');
            const heroBg = document.querySelector('#hero-bg');

            hero.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const xPos = (clientX / innerWidth) - 0.5;
                const yPos = (clientY / innerHeight) - 0.5;

                gsap.to(heroBg, {
                    x: xPos * 40,
                    y: yPos * 40,
                    rotationX: -yPos * 2,
                    rotationY: xPos * 2,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            hero.addEventListener('mouseleave', () => {
                gsap.to(heroBg, {
                    x: 0, y: 0, rotationX: 0, rotationY: 0,
                    duration: 1.5, ease: "power2.out"
                });
            });
        }

        // 2. Tarjetas Alternantes (Valores)
        if (document.querySelector('.alt-text')) {
            const altTexts = document.querySelectorAll('.alt-text');
            let currentAlt = 0;
            setInterval(() => {
                altTexts[currentAlt].classList.remove('active');
                currentAlt = (currentAlt + 1) % altTexts.length;
                altTexts[currentAlt].classList.add('active');
            }, 3000);
        }

        // 3. Animación Mapa (Nuestros Números)
        if (document.querySelector('#map-cursor')) {
            const tlMap = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tlMap.to("#map-cursor", { duration: 1, x: -70, y: -40, ease: "power2.inOut" })
                .to("#map-cursor", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to("#map-point", { opacity: 1, duration: 0.2 }, "-=0.1")
                .to(".map-address", { opacity: 1, duration: 0.3 })
                .to("#map-cursor", { duration: 1, x: 0, y: 0, ease: "power2.inOut", delay: 2 })
                .to("#map-point", { opacity: 0, duration: 0.2 }, "-=0.5")
                .to(".map-address", { opacity: 0, duration: 0.2 }, "-=0.5");
        }

        // 4. Split Text (Global - Sobre Nosotros en Inicio y Nosotros)
        if (document.querySelector('.split-text')) {
            splitTextWords('.split-text');
            gsap.to('.split-text .split-word span', {
                y: "0%", opacity: 1, duration: 0.8, stagger: 0.02, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            });
        }

        // 5. Imagen About (Parallax)
        if (document.querySelector('#about-img-wrap')) {
            gsap.fromTo("#about-img-wrap",
                { scale: 0.8, opacity: 0, y: 50 },
                {
                    scale: 1, opacity: 1, y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#about-img-wrap",
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".about-img",
                { y: -30, scale: 1.1 },
                {
                    y: 30, scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#about-img-wrap",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }

        // 6. Manifiesto
        if (document.querySelector('.manifiesto')) {
            gsap.to("#manifiesto-bg", {
                yPercent: 20, ease: "none",
                scrollTrigger: { trigger: ".manifiesto", start: "top bottom", end: "bottom top", scrub: true }
            });

            splitTextWords('.split-text-manifiesto');
            gsap.to('.split-text-manifiesto .split-word span', {
                y: "0%", opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out",
                scrollTrigger: { trigger: ".manifiesto", start: "top 60%" }
            });
        }

        // 7. Tarjetas Apiladas (Experiencia)
        if (document.querySelector('.stack-card')) {
            const cards = gsap.utils.toArray('.stack-card');
            cards.forEach((card, i) => {
                if (i === cards.length - 1) return;
                gsap.to(card, {
                    scale: 0.9, opacity: 0.5, filter: "blur(10px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: "top 80%", end: "top 20%", scrub: true,
                    }
                });
            });

            // Animaciones SVG Vapor
            gsap.to(".vapor-1", { y: -5, opacity: 0, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(".vapor-2", { y: -8, opacity: 0, duration: 1.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.3 });
            gsap.to(".vapor-3", { y: -6, opacity: 0, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.6 });
        }

        // 8. Platos Destacados
        if (document.querySelector('.featured-grid')) {
            gsap.to(".featured-card", {
                y: 0, opacity: 1, duration: 1.2, stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: { trigger: ".featured-grid", start: "top 85%" }
            });
        }

    }, document.body);
}
