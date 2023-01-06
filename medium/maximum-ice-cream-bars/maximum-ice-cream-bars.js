/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  return costs
    .sort((a, b) => a - b)
    .reduce((p, c) => {
      if (c <= coins) {
        coins -= c;
        return p + 1;
      }
      return p;
    }, 0);
};
