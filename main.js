/* Cuando un navegador no tiene habilitado Javascript con la etiqueta 
<noscript></noscript> podemos comunicarnos con el cliente. Esto se puede dar en 
navegadores de documentos gubernamentales, por seguridad.
*/
var contenedor = document.querySelector("#seccion_canvas");
var ampliarcanvas = document.querySelector("#canvas_ejemplo");

function myToggleFunction() {
  var x = document.getElementById("toggleable");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function ampliar() {
  contenedor.style.width = "100%";
  contenedor.style.height = "100vh";
  contenedor.style.margin = "0";

  ampliarcanvas.style.width = "100%";
  ampliarcanvas.style.height = "100vh";
  // ampliarcanvas.style.backgroundSize = "cover";
  // ampliarcanvas.style.backgroundRepeat = "no-repeat";

}