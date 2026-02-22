let cuchillo = document.querySelector("#cuchillo");
let btnCuchillo = document.querySelector("#btn_cuchillo");
let latch = false;

btnCuchillo.addEventListener("click", e => {
    e.preventDefault();
    latch = !latch;

    if(latch){
    cuchillo.style.display = "flex";
    cuchillo.style.flexDirection = "column";
    cuchillo.style.alignItems = "center";
    }else{
    cuchillo.style.display = "none";
    }
});

