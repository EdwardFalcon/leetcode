/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPrice = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  prices.forEach((price) => {
    minPrice = Math.min(minPrice, price);
    maxPrice = Math.max(price - minPrice, maxPrice);
  });
  return maxPrice;
};
