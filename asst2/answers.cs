//1

for (int i = 0; i < 20; i++)
{
    Console.WriteLine(i);
}

//2

int i=1;
while (i<50)
{
    Console.WriteLine(i);
    i += 2;
}

//3

Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int first_num);

Console.WriteLine("Enter second number");
int.TryParse(Console.ReadLine(), out int second_num);

Console.WriteLine("Enter third number");
int.TryParse(Console.ReadLine(), out int third_num);

if (first_num >= second_num && first_num >= third_num)
{
    Console.WriteLine(first_num + " is the highest ");
}

else if (second_num >= third_num && second_num >= first_num)
{
    Console.WriteLine(second_num + " is the highest ");
}

else
    Console.WriteLine(third_num + " is the higest ");

//4
Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int num);

int remainder, rev = 0;
while(num > 0)
{
    remainder = num % 10;
    rev = rev * 10 + remainder;
    num = num / 10;
}

Console.WriteLine(rev);

//5 

