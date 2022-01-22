/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let startPointer = 0;
  let endPointer = numbers.length - 1;
  while (numbers[startPointer] + numbers[endPointer] !== target) {
    if (numbers[startPointer] + numbers[endPointer] > target) {
      endPointer--;
    } else {
      startPointer++;
    }
  }
  return [startPointer + 1, endPointer + 1];
};
