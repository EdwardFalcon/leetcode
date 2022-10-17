/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const coeff = Math.floor(((i + 1) * (arr.length - i) + 1) / 2);
    sum += arr[i] * coeff;
  }
  return sum;
};
