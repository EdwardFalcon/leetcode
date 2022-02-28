/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === '1') {
        islands++;
        markIsland(grid, y, x);
      }
    }
  }
  return islands;
};

var markIsland = function (grid, y, x) {
  if (
    y < 0 ||
    x < 0 ||
    y > grid.length - 1 ||
    x > grid[0].length - 1 ||
    grid[y][x] === '0'
  ) {
    return;
  }
  grid[y][x] = '0';
  markIsland(grid, y + 1, x);
  markIsland(grid, y - 1, x);
  markIsland(grid, y, x + 1);
  markIsland(grid, y, x - 1);
};
