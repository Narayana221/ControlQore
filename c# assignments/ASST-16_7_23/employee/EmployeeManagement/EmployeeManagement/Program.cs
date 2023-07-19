namespace EmployeeManagement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double bonus = 0;
            Console.WriteLine("Hello, World!");
            Employee ob1 = new Employee(1, "narayanan", new DateTime(2023, 12, 23), "cs", 50000, 'p');
            IBonusCalculator ib = null;
            if ( ob1.JobType == 'p')
            {
                ib = new PermanentEmployeeBonusCalulator();
                
            }
            else if(ob1.JobType == 'c')
            {
                ib = new ContractEmployeeBonusCalculator();
               
            }
            bonus = ib.CalculateBonus(ob1);
            Console.WriteLine($"Bonus of {ob1.Name} with JobType as {ob1.JobType} is {bonus}");
        }
    }
}