/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const count = Array(500).fill(0);
  nums.forEach((num) => count[num - 1]++);
  for (num of count) {
    if (num > 0 && num % 2 !== 0) {
      return false;
    }
  }
  return true;
};
