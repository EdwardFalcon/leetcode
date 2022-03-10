/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

int guess(int num);

int guessNumber(int n)
{
    unsigned int start = 1;
    unsigned int end = n;
    while (start <= end)
    {
        int mid = (start + end) >> 1;
        int test = guess(mid);
        if (test == 0)
        {
            return mid;
        }
        if (test == -1)
        {
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }
    return 0;
}