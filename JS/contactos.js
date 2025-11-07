// Animación de tarjetas
document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".contacto-cj"); // <-- CORREGIDO

  // Aparecen una por una
  tarjetas.forEach((tarjeta, index) => {
    setTimeout(() => tarjeta.classList.add("visible"), index * 400);
  });

  // Mostrar/ocultar info 
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => tarjeta.classList.toggle("activa"));
  });
});

//montw
// Efecto  botones
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
  boton.addEventListener('mouseenter', () => {
    boton.style.transform = 'scale(1.1)';
    boton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease';
    boton.style.color = '#ff3333';
    boton.style.boxShadow = '0 0 18px rgba(255, 0, 0, 0.6)';
  });
  boton.addEventListener('mouseleave', () => {
    boton.style.transform = 'scale(1)';
    boton.style.color = '';
    boton.style.boxShadow = 'none';
  });
});
//cande
// Modal de bienvenida
window.addEventListener('load', () => {
  const modal = document.getElementById('mensaje-bienvenida');
  const cerrar = document.getElementById('cerrar-modal');

  if (modal && cerrar) {
    modal.classList.add('activo'); // Mostrar modal al cargar

    cerrar.addEventListener('click', () => {
      modal.classList.remove('activo');
    });
  }
});
//monte
// Menú tres lineas 
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');

if (menuToggle && navegacion) {
  menuToggle.addEventListener('click', () => {
    navegacion.classList.toggle('active');
  });
}

//cande//
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.particula').forEach(p => {
    const velocidad = 0.3;
    p.style.transform = `translateY(${scrollY * velocidad}px)`;
  });
});

//cande//
// Crear partículas dinámicamente
function crearParticulas(contenedor, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    const part = document.createElement("div");
    part.classList.add("particula");
    part.style.left = Math.random() * 100 + "%";
    part.style.top = Math.random() * 100 + "%";
    part.style.animationDuration = 5 + Math.random() * 10 + "s";
    part.style.animationDelay = Math.random() * 5 + "s";
    contenedor.appendChild(part);
  }
}

crearParticulas(document.body, 100);

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script productos.js cargado");

  const menuToggle = document.getElementById("menu-toggle");
  const navegacion = document.getElementById("navegacion");

  if (!menuToggle || !navegacion) {
    console.error("No se encontraron los elementos del menú");
    return;
  }

  function toggleMenu() {
    navegacion.classList.toggle("active");
  }

  menuToggle.addEventListener("click", toggleMenu);
});

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

 const hora = new Date().getHours();
     const mensaje = document.createElement("p");
     if (hora >= 9 && hora < 20) {
          mensaje.textContent = "🟢 Estamos abiertos de 9:00 a 20:00.";
}else {
  mensaje.textContent = "🔴 Cerrado. Nuestro horario es de 9:00 a 20:00.";
}
document.querySelector("footer").appendChild(mensaje);