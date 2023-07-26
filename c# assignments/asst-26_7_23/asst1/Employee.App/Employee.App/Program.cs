namespace Employee.App

{
    internal class Program
    {
        static void Main(string[] args)
        {

            Employee.Model.Employee obj1 = new Employee.Model.Employee("John Doe",15000,"permanent");
            Employee.Model.Employee obj2 = new Employee.Model.Employee("Liam Smith", 20000, "permanent");
            Employee.Model.Employee obj3 = new Employee.Model.Employee("Mary James", 15000, "permanent");
            obj1.Display();
            obj2.Display();
            obj3.Display();
            obj2.TotEmployess();


        }
    }
}