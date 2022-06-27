const cupones = [
{  name : "cuponDiamante", descuento : 25,},
{ name : "cuponPlata", descuento : 15 },
{ name : "cuponOro", descuento : 10 },
]




function calcularPrecioDescuento (precio, descuento){  
 const porcentajeDescuento = 100 - descuento;
 const precioConDescuento = (precio * porcentajeDescuento) / 100; 

 return precioConDescuento;
}

function buttonPriceDiscount(){
    const precio = document.getElementById ("inputPrice");
    const precioValue = precio.value; 

    const cupon = document.getElementById("inputCoupons");
    const cuponValue = cupon.value;
   const precioConDescuento = calcularPrecioDescuento (precioValue, cuponValue)
     
   const encuentraCupon = cupones.find(function(cupon){
    return cupon.name === cuponValue;
  });

  if (!encuentraCupon){

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El cupón " + cuponValue + " no es válido";
  } 

  else {
     const descuento = encuentraCupon.descuento;
     const precioConDescuento = calcularPrecioDescuento (precioValue, descuento)

     const resultP = document.getElementById("ResultP");
     resultP.innerText = "El precio con descuento es $" + precioConDescuento;

  }
}