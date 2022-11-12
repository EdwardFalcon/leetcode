/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const set = new Set();
  nums.sort((a, b) => a - b);
  while (nums.length) {
    const min = nums.shift();
    const max = nums.pop();
    set.add((min + max) / 2);
  }
  return set.size;
};
