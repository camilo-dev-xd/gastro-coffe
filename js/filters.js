// ==========================================================================
// SISTEMA DE FILTROS PARA LA CARTA
// ==========================================================================

function initFilters() {
    const filterBtns = document.querySelectorAll('.filtro-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const categoryFilter = this.getAttribute('data-filter');

            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));

            // Agregar clase active al botón clickeado
            this.classList.add('active');

            // Filtrar las tarjetas
            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (categoryFilter === 'todos') {
                    // Mostrar todas las tarjetas
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else if (cardCategory === categoryFilter) {
                    // Mostrar solo las tarjetas que coinciden
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    // Ocultar las tarjetas que no coinciden
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// El sistema de filtros se inicializa dinámicamente desde products.js -> renderProducts()
