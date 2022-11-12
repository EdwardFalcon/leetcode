var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.arr.length === 0) {
    this.arr.push(num);
    return;
  }
  let start = 0;
  let end = this.arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (num > this.arr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  this.arr.splice(start, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  if (this.arr.length % 2 === 0) {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
  return this.arr[mid];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
