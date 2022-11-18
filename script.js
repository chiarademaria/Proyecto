//SECCION CLASES
// Se esconden los elementos con class="containerTab", excepto por el que coincide con la que se clikea
function openTab(tabName) {
    let i, x;
    x = document.getElementsByClassName("Tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }