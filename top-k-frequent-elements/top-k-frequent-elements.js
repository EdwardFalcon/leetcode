/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {  
  return Object.entries(nums.reduce((p, c) => {
    p[c] = p[c] + 1 || 1;
    return p;
  }, {})).sort((a, b) => b[1] - a[1]).splice(0, k).map(n => n[0]);
};