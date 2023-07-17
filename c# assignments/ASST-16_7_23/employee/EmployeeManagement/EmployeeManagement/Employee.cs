using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfJoin { get; set; }

        public string Department { get; set; }
        public double Salary { get; set; }
        public char JobType { get; set; }

        public Employee(int id, string name, DateTime dateOfJoin, string department, double salary, char jobType)
        {
            Id = id;
            Name = name;
            DateOfJoin = dateOfJoin;
            Department = department;
            Salary = salary;
            JobType = jobType;
        }

      
    }

    public interface IBonusCalculator
    {
        double CalculateBonus(Employee employee);
    }

    public class PermanentEmployeeBonusCalulator : IBonusCalculator
    {
        public double CalculateBonus(Employee employee)
        {
            return (0.02 * employee.Salary);
        }
    }

    public class ContractEmployeeBonusCalculator : IBonusCalculator
    {
        public double CalculateBonus(Employee employee)
        {
            return (0.15 * employee.Salary);
        }
    }

    


}
