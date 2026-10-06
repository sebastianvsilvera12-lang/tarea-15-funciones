// 5. Potencia de dos números
function potencia(base, exp) {
  return Math.pow(base, exp);
}

// Ejemplo de uso:
const resultado5 = potencia(2, 8);
console.log("5. potencia(2, 8) =", resultado5);

// Mostrar en pantalla:
const elResultado5 = document.getElementById("resultado-5");
if (elResultado5) elResultado5.textContent = resultado5;
