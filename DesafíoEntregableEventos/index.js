let boton = document.getElementById("miBoton");


boton.addEventListener("click", clickearBoton);

function clickearBoton(){
    //respuesta al evento
    console.log("Boton clickeado");


    //utilizo DOM
    let crearSubtitulo = document.createElement("div");

    crearSubtitulo.innerHTML = "<h1> Título creado utilizando DOM </h1>"

    document.body.append(crearSubtitulo);
}