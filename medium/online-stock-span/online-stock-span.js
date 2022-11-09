var StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = this.prices.length - 1;
  while (span >= 0 && this.prices[span] <= price) {
    span--;
  }
  this.prices.push(price);
  return this.prices.length - span - 1;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
