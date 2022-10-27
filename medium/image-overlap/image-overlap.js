/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const n = img1.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, countOverlap(img1, img2, i, j));
      max = Math.max(max, countOverlap(img2, img1, i, j));
    }
  }
  return max;
};

var countOverlap = function (img1, img2, x, y) {
  const n = img1.length;
  let left = 0;
  let right = 0;
  let row = 0;
  for (let i = x; i < n; i++) {
    let col = 0;
    for (let j = y; j < n; j++) {
      if (img1[i][j] === 1 && img1[i][j] === img2[row][col]) {
        left++;
      }
      if (img1[i][col] === 1 && img1[i][col] === img2[row][j]) {
        right++;
      }
      col++;
    }
    row++;
  }
  return Math.max(left, right);
};
