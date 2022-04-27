class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if sorted(s1) != sorted(s2):
            return False
        diffCount = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                diffCount += 1
                if diffCount > 2:
                    return False
        return True
