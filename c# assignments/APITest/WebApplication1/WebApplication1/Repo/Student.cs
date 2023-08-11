namespace WebApplication1.Repo
{
    public class Student
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public int Class1 { get; set; }
        public float Mark { get; set; }

        public Student() { }

        public Student(int id, string name,string address, int class1, float mark)
        {
            Id = id;
            Name = name;
            Address = address;
            Class1 = class1;
            Mark = mark;

        }




    }

}
