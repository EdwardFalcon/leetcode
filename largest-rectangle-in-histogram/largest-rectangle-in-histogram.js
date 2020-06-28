/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  return calcArea(heights, 0, heights.length - 1);
};

var calcArea = function(heights, begin, end) {
  if (begin > end) {
      return 0;
  }
  let minIndex = begin;
  for (let i = begin + 1; i <= end; i++) {
      if (heights[i] < heights[minIndex]) {
          minIndex = i;
      }
  }
  return Math.max(
      heights[minIndex] * (end - begin + 1),
      calcArea(heights, begin, minIndex - 1),
      calcArea(heights, minIndex + 1, end),
  )
  
}