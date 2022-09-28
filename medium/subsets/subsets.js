/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];
  for (let num of nums) {
    const subset = [];
    for (let curr of result) {
      subset.push([num, ...curr]);
    }
    result.push(...subset);
  }
  return result;
};
