class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val set = mutableMapOf<Int, Int>()
        for ((index, value) in nums.withIndex()) {
            if (set.contains(target - value)) {
                return intArrayOf(index, set.getValue(target - value))
            }
            set.put(value, index)
        }
        return intArrayOf(0, 0)
    }
}
