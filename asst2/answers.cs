//1 Print first 20 numbers using for loop

for (int i = 0; i < 20; i++)
{
    Console.WriteLine(i);
}

//2 Print odd numbers less than 50 using while loop


int i=1;
while (i<50)
{
    Console.WriteLine(i);
    i += 2;
}

//3 Large amount 3 numbers

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

//4 Reverse of a number

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

//5 Sum of the digits of a number

Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int num);

int remainder, sum = 0;
while(num > 0)
{
    remainder = num % 10;
    sum = sum  + remainder;
    num = num / 10;
}

Console.WriteLine(sum);

//6 Sum of the squares of the digits of a number

Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int num);

int remainder,sqr, sum = 0;
while(num > 0)
{
    remainder = num % 10;
    sqr = remainder * remainder;
    sum = sum  + sqr;
    num = num / 10;
}

Console.WriteLine(sum);

//7 Check prime number

Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int num);

bool flag = false;

if (num == 0 || num == 1)
    flag = true;

for (int i = 2; i < num/2 ; i++)
{
    if(num % i == 0)
    {
        flag = true;
        break;
    }

}

if(flag)
{
    Console.WriteLine("non-prime");
}
else
{
    Console.WriteLine("Prime");
}

//8 Print all prime numbers below 100


bool flag = false;

for (int j = 2; j < 100 ; j++)
{
    for (int i = 2; i <= j/ 2; i++)
    {
        if (j % i == 0)
        {
            flag = true;
            break;

        }

    }

    if (!flag)
    {
        Console.WriteLine(j);
    }
   flag= false;
}


//9 Fibonacci series

int t1 = 0, t2 = 1;


int nextTerm = t1 + t2;

Console.WriteLine("Enter the number of terms: ");
int.TryParse(Console.ReadLine(), out int no_terms);


Console.WriteLine("Fibonacci Series  " + t1, t2);


for (int i = 3; i <= no_terms; i++)
{
    Console.WriteLine(nextTerm);
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
}

//10 Check palindrome 

Console.WriteLine("Enter first number");
int.TryParse(Console.ReadLine(), out int num);

int remainder, rev = 0;
int original_num = num;
while (num > 0)
{
    remainder = num % 10;
    rev = rev * 10 + remainder;
    num = num / 10;
}

if(rev == original_num)
{
    Console.WriteLine("Palindrome");
}
else
{
    Console.WriteLine("Not a Palindrome");
}

//11 Tax calculation program, input the amount and display the tax

Console.WriteLine("Enter amount");
int.TryParse(Console.ReadLine(), out int amount);

if (amount < 10000)
{
    Console.WriteLine("Tax% is 5");
}

else if (amount <15000 && amount > 10000)
{

    Console.WriteLine("Tax% is 7.5");
}

else if (amount < 20000 && amount > 15000)
{

    Console.WriteLine("Tax% is 10");
}

else if (amount < 20000 && amount > 25000)
{

    Console.WriteLine("Tax% is 12.5");
}

else 
{

    Console.WriteLine("Tax% is 15");
}

//12 Input a character from console and display the sports name corresponding to it

enter : Console.WriteLine("Enter character");
char.TryParse(Console.ReadLine(), out char input);

switch(input)
{
    
    case 'c':
        Console.WriteLine("Cricket");
        break;
    case 'f':
        Console.WriteLine("Football");
        break;
    case 'h':
        Console.WriteLine("Hockey");
        break;
    case 't':
        Console.WriteLine("Tennis");
        break;
    case 'b':
        Console.WriteLine("Badminton");
        break;
    default:
        Console.WriteLine("Invalid input,please try again");
        goto enter ;

}

// Pattern printing

for (int i = 0; i < 5; i++)
{
	for (int j = 0; j < 5; j++)
	{
        if (i >= j)
        {
            Console.Write("*");
        }
        
    }
    Console.Write("\n");
}
