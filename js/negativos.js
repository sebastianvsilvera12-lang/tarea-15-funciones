// 11. Filtrar números negativos
function filtrarNegativos(numeros) {
  var negativos = [];
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      negativos.push(numeros[i]);
    }
  }
  return negativos;
}

// Ejemplo de uso:
const resultado11 = filtrarNegativos([-3, 5, -1, 8, -7, 2]);
console.log("11. filtrarNegativos([-3, 5, -1, 8, -7, 2]) =", resultado11);

// Mostrar en pantalla:
const elResultado11 = document.getElementById("resultado-11");
if (elResultado11) elResultado11.textContent = resultado11;
