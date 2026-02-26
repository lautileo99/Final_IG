const cards = document.querySelectorAll(".card_agente");

cards.forEach((card, index) => {

  const overlay = card.querySelector(".overlay-habilidades");

  card.addEventListener("mouseover", () => {

    const agente = hab_agentes[index];

    overlay.innerHTML = `
    <p><strong></strong> ${agente.descripcion}</p>
      <p><strong>C:</strong> ${agente.c}</p>
      <p><strong>Q:</strong> ${agente.q}</p>
      <p><strong>E:</strong> ${agente.e}</p>
      <p><strong>X:</strong> ${agente.x}</p>
    `;

    overlay.style.opacity = "1";

  });

  card.addEventListener("mouseout", () => {

    overlay.style.opacity = "0";

  });

});

const hab_agentes = [
{
  descripcion: "Controladora ghanesa que manipula el campo de batalla con energía cósmica.",
  c: "Pozo Gravitacional",
  q: "Pulso Nova",
  e: "Nebula",
  x: "División Astral"
},

{
  descripcion: "Iniciador sueco que utiliza explosiones sísmicas para abrir paso.",
  c: "Réplica",
  q: "Falla",
  e: "Línea de Falla",
  x: "Fragor Imparable"
},

{
  descripcion: "Controlador estadounidense estratégico con apoyo orbital.",
  c: "Baliza Estimulante",
  q: "Granada Incendiaria",
  e: "Cortina de Humo",
  x: "Ataque Orbital"
},

{
  descripcion: "Centinela fracés elegante con armamento personalizado.",
  c: "Marca Registrada",
  q: "Cazador de Cabezas",
  e: "Rendezvous",
  x: "Tour de Force"
},
{
  descripcion: "Controladora escocesa que manipula energía vital y puede seguir usando habilidades incluso después de morir.",
  c: "Subidón",
  q: "Entrometerse",
  e: "Ardid",
  x: "Todavía no estoy muerta"
},
{
  descripcion: "Centinela marroquino experto en vigilancia e información.",
  c: "Jaula Cibernética",
  q: "Cámara Espía",
  e: "Cable Trampa",
  x: "Hurto Neural"
},
{
  descripcion: "Centinela noruega experta en tecnología de contención que controla zonas y bloquea avances enemigos con dispositivos de alta precisión.",
  c: "Sensor sónico",
  q: "Malla de barrera",
  e: "Red gravitatoria",
  x: "Aniquilación"
},

{
  descripcion: "Iniciadora turca que caza a sus enemigos con pesadillas.",
  c: "Acechadora",
  q: "Capturar",
  e: "Atormentar",
  x: "Noche Eterna"
},

{
  descripcion: "Iniciador estadounidense que combate junto a sus criaturas.",
  c: "Pogo Brutal",
  q: "Carnalito",
  e: "Vértigo",
  x: "Paliza"
},

{
  descripcion: "Controlador indio que domina el agua para proteger y bloquear visión.",
  c: "Cascada",
  q: "Ensenada",
  e: "Marea Alta",
  x: "Ajuste de Cuentas"
},

{
  descripcion: "Duelista chino enfocado en duelos uno contra uno.",
  c: "Contingencia",
  q: "Debilitamiento",
  e: "Doble Toque",
  x: "Contrato Mortal"
},

{
  descripcion: "Duelista coreana ágil experta en movilidad.",
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
  descripcion: "Centinela alemana que usa tecnología para controlar zonas.",
  c: "Nanoenjambre",
  q: "Bot de Alarma",
  e: "Torreta",
  x: "Confinamiento"
},

{
  descripcion: "Duelista filipina de velocidad eléctrica.",
  c: "Carril Rápido",
  q: "Relámpago",
  e: "Alta Velocidad",
  x: "Sobrecarga"
},

{
  descripcion: "Controlador de origen desconocido que manipula sombras y teletransportación.",
  c: "Paranoia",
  q: "Paso Cubierto",
  e: "Velo Tenebroso",
  x: "Desde las Sombras"
},

{
  descripcion: "Duelista inglés que controla el fuego para curarse y atacar.",
  c: "Bola Curva",
  q: "Manos Calientes",
  e: "Llamarada",
  x: "Volver a Empezar"
},

{
  descripcion: "Duelista brasilera explosiva especialista en daño en área.",
  c: "Bot Explosivo",
  q: "Fardo Explosivo",
  e: "Bomba de Pintura",
  x: "Cierratelones"
},

{
  descripcion: "Duelista mexicana que se fortalece al eliminar enemigos.",
  c: "Devorar",
  q: "Mirada Lasciva",
  e: "Despreciar",
  x: "Emperatriz"
},

{
  descripcion: "Centinela japonesa que protege y cura a su equipo.",
  c: "Orbe Barrera",
  q: "Orbe de Ralentización",
  e: "Orbe Sanador",
  x: "Resurrección"
},

{
  descripcion: "Iniciadora australiana que guía a su equipo con criaturas espirituales.",
  c: "Rastreadora",
  q: "Luz Guía",
  e: "Reverdecer",
  x: "Buscadores"
},

{
  descripcion: "Iniciador ruso experto en reconocimiento y rastreo.",
  c: "Dron Búho",
  q: "Proyectil de Choque",
  e: "Flecha de Reconocimiento",
  x: "Furia del Cazador"
},
{
  descripcion: "Iniciador táctico colombiano que utiliza tecnología militar avanzada para limpiar zonas y obligar a los enemigos a desplazarse.",
  c: "Granada guiada",
  q: "Descarga cegadora",
  e: "Salva estratégica",
  x: "Bombardeo táctico"
},
{
  descripcion: "Centinela originario de Senegal que, con la ayuda de una mutación genética, desafía las reglas del combate al anular los poderes y la tecnología de sus oponentes. En el campo de batalla de Veto, las armas son tu única garantía.",
  c: "Correa",
  q:"Atajo",
  e: "Interceptor",
  x: "Evolución"
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
  descripcion: "Duelista que manipula el tiempo para ralentizar a sus enemigos y moverse a gran velocidad, creando ventajas agresivas en los enfrentamientos.",
  c: "Distorsión temporal",
  q: "Pulso ralentizador",
  e: "Desfase rápido",
  x: "Fractura del tiempo"
},
{
  descripcion: "Duelista que manipula dimensiones y engaño.",
  c: "Engaño",
  q: "Punto Ciego",
  e: "Desvío Dimensional",
  x: "Deriva Dimensional"
}

];
