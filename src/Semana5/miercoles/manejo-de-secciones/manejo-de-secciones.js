/* 
Thow nos permite controlar secciones (al invovar throw detiene el código por un error)
*/

function ejemploUno() {
    function suma (a, b){
        if(arguments.length > 2) {
            throw console.error('No soporta la suma de mas de 2 argumentos');
        }

        return a + b;
    }

    console.log(suma(2, 3));
    console.log(suma(5, 6));
    console.log(suma(2, 3, 4, 5));
}

// ejemploUno();
// console.log('perfecto')


/* 
EJEMPLO DPS - TRY CATCH
*/
function ejemploDos() {
    let mensagge = '';
    const name = prompt('Ingresa tu nombre'); //pido el dato

    try {

        if (name.length < 6) { //Evaluo que el dato sea menor que 6
            throw 'short';
        }

        if (name.length > 10) { //Evaluo que el dato sea mayor que 10
            throw 'long';
        }

        mensagge = 'El nombre ' + name + ' es muy correcto'

        } catch (error) {
        if (error == 'short'){
            mensagge = 'El nombre ' + name + ' es muy corto';
        }

        if (error == 'long') {
            mensagge = 'El nombre ' + name + 'es muy largo';
        }
        }finally {
        console.log(mensagge);
    }
}
// ejemploDos();
