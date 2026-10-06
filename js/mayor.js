// js/mayor.js
function obtenerMayor(a, b) {
    if (a > b) return a + " es mayor que " + b;
    if (b > a) return b + " es mayor que " + a;
    return "Ambos son iguales: " + a;
}