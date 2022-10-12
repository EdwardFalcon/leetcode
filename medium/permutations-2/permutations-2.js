/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const used = new Set();
  if (nums.length === 1) {
    return [nums];
  }
  nums.forEach((num, i) => {
    if (used.has(num)) {
      return;
    }
    used.add(num);
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const perms = permuteUnique(rest);
    perms.forEach((perm) => result.push([num, ...perm]));
  });
  return result;
};
