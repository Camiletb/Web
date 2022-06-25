/* Cuando un navegador no tiene habilitado Javascript con la etiqueta 
<noscript></noscript> podemos comunicarnos con el cliente. Esto se puede dar en 
navegadores de documentos gubernamentales, por seguridad.
*/
function myToggleFunction() {
  var x = document.getElementById("toggleable");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}