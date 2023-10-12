// Utilizamos el Quokka  Ctrl+Shif+P = Quokka.js Start on Current Project

// Nivel 1:

const frutas = ['Pera', 'Kiwi'];
frutas.push('Manzana')
console.log(frutas);


// Nivel 2: se puede introducir a una variable
 
const cities = ['Madrid','Valencia','Lugo'];
const total = cities.push('Bilbao');
console.log (cities);
console.log (total);

// Nivel 3:

const gatos = ['Kramer', 'Sham', 'Milenio'];
let masGatos = ['Doro', 'Kitty', 'Pifi'];

masGatos.forEach(gato => {
    gatos.push(gato)
})
console.log(gatos);

// Nivel 4:

const serie = [0,1,2,3,4,5,6,7,8,9,10];
const sumarSerie = [11,12,13,14,15,16,17,18,19,20];
const serieVac = [];

for (let i = 0; i < serie.length; i++) {
    serieVac.push(serie[i]);
  }  
for (let i = 0; i < sumarSerie.length; i++) {
    serieVac.push(sumarSerie[i]);
  }
console.log(serieVac);

