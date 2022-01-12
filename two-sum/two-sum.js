/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  let result;
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash[diff] !== undefined) {
      result = [i, hash[diff]];
      break;
    }
    hash[nums[i]] = i;
  }
  return result;
};
