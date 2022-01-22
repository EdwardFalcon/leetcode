/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length - 1;
  const cols = grid[0].length - 1;
  const maxDistance = grid.length * grid[0].length;
  let distance = 0;
  const getDistanceToRotten = (x, y, distance) => {
    if (
      x < 0 ||
      y < 0 ||
      x > rows ||
      y > cols ||
      grid[x][y] === 0 ||
      grid[x][y] === -1
    ) {
      return maxDistance;
    }
    if (grid[x][y] === 2) {
      return distance;
    }
    grid[x][y] = -1;
    distance = Math.min(
      getDistanceToRotten(x + 1, y, distance + 1),
      getDistanceToRotten(x - 1, y, distance + 1),
      getDistanceToRotten(x, y + 1, distance + 1),
      getDistanceToRotten(x, y - 1, distance + 1)
    );
    grid[x][y] = 1;
    return distance;
  };
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (grid[i][j] !== 1) {
        continue;
      }
      const currentDistance = getDistanceToRotten(i, j, 0);
      if (currentDistance === maxDistance) {
        return -1;
      }
      distance = Math.max(distance, currentDistance);
    }
  }
  return distance;
};
