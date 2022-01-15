/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const resultArray = [[1]];
  for (let i = 1; i < numRows; i++) {
    const currentRow = [1];
    const previousRow = resultArray[i - 1];
    for (let j = 0; j < previousRow.length - 1; j++) {
      currentRow.push(previousRow[j] + previousRow[j + 1]);
    }
    currentRow.push(1);
    resultArray.push(currentRow);
  }
  return resultArray;
};
