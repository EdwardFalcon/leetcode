class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        sum = 0
        product = 1
        while n > 0:
            num = n % 10
            sum += num
            product *= num
            n //= 10
        return product - sum
