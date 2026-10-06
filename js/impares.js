// 10. Buscar números impares
function buscarImpares(numeros) {
  var impares = [];
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      impares.push(numeros[i]);
    }
  }
  return impares;
}

// Ejemplo de uso:
const resultado10 = buscarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("10. buscarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) =", resultado10);

// Mostrar en pantalla:
const elResultado10 = document.getElementById("resultado-10");
if (elResultado10) elResultado10.textContent = resultado10;
