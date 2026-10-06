// js/menor.js
function encontrarMenor(numeros) {
    var menor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return "El menor es: " + menor;
}