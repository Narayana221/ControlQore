namespace shape
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double a1, a2, a3;
            Triangle ob1 = new Triangle(3, 5, 2);
            Square ob2 = new Square(4,5);
            Rectangle ob3 = new Rectangle(4, 5, 6);

            ob1.Display();
            a1=ob1.CalculateArea();
            Console.WriteLine($"Area of triangle is {a1}");

            ob2.Display();
            a2=ob2.CalculateArea();
            Console.WriteLine($"Area of sqaure is {a2}");

            ob3.Display();
            a3=ob3.CalculateArea();
            Console.WriteLine($"Area of Rectangle is {a3}");
        }
    }
}