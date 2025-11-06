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
const modal = document.getElementById("modal-cargando");
const navButtons = document.querySelectorAll('#navegacion a');









const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');
menuToggle.addEventListener('click', () => {


