let start = 0;
let x1 = 400;
let y1 = 200;
let y2 = 300;
let enemigos = [];
let balas = [];
let puntaje = 0;
let spawnRate = 60; // cada 60 frames
let dificultad; // 3000ms = 3 segundos
let sens = 1; 
let miraX = 0;
let miraY = 0;
let duracionRonda = 35000; // 35 segundos en milisegundos
let tiempoInicioRonda = 0;
let tiempoRestante = 35;
let estrellas = [];

function setup() {
  let canvas = createCanvas(800,600);
  canvas.parent("juego");
  for (let i = 0; i < 150; i++) {
  estrellas.push({
      x: random(width),
      y: random(0, height * 0.65),
      tamaño: random(1, 3),
      brillo: random(150, 255)
    });
  }
}

function draw() {
  if (start==0) {
    menuPrincipal();
    cursor();
  }else if(start==1){
    nivel();
  }
  else if(start==2){
    let tiempoActual = millis();
    let tiempoTranscurrido = tiempoActual - tiempoInicioRonda;
    tiempoRestante = max(0, 35 - floor(tiempoTranscurrido / 1000));
    if (tiempoTranscurrido >= duracionRonda) {
      start = 3; // estado de fin de ronda
    }
    noCursor();
    dibujarEscenario();    
    // SPAWN
    if (frameCount % spawnRate === 0) {
      enemigos.push(new Enemigo());
    }

    // ENEMIGOS
    for (let i = enemigos.length - 1; i >= 0; i--) {

      enemigos[i].update();
      enemigos[i].show();

      if (enemigos[i].muerto) {
        enemigos.splice(i, 1);
      }
    }
    detectarColisiones();

    // HUD
    fill(255);
    textSize(28);
    textAlign(LEFT);
    stroke(0);
    text("Puntaje: " + puntaje, 20, 30);
    textAlign(RIGHT);
    text("Tiempo: " + tiempoRestante, width - 20, 30);
    dibujarMira();
    }else if(start == 3){
      finRonda();
    }
}

function menuPrincipal(){
  background('rgb(1,1,77)');
  for (let i = 0; i < 20; i++) {
    stroke(random(220, 255));
    strokeWeight(3);
    point(random(0, 800), random(0, 600));
  }
  textSize(36);
  fill(255);
  noStroke();
  textAlign(CENTER, TOP);
  text('START', x1, y2);
  text("Haga click en START para comenzar", x1, 100);
  if (mouseX > x1-50 && mouseX < x1+50 && mouseY > y2 && mouseY < y2+40) {
    push();
    stroke('blue');
    strokeWeight(2);
    fill(100, 89, 190, 100);
    rect(y2, y2-10, 200, 50);
    pop();
  }
}

function nivel(){
  background('#AB900A');
  textSize(36);
  fill(255);
  noStroke();
  textAlign(CENTER, TOP);
  text('Elija el nivel de dificultad:', x1, 100);
  text("Facil", x1, height/2-70);
  text("Medio", x1, height/2);
  text("Dificil", x1, height/2+70);
  textSize(20);
  text("Fácil: Objetivos cada 1 segundo", x1, 470);
  text("Medio: Objetivos cada medio segundo", x1, 500);
  text("Dificil: Objetivos cada 1/3 de segundo", x1, 530);
  if (mouseX > x1-30 && mouseX < x1+30 && mouseY > y2-70 && mouseY < y2-40) {
    push();
    textSize(36);
    strokeWeight(5);
    stroke(10);
    fill('cyan');
    text("Facil", x1, height/2-70);
    stroke('yellow');
    strokeWeight(2);
    line(x1-40,height/2-30,x1+40,height/2-30);
    pop();
  }
  if(mouseX > x1-50 && mouseX < x1+50 && mouseY > y2 && mouseY < y2+40){
    push();
    textSize(36);
    strokeWeight(3);
    stroke(10);
    fill('orange');
    text("Medio", x1, height/2);
    stroke('yellow');
    strokeWeight(2);
    line(x1-60,height/2+40,x1+60,height/2+40);
    pop();
  }
  if(mouseX > x1-50 && mouseX < x1+50 && mouseY > y2+60 && mouseY < y2+100){
    push();
    textSize(36);
    strokeWeight(3);
    stroke(10);
    fill('red');
    text("Dificil", x1, height/2+70);
    stroke('yellow');
    strokeWeight(2);
    line(x1-50,height/2+110,x1+50,height/2+110);
    pop();
  }
}

function mouseClicked(){

  // MENU PRINCIPAL
  if(start == 0 && 
     mouseX > x1-50 && mouseX < x1+50 && 
     mouseY > y2 && mouseY < y2+40){
       
    start = 1;
  }

  // SELECCION DE NIVEL
  else if(start == 1){

    // FACIL
    if(mouseX > x1-30 && mouseX < x1+30 && mouseY > y2-70 && mouseY < y2-40){

      tiempoInicioRonda = millis();
      enemigos = [];
      dificultad = 1000; // 1 segundo
      puntaje = 0;
      start = 2;
    }

    // MEDIO
    else if(mouseX > x1-50 && mouseX < x1+50 && mouseY > y2 && mouseY < y2+40){

      dificultad = 500; // medio segundo
      tiempoInicioRonda = millis();
      enemigos = [];
      puntaje = 0;
      start = 2;
    }

    // DIFICIL
    else if(mouseX > x1-50 && mouseX < x1+50 && mouseY > y2+60 && mouseY < y2+100){
      tiempoInicioRonda = millis();
      enemigos = [];
      dificultad = 300; // 300 mS
      puntaje = 0;
      start = 2;
    }
  }else if(start == 3){
      start = 0;
    }
}

function dibujarEscenario() {

  // === GRADIENTE NOCTURNO ===
  for (let y = 0; y < height; y++) {

    let inter = map(y, 0, height, 0, 1);

    let colorArriba = color(5, 10, 30);     // azul oscuro profundo
    let colorAbajo = color(0, 0, 0);        // negro

    let c = lerpColor(colorArriba, colorAbajo, inter);

    stroke(c);
    line(0, y, width, y);
  }

  // === ESTRELLAS ===
  noStroke();
  for (let e of estrellas) {
    fill(255, 255, 255, e.brillo);
    ellipse(e.x, e.y, e.tamaño);
  }

  // === SUELO OSCURO ===
  fill(55);
  rect(0, height * 0.7, width, height * 0.3);

  // Línea horizonte
  stroke(40);
  strokeWeight(2);
  line(0, height * 0.7, width, height * 0.7);
}

class Enemigo {
  constructor() {
    this.r = random(20, 100);
    this.x = random(this.r, width - this.r);
    this.y = random(this.r + 60, height - this.r);

    this.tiempoInicial = millis();
    this.tiempoDeVida = dificultad;
    
    this.color = color(62, 200, 222);
  }

  update() {
    // verificar si expiró
    if (millis() - this.tiempoInicial > this.tiempoDeVida) {
      this.muerto = true;
    }
  }

  show() {

  let pasos = 20; // más pasos = más suave el gradiente

  for (let i = pasos; i > 0; i--) {

    let inter = map(i, 0, pasos, 0, 1);

    let colorCentro = color(255);            // blanco
    let colorExterior = color(0, 200, 255);  // celeste

    let c = lerpColor(colorCentro, colorExterior, inter);

    fill(c);
    noStroke();

    ellipse(
      this.x,
      this.y,
      (this.r * 2) * (i / pasos)
    );
  }
}
}

class Bala {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.speed = 10;

    // vector dirección
    let dx = targetX - x;
    let dy = targetY - y;
    let mag = sqrt(dx * dx + dy * dy);

    this.vx = (dx / mag) * this.speed;
    this.vy = (dy / mag) * this.speed;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

function mousePressed() {
  for (let i = enemigos.length - 1; i >= 0; i--) {

    let d = dist(mouseX, mouseY, enemigos[i].x, enemigos[i].y);

    if (d < enemigos[i].r) {
      
      puntaje += 10;
      enemigos.splice(i, 1);
    }
  }
}

function detectarColisiones() {
  for (let i = enemigos.length - 1; i >= 0; i--) {
    for (let j = balas.length - 1; j >= 0; j--) {

      let d = dist(
        enemigos[i].x,
        enemigos[i].y,
        balas[j].x,
        balas[j].y
      );

      if (d < enemigos[i].r + balas[j].r) {
        
        // sumar puntos según tamaño
        puntaje += 10;

        enemigos.splice(i, 1);
        balas.splice(j, 1);
        break;
      }
    }
  }
}

function dibujarMira() {
  push();
  stroke(255);
  strokeWeight(3);
  line(mouseX - 10, mouseY, mouseX-4, mouseY);
  line(mouseX, mouseY - 10, mouseX, mouseY-4);
  line(mouseX + 10, mouseY, mouseX+4, mouseY);
  line(mouseX, mouseY + 10, mouseX, mouseY+4);
  pop();
}

function finRonda(){
  background(20);

  fill(255);
  textSize(36);
  textAlign(CENTER, CENTER);

  text("Fin de la ronda", width/2, height/2 - 40);
  text("Puntaje final: " + puntaje, width/2, height/2 + 10);
  text("Click para volver al menú", width/2, height/2 + 60);
}