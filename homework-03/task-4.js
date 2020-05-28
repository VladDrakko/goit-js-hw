const countTotalSalary = function(employees) {
  let allSalaryа = 0;
  for (const key in employees) {
    total += employees[key];
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

