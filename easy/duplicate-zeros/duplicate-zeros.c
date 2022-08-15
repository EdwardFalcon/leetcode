

void duplicateZeros(int *arr, int arrSize)
{
    for (int i = 0; i < arrSize - 1; i++)
    {
        if (arr[i] == 0)
        {
            shift(arr, i, arrSize);
            arr[i + 1] = 0;
            i++;
        }
    }
}

void shift(int *arr, int i, int arrSize)
{
    for (int j = arrSize - 1; j > i; j--)
    {
        arr[j] = arr[j - 1];
    }
}