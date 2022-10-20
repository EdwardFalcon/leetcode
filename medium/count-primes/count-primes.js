/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const nums = Array(n).fill(true);
  nums[0] = false;
  nums[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (nums[i]) {
      for (let j = i ** 2; j < n; j += i) {
        nums[j] = false;
      }
    }
  }
  return nums.filter(Boolean).length;
};
