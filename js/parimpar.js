// 9. Verificar si es par o impar
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "PAR";
  } else {
    return "IMPAR";
  }
}

// Ejemplo de uso:
const resultado9 = verificarParImpar(7);
console.log("9. verificarParImpar(7) =", resultado9);

// Mostrar en pantalla:
const elResultado9 = document.getElementById("resultado-9");
if (elResultado9) elResultado9.textContent = resultado9;
