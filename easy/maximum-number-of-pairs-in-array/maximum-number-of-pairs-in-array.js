/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const count = Array(101).fill(0);
  nums.forEach((num) => count[num]++);
  return count.reduce(
    (answer, num) => {
      if (num > 0) {
        answer[0] += Math.floor(num / 2);
        answer[1] += num % 2;
      }
      return answer;
    },
    [0, 0]
  );
};
