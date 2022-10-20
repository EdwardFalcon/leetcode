/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let totalUnits = 0;
  for (let [amount, units] of boxTypes) {
    const boxes = Math.min(truckSize, amount);
    totalUnits += boxes * units;
    truckSize -= boxes;
    if (truckSize === 0) {
      return totalUnits;
    }
  }
  return totalUnits;
};
