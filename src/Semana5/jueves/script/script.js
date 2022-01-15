function ejercicioDos() {
    let notas = [0, 0, 0, 0];
    
    notas[0] = Number(prompt('Ingresar primera nota'));
    notas[1] = Number(prompt('Ingresar segunda nota'));
    notas[2] = Number(prompt('Ingresar tercer nota'));
    notas[3] = Number(prompt('Ingresar cuarta nota'));

    console.log('notas', notas);
}

/* ejercicioDos(); */

function ejercicioTres(base, altura) {
    let a = base;
    let b = altura;

    a = Number(prompt('Ingresa la base del rectangulo'));
    b = Number(prompt('Ingresa la base del rectangulo'));

    let area = (a*b)

    console.log('Area', area);
}

/* ejercicioTres(); */

function ejercicioCuatro() {
    let base = Number(prompt('Ingresa la base del triangulo'));
    let altura = Number(prompt('Ingresa la base del truangulo'));

    let area = (base*altura)/2

    console.log('Area del triangulo es ', area);
}

/* ejercicioCuatro(); */

function ejercicioCinco() {
    let radio =   Number(prompt("Ingresar radio"));
   
   
    console.log("el area del circumferencia es ", Math.PI * Math.pow(radio,2));
}

/* ejercicioCinco(); */

function ejercicioSeis() {
    let horas = Number(prompt("Ingresa tus horas trabajadas al día"));
    let dias = Number(prompt('¿Cuántos días a la semana shas trabajado?'));

    let pagoSemanal = (horas*20)*dias;

    console.log('Por trabajar ' + horas + ' horas al día por ' + dias + ' días a la semana su pago es de:', pagoSemanal);
}

/* ejercicioSeis(); */

function ejercicioSiete(){
    let metros = Number(prompt("Ingresa el numero de metros"));

    let resultado = (metros * 39,370);

    console.log('Las pulgadas son', resultado + ' pulgadas')
}

/* ejercicioSiete(); */

function ejercicioOcho() {
    let cantidadDolares = Number(prompt('Ingresa la cantidad de dolas que quieres comprar')) ;
    let precioDolar = 3.88;

    let cantidadSoles = cantidadDolares * precioDolar;
    console.log('Para comprar ' + cantidadDolares + ' dolares necesitas:', cantidadSoles + ' soles');
}

/* ejercicioOcho() */

function ejercicoNueve() {
    let anioNacimiento = Number(prompt('Ingresa el año de naciento'))
    let anioActual = 2022;

    const edad = anioActual - anioNacimiento;

    console.log('La edad es:', edad)
}

/* ejercicoNueve() */

function ejercicioDiez() {
    const nombre1 = {
        nombre: 'Juan',
        edad: 33,
    }

    const nombre2 = {
        nombre: 'Jorge',
        edad: 35,
    }

    const nombre3 = {
        nombre: 'Max',
        edad: 17,
    }

    if(nombre1[1] < 18){
        console.log('El menor es', nombre1.nombre);
    } else if (nombre2[1] < 18) {
        console.log('El menor es', nombre2.nombre);
    } else {
        console.log('El menor es', nombre3.nombre);
    }
}

/* ejercicioDiez() */

function ejercicioOnce() {
    let aniosLaborados = Number(prompt('¿Cuántos años tienes trabajando'));
    const bonoFijo = 1000;

    if(aniosLaborados < 6) {
        console.log('Tu bono sera de:', aniosLaborados*100 + ' Soles');
    } else {
        console.log('Tu bono sera de:', bonoFijo + ' Soles')
    }
}

/* ejercicioOnce() */

function ejercicioDoce() {
    const salarioInicial = 1500;
    const aniosTrabajados = [1, 2, 3, 4, 5, 6];

    for(let index = 0; index < aniosTrabajados.length; index++) {
        console.log('El salario es:', aniosTrabajados + (aniosTrabajados*.10));
    }

    console.log('salario', aniosTrabajados + (aniosTrabajados*.10));
}

function ejercicioCatorce(){
    let focos = [
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo',
        'verde',
        'blanco', 
        'rojo'
    ];

    const totalFocos = {
        verde: 0,
        blanco: 0,
        rojo: 0,
    };

    for (let index = 0; index < focos.length; index++ ){
        if(focos[index] == 'verde') {
            totalFocos.verde = totalFocos.verde + 1;
        } else if (focos[index] == 'rojo') {
            totalFocos.rojo = totalFocos.rojo + 1;
        } else {
            totalFocos.blanco = totalFocos.blanco + 1;
        }
    }

    console.log('Total de focos', totalFocos)
}

// ejercicioCatorce()