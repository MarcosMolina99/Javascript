let resultadoCalculos;
let resultadoIva;
let primerProducto=prompt("Ingrese el valor del producto:");
let descuento=prompt("Ingrese el valor del descuento:");

parseInt(primerProducto);
parseInt(descuento);
parseInt(resultadoCalculos);

resultadoCalculos= calcularValores(primerProducto,descuento);
resultadoIva= calcularIva(resultadoCalculos);
alert(`La suma de los valores introducidos es de ${resultadoCalculos} y su IVA es de ${resultadoIva} `);



function calcularValores(primerNumero,segundoNumero){
    let valorCalculos= primerNumero - segundoNumero;
    parseInt(valorCalculos);

    return valorCalculos;
}

function calcularIva(sumaTotal){
    let resultadoTotal =sumaTotal * 0.21;
    return resultadoTotal;
}