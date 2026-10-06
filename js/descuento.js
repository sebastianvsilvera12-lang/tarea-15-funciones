// 13. Calcular descuento
function calcularDescuento(precio, porcentaje) {
  var descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

// Ejemplo de uso:
const resultado13 = calcularDescuento(200, 15);
console.log("13. calcularDescuento(200, 15) =", resultado13);

// Mostrar en pantalla:
const elResultado13 = document.getElementById("resultado-13");
if (elResultado13) elResultado13.textContent = resultado13;
