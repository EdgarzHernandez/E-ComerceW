
// Obtener referencias a elementos del DOM
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

// Agregar evento al hacer clic en "Abrir Menú"
openMenu.addEventListener("click", () => 
{   // Cuando se hace clic en "Abrir Menú", agregar la clase "aside-visible" al elemento "aside"
    aside.classList.add("aside-visible");
})

// Agregar evento al hacer clic en "Cerrar Menú"
closeMenu.addEventListener("click", () => 
{   // Cuando se hace clic en "Cerrar Menú", quitar la clase "aside-visible" del elemento "aside"
    aside.classList.remove("aside-visible");
})