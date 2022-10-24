/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increased;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (increased === undefined) {
      increased = nums[i] > nums[i - 1];
      continue;
    }
    if (nums[i] > nums[i - 1] !== increased) {
      return false;
    }
  }
  return true;
};
