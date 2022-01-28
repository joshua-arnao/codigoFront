function makeFullName(firstName, lastName) {
  let ArgOneString = firstName.toString();
  let ArgTwoString = lastName.toString();

  const ArgOneEnd =
    ArgOneString.charAt(0).toUpperCase() + ArgOneString.slice(1).toLowerCase();
  const ArgTwoEnd =
    ArgTwoString.charAt(0).toUpperCase() + ArgTwoString.slice(1).toLowerCase();
  let fullname = `${ArgOneEnd} ${ArgTwoEnd}`;

  return fullname;
}

// console.log(makeFullName(prompt("Ingresa tu nombre"), prompt("Ingresa tu Apellido")));

/* function makeFullName(ArgOne, ArgTwo) {
    let ArgOneString = ArgOne.toString();
    let ArgTwoString = ArgTwo.toString();
    const ArgOneEnd =
      ArgOneString.charAt(0).toUpperCase() + ArgOneString.slice(1).toLowerCase();
    const ArgTwoEnd =
      ArgTwoString.charAt(0).toUpperCase() + ArgTwoString.slice(1).toLowerCase();
    let fullname = `${ArgOneEnd} ${ArgTwoEnd}`;
  
    return fullname;
  }
  
  console.log(makeFullName("SEBASTIAN", "YABIKU"));
  console.log(makeFullName("jose", "yabiku"));
  console.log(makeFullName("MARIA", "yabiku"));
  console.log(makeFullName("maria", "albina")); */

function makeFullName1(firstname, lastname) {
  return `${firstname.charAt(0).toUpperCase()}${firstname
    .substring(1)
    .toLowerCase()} ${lastname.charAt(0).toUpperCase()}${lastname
    .substring(1)
    .toLowerCase()}`;
}

console.log("Nombre Completo:", makeFullName1("pedro", "espinoza"));

/*
 Determinar cuantas veces se repite un caracter en un string
 function countRepeatLetter(argOne, argTwo) 
 countRepeatLetter("sebastian", "a")  // 2
 countRepeatLetter("jose", "e")  // 1
*/
function countRepeatLetter(stringCharacter, letterFind) {
  let totalLetra = 0;

  for (let index = 0; index < stringCharacter.length; index++) {
    if (stringCharacter[index] === letterFind) {
      totalLetra++;
    }
  }

  return totalLetra;
}

console.log(countRepeatLetter("anastacia", "a"));
console.log(countRepeatLetter("juansaul", "s"));

///////////Map itera numero por numero
/////////E1 es la referencia de la iteracion
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function multiploN(col, num) {
  return col.map((numE1) => {
    return numE1 * num;
  });
}

console.log("multiplon:", multiploN(numeros, 3));
console.log("multiplon:", multiploN([10, 20, 30, 40], 4));

let mascotas = [
  {
    name: "aronis",
    edad: 12,
    sexo: "m",
  },
  {
    name: "terry",
    edad: 4,
    sexo: "m",
  },
  {
    name: "juda",
    edad: 3,
    sexo: "h",
  },
  {
    name: "firulais",
    edad: 8,
    sexo: "h",
  },
];

const mayor4anios = mascotas.filter((mascota) => {
  return mascota.edad > 4;
});

const menor4anios = mascotas.filter((mascota) => {
  return mascota.edad < 4;
});

const machos = mascotas.filter((mascota) => {
    return mascota.sexo == "m";
})

const hembras = mascotas.filter((mascota) =>{
    return mascota.sexo == "h";
})

console.log("mayor4anios", mayor4anios);
console.log("menor4anios", menor4anios);
console.log("hembras", hembras);
console.log('machos', machos);
