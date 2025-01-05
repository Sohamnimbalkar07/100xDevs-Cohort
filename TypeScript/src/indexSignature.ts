const test = "testing";

let variable = typeof test;

console.log(variable);
console.log(typeof variable);

interface UserBalance {
  [key: string]: {
    available: number;
    locked: number;
  };
}

const userBalance: UserBalance = {
  BTC: { available: 0.5, locked: 0.1 },
  ETH: { available: 2.0, locked: 0.0 },
  USD: { available: 1000, locked: 200 },
};

console.log(typeof userBalance);

interface IArrayOfStrings {
  [index: number]: string;
}

let words: IArrayOfStrings = {
  0: "test",
  1: "test2",
};

let word: string = words[0];

type BadProduct = {
  name: string;
  price: number;
  stock: {
    [size: string]: number;
  };
};
