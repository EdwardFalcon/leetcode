#include <stdlib.h>

int fib(int n)
{
    int *fibs = (int *)malloc(sizeof(int) * (n + 1));
    for (int i = 0; i <= n; i++)
    {
        if (i < 2)
        {
            fibs[i] = i;
        }
        else
        {
            fibs[i] = fibs[i - 1] + fibs[i - 2];
        }
    }
    return fibs[n];
}