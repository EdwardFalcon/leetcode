/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

var quickSelect = function (nums, left, right, k) {
  if (left === right) {
    return nums[left];
  }
  let pIndex = Math.floor(Math.random() * (right - left + 1) + left);
  pIndex = partition(nums, left, right, pIndex);
  if (pIndex === k) {
    return nums[k];
  } else if (pIndex < k) {
    return quickSelect(nums, pIndex + 1, right, k);
  }
  return quickSelect(nums, left, pIndex - 1, k);
};

var partition = function (nums, left, right, pIndex) {
  let pivot = nums[pIndex];
  swap(nums, pIndex, right);
  pIndex = left;
  for (let i = left; i <= right; i++) {
    if (nums[i] <= pivot) {
      swap(nums, i, pIndex++);
    }
  }
  return pIndex - 1;
};

var swap = function (nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
