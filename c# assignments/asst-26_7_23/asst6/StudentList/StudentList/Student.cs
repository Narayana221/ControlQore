using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentList
{
    internal class Student  
    {
        public int Id { get; private set; }
        public string Name { get; private set; } = string.Empty;
        public double Mark { get; set; }

        public Student(int id, string name, double mark)
        {
            Id = id;
            Name = name;
            Mark = mark;
        }

        public void Display()
        {
            Console.WriteLine($"{Id}  {Name}  {Mark} ");
        }

      
    }
}
