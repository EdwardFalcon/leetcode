/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    maxHeapify(nums, nums.length, i);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    const temp = nums[i];
    nums[i] = nums[0];
    nums[0] = temp;
    maxHeapify(nums, i, 0);
  }
  return nums;
};

var maxHeapify = function (arr, heapSize, index) {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  let largest = index;
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != index) {
    const temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, heapSize, largest);
  }
};
