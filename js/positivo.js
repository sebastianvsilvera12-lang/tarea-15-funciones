// 8. Verificar si es positivo o negativo
function verificarSigno(numero) {
  if (numero > 0) return "POSITIVO";
  if (numero < 0) return "NEGATIVO";
  return "CERO";
}

// Ejemplo de uso:
const resultado8 = verificarSigno(-4);
console.log("8. verificarSigno(-4) =", resultado8);

// Mostrar en pantalla:
const elResultado8 = document.getElementById("resultado-8");
if (elResultado8) elResultado8.textContent = resultado8;
