namespace EmployeeApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            EmployeeModel.Employee obj1 = new EmployeeModel.Employee("John Doe", 15000, "permanent");
            EmployeeModel.Employee obj2 = new EmployeeModel.Employee("Liam Smith", 20000, "permanent");
            EmployeeModel.Employee obj3 = new EmployeeModel.Employee("Mary James", 15000, "permanent");
            obj1.Display();
            obj2.Display();
            obj3.Display();
            obj2.TotEmployess();
         
        }
    }
}