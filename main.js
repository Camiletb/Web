function myToggleFunction() {
  var x = document.getElementById("toggleable");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}