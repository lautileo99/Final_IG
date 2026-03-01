//Tomo la caja de los inputs para modificarlas en torno a lo ingresado
let nombre= document.querySelector("#nombre");
let email = document.querySelector("#email");
let numero = document.querySelector("#telefono");
let mensaje = document.querySelector("#mensaje");
let formulario = document.querySelector("#formulario");

//Tomo el cartel de datos ingresados correctamente.
let success = document.querySelector(".formulario_ok");
//Tomo el botón submit
let boton = document.querySelector("#submit");

boton.addEventListener("click", function() {
    /* Expresión regular textos:
        ^ : Empieza.
        /[]$/ : Carácteres propios de las expresiones.
        a-zA-Z: Cualquier caracter de la a a la z minúscula Mayúscula
        ÁÉÍÓÚáéíóú: Letras con tilde minuscula y mayuscula
        ñÑ: las 2 ñ's
        \s: espacios, si pone nombre *espacio* apellido, pasa.
     */
    let regexpNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/; 

    /* Expresión regular Mail:
        ^: Inicio de la cadena.
        [a-zA-Z0-9._%+-]+: Letras de la a a la z minus y mayus;numeros del 0 al 9, caracteres especiales (puntos, guiones bajos, porcentaje, signo más y signo menos). NOTA: no incluyo letras con tilde porque no hay direcciones que las tengan
        @: Símbolo @ obligatorio.
        [a-zA-Z0-9.-]+: Dominio: letras, números, puntos o guiones.
        \.: Un punto literal separando el dominio y la extensión.
        [a-zA-Z]{2,}: Dominio de nivel superior (TLD): al menos dos letras (.com, .org, .co).
        $: Fin de la cadena
     */
    let regexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    let regexpNum = /^[0-9\s-]{10,15}$/;

    if(nombre.value==="" || !regexpNombre.test(nombre.value)){
        formulario.style.border = "red solid 1px";
        nombre.style.border="red solid 1px";
        alert("Campo 'Nombre y Apellido' sin completar o con números, ingresar solo letras.");
    }else if(email.value==="" || !regexpEmail.test(email.value)){
        formulario.style.border = "red solid 1px";
        email.style.border="red solid 1px";
        alert("Campo 'email' sin completar o no válido, por favor ingresar un email correcto.");
    }else if(numero.value==="" || !regexpNum.test(numero.value)){
        formulario.style.border = "red solid 1px";
        numero.style.border="red solid 1px";
        alert("Campo 'Numero de teléfono' sin completar o con letras, solo números por favor.");
    }else{
        formulario.style.border="green solid 1px";
        nombre.style.border="green solid 1px";
        email.style.border="green solid 1px";
        numero.style.border="green solid 1px";
        nombre.value = "";
        email.value = "";
        numero.value = "";
        mensaje.value = "";
        success.style.display = "block";
        setTimeout(mostrarCartel,5000);
    }
})

function mostrarCartel(){
    success.style.display = "none";
    formulario.style.border="white solid 1px";
}