const fecha = "31/12/2023";
const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log(regex.test(fecha)); // Devuelve true si la fecha tiene el formato correcto
