/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const result = [];
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    result[i] = nums[i];
    result[length + i] = nums[i];
  }
  return result;
};
