namespace EmployeeModel
{
    public class Employee
    {
        static int count;

        public string Id { get; private set; }

        public string Name;
        public double Salary { get; set; }
        public string? EmployeeType { get; set; }
        static Employee()
        {
            count = 1000;
        } 

        public Employee(string name, double salary, string employeeType)
        {
            Id = "EMP" + count++;
            Name = name;
            Salary = salary;
            EmployeeType = employeeType;
        }
        public void Display()
        {
            Console.WriteLine(Name);
            Console.WriteLine(Salary);
            Console.WriteLine(Id);
        }
        public void TotEmployess()
        {
            Console.WriteLine($"Total number of employees is {count - 1000}");
        }
    }
}