/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
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
  const set = new Set();
  for (let i = currentIndex; i < candidates.length; i++) {
    if (set.has(candidates[i])) {
      continue;
    }
    set.add(candidates[i]);
    currentComb.push(candidates[i]);
    currentSum += candidates[i];
    combination(candidates, target, currentComb, currentSum, i + 1, result);
    currentComb.pop();
    currentSum -= candidates[i];
  }
};
