// Obtener datos del carrito del almacenamiento local
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


// Seleccionar elementos del DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


//Función para cargar productos en el carrito
function cargarProductosCarrito()
{

    if (productosEnCarrito && productosEnCarrito.length > 0) 
    { 
        // Función para cargar productos en el carrito
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        
        // Limpiar la lista de productos en el carrito
        contenedorCarritoProductos.innerHTML = "";

        //Renderiza los productos en el carrito en la página mediante elementos HTML
        productosEnCarrito.forEach(producto => 
        {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            // Agregar el producto al carrito
            contenedorCarritoProductos.append(div);
        })
    } 
    else 
    {   // Si el carrito está vacío, mostrar un mensaje
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

     // Actualizar los eventos de los botones "Eliminar"
    actualizarBotonesEliminar();
    // Actualizar el total
    actualizarTotal();
}

// Llamar a la función para cargar productos en el carrito
cargarProductosCarrito();
    
// Función para actualizar los eventos en los botones "Eliminar"
function actualizarBotonesEliminar() 
{
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => 
    {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

//Función para eliminar un producto del carrito
function eliminarDelCarrito(e) 
{
    // Se Muestra una notificación de que indica la eliminacion del producto
    Toastify(
        {
        text: "Se ha eliminado el producto",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: 
        {
          background: "linear-gradient(to right, #5C1DC3, #416AD9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".74rem",
          marginRight: "2rem"
        },
        offset: 
        {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){} //Se ejecuta la funcion cuando se click al boton
      }).showToast();

    // Obtener el ID del producto a eliminar
    const idBoton = e.currentTarget.id;
    // Encontrar el índice del producto en el carrito
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    // Eliminar el producto del carrito
    productosEnCarrito.splice(index, 1);
    // Volver a cargar los productos en el carrito
    cargarProductosCarrito();

    // Actualizar el carrito en el almacenamiento local
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

// Agregar un evento al botón "Vaciar Carrito"
botonVaciar.addEventListener("click", vaciarCarrito);

// Función para vaciar el carrito
function vaciarCarrito() 
{
    // Se Muestra un cuadro de diálogo de confirmación para vaciar todo
    Swal.fire(
        {
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se eliminaran todos los productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'

    }).then((result) => 
    {
        if (result.isConfirmed) 
        {    // Si el usuario confirma la acción de vaciar el carrito se vacia el array de productos del carrito
            productosEnCarrito.length = 0;
            // Actualizar el carrito en el almacenamiento local
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            // Volver a cargar los productos en el carrito (carrito vacío)
            cargarProductosCarrito();
        }
      })
       
}

// Función para calcular y mostrar el total de la compra
function actualizarTotal() 
{   // Calcular el total sumando los subtotales de todos los productos en el carrito
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    // Actualizar el elemento HTML con el ID "total" para mostrar el total calculado
    total.innerText = `$${totalCalculado}`;
}

// Agregar un evento al botón "Comprar"
botonComprar.addEventListener("click", comprarCarrito);

// Función para completar la compra
function comprarCarrito() 
{
    // Vaciar el carrito después de la compra
    productosEnCarrito.length = 0;
    // Actualizar el carrito en el almacenamiento local
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    // Actualizar la interfaz para mostrar que la compra ha sido completada
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

    // Se Muestra un mensaje de indicandonos que nuestra compara se hizo con extito
    Swal.fire({
        title: '¡Felicidades!',
        text: 'Tu compra ha sido procesada correctamente',
        icon: 'success',
        confirmButtonText: 'Cerrar'
      })
}
    


