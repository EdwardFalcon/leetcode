class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        result = ""
        carry = False
        p1 = len(num1) - 1
        p2 = len(num2) - 1
        while p1 >= 0 or p2 >= 0:
            sum = int(carry)
            if p1 >= 0:
                sum = sum + int(num1[p1])
            if p2 >= 0:
                sum = sum + int(num2[p2])
            result = str(sum % 10) + result
            carry = sum > 9
            p1 = p1 - 1
            p2 = p2 - 1
        if carry:
            result = "1" + result
        return result
