/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let provinces = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (isConnected[i][i] === 1) {
      provinces++;
      mark(i, isConnected);
    }
  }
  return provinces;
};

var mark = function (i, isConnected) {
  isConnected[i][i] = 0;
  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[i][j] === 1) {
      isConnected[i][j] = 0;
      isConnected[j][i] = 0;
      mark(j, isConnected);
    }
  }
};
