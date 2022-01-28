/* 
EJEMPLO UNO
 */
function ejercicioUno() {
    let edad = prompt('Ingresa tu edad)');

    if( edad > 18) {
        alert('Bienvenido al Club');
    } else {
        alert('No eres bienvenido');
    }    
}

//ejercicioUno()

/* 
EJEMPLO 2
*/
function ejemploDos() {
    let saborHelado = prompt('Ingresa el sabor del Helado');

    if( saborHelado.toUpperCase() == 'FRESA'){  // con toUpperCase() el texto lo pasamos a máyuscula
        alert('Tu sabor elegido es Fresa');
    } else if (saborHelado.toUpperCase() == 'MANGO') {
        alert('Tu sabor de Helado es Manfo');
    } else if (saborHelado.toUpperCase() == 'CHOCOLATE') {
        alert('Tu sabor elegido es Chocolate')
    } else {
        alert('No tenemos ese sabor');
    }
}

function printTypeVehicle(type) {
    return alert('Elegiste un ' + type);
}

// ejemploDos()

/* 
EJEMPLO 3
*/

function ejemploTres() {
    
    let vehiculo = prompt(
        'Por favor elige tu vehiculo(auto, moto, bicicleta o scooter)'
    )

    switch (vehiculo) { //evaluamos el valor (utilizamos para valores exactos)
        case 'auto': {
            printTypeVehicle('auto');
            break; //rompe el flujo de las preguntas
        }

        case 'moto': {
            printTypeVehicle('moto');
            break;
        }

        case 'scooter': {
            printTypeVehicle('scooter');
            break;
        }

        case 'bicicleta': {
            printTypeVehicle('bicicleta');
            break;
        }

        default: {
            printTypeVehicle('EL vehiculo no existe');
            break;
        }
    }

    console.log('Se termino el ejemplo 3');
}
/* debugger */; // da seguimiento línea a linea del codigo
// ejemploTres();


/* 
EJEMPLO 4 - CONTROL DE FLUJO TERNARIO
*/
function ejemploCuatro() {
    const sexo = prompt('Ingresa tu sexo');
    sexo == 'm' ? alert('Eres masculinno') : alert('Eres femenino'); //el simbolo ? coloca la condicional verdadera y : es la condicional falsa
}

// ejemploCuatro();
