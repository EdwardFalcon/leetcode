class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        minDistance = sys.maxsize
        minDistanceIndex = -1
        for index, point in enumerate(points):
            x1 = points[index][0]
            y1 = points[index][1]
            if x1 != x and y1 != y:
                continue
            distance = abs(x - x1) + abs(y - y1)
            if distance < minDistance:
                minDistance = distance
                minDistanceIndex = index
        return minDistanceIndex
