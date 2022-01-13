/* 
EJEMPLO UNO
*/
function ejemploUno() {
    let nombre = 'Joshua';
    let nombres = ['Juan', 'Jorge', 'Omaira', 'Joshua'];
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let anidados = ['Edificio uno', ['departamento 1', 'departamento 2']];
    let mezclados = [1, 'Joshua', true];

    //ACCESOS A INDICES DE ARRAYS
    console.log('numeros', typeof numeros);
    console.log('nombres', nombres);
    console.log('numeros', numeros);
    console.log('anidados', anidados);
    console.log('mezclados', mezclados);
    console.log('mezclados', typeof mezclados[1]);

    console.log('nombres[0]', nombres[0]);
    console.log('nombres[1]', nombres[1]);
    console.log('nombres[1]', nombres[2]);
    console.log('nombres[1]', nombres[3]);
    console.log('nombres[1 y 2]', nombres[1], nombres[2])

    //MODIFICACION DE ARRAYS
    nombres[0] = 'Juan Modificado';
    console.log('nombres[0]');

    anidados[1][0] = 'departamento modificado';
    console.log(anidados[1][0]);
}

/* ejemploUno() */

/* 
EJEMPLO DOS - OBJETOS (MODELAR INFORMACION)
*/
function ejemploDos() {
    let alumno = {
        grado: 5,
        edad: 20,
        sexo: 'femenino',
        nombre: 'Omaira',
        apellido: 'Palacios',
        nacionalidad: 'Peruana',
        nombreHermanos: ['Jose', 'Melissa', 'Hector'],
    };

    let computadora = {
        marca: 'acer',
        anio: '2020',
        etiqueta: 'f0f0f0f',
        procesador: 'pentium'
    };

    let celular = {
        marca: 'iphone',
        modelos: 'XR',
        pulgadas: '7',
        nuevo: false,
    };

    /* ACCEDER A VALORES DE OBJETOS */
    console.log(alumno);
    console.log(alumno.grado);
    console.log(alumno.edad);
    console.log(alumno.nombreHermanos[0]);
    console.log(alumno.nombreHermanos[1]);

    console.log(computadora.marca);
    console.log(celular.marca);

    const celulares = [
        {
            marca: 'iphone',
            modelos: 'XR',
            pulgadas: '7',
            nuevo: false,
        },
        {
            marca: 'android',
            tamanio: 'xl',
            pulgadas: 20,
            nuevo: false,
        },
        {
            marca: 'huawei',
            tamanio: 'xl',
            pulgadas: 20,
            nuevo: false,
        }
    ]

    console.log(celulares[0]);
    console.log(celulares[1]);
    console.log(celulares[2]);

    /* MODIFICACION DE UN OBJETO */
    alumno.grado = '5 modificado';
    console.log('alumno.grado', alumno.grado);

    celulares[0].marca = 'iphone modificado';
    console.log('celulares[0].marca', celulares[0].marca);
}

ejemploDos()
