/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const resultArray = [];
  const hashTable = {};
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    hashTable[num] = !hashTable[num] ? 1 : hashTable[num] + 1;
  }
  for (let j = 0; j < nums2.length; j++) {
    const num = nums2[j];
    if (hashTable[num] > 0) {
      resultArray.push(num);
      hashTable[num] -= 1;
    }
  }
  return resultArray;
};
