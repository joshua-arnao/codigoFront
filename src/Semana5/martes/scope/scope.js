/*----------------------------------------------------------------
ACCESO DE UNA VARIABLE
----------------------------------------------------------------*/
let nombre = 'joshua';
let apellido = 'arnao';

/*----------------------------------------------------------------
FUNCIÓN DECLARATIVA
----------------------------------------------------------------*/
function nombreFuncion(parametroA, parametroB, parametroC) {
    console.log(parametroA);
    console.log(parametroB);
    console.log(parametroC);
}

nombreFuncion(10, 20, 30);
nombreFuncion(1, 2, 20);
console.log('')

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function main () {
    console.log('la suma es ' + sumar(2, 3));
    console.log('la suma modificada es ' + sumar(11, 3));
    console.log(restar(11, 3));
    console.log(restar(4, 3));
    alert(sumar(3, 4));
}

//main()
console.log('')

const a = 5;
const b = 10;

function fn () {
    let b = 2;
    console.log(a);
}

function ejemploUno() {
    let a = 10;
    console.log('ejemploUno:',a);
}

function ejemploDos() {
    let a = 20;
    console.log('ejemploDos:',a);
}

ejemploUno()
ejemploDos()
console.log(a)
fn()