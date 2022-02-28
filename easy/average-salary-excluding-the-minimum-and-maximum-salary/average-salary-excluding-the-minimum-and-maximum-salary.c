double average(int *salary, int salarySize)
{
    int min, max, sum;
    min = max = sum = salary[0];
    for (int i = 1; i < salarySize; i++)
    {
        sum += salary[i];
        if (salary[i] < min)
        {
            min = salary[i];
        }
        if (salary[i] > max)
        {
            max = salary[i];
        }
    }
    printf("%i", sum);
    return 1.0 * (sum - max - min) / (salarySize - 2);
}