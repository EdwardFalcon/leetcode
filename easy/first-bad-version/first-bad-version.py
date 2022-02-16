# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        startVersion = 1
        endVersion = n
        while(startVersion <= endVersion):
            mid = (startVersion + endVersion) // 2
            if isBadVersion(mid):
                endVersion = mid - 1
            else:
                startVersion = mid + 1
        return startVersion
