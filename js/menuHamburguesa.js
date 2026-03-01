let boton_burguer = document.querySelector("#btnHamburguesa");
let menu = document.querySelector("#mobile");
let btnSts = false;

boton_burguer.addEventListener("click", e=>{
    e.preventDefault();
    btnSts = !btnSts;

    if(btnSts==false){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
});

