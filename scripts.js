let productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del producto 1', imagen: 'https://via.placeholder.com/150' },
    { id: 2, nombre: 'Producto 2', precio: 200, descripcion: 'Descripción del producto 2', imagen: 'https://via.placeholder.com/200' },
    // ...
];

let cantidadProductosMostrados = 0;

function mostrarProductos() {
    let productosDiv = document.getElementById('productos');
    for (let i = cantidadProductosMostrados; i < cantidadProductosMostrados + 3 && i < productos.length; i++) {
        let productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        productoDiv.innerHTML = `
            <a href="javascript:void(0);" onclick="mostrarDetalles(${productos[i].id})">
                <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
                <h3>${productos[i].nombre}</h3>
                <p>Precio: $${productos[i].precio}</p>
            </a>
        `;
        productosDiv.appendChild(productoDiv);
    }
    cantidadProductosMostrados += 3;
    if (cantidadProductosMostrados >= productos.length) {
        document.getElementById('mostrarMas').style.display = 'none';
    }
}

function mostrarMasProductos() {
    mostrarProductos();
}

function mostrarDetalles(id) {
    let producto = productos.find(p => p.id === id);
    alert(`Nombre: ${producto.nombre}\nPrecio: $${producto.precio}\nDescripción: ${producto.descripcion}`);
}

mostrarProductos();