namespace Custom
{
    internal class Program
     
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the input character ");
            char.TryParse(Console.ReadLine(), out char input);

            try
            {
                switch (input)
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
                        throw new InvalidUserInputException();

                }
            }
            catch (InvalidUserInputException ex)
            {
                Console.WriteLine(ex.Message);
            }


        }
    }
}