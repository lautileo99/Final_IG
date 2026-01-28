let imagenes = document.querySelectorAll(".header-logo img");
let fondo = document.querySelector(".header-logo");
let cont = 0;

function mostrarImagen() {

    // ocultar todas
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }

    // mostrar la actual
    imagenes[cont].style.display = "block";

    // avanzar contador
    cont++;
    if (cont >= imagenes.length) {
        cont = 0;
    }
    
    switch(cont){
        case 0: fondo.style.background = "black";break;
        case 1: fondo.style.background = "brown";break;
        case 2: fondo.style.background = "azure";break;
        case 3: fondo.style.background = "rgb(27, 11, 40)";break;
    }
}

// mostrar la primera
mostrarImagen();

// cambiar cada 2 segundos
setInterval(mostrarImagen, 800);
