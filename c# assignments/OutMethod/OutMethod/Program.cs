// See https://aka.ms/new-console-template for more information

int calculate(int a ,int b, out int dif , out int product , out int quotient)
{
    dif = a - b;
    product = a * b;
    quotient= a/b;

    return a + b;
}

int result = calculate(20, 5, out int dif, out int product, out int quotient);

Console.WriteLine($"sum is {Convert.ToString(result)} \n difference is  {Convert.ToString(dif)} \n product is  {Convert.ToString(product)} \n quotient is  {Convert.ToString(quotient)} ");