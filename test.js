function greet(nom) {
    console.log("Hello " + nom);
}
greet("Jane");

function add(a, b) {
    return a + b;
}

let f = add(3, 2);
console.log(f);

let arrowGreet = (nom) => console.log("Hello " + nom);
arrowGreet("Elia");

let arrowAdd = (a, b) => a + b;
let j = arrowAdd(5, 10);
console.log(j);
