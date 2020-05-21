// import {validate} from "class-validator";
document.addEventListener('DOMContentLoaded', init);

function init() {
    const siguiente = document.getElementById('btn-siguiente');
    const anterior = document.getElementById('btn-anterior');
    const finalizar = document.getElementById('btn-finalizar');

    siguiente.addEventListener('click', validarInput);
    anterior.addEventListener('click', irAnterior);
    finalizar.addEventListener('click', validarFinalizar);
}

async function validarInput() {
    const anterior = document.getElementById('btn-anterior');
    const siguiente = document.getElementById('btn-siguiente');
    const correo = document.getElementById('correo');
    const nick = document.getElementById('nick');

    const validacion=new Validation();
    const existen=await validacion.buscarExistencia([correo, nick],'usuario');
    if(!existen) {
        siguiente.parentElement.parentElement.classList.add('move-left');
        anterior.parentElement.parentElement.classList.remove('move-left');
        console.log(await fetch('usuario/sent-email?id=1234567890poiuytrewq'));
    }
}



function irAnterior() {
    const anterior = document.getElementById('btn-anterior').parentElement.parentElement;
    const siguiente = document.getElementById('btn-siguiente').parentElement.parentElement;
    anterior.classList.add('move-left');
    siguiente.classList.remove('move-left');
}

function validarFinalizar() {

}