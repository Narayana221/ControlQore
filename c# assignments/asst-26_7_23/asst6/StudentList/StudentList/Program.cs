

namespace StudentList
{
    public class Program
    {
        static void Main(string[] args)
        {

            List<Student> students = new List<Student>();

            students.Add(new Student(1, "John Doe", 85));
            students.Add(new Student(2, "Liam Smith", 70));
            students.Add(new Student(3, "Mary James", 62));
            students.Add(new Student(4, "Davide James", 55));
            students.Add(new Student(5, "Lionel Messi", 100));
            students.Add(new Student(6, "Ronaldo", 90));
            students.Add(new Student(7, "Neymar", 85));


            foreach (Student item in students)
            {
                item.Display();
            }
            Console.WriteLine("\n");

            var maxMark = students.Max(x => x.Mark);

            Console.WriteLine($"The maximum mark in the list is {maxMark}\r\n");

            var mark75 = students.Where(x => x.Mark > 75).Select(x => x.Name);
            Console.WriteLine("List of students whose mark is greater than 75\r\n");
            foreach (string item in mark75)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("\n");

            var SName = students.Where(x => x.Name.EndsWith('s')).Select(x => x.Name);
            Console.WriteLine("List the student whose name ends with ‘s’\r\n");
            foreach (string item in SName)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("\n");

            var messi = students.Where(x => x.Name.Equals("Lionel Messi")).Select(x => x.Id);
            Console.WriteLine($"Id of the student whose name is ‘Lionel Messi’\r");
            foreach (int item in messi)
            {
                Console.Write(item);
            }
            Console.WriteLine("\n");

            var ronaldo = students.Where(x => x.Name.Equals("Ronaldo")).Select(x => x.Mark);
            Console.WriteLine($"Mark of the student whose name is ‘Ronaldo’\r");
            foreach (double item in ronaldo)
            {
                Console.Write(item);
            }

        }


    }

}