/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) === mask) {
      count++;
    }
    mask = mask << 1;
  }
  return count;
};
