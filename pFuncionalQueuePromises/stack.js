// stack = pila de sucesos, apilar
// al inspeccionar si te vas a Sources verás el call Stack indicando el orden de ejecución

function primero(valor) {
    return segundo(valor + 10)
}

function segundo(valor) {
    return tercero(valor + 10)
}

function tercero(valor) {
    return valor + 10
}
console.log(primero(10));   // R:40



    // Podemos intencionar un error con la siguiente sentencia arriba de un return
    //throw Error('explosion');

    // Otro elemento que se usa en este tipo de funciones, este indica que va pasando en el momento que lo pongas.
    // console.trace();