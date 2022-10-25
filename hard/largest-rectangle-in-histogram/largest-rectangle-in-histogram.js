/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let result = 0;
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack[stack.length - 1]];
      stack.pop();
      const left = stack.length ? stack[stack.length - 1] : -1;
      result = Math.max(result, (i - left - 1) * height);
    }
    stack.push(i);
  }
  return result;
};
