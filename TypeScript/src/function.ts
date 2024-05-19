function greet(firstName: string) {
  console.log("hello", firstName);
}

greet("soham");

function sum(): number {
  return 10;
}

function runAfter1s(fn: () => number){
    const sum = fn();
    console.log(sum);
}

runAfter1s(sum);

const a = (a:number, b:number) : number =>  {
     return a+b;
}

const add = a(10,20);

console.log(add);

function fn1 (cb:(a: Number, b: Number) => Number) : Number   {
  return 1;
}

const fn2 = (cb: (a: Number, b: Number) => number): Number => {
  return 1;
};

