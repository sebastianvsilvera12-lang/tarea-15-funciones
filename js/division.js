// 4. Dividir dos números
function dividir(a, b) {
  if (b === 0) return "Error: división por cero";
  return a / b;
}

// Ejemplo de uso:
const resultado4 = dividir(20, 4);
console.log("4. dividir(20, 4) =", resultado4);

// Mostrar en pantalla:
const elResultado4 = document.getElementById("resultado-4");
if (elResultado4) elResultado4.textContent = resultado4;
