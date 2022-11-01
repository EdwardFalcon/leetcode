/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let max = 0;
  let curr = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, curr + prices[i] - fee);
    curr = Math.max(curr, max - prices[i]);
  }
  return max;
};
