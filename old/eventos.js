// Eventos y DOM
//Dentro del script
var im = getElementById("imagen");
im.onclick = function ProcessClick(event) {
    //...
}
// Con listeners
var im = getElementById("imagen");
im.addEventListener('click', ProcessClick(event),true);

