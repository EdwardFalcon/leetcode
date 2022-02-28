/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let minDistance = Infinity;
  let minDistanceIndex = -1;
  points.forEach(([x1, y1], index) => {
    if (x1 !== x && y1 !== y) {
      return;
    }
    const distance = Math.abs(x - x1) + Math.abs(y - y1);
    if (distance < minDistance) {
      minDistance = distance;
      minDistanceIndex = index;
    }
  });
  return minDistanceIndex;
};
