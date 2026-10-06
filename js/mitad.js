// js/mitad.js
function calcularMitad(numeros) {
    var mitades = [];
    for (var i = 0; i < numeros.length; i++) {
        mitades.push(numeros[i] / 2);
    }
    return "Mitades: [" + mitades.join(", ") + "]";
}