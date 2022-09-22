/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 0) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    area = Math.max(area, minHeight * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
};
