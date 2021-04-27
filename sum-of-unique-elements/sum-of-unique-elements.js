/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const freq = {};
    nums.forEach(num => freq[num] = (freq[num] || 0) + 1);
    let sum = 0;
    for (num in freq) {
        if (freq[num] === 1) {
            sum += Number(num);
        }
    }
    return sum;
};