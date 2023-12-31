// Esta es la explicación más lógica que he encontrado de una function

// Quiero un programa que calcule el perimetro de un circulo  Pcir = PI * d

const PI = 3.14159265359;

function perimetroCirculo(P,d){
    return P * d;
}
console.log(perimetroCirculo(PI,20));   // R: 62.83185


// La idea del function es reutilizar tu código para que sea más legible.
// Entonces ahora habrá un segundo circulo con otro diámetro, pero podemos reutilizar el PI.
let d2 = 30;
console.log(perimetroCirculo(PI,d2));   //R: 94.2477796077



///// Funciones de primer orden y orden superior combinadas. 
let fn = function() {
    console.log("Hello");
}
function some(f){
    console.log("Antes");
    f();
    console.log("Después");
}
some(fn);     // R: Algo antes, hello, algo después.. (Alteraste el orden de impreción.)


// Función de flecha. Funciona y es eficaz siempre y cuando la sgte. instrucción sea sola 1 línea
let name = (nombre, apellido) => console.log("Hola" + nombre + " " + apellido);

function impNom(nom){
    console.log("Tiene que ir algo entre medio");
    nom("Daniel", "Moya");
}
impNom(name);
