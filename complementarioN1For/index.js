let resultado= 0;
let numeroIngresado;
let numeroCinco= 5;
for(let i=0; i<5; i++){
    numeroIngresado=prompt("Ingrese un numero");
    parseInt(numeroIngresado);
    resultado= numeroCinco * numeroIngresado;
    alert("Verá su número ingresado * 5: " + resultado);
    console.log(`Verá el resultado de su número ingresado * 5: ${resultado}`);
}