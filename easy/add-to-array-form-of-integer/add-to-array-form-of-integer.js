/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const result = [];
  let sum = k;
  while (sum > 0 || num.length) {
    if (num.length) {
      sum += num.pop();
    }
    result.push(sum % 10);
    sum = Math.floor(sum / 10);
  }
  result.reverse();
  return result;
};
