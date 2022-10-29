/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
  const answer = Array(nums.length).fill(-1);
  const first = [0];
  const second = [];
  for (let i = 1; i < nums.length; i++) {
    while (second.length && nums[i] > nums[second[second.length - 1]]) {
      const current = second.pop();
      if (answer[current] === -1) {
        answer[current] = nums[i];
      }
    }
    const temp = [];
    while (first.length && nums[i] > nums[first[first.length - 1]]) {
      const current = first.pop();
      if (answer[current] === -1) {
        temp.push(current);
      }
    }
    first.push(i);
    second.push(...temp.reverse());
  }
  return answer;
};
