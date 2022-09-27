/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let jump = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= jump) {
      jump = i;
    }
  }
  return jump === 0;
};
