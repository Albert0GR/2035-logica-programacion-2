let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;
let numeroSecreto = generarNumeroSecreto();


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto ) {
        //uso del operador ternario para utilizar singular plural 
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
         //El usuario no acertó.
         if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        borrarCaja();
    }
    return;
}

function borrarCaja(){
    //borra el valor del input por su id pero al usar querySelector es necesario usar el numeral
    //a diferenceia de  getElementById , en el cual no se utiliza numeral
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    let numeroGenenerado = Math.floor(Math.random() * numeroMaximo ) + 1;
    console.log(numeroGenenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los elementos posibles')
    } else {
            
        //si el numero ya estaba incluid en la lista se utiliza la recursividad para llamarse a si misma la funcion
        if (listaNumerosSorteados.includes(numeroGenenerado)) {
            return generarNumeroSecreto();
        }else{
            // coloca al final de la lista el nuevo numero
            listaNumerosSorteados.push(numeroGenenerado);
            return numeroGenenerado
        }
    }



}


//Funcion que recibe parametros para poder reutilizarla 
function asignarTextoElemento(elemento, texto){
    let elementoHTML  = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;

}

function mensajesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del uno al '+ numeroMaximo)
}

function reiniciarJuego() {
    //limpiar la caja
    borrarCaja();
    //mensaje de intervalo de numeros
    mensajesIniciales();
    //generar un nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //deshabilitar el botond e nuevo juego
    document.getElementById('reiniciar').setAttribute("disabled", "true");
    //restablece contador
    intentos = 1;


}

//se puede llamar la funcion  con los parametros directamente o se pueden pasarselos como argumentos a una variable y

mensajesIniciales();
