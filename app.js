

let nuemroSecreto = generarNumeroSecreto();

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('Numero secreto',nuemroSecreto);
    console.log('Numero de usuario',numeroDeUsuario);
    console.log(nuemroSecreto === numeroDeUsuario);
    return      
}

function generarNumeroSecreto(){
    return Math.floor(Math.random() *10 ) + 1;

}


//Funcion que recibe parametros para poder reutilizarla 
function asignarTextoElemento(elemento, texto){
    let elementoHTML  = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;

}

//se puede llamar la funcion  con los parametros directamente o se pueden pasarselos como argumentos a una variable y
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del uno al 10')

