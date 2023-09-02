// Obtén todos los elementos con la clase 'cont-n2'
const items = document.querySelectorAll(".cont-n2");
const items1 = document.getElementById("item1");
// Agrega un controlador de eventos de clic a cada elemento
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Restaura el tamaño original a todos los elementos
    items.forEach((otherItem) => {
      otherItem.style.width = "150px"; // Cambia el ancho de vuelta al valor original
    });

    // Haz más grande el elemento que fue clickeado
    item.style.width = "330px"; // Cambia el ancho al hacer clic
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí se ejecutará cuando el DOM esté completamente cargado
    // Puedes llamar a funciones o realizar cualquier otra operación que desees hacer al cargar la página.
  });

window.addEventListener('load', function() {
    // Tu código aquí se ejecutará cuando todos los recursos de la página (incluyendo imágenes) se hayan cargado completamente.
    // Esto puede ser útil si necesitas esperar a que todos los recursos estén disponibles antes de realizar alguna acción.
    items1.style.width = '330px';
});
