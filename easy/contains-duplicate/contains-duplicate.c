#include <stdbool.h>
#include "uthash.h"

struct set_entry
{
    int id;
    UT_hash_handle hh;
};

bool containsDuplicate(int *nums, int numsSize)
{
    struct set_entry *set = NULL;
    for (int i = 0; i < numsSize; i++)
    {
        int n = nums[i];
        struct set_entry *num;
        HASH_FIND_INT(set, &n, num);
        if (num != NULL)
        {
            return true;
        }
        num = malloc(sizeof *num);
        num->id = n;
        HASH_ADD_INT(set, id, num);
    }
    return false;
}
