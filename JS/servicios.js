const fab = document.createElement("div");
fab.classList.add("fab");
fab.textContent = "↑";
document.body.appendChild(fab);
fab.addEventListener("click", () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     });

     const hora = new Date().getHours();
     const mensaje = document.createElement("p");
     if (hora >= 9 && hora < 20) {
          mensaje.textContent = "🟢 Estamos abiertos de 9:00 a 20:00.";
}else {
  mensaje.textContent = "🔴 Cerrado. Nuestro horario es de 9:00 a 20:00.";
}
document.querySelector("footer").appendChild(mensaje);


navButtons.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); 
    mostrarModal();
  });

boton.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    mostrarModal();
  });
});

const menu = document.getElementById('menu-toggle');
const nav = document.getElementById('navegacion');
menu.addEventListener('click', () => {
nav.classList.toggle('active');
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

crearParticulas(document.body, 100);

const menuToggle = document.getElementById('menu-Toggle');
const navegacion = document.getElementById('navegacion');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const modal = document.getElementById("modal-cargando");
const navButtons = document.querySelectorAll('#navegacion a');