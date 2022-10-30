/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const curr = intervals[i];
    if (last[1] < curr[0]) {
      result.push(curr);
      continue;
    }
    last[0] = Math.min(last[0], curr[0]);
    if (last[1] <= curr[1]) {
      last[1] = Math.max(last[1], curr[1]);
    }
  }
  return result;
};
