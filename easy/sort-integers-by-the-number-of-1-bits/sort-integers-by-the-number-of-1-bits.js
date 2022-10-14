/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const bitsA = countBits(a);
    const bitsB = countBits(b);
    return bitsA - bitsB || a - b;
  });
  return arr;
};

var countBits = function (a) {
  let count = 0;
  while (a > 0) {
    count += a % 2 ? 1 : 0;
    a = Math.floor(a / 2);
  }
  return count;
};
