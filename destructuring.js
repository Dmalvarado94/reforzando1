// Ejemplo 1 Destructuración. fijate en la linea 5 o segunda variable. 

const listaNumeros = [2,4,6];
let [pos1,pos2,pos3] = listaNumeros;
console.log(pos1,pos2,pos3);

// Similar sería  
let [,,coma3] = listaNumeros;
console.log(coma3);

// El buen spread. (Sirve también para traer el resto de números, ej 2,4,...spread te trae el 6 y posteriores.)
let [...spread] = listaNumeros;
console.log(spread);

// Destructuración de objetos
let persona = {
    nombre : "Daniel", 
    edad :  29,
    hobbie : "Programación",
    direccion: {
        calle: "Calle falsa",
        postal: 123
    },
};

let {nombre: nombreDest, edad: edadDest, hobbie: hobbieDest, direccion:{calle: calleDest, postal} } = persona;
console.log(nombreDest, edadDest, hobbieDest, calleDest, postal);


// Para el caso del objeto que está dentro simplemente escribe el elemento seguido de :, direccion:{calle,postal} recuerda que el : despues de cada elemento está "mapeando".
// Introduciendo valor a nuevo array
let newArr = [nombreDest, edadDest, hobbieDest, "direccion :",{calleDest, postal}];
console.log(newArr)

// Resolviendo como función

function getFullName({nombre, edad, direccion}){
    return `${nombre} ${edad} ${direccion.calle}`
}
console.log(getFullName(persona));