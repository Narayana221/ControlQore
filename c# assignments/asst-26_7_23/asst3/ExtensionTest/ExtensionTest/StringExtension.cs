﻿
namespace ExtensionTest
{
    public static class StringExtension
    {
        public static int isWordCount(this string str, string pattern)
        {
            int count = 0;
            int a = 0;
            while ((a = str.IndexOf(pattern, a)) != -1)
            {
                a += pattern.Length;
                count++;
            }
            return count;
        }
    }
}
