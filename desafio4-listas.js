// Desafíos
// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
console.log(lenguagesDeProgramacion);


// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push( 'Java', 'Ruby', 'GoLang'); 



// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

mostrarLista=()=>{
    console.log('Todos los lenguajes de programación son:')
     for (const key in lenguagesDeProgramacion) {
         console.log(`${key}: ${lenguagesDeProgramacion[key]}`);
     }          
}

mostrarLista();

//opcion 2

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesSeparadamenteInverso() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamenteInverso();


// Crea una función que calcule el promedio de los elementos en una lista de números.

calcularPromedio=(lista)=>{
    let sumalistadoNumeros=0;
    for (const num of lista){
        sumalistadoNumeros+=num;
    }
    return sumalistadoNumeros/lista.length;
}

console.log("El promedio de los numeros es "+ calcularPromedio([5,6,7,8]));

//metodo 2
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);


// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

mostrarNumeroMaximoYMenor=(listanum)=>{
    let maximo=listanum[0]
    let minimo=listanum[0]
    
    for (let i = 1; i < listanum.length; i++){
        if(maximo<listanum[i]){
            maximo=listanum[i]
        }else if(minimo>listanum[i]){
            minimo=listanum[i]
        }
        
    }
    console.log(`el numero mas grande es ${maximo}`);
    console.log(`el numero mas pequeño es ${minimo}`);
}

mostrarNumeroMaximoYMenor([9,8,1,6,5]);



// Crea una función que devuelva la suma de todos los elementos en una lista.

sumarElementosLista=(listadenumeros)=>{
    let sumalistado=0
    for(let i of listadenumeros){
       sumalistado+=i  
    }
    return sumalistado
}

console.log("Suma de los numeros",sumarElementosLista([1,2,3,4,5]))


function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros1 = [15, 8, 25, 5, 12];
  let numeros2 = [150, 88, 325, 5, 12];
  let suma = calcularSuma(numeros1);
  console.log('Suma:', suma);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function posicionEnLista(numero, lista){
    return lista.indexOf(numero)
}

console.log("Posicion del 12 en la lista",posicionEnLista(150,numeros1))


// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaDosListas(list1,list2) {
    // Verificamos si las dos listas tienen el mismo tamaño
    if (list1.length !== list2.length) throw new Error("Las dos listas no son del mismo tamaño");
    
    let resultado = [];
    for (let i = 0; i < list1.length; i++) {
        // Sumamos cada elemento de ambas listas y lo agregamos a la nueva lista
        resultado.push(list1[i] + list2[i]);
    }
    return resultado;
}

// Prueba con dos listas del mismo tamaño
console.log("Suma de dos listas iguales",sumaDosListas([1,2,3],[4,5,6]));   

// Prueba con dos listas diferentes de tamaño
try{
    console.log("Suma de dos listas diferentes",sumaDosListas([1,2,3,4],[5,6]));
} catch(error) {
    console.log("Se ha producido un error al sumar las dos listas: ",error.message);
}

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoDeListas(numeros1){
    let resultados = []
    for(let num of numeros1){
        resultados.push(Math.pow(num,2));
    }
    return resultados;
}

console.log("Cuadro de los números de la lista",cuadradoDeListas(numeros1));    
