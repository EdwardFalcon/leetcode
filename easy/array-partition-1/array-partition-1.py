class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        result = 0
        for i in range(0, len(nums) - 1, 2):
            result += min(nums[i:i + 2])
        return result
