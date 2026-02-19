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
        case 0: fondo.style.background = "rgba(0, 0, 0, 0.61)";break;
        case 1: fondo.style.background = "rgba(150, 53, 1, 0.61)";break;
        case 2: fondo.style.background = "rgba(250,250,250,0.50)";break;
        case 3: fondo.style.background = "rgba(27, 11, 40, 0.71)";break;
    }
}

// mostrar la primera
mostrarImagen();

// cambiar cada 2 segundos
setInterval(mostrarImagen, 800);
