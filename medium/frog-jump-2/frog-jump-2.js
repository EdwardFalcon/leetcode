/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
  let max = stones[1];
  for (let i = 2; i < stones.length; i++) {
    max = Math.max(max, stones[i] - stones[i - 2]);
  }
  return max;
};
