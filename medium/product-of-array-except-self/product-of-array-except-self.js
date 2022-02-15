/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    answer[i] = product;
  }
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    answer[i] = answer[i - 1] * product;
    product *= nums[i];
  }
  answer[0] = product;
  return answer;
};
