// 14. Área del cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}

// Ejemplo de uso:
const resultado14 = areaCuadrado(5);
console.log("14. areaCuadrado(5) =", resultado14);

// Mostrar en pantalla:
const elResultado14 = document.getElementById("resultado-14");
if (elResultado14) elResultado14.textContent = resultado14;
