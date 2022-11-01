/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  let factor2 = 2;
  let factor3 = 3;
  let factor5 = 5;
  for (let i = 1; i < n; i++) {
    const min = Math.min(factor2, factor3, factor5);
    dp[i] = min;
    if (min === factor2) {
      factor2 = dp[++p2] * 2;
    }
    if (min === factor3) {
      factor3 = dp[++p3] * 3;
    }
    if (min === factor5) {
      factor5 = dp[++p5] * 5;
    }
  }
  return dp[n - 1];
};
