
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

const cupones = [
    "DESCUENTO15",
    "DESCUENTO30",
    "DESCUENTO25",
];

function onClickDescuentoConCupon() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = inputPrecio.value;
    
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = Number(inputCupon.value);
  
    let descuento;
  
    switch(cuponValue) {
      case cupones[0]: // "DESCUENTO15"
        descuento = 15;
      break;
      case cupones[1]: // "DESCUENTO30"
        descuento = 30;
      break;
      case cupones[2]: // "DESCUENTO25"
        descuento = 25;
      break;
    }
  
  
    const precioDesc = calcularPrecioConDescuento(precioValue, descuento);

  
    const result = document.getElementById("result");
    result.innerText = "El precio con descuento son: $" + precioDesc;
  }