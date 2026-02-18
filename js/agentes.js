let astraCard = document.querySelector("#astra");
let astraCard_img = document.querySelector("#astra_img");
let band = false;

astraCard.addEventListener("click", e=>{
  band != band;
})

if(band){
  astraCard_img.style.display = "none";
}else{
  astraCard_img.style.display = "block";
}

const hab_agentes = [
{
  descripcion: "Controladora que manipula el campo de batalla con energía cósmica.",
  c: "Pozo Gravitacional",
  q: "Pulso Nova",
  e: "Nebula",
  x: "División Astral"
},

{
  descripcion: "Iniciador que utiliza explosiones sísmicas para abrir paso.",
  c: "Réplica",
  q: "Falla",
  e: "Línea de Falla",
  x: "Fragor Imparable"
},

{
  descripcion: "Controlador estratégico con apoyo orbital.",
  c: "Baliza Estimulante",
  q: "Granada Incendiaria",
  e: "Cortina de Humo",
  x: "Ataque Orbital"
},

{
  descripcion: "Centinela elegante con armamento personalizado.",
  c: "Marca Registrada",
  q: "Cazador de Cabezas",
  e: "Rendezvous",
  x: "Tour de Force"
},

{
  descripcion: "Centinela experto en vigilancia e información.",
  c: "Jaula Cibernética",
  q: "Cámara Espía",
  e: "Cable Trampa",
  x: "Hurto Neural"
},

{
  descripcion: "Iniciadora que caza a sus enemigos con pesadillas.",
  c: "Acechadora",
  q: "Capturar",
  e: "Atormentar",
  x: "Noche Eterna"
},

{
  descripcion: "Iniciador que combate junto a sus criaturas.",
  c: "Mosh Pit",
  q: "Dizzy",
  e: "Wingman",
  x: "Thrash"
},

{
  descripcion: "Controlador que domina el agua para proteger y bloquear visión.",
  c: "Cascada",
  q: "Ensenada",
  e: "Marea Alta",
  x: "Ajuste de Cuentas"
},

{
  descripcion: "Duelista enfocado en duelos uno contra uno.",
  c: "Contingencia",
  q: "Debilitamiento",
  e: "Doble Toque",
  x: "Contrato Mortal"
},

{
  descripcion: "Duelista ágil experta en movilidad.",
  c: "Borrasca",
  q: "Vendaval",
  e: "Impulso",
  x: "Tormenta de Cuchillas"
},

{
  descripcion: "Iniciador robótico diseñado para neutralizar habilidades.",
  c: "FRAG/ment",
  q: "FLASH/drive",
  e: "ZERO/point",
  x: "NULL/cmd"
},

{
  descripcion: "Centinela que usa tecnología para controlar zonas.",
  c: "Nanoenjambre",
  q: "Bot de Alarma",
  e: "Torreta",
  x: "Confinamiento"
},

{
  descripcion: "Duelista de velocidad eléctrica.",
  c: "Carril Rápido",
  q: "Relámpago",
  e: "Alta Velocidad",
  x: "Sobrecarga"
},

{
  descripcion: "Controlador que manipula sombras y teletransportación.",
  c: "Paranoia",
  q: "Paso Cubierto",
  e: "Velo Tenebroso",
  x: "Desde las Sombras"
},

{
  descripcion: "Duelista que controla el fuego para curarse y atacar.",
  c: "Bola Curva",
  q: "Manos Calientes",
  e: "Llamarada",
  x: "Volver a Empezar"
},

{
  descripcion: "Duelista explosiva especialista en daño en área.",
  c: "Bot Explosivo",
  q: "Fardo Explosivo",
  e: "Bomba de Pintura",
  x: "Cierratelones"
},

{
  descripcion: "Duelista que se fortalece al eliminar enemigos.",
  c: "Devorar",
  q: "Mirada Lasciva",
  e: "Despreciar",
  x: "Emperatriz"
},

{
  descripcion: "Centinela que protege y cura a su equipo.",
  c: "Orbe Barrera",
  q: "Orbe de Ralentización",
  e: "Orbe Sanador",
  x: "Resurrección"
},

{
  descripcion: "Iniciadora que guía a su equipo con criaturas espirituales.",
  c: "Rastreadora",
  q: "Luz Guía",
  e: "Reverdecer",
  x: "Buscadores"
},

{
  descripcion: "Iniciador experto en reconocimiento y rastreo.",
  c: "Dron Búho",
  q: "Proyectil de Choque",
  e: "Flecha de Reconocimiento",
  x: "Furia del Cazador"
},

{
  descripcion: "Controladora que utiliza toxinas y veneno.",
  c: "Veneno Mordaz",
  q: "Nube Venenosa",
  e: "Pantalla Tóxica",
  x: "Fosa Venenosa"
},

{
  descripcion: "Centinela que manipula metal líquido para controlar zonas.",
  c: "Filamento",
  q: "Arco Cortante",
  e: "Muro Metálico",
  x: "Jardín de Espinas"
},

{
  descripcion: "Duelista que manipula dimensiones y engaño.",
  c: "Engaño",
  q: "Punto Ciego",
  e: "Desvío Dimensional",
  x: "Deriva Dimensional"
}

];
