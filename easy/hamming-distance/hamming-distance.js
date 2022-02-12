/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = 0;
  let diff = x ^ y;
  while (diff > 0) {
    result += diff & 1;
    diff >>= 1;
  }
  return result;
};
