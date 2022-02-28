int countOdds(int low, int high)
{
    int between = (high - low) / 2;
    if (low % 2 != 0 || high % 2 != 0)
    {
        return between + 1;
    }
    return between;
}