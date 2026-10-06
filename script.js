const btnMenu = document.querySelector(".Hamburguesa");
const menu = document.querySelector(".Nav");
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("MenuAbierto");
});

const listTargetas = document.querySelectorAll(".Foto");
const listBtn = document.querySelectorAll(".btnDataType");
listBtn.forEach(boton => {
    boton.addEventListener("click", function () {
        listBtn.forEach(cadaBoton => {
            cadaBoton.classList.remove("permaNaranja");
        });
        boton.classList.add("permaNaranja");
        listTargetas.forEach(tarjeta => {
            if (boton.dataset.type === tarjeta.dataset.type || boton.dataset.type === "") {
                tarjeta.classList.remove("btnJS");
            } else {
                tarjeta.classList.add("btnJS");
            }
        });
    });
});