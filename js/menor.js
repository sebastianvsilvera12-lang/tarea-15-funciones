// 7. Encontrar el número menor
function encontrarMenor(numeros) {
  var menor = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

// Ejemplo de uso:
const resultado7 = encontrarMenor([8, 3, 12, 1, 7]);
console.log("7. encontrarMenor([8, 3, 12, 1, 7]) =", resultado7);

// Mostrar en pantalla:
const elResultado7 = document.getElementById("resultado-7");
if (elResultado7) elResultado7.textContent = resultado7;
