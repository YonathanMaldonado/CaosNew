
const formulario = document.getElementById('formulario-registro');
const inputs = document.querySelectorAll('#formulario-registro input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 9 numeros.
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
    } else {
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo'); 
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo-password2`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-password2 .formulario-input-error`).classList.add('formulario-input-error-activo'); 
    } else {
        document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-password2`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-password2 .formulario-input-error`).classList.remove('formulario-input-error-activo');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});


