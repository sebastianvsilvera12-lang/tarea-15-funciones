// 12. Calcular la mitad de cada número
function calcularMitad(numeros) {
  var mitades = [];
  for (var i = 0; i < numeros.length; i++) {
    mitades.push(numeros[i] / 2);
  }
  return mitades;
}

// Ejemplo de uso:
const resultado12 = calcularMitad([10, 6, 20, 8]);
console.log("12. calcularMitad([10, 6, 20, 8]) =", resultado12);

// Mostrar en pantalla:
const elResultado12 = document.getElementById("resultado-12");
if (elResultado12) elResultado12.textContent = resultado12;
