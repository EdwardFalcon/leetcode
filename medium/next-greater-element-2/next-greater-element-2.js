/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    stack.push(i);
  }
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = -1;
    while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = nums[stack[stack.length - 1]];
    }
    stack.push(i);
  }
  return result;
};
