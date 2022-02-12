/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  nums.forEach((num, index) => (sum += index + 1 - num));
  return sum;
};
