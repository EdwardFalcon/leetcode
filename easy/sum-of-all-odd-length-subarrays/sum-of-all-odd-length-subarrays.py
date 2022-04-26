class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        length = len(arr)
        sum = 0
        for i in range(length):
            coeff = ((i + 1) * (length - i) + 1) // 2
            sum += arr[i] * coeff
        return sum
