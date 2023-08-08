/*let nombre;

function bienvenida() {
  nombre = prompt("Por favor, ingrese su nombre:");
  alert("Bienvenido/a " + nombre + " a mi cafetería!");
  return nombre;
}

function despedida() {
  alert(
    "Muchas gracias " +
      nombre +
      ' por haber visitado "Ori`s café". ¡Que tengas un buen día!'
  );
}

//

bienvenida(nombre);

alert("A continuación seleccione el numero del producto que desea comprar:");

// funcion que muestra el producto
function mostrarProducto() {
  let idProducto;

  while (idProducto !== 0) {
    // entra en un ciclo
    idProducto = parseInt(
      prompt(
        "1| Café Americano.\n2| Café Suizo.\n3| Café con leche.\n4| Porción de cheesecake de frutos rojos.\n5| Porción de chocotorta.\n6| Cuadradito brownie con bocha de helado.\n7| Waffle con frutas y dulce de leche.\nPresione 0 para salir."
      )
    );

    if (idProducto === 0) {
      console.log("Gracias por utilizar nuestro servicio. ¡Hasta pronto!");
      break; // corta el ciclo cuando ingresa 0
    }

    const producto = productos.find((prod) => prod.id === idProducto);
    if (producto) {
      alert(
        "Has seleccionado: " + producto.nombre + "\nPrecio: $" + producto.precio
      );
    } else {
      // si no encuentra el numero tira este alert
      alert(
        "Producto no encontrado. Por favor " +
          nombre +
          ", ingresa un número válido."
      );
    }
  }
}

mostrarProducto();

despedida();
*/

// cards de los productos
let cardProductos = document.getElementById("cardCafes");

for (const producto of productosCafes) {
  cardProductos.innerHTML += `
  <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="img de cafe">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>
    </div>
    </div>
  </div>
    `;
}

let cardProductos2 = document.getElementById("cardTortas");

for (const producto of productosTortas) {
  cardProductos2.innerHTML += `
  <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="img de torta">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>
    </div>
    </div>
  </div>
    `;
}

let cardProductos3 = document.getElementById("cardTes");

for (const producto of productosTes) {
  cardProductos3.innerHTML += `
  <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="img de te">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>
    </div>
    </div>
  </div>
    `;
}
