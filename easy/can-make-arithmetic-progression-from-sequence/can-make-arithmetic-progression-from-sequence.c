#include <stdbool.h>

int comparator(int *a, int *b)
{
    return *a - *b;
}

bool canMakeArithmeticProgression(int *arr, int arrSize)
{
    qsort(arr, arrSize, sizeof(int), comparator);
    int diff = arr[1] - arr[0];
    for (int i = 1; i < arrSize - 1; i++)
    {
        if (arr[i + 1] - arr[i] != diff)
        {
            return false;
        }
    }
    return true;
}