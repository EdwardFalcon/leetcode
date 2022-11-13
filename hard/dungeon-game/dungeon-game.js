/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const n = dungeon.length;
  const m = dungeon[0].length;
  const dp = Array(n + 1).fill(Infinity);
  dp[n - 1] = 1;
  for (let j = m - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
      dp[i] = Math.min(dp[i], dp[i + 1]) - dungeon[i][j];
      dp[i] = Math.max(1, dp[i]);
    }
  }
  return dp[0];
};
