#include <stdlib.h>

int climbStairs(int n)
{
    int *steps;
    steps = (int *)malloc(sizeof(int) * (n + 2));
    for (int i = 0; i <= n; i++)
    {
        if (i < 3)
        {
            steps[i] = i;
        }
        else
        {
            steps[i] = steps[i - 1] + steps[i - 2];
        }
    }
    return steps[n];
}