 const hora = new Date().getHours();
     const mensaje = document.createElement("p");
     if (hora >= 9 && hora < 20) {
          mensaje.textContent = "🟢 Estamos abiertos de 9:00 a 20:00.";
}else {
  mensaje.textContent = "🔴 Cerrado. Nuestro horario es de 9:00 a 20:00.";
}
document.querySelector("footer").appendChild(mensaje);


document.addEventListener("DOMContentLoaded", function () {
  console.log("Script productos.js cargado");
const menuToggle = document.getElementById("menu-toggle");
const navegacion = document.getElementById("navegacion");

if (menuToggle && navegacion) {
menuToggle.addEventListener("click", () => {
  navegacion.classList.toggle("active");
});
}
const modal = document.getElementById("modal-cargando");
const navButtons = document.querySelectorAll('#navegacion a');
if (modal && navButtons.length > 0) {
navButtons.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); 
    const destino = boton.getAttribute('href');
    mostrarModal(destino);
  });
  boton.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    const destino = boton.getAttribute('href');
    mostrarModal(destino);
      });
  boton.addEventListener('contextmenu', (e) => {
  e.preventDefault(); 
  const destino = boton.getAttribute('href');
  mostrarModal(destino);
      });
    });
  }

function mostrarModal(destino) {
  modal.style.display = 'flex';
  console.log("Mostrando modal...");
  setTimeout(() => {
    console.log("Redirigiendo a:", destino);
    window.location.href = destino;
  }, 1500);
}
});
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');

menuToggle.addEventListener('click', () => {
  navegacion.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script productos.js cargado");
  
});