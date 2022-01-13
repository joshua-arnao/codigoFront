/* 
EJMPLO UNO
*/
function ejemploUno() {
    let edad = prompt('ingresa tu edad');

    if (edad >= 18){
        alert('Bienvednido al club');
    }else {
        alert('No eres Bienvenido')
    }
}

// ejemploUno()

/* 
EJEMPLO DOS
*/
function ejemploDos() {
    let saborHelado = prompt('Ingresa tu sabor de Helado');
    
    if (saborHelado.toUpperCase() == "FRESA") {
        alert('Tu sabor elegido es Fresa');
    } else if (saborHelado.toUpperCase() == "MANGO"){
        alert('Tu sabor elegido es Mango');
    } else if (saborHelado.toUpperCase() == "CHOCOLATE"){
        alert('Tu sabor elegido es');
    } else {
        alert('No tenemos ese sabor');
    }
}

// ejemploDos()


/* 
EJEMPLO TRES
*/
function printTypeVehicle(type) {
    return alert('Elegiste un ' + type);
}

function ejemploTres() {
    let vehiculo = prompt ('Por favor elige tu vehiculo (auto, moto, bicicle, scooter');
    
    switch (vehiculo){
        case 'auto': {
            printTypeVehicle('auto');
            break;
        }
    
        case 'moto': {
            printTypeVehicle('moto');
            break;
        }
    
        case 'bicicleta': {
            printTypeVehicle('bicicleta');
            break;
        }
    
        case 'scooter': {
            printTypeVehicle('scooter');
            break;
        }

        default: {
            alert('No hay vehiculo disponibe');
        }
    }

    console.log('Se termino ejemploTres');
}

// debugger
// ejemploTres();

/* 
EJEMPLO CUATRO
*/
function ejemploCuatro() {
    const sexo = prompt('Ingresa tu sexo');

    sexo == 'm' ? alert('Eres masculino') : alert('Eres femenino');
}
/* ejemploCuatro(); */


