using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    internal class employee
    {


        public int Id { get; set; }
        public string Name { get; set; }
        public double Salary { get; set; }

        public employee(int id)
        {
            Id = id;
        }

        public employee(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public employee(int id, string name, double salary)
        {
            Id = id;
            Name = name;
            Salary = salary;
            display();
        }

        void display()
        {
            Console.WriteLine($"Id is {Id}" );
            Console.WriteLine($"Name is {Name}" );
            Console.WriteLine($"Salary is {Salary}");
        }
    }

}

