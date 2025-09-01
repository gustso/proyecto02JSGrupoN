
// variables o funciones
let numero1 = 5;
var nombre = "Gustavo";
let bandera = true;
const cliente01 = {
    nombre : "Gustavo",
    apellido : "Sosa",
    edad : 2
};

let arregloDeNumeros = [3,5,"Hola",9];

const PI = 3.14;

let lista = [2,4,5];
let listaClientes = [cliente01.apellido, numero1, bandera];

function sumar (numero1,numeroValidado){
    let suma = numero1 + numeroValidado;
    alert ("el resultado de la suma es: "+ suma);
    return suma;    
}

// lógica del negocio
if (5 === "5"){    
    console.log ("estoy en el VERDADERO");
} else {
    let numero1 = 10;
    var nombre = "Ariel";
    console.log ("estoy en FALSO");
    console.log ("el numero aquí es: "+numero1)
};


console.log ("El numero es: "+numero1);
console.log ("El nombre es: "+nombre);


// PROMPT 
let numero2 = prompt("Ingrese un número: ");

console.log(typeof(numero2));

let numeroValidado = parseFloat(numero2);

console.log(typeof(numeroValidado));

if (typeof(numeroValidado) != 'NaN' ){
    console.log ("no es un numero");
} else {
    
    console.log("numero ingresado es: "+ numeroValidado);
}

console.log("el resultado es: "+ sumar(numero1,numeroValidado));

console.log("El nombre del cliente es: "+ cliente01.nombre + " y el apellido es: "+cliente01.apellido);

