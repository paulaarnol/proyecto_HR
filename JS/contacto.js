/*aca tu parte*/








/*Mi parte*/
function crearParticulas(contenedor, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        const part = document.createElement("div");
        part.classList.add("particula");
        part.style.left = Math.random() * 100 + "%";
    part.style.top = Math.random() * 100 + "%";
    }