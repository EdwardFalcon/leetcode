const dp = [];
var uniquePaths = (m, n) =>
  m === 1 || n === 1
    ? 1
    : (dp[`${m}.${n}`] =
        dp[`${n}.${m}`] ||
        dp[`${m}.${n}`] ||
        uniquePaths(m - 1, n) + uniquePaths(m, n - 1));
