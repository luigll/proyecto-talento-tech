// ---------------------------
// Funciones de catálogo
// ---------------------------

// Obtener productos filtrados por categoría
function obtenerProductosPorCategoria(categoria = "") {
    if (categoria === null || categoria === "") {
        return lista_catalogo; // devuelve todos los productos
    } else {
        // 👇 Ajusta aquí si tu campo en datos.js se llama distinto
        return lista_catalogo.filter(producto => producto.categoriaId === categoria);
    }
}

// Obtener un producto específico por su id
function obtenerProductoPorId(id) {
    return lista_catalogo.find(producto => producto.id === id);
}

// Obtener todas las categorías activas
function obtenerCategoriasActivas() {
    return lista_categorias.filter(categoria => categoria.activo);
}

// Función que devuelve la información de un producto o servicio dado su código
function obtenerProductoServicio(codigo) {
    return lista_catalogo.find(producto => producto.id === codigo);
}

// ---------------------------
// Funciones de carrito mejoradas
// ---------------------------

// Array global del carrito (con cantidades)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar carrito en la página
function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    let etiqueta_total = document.getElementById("etiqueta_total");

    etiqueta_carrito.innerHTML = "";
    let total = 0;

    carrito.forEach((elemento, index) => {
        total += elemento.precio * elemento.cantidad;

        let li = document.createElement("li");
        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                <div>
                    <p class="my-0 fw-bold">${elemento.nombre}</p>
                    <small>$${elemento.precio.toLocaleString("es-CO")} x ${elemento.cantidad}</small><br>
                    <small>Total: $${(elemento.precio * elemento.cantidad).toLocaleString("es-CO")}</small>
                </div>
                <div>
                    <button class="btn btn-sm btn-outline-success" onclick="cambiarCantidad(${index}, 1)">+</button>
                    <button class="btn btn-sm btn-outline-danger" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <a class="btn btn-sm bg-warning text-dark" href="#" onclick="eliminarDelCarrito(${index})">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>`;
        etiqueta_carrito.appendChild(li);
    });

    etiqueta_total.textContent = total.toLocaleString("es-CO");

    // Guardamos el total para la página de pago
    localStorage.setItem("totalPagar", total);
}

// Agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    let producto = obtenerProductoPorId(idProducto);

    if (producto) {
        // Buscar si ya está en el carrito
        let item = carrito.find(p => p.id === producto.id);

        if (item) {
            // Si ya está, aumentar cantidad si hay stock
            if (item.cantidad < producto.stock) {
                item.cantidad++;
            } else {
                alert("⚠️ No hay más stock disponible.");
            }
        } else {
            // Si no está, agregar con cantidad = 1
            carrito.push({ ...producto, cantidad: 1 });
        }

        guardarCarrito();
        mostrarCarrito();
    }
}

// Cambiar cantidad (+1 o -1)
function cambiarCantidad(index, cambio) {
    if (carrito[index]) {
        carrito[index].cantidad += cambio;

        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1); // eliminar si queda en 0
        }
    }
    guardarCarrito();
    mostrarCarrito();
}

// Eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
}
