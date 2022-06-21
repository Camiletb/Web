// Formulario
/**/
var formBoton = document.getElementById("submit");

// Lienzo
var canvas;
var ctx;

//Audio
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

// Eventos
formBoton.addEventListener("click", function(){updateData();});
formReset.addEventListener("click", resetAll);
formVol.addEventListener("change", updateVol);
window.addEventListener("keydown", keyHandlerDown);
window.onload = start();

function start() {
    // Lienzo
    canvas = document.getElementById("campo");
    ctx = canvas.getContext("2d");

    // ...
    // Código
    // ...

    setInterval(update, 10);
}

function draw() {
    // Fondo
    ctx.beginPath();
    ctx.fillStyle = "darkseagreen";
    ctx.strokeStyle = "darkseagreen";
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Línea vertical discontinua
    ctx.beginPath();
    ctx.setLineDash(line_dash);
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.moveTo((width / 2), 0);
    ctx.lineTo((width / 2), height);
    ctx.stroke();

    // Círculo discontinuo
    ctx.beginPath();
    ctx.setLineDash(line_dash);
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.arc(centro_campo.x, centro_campo.y, radio_centro, 0, 2 * Math.PI);
    ctx.stroke();

    // Marcador
    ctx.beginPath();
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(nombreJ1, width/4, height/2 - 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillText(cont2, width/4, height/2 + 35); // goles J1
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(nombreJ2, 3 * width/4, height/2 - 80);
    ctx.stroke();
    
}

//Función update
function update() {
    draw();
}

//Ejemplo de movimiento
function moverBola() {
    bola.pos.add(dir_bola);
}

//Manejador de eventos de teclas
function keyHandlerDown(e){
    let code = e.keyCode;
    switch(code){
        //J1
        case 87: //Arriba
            pala1.mover(-1);
            break;
        case 83: //Abajo
            pala1.mover(1);
            break;
    }
}

//Función para tomar los valores del cuestionario
function updateData() {
    // Nombres
    nombreJ1 = formJ1.value || nombreJ1;

    // Tamaño pala
    largo_pala = parseInt(formTam.value || largo_pala);
    pala1 = new Pala(pos_ini_pala1.x, largo_pala, rutaPala1, 1);
    

    // Velocidad bola
    let au = parseInt(formVel.value);
    console.log("value: "+ au);
    switch(au){
        case 3:
            vel_bola = 4;
        break;
        case 2:
        default:
            vel_bola = 1;
        break;
        case 1:
            vel_bola = 0.5;
        break;
    }
    console.log("Vel en updateData: " + vel_bola);
    bola.updateSpeed();
    console.log("Vel en updateData: " + vel_bola);
}