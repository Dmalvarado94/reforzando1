// Filter sirve para encontrar los elementos que tu condiciones, en este caso, de un Array.

let arr = [20, 30, 40, 50, 100];

let newArr = arr.filter((element) => {
    console.log(element);  // 20, 30, 40, 50, 100
    if (element < 50) {
        return true;
    }
});

console.log("newArr es :", newArr);
