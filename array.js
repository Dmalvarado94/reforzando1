// Declaramos una variable
let numbers = [2,4,6,3,5];

//Accediendo al primer valor, o la posición 0
console.log(numbers[0])

// Accediento al último valor
console.log(numbers[numbers.length-1]);

// Otra alternativa para acceder a una posición || Si ingresas -1 muestra el último, el -2 el penultimo y así..
console.log(numbers.at(2));
console.log(numbers.at(-1));

//Recorriendo el array normal
for (let i =0; i<numbers.length; i++){
    console.log(numbers[i]);
}
//Recorriendo el array al revés.
for (let b=numbers.length -1; b >= 0; b--){
    console.log(numbers[b]);
}

// Función para tomar un div del html, dejarlo vacío y reemplazarlo por un array de nuestro código. element = array1 proviene del HTML, arr = dom del array
let dom = ["Prueba", "Dom", "en JS"];

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";

    for (let d=0 ; d<arr.length; d++){
        document.getElementById(element).innerHTML +=
            `<div>${arr[d]}<div>`;
    }
}
showDom ("array1", dom);

// Mutabilidad en los arrays  - Estos se declaran abajo del array. si quieres ver sus cambios muevelos. por temas de orden los dejo aquí
dom.push("Push de Bootcamp");   // Push al ultimo lugar
dom.unshift("Unshift Primero");  // Push al primer lugar o 0.
dom.splice(2,0,"2do Spliceado");    // Reemplaza una posición cualquier por el texto que tu quieras, incluso vacío ""
                                    // Ahi dijiste: Empieza en la pos 2, termina al tiro 0 y reemplaza por "2do Spliceado"

//Eliminando una posición (Además con este console log te muestra cual fue eliminado)
let p = dom.pop();
console.log(p);


// Inmutabilidad y concatenación // recuerda que dom es la variable que declaré arriba. 
let lenguajes = ["C++", "Apigee", "EM"];

const concatenar = dom.concat(lenguajes);
showDom("array2", concatenar);

// indexOf --> te indica la posición de algun valor del array  // Si no la encuentra arroja -1
const daws = ["FL", "Live", "Pr"];
console.log(daws.indexOf("FL"));    // 0 
console.log(daws.indexOf("Itunes"));  // -1

const daws2 = daws.slice(0,2);  // Seguimos practicando el slice.  (Parte de POS 0, para en la 2. Elimina la POS 2 "Pr")
showDom("array2", daws2);

// fill --> fill transforma todos los elementos del array en lo que tu indiques.
daws2.fill("DAWS con FILL",0,2);   // puedes usar daws2.length
//showDom("array2", daws2);


