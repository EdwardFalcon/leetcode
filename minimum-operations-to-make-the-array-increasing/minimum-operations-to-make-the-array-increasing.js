/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    return nums.reduce((p, c, i) => {
        if (c <= nums[i - 1]) {
            const diff = nums[i - 1] - c + 1;
            nums[i] += diff;
            return p + diff;
        }
        return p;
    }, 0);
};