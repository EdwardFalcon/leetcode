/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const freq = nums.reduce((p, c) => {
      p[c] = p[c] ? p[c] + 1 : 1;
      return p;
  }, {})
  return Object.entries(freq)
      .map(e => e[1] * (e[1] - 1) / 2)
      .reduce((p, c) => p + c, 0);        
};