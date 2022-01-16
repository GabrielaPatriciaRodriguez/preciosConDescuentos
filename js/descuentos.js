
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
} 

function onClickPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuentoValue = inputDescuento.value;

    const precioDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioDescuento;
}
