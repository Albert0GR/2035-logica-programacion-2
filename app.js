let nuemroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){
    let elementoHTLM = document.querySelector(elemento)
    elementoHTLM.innerHTML = texto;
    return;
}

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


asignarTextoElemento('h1','Juego del numero secreto')