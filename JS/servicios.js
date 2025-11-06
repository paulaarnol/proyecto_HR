const fab = document.createElement("div");
fab.classList.add("fab");
fab.textContent = "↑";
document.body.appendChild(fab);
fab.addEventListener("click", () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     });

     const hora = new Date().getHours();