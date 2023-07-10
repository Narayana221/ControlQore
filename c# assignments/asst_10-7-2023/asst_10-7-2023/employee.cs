using System;

public class Employee
{
    public int? Id { get; set; }
    public string? Name { get; set; }
    public double? Salary { get; set; }
    public Employee(int id)
    {
        Id = id;
    }

    public Employee(int id, string name)
    {
        Id = id;
        Name = name;
    }

    public Employee(int id, string name, double salary)
    {
        Id = id;
        Name = name;
        Salary = salary;
        display();
    }

    void display()
    {
        console.WriteLine(Id + Name + Salary);
    }
}
