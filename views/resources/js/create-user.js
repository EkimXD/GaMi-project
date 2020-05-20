document.addEventListener('DOMContentLoaded', init)

class getInformation {

}

function init(){
    const siguiente=document.getElementById('btn-siguiente');
    const anterior=document.getElementById('btn-anterior');
    const finalizar=document.getElementById('btn-finalizar');
    
    siguiente.addEventListener('click', validarInput);
    anterior.addEventListener('click',irAnterior);
    finalizar.addEventListener('click',validarFinalizar);
}

async function validarInput(e) {

    const siguiente=document.getElementById('btn-siguiente');
    const correo=document.getElementById('correo').value;
    const nick=document.getElementById('nick').value;

    const response=await fetch(`usuario/buscar?correo=${correo}&nick${nick}`);
    console.log(response.JSON);
    //     .then(response=>{
    //
    //         siguiente.parentElement.parentElement.classList.toggle('move-left');
    //     }).catch(error=>{
    //
    // });

}

function irAnterior() {

}

function validarFinalizar() {

}