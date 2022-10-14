/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [[x0, y0], [x1, y1]] = coordinates;
  const dx = x1 - x0;
  const dy = y1 - y0;
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (dx * (y - y1) !== dy * (x - x1)) {
      return false;
    }
  }
  return true;
};
