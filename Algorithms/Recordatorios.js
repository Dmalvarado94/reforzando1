// FOR //

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}


// IF-ELSE //

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ){
    console.log('Martes');
} else if ( dia === 3 ){
    console.log('Miercoles');
} else {
    console.log('No es lunes, martes, miercoles o domingo...');
}

// FLECHAS y FUNCTIONTS
// function sumar (a, b) {
//     return a + b;
// }

const sumar = (a, b) =>  a + b;
console.log (sumar (5, 10) );


function saludar () {
    return 'Hola mundo ¿Les gustó esta función?';
}
console.log(saludar());


const saludar2 = () => 'Hola Mundo Modo Flecha';
console.log( saludar2() ); 