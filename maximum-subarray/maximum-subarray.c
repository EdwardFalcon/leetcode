#define MAX(a,b) (((a)>(b))?(a):(b))

int maxSubArray(int* nums, int numsSize){
    int sum = nums[0];
    int maxSum = nums[0];
    for(int i = 1; i < numsSize; i++) {
        sum = MAX(nums[i], sum + nums[i]);
        maxSum = MAX(maxSum, sum);
    }
    return maxSum;
