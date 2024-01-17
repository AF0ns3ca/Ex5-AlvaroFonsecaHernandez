/**
 * @autor Alvaro Fonseca Hernandez
 * @github https://github.com/AF0ns3ca/Ex5-AlvaroFonsecaHernandez.git
 */

//Añadimos los elementos que necesitaremos para las validaciones pertinentes
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
//Añadimos los radio
//const radio = document.getElementsByName("radio");
const radio1 = document.getElementById("info1");
//const radio2 = document.getElementById("info2");
const infoBtn = document.getElementById("info-btn");
const enviar = document.getElementById("enviar");

let mensajesError = [];

const validar = (e) => {
    e.preventDefault;
    mensajesError = [];

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesError.push("Introduzca correctamente su email")

}

const info = () => {
    (radio1.checked) ? alert("Informacion sobre el radio button 1") : alert("Reserva de Ruta realizada");
};

infoBtn.addEventListener("click", info);
