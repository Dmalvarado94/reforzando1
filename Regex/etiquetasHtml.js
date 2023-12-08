const textoHTML = "<p>Esto es un <strong>ejemplo</strong> de HTML</p>";
const regex = /<[^>]*>/g;
const etiquetas = textoHTML.match(regex);
console.log(etiquetas); // Devuelve un array con las etiquetas HTML encontradas en el texto
