/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = [];
  let first = 0;
  let second = 0;
  while (first < firstList.length && second < secondList.length) {
    const start = Math.max(firstList[first][0], secondList[second][0]);
    const end = Math.min(firstList[first][1], secondList[second][1]);
    if (start <= end) {
      result.push([start, end]);
    }
    if (firstList[first][1] < secondList[second][1]) {
      first++;
    } else {
      second++;
    }
  }
  return result;
};
