let input;
let total = 0;

do {
  input = +prompt("Прибавить число :");
  total += input;
} while (input);

alert(`Общая сумма чисел равна ${total}`);
