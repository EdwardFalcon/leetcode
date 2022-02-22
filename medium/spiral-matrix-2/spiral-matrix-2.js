/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const result = new Array(n).fill(0).map((i) => []);
  let count = 1;
  for (let layer = 0; layer < (n + 1) / 2; layer++) {
    for (let column = layer; column < n - layer; column++) {
      result[layer][column] = count++;
    }
    for (let row = layer + 1; row < n - layer; row++) {
      result[row][n - layer - 1] = count++;
    }
    for (let column = layer + 1; column < n - layer; column++) {
      result[n - layer - 1][n - column - 1] = count++;
    }
    for (let row = layer + 1; row < n - layer - 1; row++) {
      result[n - row - 1][layer] = count++;
    }
  }
  return result;
};
