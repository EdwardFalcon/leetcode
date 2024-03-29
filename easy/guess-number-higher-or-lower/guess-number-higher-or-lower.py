# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        start = 1
        end = n
        while start <= end:
            mid = (start + end) // 2
            test = guess(mid)
            if test == 0:
                return mid
            elif test == -1:
                end = mid - 1
            else:
                start = mid + 1
