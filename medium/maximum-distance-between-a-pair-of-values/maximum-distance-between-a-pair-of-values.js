/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let result = 0;
  for (let i = 0; i < nums1.length; i++) {
    let left = i;
    let right = nums2.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums2[mid] < nums1[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (right !== i - 1) {
      result = Math.max(result, right - i);
    }
  }
  return result;
};
