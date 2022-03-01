#include <stdbool.h>
#include "uthash.h"

struct set_entry
{
    int id;
    UT_hash_handle hh;
};

int sumSquares(int n)
{
    int result = 0;
    while (n > 0)
    {
        result += (n % 10) * (n % 10);
        n = n / 10;
    }
    return result;
}

bool isHappy(int n)
{
    struct set_entry *set = NULL;
    while (n != 1)
    {
        n = sumSquares(n);
        struct set_entry *num;
        HASH_FIND_INT(set, &n, num);
        if (num != NULL)
        {
            return false;
        }
        num = malloc(sizeof *num);
        num->id = n;
        HASH_ADD_INT(set, id, num);
    }
    return true;
}
