// Tarea 1: Crea 3 parrafos dentro de index.html

function crear() {

    // Paso 1) Creamos un contenedor que almacene cada elemento<> y texto "" para al final unir todo en este contenedor.
        let contenedor = document.getElementById('PracticaDom'); // Buscamos el id del html llamado PracticaDom
    
    // Paso 2) Creamos un elemento <p> que contenga un texto ""
        let p1 = document.createElement("p"); // Crea un elemento <p> dentro de let p1.
        let p1Texto = document.createTextNode("Insertando párrafo 1"); // Crea un texto "Insertando" dentro de let p1Texto
        p1.appendChild(p1Texto); // Inserta el texto p1Texto dentro del elemento p1.
    
    // Paso 3) Repetimos proceso 2 veces, para obtener las 3
        let p2 = document.createElement("p");
        let p2Texto = document.createTextNode("Insertando párrafo 2");
        p2.appendChild(p2Texto);
    
        let p3 = document.createElement("p");
        let p3Texto = document.createTextNode("Insertando párrafo 3");
        p3.appendChild(p3Texto);
    
    // Paso 4) Introdimos dentro del contenedor global cada parrafo. 
        contenedor.appendChild(p1);
        contenedor.appendChild(p2);
        contenedor.appendChild(p3);
    }
    
    //document.addEventListener("DOMContentLoaded", crear) ese encarga de registrar un evento que escucha cuándo el DOM (Document Object Model) 
    // ha sido completamente cargado y está listo para ser manipulado por JavaScript.
    document.addEventListener("DOMContentLoaded", crear);