/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let answer = 0;
  const stack = [[0, 0]];
  while (stack.length) {
    const [pos, sum] = stack.pop();
    if (pos !== nums.length) {
      stack.push([pos + 1, sum + nums[pos]]);
      stack.push([pos + 1, sum - nums[pos]]);
      continue;
    } else if (sum === target) {
      answer++;
    }
  }
  return answer;
};
