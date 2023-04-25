const fecha = document.querySelector('.fecha');
// fecha actual con javascript
document.addEventListener('DOMContentLoaded', () =>{
    fechaActual();
})

function fechaActual(){
    let fechaHoy = new Date () .getFullYear()
    fecha.textContent = fechaHoy;
}


// validando formulario
document.addEventListener('DOMContentLoaded', function() {




    //Seleccionando los elementos html
    const inputNombre = document.querySelector('#nombre');
    const inputCorreo = document.querySelector('#correo');
    const inputTel = document.querySelector('#teléfono');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    
    //Asignar eventos
    inputNombre.addEventListener('blur', validar );

    inputCorreo.addEventListener('blur', validar ) ;

    inputTel.addEventListener('blur',validar ) ;

    inputMensaje.addEventListener('blur',validar );

    function validar (evento) {
        if  (evento.target.value.trim() === '') {
            mostrarAlerta( ` El campo ${evento.target.id} es obligatorio`, evento.target.parentElement);
            return;
        }
     
       if ( evento.target.id === 'correo' && !validarEmail(evento.target.value)) {
        mostrarAlerta('El correo electronico no es valido', evento.target.parentElement);
        return;
       }

         limpiarAlerta( evento.target.parentElement);
        
         
         


    }

    // Generar alerta en html 
    function mostrarAlerta(mensaje,referencia) {
        // Comprueba si ya existe un alerta 
       limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('class_error');


     // Inyectar el mensaje de error a nuestra interfaz web 
     referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.clas_error');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado =  regex.test(email)
        return resultado;
    }



});