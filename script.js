
const nav = document.querySelector("nav");
const scroll = () => nav.classList.toggle("nav__scroll", window.scrollY)

window.addEventListener("scroll", scroll);

const btnReservacion = document.getElementById("btn__reservacion");
const formulario = document.getElementById("formulario");

// Función para abrir o cerrar el formulario
function toggleFormulario() {
  formulario.classList.toggle("cita__no__active");
  formulario.classList.toggle("cita__active");
}

// Escuchador de clics en el botón de reservación
btnReservacion.addEventListener("click", toggleFormulario);

// Escuchador de clics en el documento
document.addEventListener("click", function (e) {
  if (
    !formulario.contains(e.target) &&
    e.target !== btnReservacion &&
    !btnReservacion.contains(e.target)
  ) {
    formulario.classList.add("cita__no__active");
    formulario.classList.remove("cita__active");
  }
});

const menu = document.getElementById("btn__menu");
const link = document.getElementById("links");

menu.addEventListener("click", function () {
  link.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !link.contains(e.target)) {
    link.classList.remove("open");
  }
});
