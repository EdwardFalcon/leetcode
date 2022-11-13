/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let lcm = 1;
    for (let j = i; j < nums.length; j++) {
      lcm = lcm * Math.floor(nums[j] / gcd(lcm, nums[j]));
      if (lcm === k) {
        answer++;
      }
    }
  }
  return answer;
};

var gcd = function (a, b) {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
