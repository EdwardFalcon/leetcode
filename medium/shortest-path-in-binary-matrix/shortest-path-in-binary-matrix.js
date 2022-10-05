/**
 * @param {number[][]} grid
 * @return {number}
 */

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

const shortestPathBinaryMatrix = (grid) => {
  if (grid[0][0] === 1) {
    return -1;
  }

  const len = grid.length;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [row, col, path] = queue.shift();
    if (row === len - 1 && col === len - 1) {
      return path;
    }

    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;

      if (x < 0 || x >= len || y < 0 || y >= len || grid[x][y] !== 0) {
        continue;
      }

      queue.push([x, y, path + 1]);
      grid[x][y] = 1;
    }
  }

  return -1;
};
