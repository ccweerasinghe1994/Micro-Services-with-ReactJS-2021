let apples: number = 5;

let speed: string = "sdfsdfsf";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built-in objects

let now: Date = new Date();

// array

let colors: string[] = ["red", "blue", "green"];

let numbers: number[] = [1, 34, 2, 56];

let trooths: boolean[] = [true, true, false];

// classes

class Car {}

let car: Car = new Car();

// object literlal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions

const lognumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use type annotations

// 1) functions that returns any type
const json = '{"x":10,"y":20}';

const coordinants: { x: number; y: number } = JSON.parse(json);

// 2) when we create a variable in
// one line and initialise it on onther

let words = ["red", "green", "blue"];
let foundword: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundword = true;
  }
}

// 3) vaiable whose type cannot be infered correctly

let numbers_new = [-1, -3, -4];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers_new.length; i++) {
  if (numbers_new[i] > 0) {
    numberAboveZero = numbers_new[i];
  }
}
