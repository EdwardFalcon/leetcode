/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const pacific = cloneArray(heights);
  const atlantic = cloneArray(heights);
  for (let i = 0; i < heights.length; i++) {
    dfs(heights, pacific, -Infinity, i, 0);
    dfs(heights, atlantic, -Infinity, i, heights[0].length - 1);
  }
  for (let i = 0; i < heights[0].length; i++) {
    dfs(heights, pacific, -Infinity, 0, i);
    dfs(heights, atlantic, -Infinity, heights.length - 1, i);
  }
  const result = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

var dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var dfs = function (heights, visited, value, x, y) {
  if (
    x < 0 ||
    x >= heights.length ||
    y < 0 ||
    y >= heights[0].length ||
    visited[x][y] ||
    heights[x][y] < value
  ) {
    return;
  }
  visited[x][y] = true;
  for (let [dx, dy] of dirs) {
    dfs(heights, visited, heights[x][y], x + dx, y + dy);
  }
};

var cloneArray = function (arr) {
  return Array(arr.length)
    .fill()
    .map(() => Array(arr[0].length));
};
