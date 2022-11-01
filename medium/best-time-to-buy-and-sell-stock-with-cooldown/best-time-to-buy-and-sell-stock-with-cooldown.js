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
    for (let j = i + 1; j < prices.length; j++) {
      buyPrice = Math.min(buyPrice, prices[j]);
      sellPrice = prices[j] - buyPrice;
      if (sellPrice > 0) {
        sellPrice += dp[j + 1] !== undefined ? dp[j + 1] : search(j + 1);
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
  return search(-1);
};
