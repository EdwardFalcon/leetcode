/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let xor = start ^ goal;
  let diff = 0;
  while (xor) {
    if (xor & 1) {
      diff++;
    }
    xor >>= 1;
  }
  return diff;
};
