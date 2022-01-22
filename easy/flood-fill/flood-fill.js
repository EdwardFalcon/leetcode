/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rowMax = image.length - 1;
  const colMax = image[0].length - 1;
  const oldColor = image[sr][sc];
  const fill = (row, col) => {
    if (image[row][col] !== oldColor || image[row][col] === newColor) {
      return;
    }
    image[row][col] = newColor;
    if (row > 0) {
      fill(row - 1, col);
    }
    if (row < rowMax) {
      fill(row + 1, col);
    }
    if (col > 0) {
      fill(row, col - 1);
    }
    if (col < colMax) {
      fill(row, col + 1);
    }
  };
  fill(sr, sc);
  return image;
};
