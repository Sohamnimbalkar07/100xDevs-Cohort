function operation(a, fn){
    var a = fn(a);
    return a;
}

function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}
console.log("before");
const square1 = operation(5, square);
const cube1 = operation(5, cube);
console.log("after");

console.log("square of 5 is", square1, "and cube is", cube1);