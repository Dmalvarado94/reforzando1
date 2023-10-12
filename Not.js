// Usos del NOT (!) en Javascript 

// Nivel 1
let estaSoleado = true;
if (!estaSoleado) {
  console.log("Hace mal tiempo.");
} else {
  console.log("Hace buen tiempo.");
}

// Nivel 2
let usuarioAutenticado = true;
let esAdmin = true;

if (usuarioAutenticado && !esAdmin) {
  console.log("Bienvenido al sistema. Puede acceder a las funciones normales.");
} else if (usuarioAutenticado && esAdmin) {
  console.log("Bienvenido, administrador. Tiene acceso a funciones de administración.");
} else {
  console.log("Por favor, inicie sesión para acceder.");
}

// Nivel 3: Excluir un valor.
function imprimirNumerosParesExcluyendoSeis() {
    for (let i = 2; i <= 10; i++) {
      if (i !== 6 && i % 2 === 0) {
        console.log(i);
      }
    }
  }
  imprimirNumerosParesExcluyendoSeis();