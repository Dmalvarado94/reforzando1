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

// Ordenar con SORT. En este caso estamos ordenando por precio. (Solo funciona con numeros)
juegos.sort((a, b) => a.precio - b.precio);
console.log(juegos)
// Ordenando Sort en caso de Strings o letras.
juegos.sort((a, b)=> {
    if(a.nombre > b.nombre) {
    return 1;
    }
    if(a.nombre < b.nombre) {
    return -1;
    }   
    return 0;
});

// Ocupar Find para encontrar (Como si fuera SQL)

const juegoFind = juegos.find(element => element.nombre === "Banjo Kazooie");
console.log(juegoFind);

const juegoFind2 = juegos.find(element => element.precio > 35.000);
console.log(juegoFind2);


// Every = Verificar si todos los elementos cumplen 
// Todos los precios son mayores a 10.000?
let fn = (e) => e.precio > 10.000; 
console.log(juegos.every(fn))  // true
// Some = porlomenos 1 cumple 
let fn2 = (e) => e.precio > 75.000; 
console.log(juegos.some(fn2))
// Some de nuevo con nombre.
let fn3 = (e) => e.nombre = "Banjo Kazooie"; 
console.log(juegos.some(fn3))


// Uso de MAP - personaliza tu array en uno nuevo.

const juegosMap = juegos.map(element=>{
    return {
        nombre: element.nombre,
        precio: element.precio * 2,
        moneda: element.moneda
        }
    })
    console.log(juegosMap);


// Uso de Reduce - simplifica el array en un elemento. 
// Reduce Ej): la sumatoria de los precios.
// acc = acumulador, curr = elemento del array  (Ambas var declaradas x nosotros)
// el 0 le dices que acc parta de un valor numerico 0, para que al final concatene lo que solicitamos.
const sumPrecios = juegos.reduce((acc, curr) => acc + curr.precio, 0);
console.log(sumPrecios);  // R: 145

// Un array con funciones adentro

const fns = [
    ()=>console.log("soy el primero"),
    ()=>console.log("soy el segundo"),
    ()=>console.log("soy el tercero")
];
fns.forEach(element => element());  //R: soy el primero, soy el segundo, soy el tercero.