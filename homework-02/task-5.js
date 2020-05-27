const checkForSpam = function (message) {
  const checkSpam = "spam";
  const checkSale = "sale";
  return message.includes(checkSale) || message.includes(checkSpam);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
