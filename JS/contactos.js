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

/*Mi parte*/
function crearParticula(contenedor, cantidad) {
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
crearParticula(document.body, 40);