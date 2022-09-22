/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);
  let a = nums1;
  let b = nums2;
  if (b.length < a.length) {
    a = nums2;
    b = nums1;
  }
  let left = 0;
  let right = a.length - 1;
  while (true) {
    const i = Math.floor((left + right) / 2);
    const j = half - i - 2;
    const aLeft = i >= 0 ? a[i] : -Infinity;
    const aRight = i + 1 < a.length ? a[i + 1] : Infinity;
    const bLeft = j >= 0 ? b[j] : -Infinity;
    const bRight = j + 1 < b.length ? b[j + 1] : Infinity;
    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 !== 0) {
        return Math.min(aRight, bRight);
      }
      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    } else if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
