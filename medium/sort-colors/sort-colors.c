void sortColors(int *nums, int numsSize)
{
    int pointer0 = 0;
    int pointer2 = numsSize - 1;
    int pointer = 0;
    while (pointer <= pointer2)
    {
        if (nums[pointer] == 2)
        {
            nums[pointer] = nums[pointer2];
            nums[pointer2--] = 2;
        }
        else if (nums[pointer] == 0)
        {
            nums[pointer++] = nums[pointer0];
            nums[pointer0++] = 0;
        }
        else
        {
            pointer++;
        }
    }
}