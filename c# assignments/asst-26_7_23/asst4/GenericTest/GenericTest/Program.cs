namespace GenericTest
{
    internal class Program
    {
        static void Main(string[] args)
        {
            GenericClass<int> obj1 = new GenericClass<int>();
            Console.WriteLine(obj1.Compare(2, 3));
            GenericClass<double> obj2 = new GenericClass<double>();
            Console.WriteLine(obj2.Compare(9.5, 3.2));

        }
    }
}