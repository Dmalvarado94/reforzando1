// En el siguiente ejercicio controlaremos que los argumentos escritos sean números

function suma(num1, num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        throw Error("Ambos argumentos deben ser del tipo 'number'");
    }
if (!num1 || !num2){   // Esta línea indica que si uno de los dos parametros el 'Falso', pasa al segundo error
    throw Error("Ambos argumentos son obligatorios")
}
return num1 + num2;
}
console.log(suma(2,2));  //R: 4
console.log(suma(2, "3")); // Uncaught Error: Ambos argumentos deben ser del tipo 'number'
