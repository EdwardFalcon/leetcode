/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < stack[stack.length - 1][1]) {
      continue;
    }
    stack.push(intervals[i]);
  }
  return intervals.length - stack.length;
};
