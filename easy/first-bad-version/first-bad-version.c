// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

int firstBadVersion(int n)
{
    unsigned int start_version = 1;
    unsigned int end_version = n;
    while (start_version <= end_version)
    {
        int mid = (start_version + end_version) >> 1;
        if (isBadVersion(mid))
        {
            end_version = mid - 1;
        }
        else
        {
            start_version = mid + 1;
        }
    }
    return start_version;
}