int hammingWeight(uint32_t n)
{
    int result = 0;
    while (n)
    {
        result += (n & 1);
        n = n >> 1;
    }
    return result;
}