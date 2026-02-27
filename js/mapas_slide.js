//Tomo todos los mapas y los guardo en una nodelist
let mapas = document.querySelectorAll(".mapa");
let botonDer = document.querySelector("#pasarImagenDer");
let botonIzq = document.querySelector("#pasarImagenIzq");

let contador = 0;

function mostrarMapa(indice) {
    mapas.forEach(mapa => mapa.style.display = "none");
    mapas[indice].style.display="block";
}

function siguiente() {
    contador++;
    if (contador >= mapas.length) {
        contador = 0;
    }
    mostrarMapa(contador);
}

function anterior() {
    contador--;
    if (contador < 0) {
        contador = mapas.length - 1;
    }
    mostrarMapa(contador);
}

botonDer.addEventListener("click", siguiente);
botonIzq.addEventListener("click", anterior);

// Mostrar la primera al cargar
mostrarMapa(contador);