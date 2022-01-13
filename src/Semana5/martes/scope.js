/*----------------------------------------------------------------
ACCESO DE UNA VARIABLE
----------------------------------------------------------------*/
let nombre = 'joshua';
let apellido = 'arnao';

/*----------------------------------------------------------------
FUNCIÓN DECLARATIVA
----------------------------------------------------------------*/
function nombreFuncion(parametroA, parametroB, parametroC) {
    console.log(parametroA, parametroB, parametroC);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function main () {
    nombreFuncion(10, 20, 30);
    nombreFuncion(1, 2, 20);
    console.log('la suma es ' + sumar(2, 3));
    console.log('la suma modificada es ' + sumar(11, 3));
    console.log(restar(11, 3));
    console.log(restar(4, 3));
    alert(sumar(3, 4));
}

/* main() */

let a = 5;
function fn () {
    let a = 2;
    console.log(a);
}

console.log(a)
fn()