namespace EmployeeApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            EmployeeModel.Class1 obj1 = new EmployeeModel.Class1("John Doe", 15000, "permanent");
            EmployeeModel.Class1 obj2 = new EmployeeModel.Class1("Liam Smith", 20000, "permanent");
            EmployeeModel.Class1 obj3 = new EmployeeModel.Class1("Mary James", 15000, "permanent");
            obj1.Display();
            obj2.Display();
            obj3.Display();
            obj2.TotEmployess();
         
        }
    }
}