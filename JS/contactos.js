/*aca tu parte*/
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

//cande
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
// cande //
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.particula').forEach(p => {
    const velocidad = 0.3;
    p.style.transform = `translateY(${scrollY * velocidad}px)`;
  });
});

/*Mi parte*/
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
const menuToggle = document.getElementById('menu-toggle');
  const navegacion = document.getElementById('navegacion');

  menuToggle.addEventListener('click', () => {
    navegacion.classList.toggle('active');
  });
