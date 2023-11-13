// Operador ...Spread  -> Toma todos los elementos de un array resumidamente para una función, sirve para no escribir ej daw[0],daw[1],daw[2],
const numb = [1,2,3,4];

function sum(a,b,c,d){
    return a+b+c+d;
}
console.log(sum(...numb));    // R: 10

// ...Spread también nos sirve para concatenar.
let conc = [5,6,7,8];
const arr = [...numb,...conc, 9, 10];
console.log(arr)  // R: [1,2,3,4,5,6,7,8,9,10]


// Array con objectos, aquí agregamos a nuestra función un .nombre en "arr[i].nombre" = Esto traerá los nombres de nuestros objetos.

const juegos = [{
    nombre: "Banjo Kazooie",
    precio: 30.000,
    moneda: "CLP"
},
{
    nombre: "Zelda Majora's",
    precio: 35.000,
    moneda: "CLP"
},
{
    nombre: "Bad Fur Day",
    precio: 80.000,
    moneda: "CLP"
},
]

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";

    for (let i=0 ; i<arr.length; i++){
        document.getElementById(element).innerHTML +=
            `<div>${arr[i].nombre} $ ${arr[i].precio}  ${arr[i].moneda}<div>`;
    }
}
showDom ("array2", juegos);


// Recorrer objeto con For Each
function print(item){
    console.log(item)
}
juegos.forEach(print)

//Similar
// juegos.forEach((item)=>console.log(item));
