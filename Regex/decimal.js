const texto = "El precio es $12.50";
const regex = /\d+\.\d+/;
console.log(regex.test(texto)); // Devuelve true si encuentra un número decimal en el texto
