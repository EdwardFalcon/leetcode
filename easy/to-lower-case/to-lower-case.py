class Solution:
    def toLowerCase(self, s: str) -> str:
        str_array = list(s)
        for i in range(len(str_array)):
            char_code = ord(str_array[i])
            if (char_code >= 65 and char_code <= 90):
                str_array[i] = chr(char_code + 32)
        return ''.join(str_array)
