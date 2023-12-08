// Tarea 2: Crea 1 link con javascript (transforma el id PracticaDOm por un link)

function crearEnlace() {

    // Paso 1) Creamos un contenedor que almacene cada elemento<> y su texto "" o href correspondiente para al final unir todo en este contenedor.
        let contenedor = document.getElementById('PracticaDom'); // Buscamos el id del html llamado PracticaDom
    
    // Paso 2) Creamos un elemento <link> que contenga un texto ""
        let enlace = document.createElement("a"); // Crea un elemento <p> dentro de let p1.
        enlace.href = "https://www.ejemplo.com"; 
        enlace.textContent = "Enlace a Ejemplo"; 
        contenedor.appendChild(enlace); //  Introdimos el href (link) como hijo de Enlace, en pantalla dirá  "Enlace a Ejemplo"; 
        
    }
    // window.onload hace que cuando toda la página y sus recursos se hayan cargado por completo, se llamará a la función crearEnlace().
    window.onload = crearEnlace;
    



//  Forma con setAttrbute, cambiariamos el paso 2 (C)
    // let enlace = document.createElement("a"); 
    // enlace.setAttribute("href", "https://www.ejemplo.com"); 
    // enlace.textContent = "Enlace a Ejemplo";
    // contenedor.appendChild(enlace);