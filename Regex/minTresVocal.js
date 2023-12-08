const texto = "El murciélago vuela alto en la noche";
const regex = /\b(?=(\w*[aeiou]){3,})\w+\b/gi;
const palabrasConVocales = texto.match(regex);
console.log(palabrasConVocales); // Devuelve un array con palabras que contienen al menos tres vocales
