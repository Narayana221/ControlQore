Console.WriteLine("Enter input string");
string  str = Console.ReadLine();

void find_length(string str)
{
    Console.WriteLine("Length of the given string is " + str.Length);
}

void find_index(string str, char input)
{
    Console.WriteLine("Index of the given input charatcer is " + str.IndexOf(input));
}

string reverse(string str)
{
    char[] charArray = str.ToCharArray();
    Array.Reverse(charArray);
    return new string(charArray);
}
string hai_append(string str)
{
    string str2 = str.Insert(0, "Hai");
    return str2;
}

void last_char(string str)
{
    Console.WriteLine(str[str.Length-1]);
}

void replace_char(string str)
{
    Console.WriteLine(str.Replace('a','_'));
}

void occurence(string str, char c)
{
    int count=0;
    for (int i = 0; i < str.Length; i++)
    {
        if (str[i] == c)
        {
            count++;
        }
    }
    Console.WriteLine(count);
}

find_length(str);

Console.WriteLine("Enter the input character whose index you have to find ");
char.TryParse(Console.ReadLine(), out char input);
find_index(str, input);

string str2 = reverse(str);
Console.WriteLine(str2);

string str3 = hai_append(str);
Console.WriteLine(str3);

last_char(str);

replace_char(str);

Console.WriteLine("Enter the input character whose occurence you have to find ");
char.TryParse(Console.ReadLine(), out char input2);
occurence(str, input2);





