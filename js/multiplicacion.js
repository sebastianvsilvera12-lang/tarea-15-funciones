// 3. Multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Ejemplo de uso:
const resultado3 = multiplicar(6, 7);
console.log("3. multiplicar(6, 7) =", resultado3);

// Mostrar en pantalla:
const elResultado3 = document.getElementById("resultado-3");
if (elResultado3) elResultado3.textContent = resultado3;
