/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .map((v, i) => (v === target ? i : -1))
    .filter((i) => i !== -1);
};
