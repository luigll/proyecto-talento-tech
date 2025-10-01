// Lista de imágenes para el carrusel
const elementos_carrusel = [
    {
        nombre: "Fabricación artesanal",
        descripcion: "Zapatos hechos a mano por pequeños fabricantes locales.",
        imagen: "imagenes/fabricacion.jpg"
    },
    {
        nombre: "Trabajo detallado",
        descripcion: "Cada par refleja dedicación y precisión en su elaboración.",
        imagen: "imagenes/fabricacion2.jpg"
    },
    {
        nombre: "Materiales de calidad",
        descripcion: "Selección de insumos para garantizar comodidad y durabilidad.",
        imagen: "imagenes/fabricacion3.jpg"
    },
    {
        nombre: "Diseños únicos",
        descripcion: "Calzado auténtico con identidad y estilo propio.",
        imagen: "imagenes/fabricacion4.jpg"
    }
];

// Lista de categorías
const lista_categorias = [
    {
        id: "CAT001",
        nombre: "Zapatillas deportivas",
        descripcion: "Modelos cómodos y modernos para uso diario",
        imagen: "imagenes/imagen1.jpg",
        slug: "zapatillas-deportivas",
        activo: true
    },
    {
        id: "CAT002",
        nombre: "Sneakers urbanos",
        descripcion: "Estilo casual y juvenil para la ciudad",
        imagen: "imagenes/imagen2.jpg",
        slug: "sneakers-urbanos",
        activo: true
    },
    {
        id: "CAT003",
        nombre: "Zapatos clásicos",
        descripcion: "Perfectos para un look elegante y formal",
        imagen: "imagenes/imagen3.jpg",
        slug: "zapatos-clasicos",
        activo: true
    },
    {
        id: "CAT004",
        nombre: "Deportivos de alto rendimiento",
        descripcion: "Diseñados para actividades físicas intensas",
        imagen: "imagenes/imagen4.jpg",
        slug: "deportivos-alto-rendimiento",
        activo: true
    }
];

// Lista de productos
const lista_catalogo = [
    {
        id: "P001",
        nombre: "Zapatilla Running Pro",
        descripcion: "Ligera y transpirable, ideal para correr largas distancias",
        precio: 199900,
        stock: 15,
        talla: [38, 39, 40, 41, 42],
        color: "Azul",
        imagen: "imagenes/imagen1.jpg",
        categoriaId: "CAT001"
    },
    {
        id: "P002",
        nombre: "Sneaker Urbano Street",
        descripcion: "Diseño juvenil para uso casual en la ciudad",
        precio: 149900,
        stock: 20,
        talla: [36, 37, 38, 39, 40],
        color: "Blanco",
        imagen: "imagenes/imagen2.jpg",
        categoriaId: "CAT002"
    },
    {
        id: "P003",
        nombre: "Zapato Clásico Elegance",
        descripcion: "Perfecto para ocasiones formales y de oficina",
        precio: 249900,
        stock: 10,
        talla: [39, 40, 41, 42, 43],
        color: "Negro",
        imagen: "imagenes/imagen3.jpg",
        categoriaId: "CAT003"
    },
    {
        id: "P004",
        nombre: "Tenis de Alto Rendimiento GymForce",
        descripcion: "Resistentes y cómodos para entrenamientos de alto impacto",
        precio: 219900,
        stock: 12,
        talla: [38, 39, 40, 41],
        color: "Rojo",
        imagen: "imagenes/imagen4.jpg",
        categoriaId: "CAT004"
    }
,{
    id: "P005",
    nombre: "Sneaker Colorido Energy",
    descripcion: "Un estilo vibrante para destacar en la ciudad",
    precio: 179900,
    stock: 8,
    talla: [37, 38, 39, 40, 41],
    color: "Multicolor",
    imagen: "imagenes/imagen5.jpg",
    categoriaId: "CAT002"
},
{
    id: "P006",
    nombre: "Tenis Negros UrbanX",
    descripcion: "Versátiles y cómodos para cualquier ocasión",
    precio: 159900,
    stock: 14,
    talla: [38, 39, 40, 41, 42],
    color: "Negro",
    imagen: "imagenes/imagen6.jpg",
    categoriaId: "CAT002"
},
{
    id: "P007",
    nombre: "Sneaker Fluor Speed",
    descripcion: "Con diseño deportivo y detalles fluorescentes",
    precio: 189900,
    stock: 10,
    talla: [39, 40, 41, 42],
    color: "Verde fluor",
    imagen: "imagenes/imagen7.jpg",
    categoriaId: "CAT001"
},
{
    id: "P008",
    nombre: "Zapatilla Trendy Vibe",
    descripcion: "Diseño moderno para quienes marcan tendencia",
    precio: 169900,
    stock: 9,
    talla: [36, 37, 38, 39, 40],
    color: "Rosa",
    imagen: "imagenes/imagen8.jpg",
    categoriaId: "CAT001"
}

];
