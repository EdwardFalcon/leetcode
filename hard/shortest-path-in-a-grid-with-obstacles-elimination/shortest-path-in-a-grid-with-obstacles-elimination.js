/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var shortestPath = function (grid, k) {
  const offsets = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [[0, 0, k, 0]];
  const visited = new Set(`00${k}`);
  while (queue.length) {
    const [x, y, eleminate, dist] = queue.shift();
    if (visited.has(`${x}${y}${eleminate}`) || eleminate === -1) {
      continue;
    }
    if (x === grid.length - 1 && y === grid[0].length - 1) {
      return dist;
    }
    visited.add(`${x}${y}${eleminate}`);
    for (let [dx, dy] of dirs) {
      let checkX = x + dx;
      let checkY = y + dy;
      if (
        checkX < 0 ||
        checkY < 0 ||
        (checkX >= grid.length) | (checkY >= grid[0].length)
      ) {
        continue;
      }
      const obstacle = grid[checkX][checkY] === 0 ? 0 : 1;
      queue.push([checkX, checkY, eleminate - obstacle, dist + 1]);
    }
  }
  return -1;
};
