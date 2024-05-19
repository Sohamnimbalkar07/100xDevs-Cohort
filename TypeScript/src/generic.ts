function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<String>("Soham");
let output2 = identity<number>(10);

console.log(output1);
console.log(output2);

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el1 = getFirstElement<string>(["soham", "nimbalkar"]);
const el2 = getFirstElement<number>([10, 20]);

console.log(el1.toLowerCase());