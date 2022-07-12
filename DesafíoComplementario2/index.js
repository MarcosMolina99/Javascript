const productos= [ "Camisetas", "Shorts", "Botines", "Medias", "Zapatillas"];

let pedirProducto= prompt("Ingrese un producto para agregar como primer elemento a la lista. A continuación se le mostrara el tamaño de la lista y tambien se eliminará el último producto de la lista. Puede ver todos los productos en la consola. ");
productos.unshift(pedirProducto);
productos.pop();
console.log(productos);
alert(productos.length);

