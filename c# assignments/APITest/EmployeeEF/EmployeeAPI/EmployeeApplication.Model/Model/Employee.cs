using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeApplication.Model.Model
{
    public class Employee
    {
        public int Id { get; set; } 
        public string? FirstName { get; set; }
        public string LastName { get; set; } = string.Empty;
        public string EMail { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;

        public int departmentId { get; set; }
        public Department? department { get; set; }
    }
}
