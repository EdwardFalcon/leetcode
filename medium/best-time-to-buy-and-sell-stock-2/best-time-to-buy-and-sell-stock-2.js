/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  const dp = [];
  var search = function (i) {
    let sellPrice = 0;
    let buyPrice = Infinity;
    let maxProfit = 0;
    for (let j = i; j < prices.length; j++) {
      buyPrice = Math.min(buyPrice, prices[j]);
      sellPrice = prices[j] - buyPrice;
      if (sellPrice > 0) {
        sellPrice += dp[j] !== undefined ? dp[j] : search(j);
      }
      if (sellPrice > maxProfit) {
        maxProfit = sellPrice;
      }
    }
    if (dp[i] === undefined) {
      dp[i] = maxProfit;
    }
    return maxProfit;
  };
  return search(0);
};
