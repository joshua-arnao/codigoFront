/* 
EJERCICIO DOS
*/
function ejercicioDos() {
    let notas = [0, 0, 0, 0];

    notas[0] = Number(prompt('Ingresar primera nota'));
    notas[1] = Number(prompt('Ingresar segunda nota'));
    notas[2] = Number(prompt('Ingresar tercera nota'));
    notas[3] = Number(prompt('Ingresar cuarta nota'));

    let suma = notas[0] + notas[1] + notas[2] + notas[3];
    let promedio = suma / notas.length;

    console.log(notas)
    console.log('El promedio de las notas es', promedio)
}

// ejercicioDos()

/* 
EJERCICIO TRES
*/
function ejercicioTres() {
    let height = Number(prompt('Ingrese el alto del rectangulo'));
    let width = Number(prompt('Ingrese la base del rectangulo'));

    let areaRect = height * width;

    console.log('El área del rectangulo es: ', areaRect);
}

// ejercicioTres();

/* 
EJERCICIO CUATRO
*/
function ejercicioCuatro() {
    let height = Number(prompt('Ingrese el alto del rectangulo'));
    let width = Number(prompt('Ingrese la base del rectangulo'));

    let areaTriangle = (height * width)/2;

    console.log('El área del rectangulo es: ', areaTriangle);
}

// ejercicioCuatro()

/* 
EJERCICIO CINCO
*/

function ejercicioCinco() {
    let radio =   Number(prompt("Ingresar radio"));
 
    console.log("el area del circunferencia es ", Math.PI * Math.pow(radio,2));
}

// ejercicioCinco()


/* 
ELERCICIO SEIS
*/function ejercicioSeis() {
    const horasTrabajadas = prompt('Horas trabajadas');
    const salario = prompt('Salario');

    console.log('salario: ', horasTrabajadas*salario);
}

// ejercicioSeis()

/* 
EJERCICIO SIETE
*/
function ejercicioSiete() {
    let metros = Number(prompt('Ingre la cantidad de metros'));
    const pulgadas = 0.0254;

    console.log('La cantidad e pulgadas es:', metros*pulgadas + ' pulgadas');
}

// ejercicioSiete()

/* 
EJERCICIO OCHO
*/
function ejercicioOcho() {
    let soles = Number(prompt('Ingrese la cantidad de soles'));
    let dolar = Number(prompt('Ingrese el valor del dolar actual'));

    console.log('Se pueden comprar', soles/dolar + ' Dolares');
}

// ejercicioOcho()

/* 
EJERCICIO NUEVE
*/
function ejercicioNueve() {
    let anioNacimiento = Number(prompt('Ingrese el año de nacimientos'));
    let anioActual = new Date().getFullYear();

    console.log('Su edad es:', anioActual - anioNacimiento);
}

// ejercicioNueve()

/* 
EJERCICIO DIEZ
*/
function ejercicioDiez() {
    const user1 = {
        nombre: 'Juan',
        edad: 32,
    }

    const user2 = {
        nombre: 'Omaira',
        edad: 25,
    }

    const user3 = {
        nombre: 'Joshua',
        edad: 28,
    }

    if(user1.edad < user2.edad && user1.edad < user3.edad){
        console.log('La persona de menor edad es:', user1.nombre);
    } else if (user2.edad < user1.edad && user2.edad < user3.edad){
        console.log('La persona de menor edad es:', user2.nombre + ' con ' + user2.edad + ' años');
    } else {
        console.log('La persona de menor edad es:', user3.nombre + ' con' + user3.edad + ' años');
    }
}

// ejercicioDiez()

/* 
EJERCICIO ONCE
*/
function ejercicioOnce() {
    let aniosLaborado = prompt('Ingresa tus años trabajados');
    const bonoFijo = 1000;

    if (aniosLaborado < 6) {
        console.log('Tu bono es de ', aniosLaborado * 100 + ' soles');
    } else {
        console.log('Tu bono es de ', bonoFijo + ' Soles');
    }
}

// ejercicioOnce()

/* 
EJERCICIO DOCE
*/
function ejercicioDoce() {
    let salario = 1500;
    const aniosTrabajados = [1, 2, 3, 4, 5, 6];

    let increment = 0;

    for (let i = 0; i < aniosTrabajados.length; i++) {
        increment = ((salario*12) * 0.1);
        console.log(i,i*increment,((i*increment)/12),salario+((i*increment)/12))
    }
}

// ejercicioDoce()


/* 
EJERCICIO TRECE
*/
function ejercicioTrece() {
    const alumnos = [
        {
            nombre: 'carlos',
            calificacion: 14,
        },
        {
            nombre: 'susan',
            calificacion: 18,
        },
        {
            nombre: 'rafael',
            calificacion: 15,
        },
        {
            nombre: 'ester',
            calificacion: 09,
        },
    ]

    let estadoAlumnos = {
        aprobado: 0,
        desaprobados: 0,
    }

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].calificacion > 11) {
            estadoAlumnos.aprobado = estadoAlumnos.aprobado + 1;
        } else {
            estadoAlumnos.desaprobados = estadoAlumnos.desaprobados + 1;
        }
    }
    console.log(estadoAlumnos)
}

// ejercicioTrece()

/* 
EJERCICIO CATORCE
*/
function ejercicioCatorce() {
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

    const totalDeFocos = {
        verde: 0,
        rojo: 0,
        blanco: 0,
    }

    for (let i = 0; i < focos.length; i++) {
        if (focos[i] == 'verde') {
            totalDeFocos.verde = totalDeFocos.verde + 1;
        } else if (focos[i] == 'rojo') {
            totalDeFocos.rojo = totalDeFocos.rojo + 1;
        } else {
            totalDeFocos.blanco = totalDeFocos.blanco + 1;
        }
    }
    console.log(totalDeFocos)
}

// ejercicioCatorce()

/* 
EJERCICIO QUINCE
*/
function ejercicioQuince() {
    let edad = Number(prompt('Ingresa tu edad'));
    const siguientesElecciones = 2025;
    let anioActual = new Date().getFullYear();

    let edadResultante = 0;

    if (edad < 18) {
        edadResultante = (edad + (siguientesElecciones - anioActual));
    } else {
        console.log('Podras votar en las siguientes elecciones')
    }

    if (edadResultante < 18) {
        console.log('aun no puedes votar en la siguiente elección')
    } else {
        console.log('Podras votar en las siguientes elecciones')
    }
}

// ejercicioQuince()

function downWhile() {
    let n = 0;

    do {
        console.log('una vez!!!', n);
        n++;
    }
    while(n < 20)
}
downWhile();