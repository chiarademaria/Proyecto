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

//SECCION COUNTDOWN//
// Fecha donde termina el countdown
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update del countdown cada 1 segundo
var x = setInterval(function() {

  // Fecha y hora de hoy
  var now = new Date().getTime();

  // Distancia entre hoy y la fecha de expiración
  var distance = countDownDate - now;

  // Calculo para dias, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Se muestra en el elemento con el id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //Si el countdown expira que se muestre una frase 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TERMINO LA PROMO";
  }
}, 1000);


