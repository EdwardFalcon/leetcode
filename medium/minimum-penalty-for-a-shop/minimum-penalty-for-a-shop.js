/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  const dp = Array(customers.length + 1).fill(0);
  for (c of customers) {
    if (c === 'Y') {
      dp[0]++;
    }
  }
  let penalty = dp[0];
  let hour = 0;
  for (let i = 1; i < dp.length; i++) {
    dp[i] = dp[i - 1];
    if (dp[i] > 0) {
      dp[i] += customers[i - 1] === 'Y' ? -1 : 1;
    }
    if (dp[i] < penalty) {
      penalty = dp[i];
      hour = i;
    }
  }
  return hour;
};
