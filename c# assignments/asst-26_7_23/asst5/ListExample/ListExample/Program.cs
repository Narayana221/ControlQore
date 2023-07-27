namespace ListExample
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            var numbers = new List<int>();
            int[] arr = { 1, 2, 3, 4, 5 };
            for (int i =0; i < arr.Length; i++)
            {
                numbers.Add(arr[i]*2);
            }

            foreach (int i in numbers)
                Console.WriteLine(i);
        }

    }
}