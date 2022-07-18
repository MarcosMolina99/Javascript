//modificacion de elementos 
let modificacion = document.getElementById("modificoJs");

modificacion.innerHTML= "<h1> Este título se modificó en JS</h1>";

//creacion

let subtitulo = document.createElement("div");

subtitulo.innerHTML = "<h2>Subtítulo creado en JS</h2>"

document.body.append(subtitulo);

//eliminar elemento

let eliminacion = document.getElementById("elementoAEliminar");

eliminacion.remove();