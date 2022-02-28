int search(int *nums, int numsSize, int target)
{
    int startIndex = 0;
    int endIndex = numsSize - 1;
    while (startIndex <= endIndex)
    {
        int midIndex = (startIndex + endIndex) / 2;
        if (nums[midIndex] == target)
        {
            return midIndex;
        }
        if (nums[midIndex] > target)
        {
            endIndex = midIndex - 1;
        }
        else
        {
            startIndex = midIndex + 1;
        }
    }
    return -1;
}