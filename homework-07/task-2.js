const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientList = document.querySelector("ingredients");
ingredients.forEach(ingredient =>{
  const item = document.createElement('li');
  item.textContent = ingredient;
  // ????