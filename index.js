let valorCuota = 0
let totalCompra = 0
let productoSeleccionado = parseInt(prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'
  )
)
let seguirComprando = true
let decision

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + 10000
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + 4000
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + 20000
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + 50000
  } else{
    productoSeleccionado = parseInt(prompt('ingresa un producto existente: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'))
    continue
  }

  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Placa Madre - 2.Memoria Ram - 3.Procesador - 4.Placa de video'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

alert('El valor total sin descuento ni impuestos es: '+totalCompra)

function precioConDescuento(valor){
let descuento = 0
if(valor<=4000){
    descuento = valor * (5/100)
} else if(valor>4000 && valor<=6000){
    descuento = valor * (10/100)
} else if(valor>6000 && valor<=10000){
    descuento = valor * (15/100)
} else {
    descuento = valor * (20/100)
}
let valorDescuento = valor *(descuento/valor)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = precioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: '+valorConDescuento)

function precioConImpuesto(valor){
    const impuestos = valor * (10/100)
    return valor + impuestos
}

let valorFinalConImpuesto = precioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: '+valorFinalConImpuesto)

pagoEnCuotas = parseInt(prompt('¿Queres pagarlo en cuotas? 1.Si - 2.No'))
if (pagoEnCuotas === 1 ) {
     cantidadCuotas =parseInt(prompt('Elija la cantidad de cuotas: 1.3 - 2.6 -3.9 - 4.12'))
    if (cantidadCuotas === 1) {
       valorCuota = valorFinalConImpuesto / 3
    }
    else if (cantidadCuotas ===2){
        valorCuota = valorFinalConImpuesto / 6
    }
    else if (cantidadCuotas ===3){
        valorCuota = valorFinalConImpuesto / 9
    }
    else if (cantidadCuotas ===4){
        valorCuota = valorFinalConImpuesto / 12
    }
}
else if (pagoEnCuotas === 2){
    pagoEnCuotas = false
}
alert('El valor total de las cuotas es: '+valorCuota)