"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = Number(prompt("введите число", ""));
  numbers.push(input);
} while (input !== 0 && input !== null);

for (let number of numbers) {
  total += number;
}

if (numbers.length >= 1) {
  alert(`Общая сумма чисел равна ${total}`);
} else {
  input;
}
