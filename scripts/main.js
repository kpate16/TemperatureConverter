window.onload = init;

function init() {
  const btn1 = document.getElementById("convertFahrenheit");
  const btn2 = document.getElementById("convertCelsius");

  if (btn1 !== null) {
    btn1.addEventListener("click", convertFahrenheit);
  }
  if (btn2 !== null) {
    btn2.addEventListener("click", convertCelsius);
  }
}
function convertFahrenheit(e) {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var cToFahr = (celsius * 9) / 5 + 32;
  document.getElementById("f_output").value = cToFahr;
}

function convertCelsius(e) {
  var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var celsiusResult = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("f_output").value = celsiusResult;
}
