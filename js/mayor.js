// 6. Encontrar el número mayor
function obtenerMayor(a, b) {
  if (a > b) return a;
  if (b > a) return b;
  return a;
}

// Ejemplo de uso:
const resultado6 = obtenerMayor(8, 15);
console.log("6. obtenerMayor(8, 15) =", resultado6);

// Mostrar en pantalla:
const elResultado6 = document.getElementById("resultado-6");
if (elResultado6) elResultado6.textContent = resultado6;
