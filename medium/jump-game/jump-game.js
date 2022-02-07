/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let jump = nums.length - 1;
  let steps = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= jump) {
      jump = i;
      steps++;
    }
  }
  console.log(steps);
  return jump === 0;
};
