/**
 * PRODUCTOS DE GASTRO-COFFE
 * Este archivo centraliza toda la información de la carta.
 */

const PRODUCTS = [
    {
        id: 1,
        name: "Bandeja Corriente",
        price: "$12.000",
        description: "Papas saladas, arroz, frijoles y el toque de la casa.",
        category: "almuerzos",
        image: "../assets/img/Bandeja Corriente_foto.webp",
        alt: "Bandeja Corriente - Plato casero tradicional colombiano"
    },
    {
        id: 2,
        name: "Sopa del Día",
        price: "$7.500",
        description: "Preparada cada mañana con ingredientes frescos del mercado.",
        category: "almuerzos",
        image: "../assets/img/Sopa del Día_foto.webp",
        alt: "Sopa del Día - Preparada con ingredientes frescos"
    },
    {
        id: 3,
        name: "Alitas BBQ",
        price: "$13.000",
        description: "Crujientes, sabrosas y bañadas en nuestra salsa secreta.",
        category: "almuerzos",
        image: "../assets/img/Alitas BBQ_foto.webp",
        alt: "Alitas BBQ crujientes bañadas en salsa secreta"
    },
    {
        id: 4,
        name: "Caldo de Costilla",
        price: "$8.500",
        description: "Tradición bogotana para levantar el ánimo.",
        category: "desayunos",
        image: "../assets/img/Caldo de Costilla_foto.webp",
        alt: "Caldo de Costilla - Tradición bogotana"
    },
    {
        id: 5,
        name: "Huevos con Arroz",
        price: "$5.500",
        description: "Desayuno clásico, sencillo y reconfortante.",
        category: "desayunos",
        image: "../assets/img/Huevos con Arroz_foto.webp",
        alt: "Huevos con Arroz - Desayuno clásico"
    },
    {
        id: 6,
        name: "Carne Asada",
        price: "$14.000",
        description: "Corte magro, asado al punto con acompañamientos.",
        category: "almuerzos",
        image: "../assets/img/Carne Asada_foto.webp",
        alt: "Carne Asada - Corte magro asado"
    },
    {
        id: 7,
        name: "Tinto",
        price: "$1.500",
        description: "El clásico colombiano, recién filtrado.",
        category: "cafe",
        image: "../assets/img/Café Tinto_foto.webp",
        alt: "Café Tinto recién filtrado"
    },
    {
        id: 8,
        name: "Café con Leche / Latte",
        price: "$4.500",
        description: "Cremoso, reconfortante y con arte latte.",
        category: "cafe",
        image: "../assets/img/Café con Leche_foto.webp",
        alt: "Café con Leche cremoso"
    },
    {
        id: 9,
        name: "Arepas de Queso",
        price: "$2.500",
        description: "Recién hechas, doradas por fuera, queso derretido adentro.",
        category: "cafe",
        image: "../assets/img/AREPAS_ foto.webp",
        alt: "Arepas de Queso recién hechas"
    },
    {
        id: 10,
        name: "Empanadas & Buñuelos",
        price: "$2.500 - $3.000",
        description: "Doradas, crujientes, esponjosas y calientes.",
        category: "cafe",
        image: "../assets/img/EMPANADAS_foto.webp",
        alt: "Empanadas y Buñuelos dorados"
    },
    {
        id: 11,
        name: "Cerveza Nacional",
        price: "$.3000 a $4.000",
        description: "Bien fría para terminar la tarde.",
        category: "cafe",
        image: "../assets/img/Cerveza Nacional_foto.webp",
        alt: "Cerveza Nacional bien fría"
    },
    {
        id: 12,
        name: "Galguerías",
        price: "$1.000 - $5.000",
        description: "Galletas, dulces, ponques, gomitas para el antojo.",
        category: "cafe",
        image: "../assets/img/GALGERIAS_foto.webp",
        alt: "Galguerías y dulces"
    },
    {
        id: 13,
        name: "Gaseosas",
        price: "$3.500",
        description: "Coca-Cola, Postobón y más para refrescarte.",
        category: "cafe",
        image: "../assets/img/Gaseosas_foto.webp",
        alt: "Gaseosas variadas"
    },
    {
        id: 14,
        name: "Agua Embotellada",
        price: "$3.000",
        description: "Agua pura y refrescante.",
        category: "cafe",
        image: "../assets/img/Agua Embotellada_foto.webp",
        alt: "Agua Embotellada mineral"
    }
];

/**
 * Renderiza los productos en el contenedor especificado.
 */
function renderProducts() {
    const mainGrid = document.getElementById('main-menu-grid');
    const cafeGrid = document.getElementById('cafe-menu-grid');

    if (!mainGrid || !cafeGrid) return;

    // Limpiar cuadrículas
    mainGrid.innerHTML = '';
    cafeGrid.innerHTML = '';

    PRODUCTS.forEach(product => {
        const cardHtml = `
            <div class="menu-card" data-category="${product.category}">
                <img src="${product.image}"
                    alt="${product.alt}" class="menu-img"
                    loading="lazy">
                <div class="menu-content">
                    <div class="menu-header">
                        <span class="menu-title">${product.name}</span>
                        <span class="menu-price">${product.price}</span>
                    </div>
                    <p class="menu-desc">${product.description}</p>
                </div>
            </div>
        `;

        if (product.category === 'cafe') {
            cafeGrid.innerHTML += cardHtml;
        } else {
            mainGrid.innerHTML += cardHtml;
        }
    });

    // Re-inicializar componentes que dependen de las tarjetas generadas
    if (typeof initFilters === 'function') initFilters();
    if (typeof initLightbox === 'function') initLightbox();
}
