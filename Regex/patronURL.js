const url = "https://www.ejemplo.com/pagina";
const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?([\/?].*)?$/i;
console.log(regex.test(url)); // Devuelve true si la URL tiene un formato válido
