/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const columnHash = new Array(9).fill().map(() => new Set());
  const rowHash = new Array(9).fill().map(() => new Set());
  const boxHash = new Array(9).fill().map(() => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const columnValue = board[j][i];
      const rowValue = board[i][j];
      const boxNumber = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (
        columnHash[i].has(columnValue) ||
        rowHash[i].has(rowValue) ||
        boxHash[boxNumber].has(rowValue)
      ) {
        return false;
      }
      if (columnValue !== '.') {
        columnHash[i].add(columnValue);
      }
      if (rowValue !== '.') {
        rowHash[i].add(rowValue);
        boxHash[boxNumber].add(rowValue);
      }
    }
  }
  return true;
};
