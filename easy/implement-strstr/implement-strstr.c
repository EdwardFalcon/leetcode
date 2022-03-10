int strStr(char *haystack, char *needle)
{
    if (strlen(needle) == 0)
    {
        return 0;
    }
    int maxStart = strlen(haystack) - strlen(needle);
    int startWord = 0;
    while (startWord <= maxStart)
    {
        int endWord = 0;
        while (
            endWord < strlen(needle) &&
            haystack[startWord + endWord] == needle[endWord])
        {
            endWord++;
        }
        if (endWord == strlen(needle))
        {
            return startWord;
        }
        startWord++;
    }
    return -1;
}
