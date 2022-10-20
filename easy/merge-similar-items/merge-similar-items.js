/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = {};
  getValuesAndWeight(items1, map);
  getValuesAndWeight(items2, map);
  return Object.entries(map);
};

var getValuesAndWeight = function (arr, map) {
  for (let [value, weight] of arr) {
    if (!map[value]) {
      map[value] = 0;
    }
    map[value] += weight;
  }
};
