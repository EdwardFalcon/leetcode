/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const current = [];
  combination(candidates, target, current, 0, 0, result);
  return result;
};

var combination = function (
  candidates,
  target,
  currentComb,
  currentSum,
  currentIndex,
  result
) {
  if (currentSum > target) {
    return;
  }
  if (currentSum === target) {
    result.push([...currentComb]);
    return;
  }
  for (let i = currentIndex; i < candidates.length; i++) {
    currentComb.push(candidates[i]);
    currentSum += candidates[i];
    combination(candidates, target, currentComb, currentSum, i, result);
    currentComb.pop();
    currentSum -= candidates[i];
  }
};
