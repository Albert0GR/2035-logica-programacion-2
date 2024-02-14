// Crear una función que muestre "¡Hola, mundo!" en la consola.

function holaMundo(){
    console.log('holaMundo');
}

holaMundo(); 
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
    
function mostrarNombre(name){
    console.log( `¡Hola, ${name}!` );
}

mostrarNombre("Pancho");

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplicate(number){
    console.log(`El numero ${number} duplicado es: ${number*2}!`);
}
duplicate(6);


// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio (a,b,c) {
   return ( a + b + c ) /3;
}
console.log(promedio(7,10,7));

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function compara(a,b){
    //opcion corta
    //return a > b ? a : b;
    //opcion larga
    if (a>b) {
        return 'El mayor es: '+a;
    } else{
        return 'El mayor es: '+b;
    }

}
console.log(compara(99,9)) ;

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(a){
    return 'El cuadrado de ' + a + ' es '+ a*a;
}

console.log(cuadrado(5));




