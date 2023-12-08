// Este regex solo toma texto Mayus y minus, nada de numeros ni sim /^[A-Za-z].*$/;

let sub = document.getElementsByTagName('pre')
let texto = sub[0].textContent
const lineas = texto.split('\n');

const regex = /^[A-Za-z].*$/;

const lineasConLetra = lineas.filter(linea => regex.test(linea.trim()));

let prompt = lineasConLetra.join('\n')

function copiarAlPortapapeles(texto) {
  const textarea = document.createElement('textarea');
  textarea.value = texto;

  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

copiarAlPortapapeles(prompt);