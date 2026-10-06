// 1. Sumar dos números
function sumar(a, b) {
  return a + b;
}

// Ejemplo de uso:
const resultado1 = sumar(5, 3);
console.log("1. sumar(5, 3) =", resultado1);

// Mostrar en pantalla:
const elResultado1 = document.getElementById("resultado-1");
if (elResultado1) elResultado1.textContent = resultado1;
