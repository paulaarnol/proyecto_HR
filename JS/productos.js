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
crearParticulas(document.body, 100);

const form = document.getElementById('form-comentario');
const lista = document.getElementById('lista-comentarios');

let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
