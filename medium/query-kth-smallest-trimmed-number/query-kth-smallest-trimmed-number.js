/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  const steps = radixSortSteps(nums);
  return queries.map(([k, trim]) => steps[trim - 1][k - 1]);
};

var radixSortSteps = function (nums) {
  const sorted = Array(nums.length);
  const steps = [];
  let stepCount = 0;
  let pos = nums[0].length - 1;
  while (pos >= 0) {
    const currentSteps = [];
    const count = Array(10).fill(0);
    for (let num of nums) {
      count[num[pos]]++;
    }
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      const newPos = --count[nums[i][pos]];
      sorted[newPos] = nums[i];
      currentSteps[newPos] = stepCount > 0 ? steps[stepCount - 1][i] : i;
    }
    for (let i = 0; i < nums.length; i++) {
      nums[i] = sorted[i];
    }
    steps.push(currentSteps);
    pos--;
    stepCount++;
  }
  return steps;
};
