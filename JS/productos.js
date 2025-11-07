const cards = document.querySelectorAll('.taller');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')){
            cards.forEach(c => {
                c.classList.remove('active');
                c.classList.remove('dimmed');
          });
        }
        else{
            cards.forEach(c => {
                c.classList.remove('active');
                c.classList.add('dimmed');
            });
            card.classList.add('active');
            card.classList.remove('dimmed');
        }
    });
});
const botones = document.querySelectorAll('.boton-le');
botones.forEach(boton => {
    boton.addEventListener('mouseenter', () => {
    boton.style.transform = 'scale(1.1)';
    boton.style.transition = '0.3s';
    boton.style.boxShadow = '0 0 10px #ffffff';
  });
  boton.addEventListener('mouseleave', () => {
    boton.style.transform = 'scale(1)';
    boton.style.boxShadow = 'none';
  });
});
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
crearParticulas(document.querySelector('.fondo-animado'), 100);


const correo = document.getElementById('correo');
const comentario = document.getElementById('comentario');
const boton = document.getElementById('enviar');
const contenedorComentarios = document.createElement('div'); // contenedor dinámico
contenedorComentarios.id = 'lista-comentarios';
document.querySelector('.comentarios').appendChild(contenedorComentarios);

let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

function mostrarComentarios() {
  const contenedor = document.getElementById('lista-comentarios');
  contenedor.innerHTML = '';

   if (comentarios.length === 0) {
    contenedor.innerHTML = '<p>No hay comentarios aún.</p>';
    return;
  }
    comentarios.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('comentario-item');
    div.innerHTML = `
      <p><strong>${c.nombre}</strong> (${c.fecha}):</p>
      <p>${c.mensaje}</p>
      <hr>
    `;
    contenedor.appendChild(div);
  });
}
mostrarComentarios();

boton.addEventListener('click', e => {
  e.preventDefault();

  const nombre = correo.value.trim();
  const mensaje = comentario.value.trim();

  if (nombre && mensaje) {
    const nuevoComentario = { nombre, mensaje, fecha: new Date().toLocaleString() };
    comentarios.push(nuevoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
    
    correo.value = '';
    comentario.value = '';

    mostrarComentarios();
  }
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
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');

menuToggle.addEventListener('click', () => {
  navegacion.classList.toggle('active');
});
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
 const hora = new Date().getHours();
     const mensaje = document.createElement("p");
     if (hora >= 9 && hora < 20) {
          mensaje.textContent = "🟢 Estamos abiertos de 9:00 a 20:00.";
}else {
  mensaje.textContent = "🔴 Cerrado. Nuestro horario es de 9:00 a 20:00.";
}
document.querySelector("footer").appendChild(mensaje);