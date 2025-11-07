modal js 
document.addEventListener("DOMContentLoaded",function() {
console.log ("script productos,js cargado");
const menutoggle= document.getElementById("menu-toggle");
const navegacion = document.getElementById("navegacion");

if (menutoggle && navegacion){
menutoggle.addEventListener("click", () => {
navegacion.classlist.toggle("active");


});
}
const modal= document.getElementById("modal-cargando"); 
const navbuttons - document.querySelectorAll('#navegacion a');
if(modal && navbuttons.length > 0) {
navbuttons.forEach(boton,  {
boton.addEventListener('click', (e) => {
    e.preventDefault();
    const destino = boton.getAttribute ('href');
mostrarmodal(destino)

}),
Boton.addEventListener('contextmenu', (e) {
e.preventDefault();
const destino=boton.getAttribute('href');
mostrarmodal(destino);
 }),
});
}
  function mostrarmodal(destino){
modal.style.display='flex';
console.log("mostrando modal...");
setTimeout(() { 
console.log("redirigiendo a:", destino);
window.location.href =destino;
 }, 1500);
}
});