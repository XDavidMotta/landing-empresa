const btnMenu = document.querySelector(".Hamburguesa");
const menu = document.querySelector(".Nav");
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("MenuAbierto");
});

const listTargetas = document.querySelectorAll(".Foto");
console.log(listTargetas);
const listBtn = document.querySelectorAll(".btnDataType");
console.log(listBtn);
listBtn.forEach(boton => {
    boton.addEventListener("click", function () {
        console.log(boton.dataset.type);
        listTargetas.forEach(tarjeta => {
            console.log(tarjeta.dataset.type)
            if (boton.dataset.type === tarjeta.dataset.type || boton.dataset.type === "") {
                tarjeta.classList.remove("btnJS")
            } else {
                tarjeta.classList.add("btnJS")
            }
        });
    });
});