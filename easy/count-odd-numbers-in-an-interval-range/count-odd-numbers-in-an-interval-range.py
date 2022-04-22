class Solution:
    def countOdds(self, low: int, high: int) -> int:
        between = (high - low) // 2
        if low % 2 != 0 or high % 2 != 0:
            return between + 1
        return between