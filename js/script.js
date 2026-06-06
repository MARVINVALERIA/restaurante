function reservar() {

    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {

        document.getElementById("mensaje").innerHTML =
            "⚠ Debe ingresar un nombre";

        return;
    }

    document.getElementById("mensaje").innerHTML =
        "✅ Reserva realizada exitosamente para: " + nombre;

}