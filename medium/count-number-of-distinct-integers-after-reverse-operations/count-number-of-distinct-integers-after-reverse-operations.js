/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const set = new Set(nums);
  for (let num of nums) {
    set.add(num);
    set.add(getReverse(num));
  }
  return set.size;
};

var getReverse = function (num) {
  let result = 0;
  while (num > 0) {
    result *= 10;
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
};
