let input;
const numbers = [];
let total = 0;

if (input !== 0) {
  input = Number(prompt("Ввести число"));
  input.push(numbers);
}

for (let number of numbers) {
  total += number;
}

if (numbers.length >= 1) {
  alert(`Общая сумма чисел равна ${total}`);
} else {
  input;
}
