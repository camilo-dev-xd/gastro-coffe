
# 🍽️ Gastro-Coffe Landing Page
### Instrumento Digital de Alta Fidelidad — HTML5 + CSS3 + JavaScript Vanilla + GSAP

---

## 📋 Descripción

**Gastro-Coffe** es una landing page de alta fidelidad y estética cinematográfica para un restaurante + cafetería ubicado en Bogotá (Suba). El sitio es 100% estático, sin frameworks de frontend, y está construido con HTML5 semántico, CSS3 nativo y JavaScript vanilla.

**Objetivo:** Crear una experiencia digital que huela a café recién hecho y transmita la calidez de comida casera con alma moderna.

---

## 🎨 Características Principales

### Diseño
- **Paleta gastronómica:** Café oscuro, naranja cálido, beige crema
- **Tipografías:** Plus Jakarta Sans (títulos), Cormorant Garamond (énfasis), JetBrains Mono (datos)
- **Estética:** Cinematográfica, acogedora, auténticamente colombiana
- **Textura:** Overlay de ruido orgánico global para sensación artesanal

### Secciones del Sitio

#### **Home (index.html)**
1. **Navbar Flotante** - Píldora transformable con scroll detection
2. **Hero** - Imagen cinematográfica con parallax y CTA principal
3. **Números** - Tarjetas interactivas: horarios, ofertas, ubicación
4. **Sobre Nosotros** - Historia con split-text animations
5. **Carta** - Grid de menú (especialidades + bebidas)
6. **Manifiesto** - Filosofía de marca en alto contraste
7. **Experiencia** - Tarjetas apiladas con scroll stacking
8. **Contacto** - Información, mapa embed, CTA
9. **Footer** - Navegación, redes sociales, status indicator

#### **Páginas Internas**
- **nosotros.html** - Historia completa, orígenes, filosofía
- **carta.html** - Menú completo con filtros por categoría
- **contactanos.html** - Formulario de contacto + mapa

### Animaciones (GSAP + ScrollTrigger)
- ✨ Fade-up escalonado en entrada
- 📝 Split-text animations al scrollear
- 🎬 Parallax en hero
- 🔀 Stacked scroll en experience section
- 🎯 Zoom-in en elementos de contacto
- 💫 Blur effect en tarjetas apiladas
- 🌊 Transiciones suaves y magnéticas en botones

---

## 📁 Estructura del Proyecto

```
gastro-coffe/
├── index.html           ← Página principal (home)
├── nosotros.html        ← Página: "Sobre Nosotros"
├── carta.html           ← Página: Menú completo con filtros
├── contactanos.html     ← Página: Contacto + Formulario
│
├── css/
│   └── styles.css       ← Sistema de diseño completo (CSS3 puro)
│                           • Variables CSS para tema
│                           • Componentes: navbar, botones, tarjetas
│                           • Animaciones globales
│                           • Media queries responsivas
│
├── js/
│   └── main.js          ← Lógica y animaciones (JavaScript vanilla + GSAP)
│                           • Navbar interactivo
│                           • Scroll detection
│                           • ScrollTrigger animations
│                           • Event listeners
│                           • Filtros de menú
│
└── img/                 ← (Carpeta para assets locales futuros)
```

---

## 🛠️ Stack Técnico

| Componente | Especificación |
|---|---|
| **HTML** | HTML5 semántico puro |
| **CSS** | CSS3 nativo (sin Tailwind, Bootstrap, etc.) |
| **JavaScript** | ES6+ vanilla (sin React, Vue, etc.) |
| **Animaciones** | GSAP 3 + ScrollTrigger (CDN) |
| **Iconografía** | SVG inline custom |
| **Tipografías** | Google Fonts (Plus Jakarta Sans, Cormorant Garamond, JetBrains Mono) |
| **Responsividad** | Media queries nativas (768px, 1024px, 1280px) |
| **Envío de Mensajes** | Mailto (sin backend necesario) |

---

## 🎯 Paleta de Colores

```css
--cafe-oscuro:    #3E2723    /* Primario, secciones oscuras */
--cafe-medio:     #6D4C41    /* Acentos, bordes */
--naranja-calido: #F57C00    /* Botones CTA, énfasis */
--naranja-suave:  #FF9800    /* Hover states */
--beige-crema:    #F5E9DA    /* Fondos claros */
--blanco-calido:  #FFF8F2    /* Cards, secciones alternadas */
```

---

## 📱 Responsividad

El sitio es **100% responsive** y se ajusta a:
- **Desktop:** 1280px+
- **Tablet:** 768px - 1024px
- **Móvil:** <768px

Características mobile:
- Navbar hamburguesa plegable
- Menú vertical en pantallas pequeñas
- Grid layout fluido
- Imágenes optimizadas con `loading="lazy"`
- Touch-friendly buttons y espaciado

---

## 🚀 Cómo Usar

### 1. Abrir en el Navegador
```bash
# Simplemente abre index.html en cualquier navegador moderno
# Puede ser:
# - Archivo local (file://)
# - Servidor local (http://localhost)
# - Cualquier hosting web
```

**No requiere instalación de dependencias, build tools, ni servidor Node.js.**

### 2. Visualizar Correctamente
El sitio funciona perfectamente si:
- ✅ Abres `index.html` directamente en Chrome, Firefox, Safari, Edge
- ✅ Lo subes a un servidor web (hosting compartido, GitHub Pages, Vercel, etc.)
- ✅ Ejecutas un servidor local simple (opcional):
  ```bash
  # Con Python 3
  python -m http.server 8000
  # Luego accede a: http://localhost:8000

  # Con Node.js (http-server)
  npx http-server
  ```

### 3. Editar Contenido
- **Textos:** Edita directamente en los archivos `.html`
- **Colores:** Modifica las variables en `css/styles.css` (`:root`)
- **Imágenes:** Reemplaza URLs de Unsplash o añade imágenes locales en `/img/`
- **Menú:** Duplica tarjetas `.menu-card` para agregar platos
- **Animaciones:** Ajusta parámetros en `js/main.js`

---

## 📞 Información del Negocio

```
GASTRO-COFFE
Km 3 Vía Suba-Cota, Cl. 171 No. 93-55
Bogotá, Colombia

Teléfono: +57 312 3530829
Email: gastro-coffe@gmail.com
WhatsApp: https://wa.me/573123530829

Horarios:
  Lun - Vie: 6:00 am – 7:00 pm
  Sáb - Dom: 6:00 am – 8:00 pm
```

---

## 🎬 Secciones Destacadas

### 1. Hero Section
- Imagen de café cinematográfica (Unsplash)
- Parallax scroll effect
- Doble CTA: "Ver la Carta" + "Cómo llegar"
- Fade-up animation en entrada

### 2. Numbers Section
- **Tarjeta 1:** Horarios con cursor parpadeante (monospace)
- **Tarjeta 2:** Ofertas rotativas cada 3 segundos
- **Tarjeta 3:** Ubicación interactiva (simulada)

### 3. About Section
- Texto con split-animation al scrollear
- Foto del local con hover effect
- Enfasis en Cormorant Garamond itálica

### 4. Menu Section
- Grid responsive (3 cols desktop, 1 col móvil)
- Hover scale effect (+2%)
- Precios en monospace naranja
- Categorías: Desayunos, Almuerzos, Snacks, Bebidas, Café

### 5. Manifesto Section
- Alto contraste (fondo oscuro, texto blanco)
- Parallax background sutil
- Fade-up staggered animations

### 6. Experience Section
- 3 tarjetas apiladas
- Scroll stacking con blur effect
- SVG illustrations custom
- Colores gradiente

### 7. Contact Section
- Información con iconos
- Mapa embed de Google Maps
- Items con zoom-in animation

### 8. Footer
- Logo + tagline en Cormorant
- Links de navegación
- Redes sociales (Facebook, TikTok)
- Status indicator pulsante

---

## 🔧 Personalización

### Cambiar Colores
Abre `css/styles.css` y modifica las variables en `:root`:
```css
:root {
  --cafe-oscuro: #3E2723;     /* Cambia este valor */
  --naranja-calido: #F57C00;  /* Cambia este valor */
  /* ... etc ... */
}
```

### Cambiar Tipografías
En los `<head>` de los HTML, modifica el import de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE_AQUI&display=swap" rel="stylesheet">
```

### Agregar Platos al Menú
En `index.html` y `carta.html`, duplica un `.menu-card`:
```html
<div class="menu-card">
  <div class="menu-card-image">
    <img src="URL_IMAGEN" alt="Nombre">
  </div>
  <div class="menu-card-content">
    <h3>Nombre del Plato</h3>
    <p class="menu-card-description">Descripción</p>
    <p class="menu-card-price">$PRECIO</p>
  </div>
</div>
```

### Modificar Animaciones
En `js/main.js`, busca `GSAP.to()` y ajusta:
```javascript
gsap.to(elemento, {
  opacity: 1,
  y: 0,
  duration: 0.6,    // Duración en segundos
  delay: 0.2,       // Retardo
  stagger: 0.1      // Espaciado entre elementos
});
```

---

## 📊 Rendimiento

- **Sin dependencias externas:** Solo CSS y JS nativo
- **Carga rápida:** Imágenes de Unsplash (optimizadas, lazy loading)
- **GSAP via CDN:** Descarga mínima (~30KB)
- **CSS optimizado:** ~50KB (una sola hoja de estilos)
- **JS optimizado:** ~15KB (lógica concentrada)

**Puntuación Lighthouse esperada:** 85-95/100

---

## 🌐 Despliegue

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main`
5. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

### Opción 2: Hosting Compartido
- Sube los archivos vía FTP a tu hosting
- Tu dominio apuntará automáticamente al `index.html`

### Opción 3: Vercel / Netlify
1. Conecta tu repositorio GitHub
2. Deploy automático en cada push
3. Tu sitio estará en vivo en segundos

---

## 🐛 Troubleshooting

### Las imágenes no cargan
- Verifica que la URL de Unsplash sea correcta
- Usa `loading="lazy"` para optimizar
- Sube imágenes locales a `/img/` si prefieres

### Las animaciones no funcionan
- Asegúrate de que GSAP se carda desde CDN (mira la consola)
- Verifica que `main.js` está correctamente enlazado
- Abre DevTools (F12) y revisa errores en Console

### Responsividad rota
- Verifica que `<meta name="viewport"...>` esté en el `<head>`
- Limpia caché del navegador (Ctrl+Shift+Delete)
- Prueba en Firefox o Chrome DevTools (F12 → dispositivos móviles)

### Formulario no envía
- El formulario abre el cliente de email mediante `mailto:`
- Asegúrate de tener un cliente de email configurado
- Alternativa: Integra un servicio backend (Formspree, Netlify Forms)

---

## ✅ Checklist de Lanzamiento

- [ ] Verifica que todas las imágenes carguen correctamente
- [ ] Prueba el sitio en móvil (Chrome DevTools)
- [ ] Haz clic en todos los links de navegación
- [ ] Prueba los botones CTA
- [ ] Verifica que el mapa carga
- [ ] Abre en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Verifica velocidad con Google PageSpeed
- [ ] Haz scroll y observa que las animaciones funcionan
- [ ] Prueba el formulario de contacto
- [ ] Verifica los enlaces a WhatsApp y redes sociales

---

## 🎯 Próximas Mejoras (Opcional)

- [ ] Integrar backend para formulario (Formspree, Netlify)
- [ ] Agregar más fotos del local
- [ ] Sistema de reservas
- [ ] Blog de recetas
- [ ] Integración con Instagram API
- [ ] Análitica con Google Analytics
- [ ] Multi-idioma (EN/ES)
- [ ] Dark mode toggle

---

## 📖 Documentación Útil

- **GSAP Docs:** https://greensock.com/docs/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Google Fonts:** https://fonts.google.com/
- **Unsplash Images:** https://unsplash.com/

---

## 📝 Notas Finales

Este proyecto celebra:
- ✨ La autenticidad de la comida casera colombiana
- ☕ El sabor genuino del café de especialidad
- ❤️ La calidez de un verdadero hogar en Suba, Bogotá
- 🎬 El diseño cinematográfico sin sacrificar usabilidad

**Hecho con amor para Gastro-Coffe. Que disfrutes navegando, y más aún, visitando el local.** 🍽️☕

---

© 2025 Gastro-Coffe · Todos los derechos reservados
