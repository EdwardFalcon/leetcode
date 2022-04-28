class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        sortedS = sorted(s)
        sortedT = sorted(t)
        for i in range(len(s)):
            if sortedS[i] != sortedT[i]:
                return sortedT[i]
        return sortedT[len(t) - 1]
