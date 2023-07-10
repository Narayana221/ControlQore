// See https://aka.ms/new-console-template for more information

Console.WriteLine("Enter integer : ");
int.TryParse(Console.ReadLine(), out int a);

Console.WriteLine("Enter character : ");
char.TryParse(Console.ReadLine(), out  char b);

Console.WriteLine("Enter boolean : ");
bool.TryParse(Console.ReadLine(), out bool c);

Console.WriteLine("Enter string : ");
string s = Console.ReadLine();


Console.WriteLine("Integer is :" + a);
Console.WriteLine("Character is :" + b);
Console.WriteLine("Boolean is :" + c);
Console.WriteLine("String is :" + s);






