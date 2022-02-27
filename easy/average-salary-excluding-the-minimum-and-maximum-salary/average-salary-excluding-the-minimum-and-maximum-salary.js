/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.splice(0, 1);
  salary.splice(-1, 1);
  const sum = salary.reduce((p, c) => p + c);
  return sum / salary.length;
};
