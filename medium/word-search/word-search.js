/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const lastPos = word.length - 1;
  var find = function (x, y, pos) {
    if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== word[pos]) {
      return false;
    }
    if (pos === lastPos) {
      return true;
    }
    pos++;
    const temp = board[x][y];
    board[x][y] = '';
    const result =
      find(x + 1, y, pos) ||
      find(x, y + 1, pos) ||
      find(x - 1, y, pos) ||
      find(x, y - 1, pos);
    board[x][y] = temp;
    return result;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const result = find(i, j, 0);
      if (result) {
        return true;
      }
    }
  }
  return false;
};
