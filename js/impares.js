// js/impares.js
function buscarImpares(numeros) {
    var impares = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i]);
        }
    }
    return "Impares: [" + impares.join(", ") + "]";
}