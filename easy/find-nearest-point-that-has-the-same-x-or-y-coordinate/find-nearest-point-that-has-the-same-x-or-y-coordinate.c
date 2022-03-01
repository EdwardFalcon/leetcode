#include <limits.h>

int nearestValidPoint(int x, int y, int **points, int pointsSize, int *pointsColSize)
{
    int minDistance = INT_MAX;
    int minDistanceIndex = -1;
    for (int i = 0; i < pointsSize; i++)
    {
        int x1 = points[i][0];
        int y1 = points[i][1];
        if (x1 != x && y1 != y)
        {
            continue;
        }
        int distance = abs(x - x1) + abs(y - y1);
        if (distance < minDistance)
        {
            minDistance = distance;
            minDistanceIndex = i;
        }
    }
    return minDistanceIndex;
}
