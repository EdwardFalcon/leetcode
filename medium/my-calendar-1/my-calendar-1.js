var MyCalendar = function () {
  this.start = [];
  this.end = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (let i = 0; i < this.start.length; i++) {
    if (start < this.end[i] && this.start[i] < end) {
      return false;
    }
  }
  this.start.push(start);
  this.end.push(end);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
