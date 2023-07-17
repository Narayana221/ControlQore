
namespace StudentClass
{
    internal class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Mark { get; set; }
        public char grade;
        public char Grade
        {
            get
            {
                if (Mark < 70)
                {
                    grade = 'D';
                }
                else if (Mark <= 80)
                {
                    grade = 'C';
                }
                else if (Mark < 90)
                {
                    grade = 'B';
                }
                else
                {
                    grade = 'A';

                }
                return grade;

            }
        }

        public Student(int id, string name, int mark)
        {
            Id = id;
            Name = name;
            Mark = mark;
            Display();
        }

        public void Display()
        {

            Console.WriteLine($"Name is {Name}");
            Console.WriteLine($"Mark is {Mark}");
            Console.WriteLine($"Grade is {Grade}\n");
        }

    }
}
