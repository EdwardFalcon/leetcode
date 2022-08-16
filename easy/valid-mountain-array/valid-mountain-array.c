

bool validMountainArray(int *A, int ASize)
{
    int i = 0;

    while (i + 1 < ASize && A[i] < A[i + 1])
        i++;

    if (i == 0 || i == ASize - 1)
        return false;

    while (i + 1 < ASize && A[i] > A[i + 1])
        i++;

    return i == ASize - 1;
}