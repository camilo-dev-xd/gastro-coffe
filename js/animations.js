// ==========================================================================
// ANIMACIONES VISTA INICIO (GSAP)
// ==========================================================================

let inicioAnimCtx;

function initInicioAnimations() {
    // Limpiar contexto anterior si existe para evitar duplicados al navegar
    if(inicioAnimCtx) inicioAnimCtx.revert();
    inicioAnimCtx = gsap.context(() => {

        // 1. Hero Entrada
        gsap.fromTo(".hero-anim", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );

        // Hero Parallax
        gsap.to("#hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });

        // 2. Tarjetas Alternantes (Valores)
        const altTexts = document.querySelectorAll('.alt-text');
        let currentAlt = 0;
        setInterval(() => {
            altTexts[currentAlt].classList.remove('active');
            currentAlt = (currentAlt + 1) % altTexts.length;
            altTexts[currentAlt].classList.add('active');
        }, 3000);

        // 3. Animación Mapa (Nuestros Números)
        const tlMap = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tlMap.to("#map-cursor", { duration: 1, x: -70, y: -40, ease: "power2.inOut" })
             .to("#map-cursor", { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
             .to("#map-point", { opacity: 1, duration: 0.2 }, "-=0.1")
             .to(".map-address", { opacity: 1, duration: 0.3 })
             .to("#map-cursor", { duration: 1, x: 0, y: 0, ease: "power2.inOut", delay: 2 })
             .to("#map-point", { opacity: 0, duration: 0.2 }, "-=0.5")
             .to(".map-address", { opacity: 0, duration: 0.2 }, "-=0.5");

        // 4. Split Text (Sobre Nosotros)
        splitTextWords('.split-text');
        gsap.to('.split-text .split-word span', {
            y: "0%", opacity: 1, duration: 0.8, stagger: 0.02, ease: "power3.out",
            scrollTrigger: { trigger: ".about-section", start: "top 70%" }
        });

        // 5. Imagen About Parallax local
        gsap.fromTo(".about-img", 
            { scale: 1.1, y: -20 }, { scale: 1, y: 20, ease: "none",
            scrollTrigger: { trigger: "#about-img-wrap", start: "top bottom", end: "bottom top", scrub: true }
        });

        // 6. Manifiesto (Split Text y Parallax)
        gsap.to("#manifiesto-bg", {
            yPercent: 20, ease: "none",
            scrollTrigger: { trigger: ".manifiesto", start: "top bottom", end: "bottom top", scrub: true }
        });
        
        splitTextWords('.split-text-manifiesto');
        gsap.to('.split-text-manifiesto .split-word span', {
            y: "0%", opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out",
            scrollTrigger: { trigger: ".manifiesto", start: "top 60%" }
        });

        // 7. Tarjetas Apiladas (Experiencia)
        const cards = gsap.utils.toArray('.stack-card');
        cards.forEach((card, i) => {
            if (i === cards.length - 1) return; // La ultima no se escala
            
            gsap.to(card, {
                scale: 0.9,
                opacity: 0.5,
                filter: "blur(10px)",
                ease: "none",
                scrollTrigger: {
                    trigger: cards[i + 1],
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                }
            });
        });

        // Animaciones SVG Vapor
        gsap.to(".vapor-1", { y: -5, opacity: 0, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".vapor-2", { y: -8, opacity: 0, duration: 1.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.3 });
        gsap.to(".vapor-3", { y: -6, opacity: 0, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.6 });

    }, document.getElementById('view-inicio')); // Scope al view-inicio
}
