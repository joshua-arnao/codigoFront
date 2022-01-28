// VARIABLES Y TIPOS DE DATOS
console.log('Hola Mundo!!!!!');

/*----------------------------------------------------------------
VARIABLES sirve para guardar valores
tipo let = "ES UN VALOR QUE SE PUEDE SOBRE ESCRIBIR"
----------------------------------------------------------------*/
let nombreVariable = 10;
let edad = 35;
let nombrePrueba = 'joshua';
let sexo = 'm';

console.log('nombreVariable:', nombreVariable);
nombreVariable = 'cambiar el valor';
console.log('nombreVariable:', nombreVariable);

nombreVariable = 'modificado de nuevo'
console.log('nombreVariable:', nombreVariable)

/*----------------------------------------------------------------
VARIABLES 
tipo const = "Es un tipo de valor que no se puede sobre escribir"
----------------------------------------------------------------*/
const PI = 3.14;
const  URL = 'http://www.google.com'

console.log ('PI', PI);

/*----------------------------------------------------------------
TIPOS DE DATOS
----------------------------------------------------------------*/
console.log('');
let nombre2 = 'JOSHUA'; // string
let edad2 = '35'; // keep_number
let bool = true; // boolean
let indefinido; // undefined
let nulo = 'null'; // null
let dataUnico = Symbol('123456'); // symbol
let joshua = { //objeto(conjunto de datos formado por propiedades y valores)
    nacionalidad: 'peruana',
    sexo: 'm',
    edad: 25,
    profesion: 'sistemas',
    especialidad: 'frontend',
}; //objeto

console.log('////////////////////////')
console.log('//////////TIPO DE DATOS')
console.log('////////////////////////')
//Para saber el tipo de propiedad de un valor se utilizat typeof
console.log('nombre2:', typeof nombre2);
console.log('edad2:', typeof edad2);
console.log('bool:', typeof bool);
console.log('indefinido:', typeof indefinido);
console.log('nulo:', typeof nulo);
console.log('dataUnico:', typeof dataUnico);
console.log('joshua:', typeof joshua);



/*----------------------------------------------------------------
CAMBIAR TIPO DE DATOS
----------------------------------------------------------------*/
console.log("");
console.log("////////////////////////////");
console.log("///////CAMBIAR TIPO DE DATOS");
console.log("////////////////////////////");

console.log("numero", typeof 7); // number
console.log("numero", typeof "7"); // string

/*
De string a numero pueden usar parseInt o parseFloat(ayuda a respetar los decimales) o tambien Number
*/
console.log(typeof parseInt("7")); // string -> number
console.log(parseFloat("3.14")); // string -> number
console.log(typeof Number("10")); // string -> number

/*
De numero a string
*/
let numberData = 10;
console.log(typeof String(10)); // number -> string
console.log(typeof numberData.toString()); // number -> string

/*----------------------------------------------------------------
SOLICITAR NÚMERO Y CONVERTIRLO
----------------------------------------------------------------*/

let numero1 = prompt ('Ingresa un numero'); // retorna el valor ingresado por el usuario
let numero2 = prompt ('Ingresa otro numero numero'); // retorna el valor ingresado por el usuario
let numero3 = Number(prompt('Ingresa otro numero mas')); // convierte a numero directamente

console.log(numero1 + numero2) // concatena porque los considera como string
console.log(Number(numero1) + Number(numero2)) // suma porque cambiamos los string a numeros


