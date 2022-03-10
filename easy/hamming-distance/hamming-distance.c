int hammingDistance(int x, int y)
{
    unsigned int result = 0;
    unsigned int diff = x ^ y;
    while (diff > 0)
    {
        result += diff & 1;
        diff >>= 1;
    }
    return result;
}
