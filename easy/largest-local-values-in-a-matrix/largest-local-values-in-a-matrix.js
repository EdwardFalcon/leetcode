/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const answer = Array(n - 2)
    .fill()
    .map(() => Array(n - 2).fill());
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      answer[i - 1][j - 1] = getMax(grid, i, j);
    }
  }
  return answer;
};

const getMax = (grid, i, j) => {
  let max = -Infinity;
  for (let row = i - 1; row <= i + 1; row++) {
    for (let col = j - 1; col <= j + 1; col++) {
      max = Math.max(max, grid[row][col]);
    }
  }
  return max;
};
