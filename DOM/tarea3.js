// Crea una lista desordenada con Javascript (<ul>) 
// Una ul va dentro de un li, EJ: 
                    /* <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul> */

const comida = ["Huevo", "Pollo", "Queso", "Jamón de Pavo", "Leche"];

function crearLista(){
let contenedor = document.getElementById('PracticaDom');
let ul = document.createElement("ul");

    for (i = 0; i < comida.length; i++){
        let li = document.createElement("li");
        let textoLi = document.createTextNode(comida[i]);
        li.appendChild(textoLi);  // Añade cada comida a la lista li, eso generaria varias <li><li><li><li>...
        ul.appendChild(li); // Añade el elemento <li> a la lista <ul>
    }
contenedor.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", crearLista);