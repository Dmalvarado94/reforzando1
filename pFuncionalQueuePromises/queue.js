// Promesa es asincronía --> Algo que se ejecutará en un tiempo determinado.
// Estructura de datos -->  Organización de información
// Programación Funcional --> Las funciones se pueden guardar en variables
// Queue ---> Dato que indica el primero que entra es el primero en salir.
// Descomenta con Ctrl + } 


class Queue {

    #items = [];

    // Encolar-> Agregaremos items mediante el método push
    enqueue(item){
        this.#items.push(item);
    }
    // Desencolar-> Quitaremos el último items mediante el metodo shift
    dequeue(){
        return this.#items.shift()
    }
    // Incorporamos un método boolean que indique que si está vacio el array arroje 'True'
    isEmpty(){
        return this.#items.length === 0;
    }
}

// Creamos una tarea Asíncrona -> objeto de tipo Promise -> esta recibe una función y tiene 2 parámetros
// Tenemos 2 funciones res = obtendremos un resultado positivo | rej = Indica que tuvimos un error
// const promise = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res('promesa 1')
//     }, 4000);   // 4000 = 4 segundos
// });
// Forma 1 de ejecutar
//promise.then(res => console.log(res));

// Forma 2 de ejecutar: (IFE -> Funcion que se ejecuta al momento de ser creada)
// (async () =>{
//     const data = await promise;
//     console.log(data);
// })();

//Function asincronica que modifica el html
function fetchWaiting(url){
    return async ()=>{
        await new Promise(r => setTimeout(r, 3000));
        return fetch(url).then(res => res.json());
    }
}

const queue = new Queue();

queue.enqueue(fetchWaiting('https://jsonplaceholder.typicode.com/todos/1'));
queue.enqueue((data) => document.getElementById('content').innerHTML += `<p>${data.title}</p>`);

run();

queue.enqueue(new Promise((res, rej) => {
    setTimeout(() => {
        res("Promesa 1")
    }, 1000);
}));

queue.enqueue(new Promise((res, rej) => {
    setTimeout(() => {
        res("Promesa 2")
    }, 2000);
}));

run();

async function run(){

    // Mientras queue sea distinto a isEmpty-> fn obtiene el desencolar, data obtiene el fn y se regresa la data.
    while(!queue.isEmpty()){
        const fn = queue.dequeue();
        const data = await fn;
        console.log(data);
    }
    
}