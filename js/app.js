// ==========================================================================
// CORE APP & ROUTER (Navegación hacia páginas externas)
// ==========================================================================

window.app = {
    navigate: function (viewId) {
        // Mapeo de vistas a rutas
        const routes = {
            'inicio': '../index.html',
            'nosotros': '../pages/nosotros.html',
            'carta': '../pages/carta.html',
            'contactanos': '../pages/contactanos.html'
        };

        // Redirigir a la página correspondiente
        if (routes[viewId]) {
            window.location.href = routes[viewId];
        }
    }
};
