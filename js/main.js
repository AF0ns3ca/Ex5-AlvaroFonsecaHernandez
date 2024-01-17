/**
 * @autor Alvaro Fonseca Hernandez
 * @github https://github.com/AF0ns3ca/Ex5-AlvaroFonsecaHernandez.git
 */

//Añadimos los elementos que necesitaremos para las validaciones pertinentes
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
//Añadimos los radio
//const radio = document.getElementsByName("radio");
const radio1 = document.getElementById("info1");
//const radio2 = document.getElementById("info2");
const infoBtn = document.getElementById("info-btn");
const enviar = document.getElementById("enviar");
const errores = document.getElementById("errores");

let mensajesError = [];

const validar = (e) => {
  e.preventDefault();
  mensajesError = [];

  //Validaciones de los diferentes campos

  //Validaciones de nombre
  nombre.value.length === 0 &&
    mensajesError.push("El campo nombre no puede estar vacio");
  //Validamos que el nombre tenga que empezar por una letra mayuscula
  !/^[A-Z]/.test(nombre.value.trim()) &&
    mensajesError.push("El nombre debe comenzar por una letra mayuscula");
  !/^[a-zA-Z]*$/.test(nombre.value.trim()) &&
    mensajesError.push("El nombre solo puede tener numeros y letras");

    //Validaciones de email
  email.value.length === 0 &&
    mensajesError.push("El campo email no puede estar vacio");
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) &&
    mensajesError.push("Introduzca correctamente su email (x@x.xx)");

  //Validaciones de mensaje
  mensaje.value.length === 0 &&
    mensajesError.push("El campo mensaje no puede estar vacio");
  mensaje.value.length < 10 &&
    mensajesError.push("El mensaje debe contener al menos 10 caracteres");

  //Lógica para enviar si no hay mensajes de error y se confirma por el usuario
  if (
    mensajesError.length === 0 &&
    confirm("¿Estás seguro de enviar el formulario?")
  ) {
    formulario.submit();
  } else if (mensajesError.length > 0) {
    errores.textContent = "";
    console.log(mensajesError);
    mensajesError.forEach(function (mensaje) {
      const miLi = document.createElement("li");
      miLi.textContent = mensaje;
      errores.appendChild(miLi);
    });
  }
};

const info = () => {
  radio1.checked
    ? alert("Acompañenos en una fantástica ruta por el Arbol del Mundo, donde recorrerá reinos fantásticos y conocerá a los personajes más increibles de la cultura nórdica")
    : alert("Has reservado una plaza para la ruta por el Arbol del Mundo, Sköl!");
};

infoBtn.addEventListener("click", info);
formulario.addEventListener("submit", validar);
