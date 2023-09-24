
//Se agregan los productos y sus atributos

const productos = 
[
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "img/abrigos/01.jpg",
        categoria: 
        {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "img/abrigos/02.jpg",
        categoria: 
        {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "img/abrigos/03.jpg",
        categoria: 
        {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "img/abrigos/04.jpg",
        categoria: 
        {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "img/abrigos/05.jpg",
        categoria: 
        {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "img/camisetas/01.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "img/camisetas/02.jpg",
        categoria:
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "img/camisetas/03.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "img/camisetas/04.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "img/camisetas/05.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "img/camisetas/06.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "img/camisetas/07.jpg",
        categoria:
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "img/camisetas/08.jpg",
        categoria: 
        {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "img/pantalones/01.jpg",
        categoria: 
        {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },

    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "img/pantalones/02.jpg",
        categoria: 
        {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },

    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "img/pantalones/03.jpg",
        categoria: 
        {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },

    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "img/pantalones/04.jpg",
        categoria: 
        {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },

    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "img/pantalones/05.jpg",
        categoria: 
        {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

//Selecciona elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


//Función para cargar productos en el contenedor
function cargarProductos(productosElegidos) 
{
    //Limpia el contenido del contenedor
    contenedorProductos.innerHTML = "";

    // Renderiza los productos en la página mediante elementos HTML
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        //Agrega el elemento al contenedor
        contenedorProductos.append(div);
    })

    //Actualiza los botones de agregar al carrito
    actualizarBotonesAgregar();
}

//Carga los productos al inicio
cargarProductos(productos);


//Agrega eventos a los botones de categoría
botonesCategorias.forEach(boton => 
{
    boton.addEventListener("click", (e) => {

        //Elimina la clase "active" de todos los botones de categoría
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        //Agrega la clase "active" al botón seleccionado
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") 
        {
            //Filtra los productos por categoría y carga los productos correspondientes
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } 
        else 
        {   //Si se selecciona "todos", muestra todos los productos
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});


//Función para actualizar los eventos en los botones de "Agregar al carrito"
function actualizarBotonesAgregar() 
{
    //Selecciona todos los botones con la clase "producto-agregar"
    botonesAgregar = document.querySelectorAll(".producto-agregar");

     //Agrega un evento "click" a cada botón para llamar a la función "agregarAlCarrito"
    botonesAgregar.forEach(boton => 
    {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//Inicia el carrito de compras
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


//Verifica si hay datos de carrito en el almacenamiento local
if (productosEnCarritoLS) 
{  //Si hay datos en el almacenamiento local, convierte la cadena JSON en un objeto
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    //Actualiza el número que se muestra en el carrito
    actualizarNumerito();
} 
else 
{    //Si no hay datos en el almacenamiento local, inicia el carrito como un array vacío
    productosEnCarrito = [];
}


//Función para agregar un producto al carrito
function agregarAlCarrito(e) 
{
    //Muestra una notificación que indica que se agregado el producto al carrito
    Toastify(
        {
        text: "Se ha agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: 
        {
          background: "linear-gradient(to right, #16A085, #7D84F5)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem",
          marginRight: "2rem"
        },
        offset: {

            x: '1.5rem', 
            y: '1.5rem'
          },
        onClick: function(){} //Se ejecuta la funcion cuando se click al boton
      }).showToast();

    
    //Obtiene el ID del botón que se ha hecho click
    const idBoton = e.currentTarget.id;
    //Busca el producto correspondiente en el array de productos
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    //Verifica si el producto ya está en el carrito
    if(productosEnCarrito.some(producto => producto.id === idBoton)) 
    {   //Si el producto ya está en el carrito, encuentra su índice en el carrito
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        //Aumenta la cantidad del producto en el carrito
        productosEnCarrito[index].cantidad++;
    } 
    else 
    {   //Si el producto no está en el carrito, establece su cantidad en 1
        productoAgregado.cantidad = 1;
        //Agrega el producto al carrito
        productosEnCarrito.push(productoAgregado);
    }

    //Llama a la función para actualizar el número en el carrito
    actualizarNumerito();
    //Guarda el carrito en el almacenamiento local
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//Función para actualizar el número en el carrito
function actualizarNumerito() 
{   //Calcula la cantidad total de productos en el carrito
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    //Actualiza el número en el elemento HTML con el ID "numerito"
    numerito.innerText = nuevoNumerito;
}
