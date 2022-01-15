function forIterador() {
    const numeros = [10, 20, 30];
    let resultado = 0;
    for (let index = 0; index < numeros.length; index++) {
      resultado = resultado + numeros[index];
    }
  
    let total = numeros[0] + numeros[1] + numeros[2];
    console.log("total", total);
  
    console.log("resultado", resultado);
  }


function whileIterador() {
    let n = 0;
    while (n < 10){
        console.log('Hola', n);
        n++;
    }
}

function downWhile() {
    let n = 0;

    do {
        console.log('una vez!!!', n);
        n++;
    }
    while(n < 20)
}

