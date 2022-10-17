/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqs = {};
  nums.forEach((num) => {
    if (freqs[num] === undefined) {
      freqs[num] = 0;
    }
    freqs[num]++;
  });
  const backets = [];
  for (num in freqs) {
    const freq = freqs[num];
    if (backets[freq - 1] === undefined) {
      backets[freq - 1] = [];
    }
    backets[freq - 1].push(num);
  }
  const result = [];
  for (let i = backets.length - 1; i >= 0 && result.length < k; i--) {
    if (backets[i]) {
      result.push(...backets[i]);
    }
  }
  return result;
};
