/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let pos = 1;
  let neg = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      pos = neg + 1;
    } else if (nums[i] - nums[i - 1] < 0) {
      neg = pos + 1;
    }
  }
  return Math.max(pos, neg);
};
