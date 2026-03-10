# Gastro-Coffe - Estructura del Proyecto v2

## 📁 Estructura Actual (Con Páginas Separadas)

```
gastro-coffe-v2/
├── index.html                  # Página HOME (punto de entrada)
├── documento.html              # Archivo original - backup
│
├── css/                        # Estilos modularizados
│   ├── variables.css          # Variables globales
│   ├── base.css               # Estilos base
│   ├── navbar.css             # Navegación
│   ├── hero.css               # Sección hero
│   └── sections.css           # Todas las secciones
│
├── js/                         # JavaScript modularizado
│   ├── app.js                 # Router (navegación entre páginas)
│   ├── ui.js                  # Interacciones UI
│   └── animations.js          # Animaciones GSAP
│
└── pages/  ⭐ NUEVO            # Páginas HTML separadas
    ├── nosotros.html          # Página "Nosotros"
    ├── carta.html             # Página "Nuestra Carta"
    └── contactanos.html       # Página "Contáctanos"
```

## 🎯 Cambio Principal: De SPA a Páginas Separadas

### ✅ Ahora Cada Página Es Independiente
- **index.html** → Página de inicio
- **pages/nosotros.html** → Página sobre la empresa
- **pages/carta.html** → Menú completo
- **pages/contactanos.html** → Contacto y ubicación

Cada archivo HTML es **completo e independiente** con su propio navbar, contenido y footer.

## 📄 Contenido de Cada Página

| Página | Archivo | Contenido |
|--------|---------|----------|
| Inicio | `index.html` | Hero, números, about, manifiesto, experiencia |
| Nosotros | `pages/nosotros.html` | Información sobre la empresa |
| Carta | `pages/carta.html` | Menú completo con filtros |
| Contacto | `pages/contactanos.html` | Datos, horarios, mapa, WhatsApp |

## 🔗 Sistema de Navegación

Usa `app.navigate()` que redirige a las páginas:

```javascript
app.navigate('inicio')       → /index.html
app.navigate('nosotros')     → /pages/nosotros.html
app.navigate('carta')        → /pages/carta.html
app.navigate('contactanos')  → /pages/contactanos.html
```

## ✅ Funcionalidades Preservadas

✓ Todas las animaciones GSAP y ScrollTrigger  
✓ Menú móvil responsivo  
✓ Botones magnéticos  
✓ Parallax  
✓ Mapa interactivo  
✓ Sistema de variables CSS  
✓ Diseño modularizado  

## 🚀 Ventajas

✅ **SEO Friendly** - Cada página tiene su propio título  
✅ **Mantenible** - Fácil encontrar y editar contenido  
✅ **Escalable** - Agregar nuevas páginas es simple  
✅ **Organizado** - Estructura clara  
✅ **Funcional** - Sin pérdida de características  

---

**Proyecto:** Gastro-Coffe v2  
**Estado:** Páginas Separadas + Funcional ✅

### **Carpeta `/js`**
Contiene 3 archivos JavaScript:

1. **app.js**: Sistema de enrutamiento SPA (app.navigate)
2. **ui.js**: Funciones de interacción UI (navbar scroll, menu móvil, botones)
3. **animations.js**: Todas las animaciones GSAP y Split Text

### **Carpeta `/pages`** (Estructura futura)
Si en el futuro quieren separar cada página en archivos HTML independientes, pueden usaroptionally usar esta carpeta.

### **Carpeta `/assets`** (Estructura futura)
Para guardar imágenes locales o recursos multimedia.

---

## ✅ Funcionalidad Conservada

✓ Navegación SPA completa (sin recargar página)  
✓ Todas las animaciones GSAP y ScrollTrigger  
✓ Menú móvil responsivo  
✓ Botones magnéticos con efecto hover  
✓ Animaciones de split text  
✓ Tarjetas apiladas (stacked cards)  
✓ Parallax en hero y manifiesto  
✓ Mapa interactivo animado  
✓ Sistema de variables CSS para fácil personalización  

---

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Toda la funcionalidad permanece igual
3. Los archivos se cargan automáticamente desde sus respectivas carpetas

---

## 📝 Ventajas de Esta Estructura

✅ **Modular**: Cada componente en su propio archivo  
✅ **Mantenible**: Fácil encontrar y editar estilos o animaciones  
✅ **Escalable**: Listo para crecer sin problemas  
✅ **Organizado**: Carpetas por tipo de recurso  
✅ **Funcional**: Sin pérdida de funcionalidad  

---

## 🔧 Futuras Mejoras (Opcional)

Si quieren evolucionar más:
- Minificar CSS/JS en producción
- Implementar lazy loading de componentes
- Añadir service workers para PWA
- Expandir animaciones en otras secciones
- Crear un sistema de componentes reutilizables

---

**Proyecto:** Gastro-Coffe v2  
**Fecha:** Marzo 2026  
**Estado:** Funcional y Optimizado ✅
