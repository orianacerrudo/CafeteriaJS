//si habia un carrito anteriormente, lo recupero
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let tablaCarrito = document.getElementById("tablaCarrito");

//DOM y renderizado de Cafes
let cardProductos = document.getElementById("cardCafes");
renderizarProductos(productosCafes, cardProductos);

//DOM y renderizado de Tortas
let cardProductos2 = document.getElementById("cardTortas");
renderizarProductos(productosTortas, cardProductos2);

//DOM y renderizado de Tes
let cardProductos3 = document.getElementById("cardTes");
renderizarProductos(productosTes, cardProductos3);

//DOM y renderizado de Tostados
let cardProductos4 = document.getElementById("cardTostados");
renderizarProductos(productosTostados, cardProductos4);

//FUNCION renderizarProductos en card
function renderizarProductos(productos, cardElement) {
  for (const producto of productos) {
    cardElement.innerHTML += `
    <div class="col">
    <div class="card estiloCard">
      <img src="${producto.imagen}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio $${producto.precio}</p>
        <a class="btn agregar" id=${producto.id}>Agregar al carrito</a>
      </div>
    </div>
    `;
  }

  //evento del boton
  let botones = cardElement.getElementsByClassName("agregar");
  for (const boton of botones) {
    boton.addEventListener("click", () => {
      const prodACarrito = productos.find(
        (producto) => producto.id == boton.id
      );
      agregarACarrito(prodACarrito);
    });
  }
}

// FUNCION que agrega el producto al carrito y actualiza localStorage
function agregarACarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  //ALERT TOASTIFY
  Toastify({
    text: "Agregaste " + producto.nombre + " con éxito al carrito",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    close: true,
    gravity: "top", // TOP O BOTTOM
    position: "center", // LEFT, CENTER O RIGHT
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #3b2900, #b6853c)",
    },
  }).showToast();
  tablaCarrito.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
      </tr>
    `;

  //calcula el total
  let totalCarrito = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  document.getElementById("total").innerText =
    "Precio total de su compra: $ " + totalCarrito;
}

// Mostrar productos en el carrito desde localStorage
function mostrarProductosEnCarrito() {
  const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];

  for (const producto of carritoLocalStorage) {
    tablaCarrito.innerHTML += `
        <tr>
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio}</td>
        </tr>
      `;
  }
  //calcula el total
  let totalCarrito = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  document.getElementById("total").innerText =
    "Precio total de su compra: $" + totalCarrito;
}

// Llama a mostrarProductosEnCarrito cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarProductosEnCarrito();
});

//finalizar compra
let finCompra = document.getElementById("finalizarCompra");

finCompra.onclick = () => {
  let totalCarrito = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
  if (totalCarrito == 0) {
    // SWEETALERT
    Swal.fire(
      "Error",
      "Parece que su carrito se encuentra vacío, agregue productos para continuar",
      "question"
    );
  } else {
    // SWEETALERT
    Swal.fire({
      title: "¿Desea confirmar su compra?",
      text: "El gasto total será: $" + totalCarrito,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, confirmar compra",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡Su compra ha finalizado con éxito!",
          "Llegará a su destino en 30/40 minutos",
          "success"
        );

        // Vaciar el carrito y la tabla
        carrito = [];
        tablaCarrito.innerHTML = "";
        document.getElementById("total").innerText =
          "Precio total de su compra: $0";
        localStorage.removeItem("carrito");
      }
    });
  }
};
