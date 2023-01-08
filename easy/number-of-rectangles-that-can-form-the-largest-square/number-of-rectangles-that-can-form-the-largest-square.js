/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const sides = rectangles.map(([a, b]) => Math.min(a, b));
  const maxSide = Math.max(...sides);
  return sides.filter((side) => side === maxSide).length;
};
