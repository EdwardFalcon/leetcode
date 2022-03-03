class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        result = [intervals[0]]
        i = 1
        while i < len(intervals):
            last = result[-1]
            curr = intervals[i]
            if last[1] < curr[0]:
                result.append(curr)
                continue
            last[0] = min(last[0], curr[0])
            if (last[1] <= curr[1]):
                last[1] = max(last[1], curr[1])
            i = i + 1
        return result
