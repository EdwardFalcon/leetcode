/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const arr = nums2.filter((num) => set.has(num));
  return [...new Set(arr)];
};
