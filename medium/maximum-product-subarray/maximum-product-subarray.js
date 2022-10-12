/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let num = nums[0];
  let result = num;
  let dpMax = [num];
  let dpMin = [num];

  for (let i = 1; i < nums.length; i++) {
    num = nums[i];
    dpMax[i] = Math.max(num, dpMax[i - 1] * num, dpMin[i - 1] * num);
    dpMin[i] = Math.min(num, dpMin[i - 1] * num, dpMax[i - 1] * num);
    result = Math.max(dpMax[i], result);
  }

  return result;
};
