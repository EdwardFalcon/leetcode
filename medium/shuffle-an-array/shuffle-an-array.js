/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.length = nums.length;
  this.arr = nums;
  this.shuffleStack = [];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  if (!this.shuffleStack.length) {
    return this.arr;
  }
  for (let i = this.length - 1; i >= 0; i--) {
    const pos = this.shuffleStack.pop();
    [this.arr[pos], this.arr[i]] = [this.arr[i], this.arr[pos]];
  }
  return this.arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  this.reset();
  for (let i = 0; i < this.length; i++) {
    const pos = Math.floor(Math.random() * this.length);
    this.shuffleStack.push(pos);
    [this.arr[pos], this.arr[i]] = [this.arr[i], this.arr[pos]];
  }
  return this.arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
