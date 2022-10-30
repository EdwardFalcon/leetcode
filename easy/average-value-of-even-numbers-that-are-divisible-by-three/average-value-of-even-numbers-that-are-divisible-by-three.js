/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  const arr = nums.filter((num) => num % 6 === 0);
  const amount = arr.length;
  const sum = arr.reduce((p, c) => p + c, 0);
  return amount > 0 ? Math.floor(sum / amount) : 0;
};
