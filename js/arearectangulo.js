// 15. Área del rectángulo
function areaRectangulo(base, altura) {
  return base * altura;
}

// Ejemplo de uso:
const resultado15 = areaRectangulo(6, 4);
console.log("15. areaRectangulo(6, 4) =", resultado15);

// Mostrar en pantalla:
const elResultado15 = document.getElementById("resultado-15");
if (elResultado15) elResultado15.textContent = resultado15;
