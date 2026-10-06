// js/descuento.js
function calcularDescuento(precio, porcentaje) {
    var descuento = precio * (porcentaje / 100);
    var final = precio - descuento;
    return "Precio: $" + precio + " | Descuento: " + porcentaje + "% | Final: $" + final;
}