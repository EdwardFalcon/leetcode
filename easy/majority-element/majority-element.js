/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let element = 0;
  let count = 0;
  nums.forEach((num) => {
    if (count === 0) {
      element = num;
    }
    if (num === element) {
      count++;
    } else {
      count--;
    }
  });
  return element;
};
