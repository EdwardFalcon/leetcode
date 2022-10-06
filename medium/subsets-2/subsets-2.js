/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const set = new Set();
  const result = [[]];
  for (let num of nums) {
    const subset = [];
    for (let curr of result) {
      const s = [num, ...curr].sort((a, b) => a - b);
      const sStr = s.join('');
      if (!set.has(sStr)) {
        subset.push(s);
        set.add(sStr);
      }
    }
    result.push(...subset);
  }
  return result;
};
