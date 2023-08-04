using Microsoft.Data.SqlClient;

namespace DatabaseTest
{
    internal class Program
    {
        static void Main(string[] args)
        {
            AddStudent ob = new AddStudent();
            //  int res = ob.AddStudentDetails("Aisha", "34weqyf", 11, 70);
            //int res = ob.UsingProc("Hanan", "2ajhdsajshcd", 12, 100);
            int res = ob.GetStudentDetail();
            if (res > 0)
            { Console.WriteLine("success"+  res); }
            else
            { Console.WriteLine("Failed"); }


        }
    }
}
