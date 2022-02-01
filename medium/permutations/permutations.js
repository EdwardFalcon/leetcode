/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  if (nums.length === 1) {
    return [nums];
  }
  nums.forEach((num, i) => {
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const perms = permute(rest);
    perms.forEach((perm) => result.push([num, ...perm]));
  });
  return result;
};
