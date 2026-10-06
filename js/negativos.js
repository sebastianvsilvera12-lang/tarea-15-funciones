// js/negativos.js
function filtrarNegativos(numeros) {
    var negativos = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            negativos.push(numeros[i]);
        }
    }
    return "Negativos: [" + negativos.join(", ") + "]";
}