/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  grid.forEach((row) => row.sort((a, b) => b - a));
  let sum = 0;
  for (let row = 0; row < grid[0].length; row++) {
    let max = 0;
    for (let col = 0; col < grid.length; col++) {
      max = Math.max(max, grid[col][row]);
    }
    sum += max;
  }
  return sum;
};
