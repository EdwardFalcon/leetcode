class Solution:
    def isHappy(self, n: int) -> bool:
        viewed = set()
        while n != 1:
            n = self.getSumSquares(n)
            if n in viewed:
                return False
            viewed.add(n)
        return True

    def getSumSquares(self, n: int) -> int:
        result = 0
        while n > 0:
            result += (n % 10) ** 2
            n = n // 10
        return result
