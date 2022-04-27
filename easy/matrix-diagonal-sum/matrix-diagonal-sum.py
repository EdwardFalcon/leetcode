class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        size = len(mat)
        sum = 0
        for i in range(size):
            sum += mat[i][i] + mat[i][size - i - 1]
        if size % 2 != 0:
            sum -= mat[size // 2][size // 2]
        return sum
