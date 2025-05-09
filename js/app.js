document.addEventListener("DOMContentLoaded", () => {

    //Selecciona cada uno de los elementos de la interfaz
    const campoNombre = document.getElementById("nombre");
    const campoEmail = document.getElementById("email");
    const campoAsunto = document.getElementById("asunto");
    const campoMensaje = document.getElementById("mensaje");

    //Eventos
    const validar  = (e => {
        if(e.target.value.trim() === "") {
            mostrarAlerta();
        } else {
            console.log( "Hay algo")
        }
    })

    campoNombre.addEventListener("blur", validar);
    campoEmail.addEventListener("blur", validar);
    campoAsunto.addEventListener("blur", validar);
    campoMensaje.addEventListener("blur", validar);

    const mostrarAlerta = (() => {
        error = document.createElement("P");
        error.textContent = "Hubo un error..."

        console.log(error)
    })
})