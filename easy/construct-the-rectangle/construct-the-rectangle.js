/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let i = Math.floor(Math.sqrt(area)); i >= 1; i++) {
    if (area % i === 0) {
      return [Math.max(i, area / i), Math.min(i, area / i)];
    }
  }
  return [area, 1];
};
