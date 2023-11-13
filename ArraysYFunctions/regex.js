// crear array de elementos separados por espacio REGEX
const words ="pato perro   aguila  oso   gato";

const array = words.replace(/\s+/g," ").split(" ");
console.log(array);



// Sin regex ni replace
let w = "";
for(const c of words){
    if(c !== " "){
      w +=c;
    }else if(w.length > 0){
    array[array.length] = w;
    w = "";
    }
}

if(w.length > 0){
    array[array.length] = w;
    }
console.log(array);