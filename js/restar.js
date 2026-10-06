// 2. Restar dos números
function restar(a, b) {
  return a - b;
}

// Ejemplo de uso:
const resultado2 = restar(10, 3);
console.log("2. restar(10, 3) =", resultado2);

// Mostrar en pantalla:
const elResultado2 = document.getElementById("resultado-2");
if (elResultado2) elResultado2.textContent = resultado2;
