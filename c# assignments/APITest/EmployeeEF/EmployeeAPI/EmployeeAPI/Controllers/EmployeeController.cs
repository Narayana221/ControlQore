using EmployeeApplication.Model.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly EmployeeApplicationContext? dbContext;

        public EmployeeController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost("AddEmployee")]
        public void post(EmployeeClone empC)
        {
            Employee emp = new Employee
            {
                FirstName = empC.FirstName,
                LastName = empC.LastName,
                EMail = empC.EMail,
                Phone = empC.Phone,
                departmentId = empC.departmentId
            };
            dbContext?.Add(emp);
            dbContext?.SaveChanges();
        }

        [HttpDelete("Delete")]
        public void delete(int id)
        {
            Employee employee = new Employee();
            employee.Id = id;
            dbContext?.Remove(employee);
            dbContext?.SaveChanges();
        }

        [HttpGet("GetById")]
        public IActionResult Get(int id)
        {
            return Ok(dbContext?.Employees.Find(id));
        }



        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            return Ok(dbContext?.Employees);
        }

        [HttpPut("Update")]
        public void put(EmployeeClone employeeClone, int id)
        {
            var x = dbContext?.Employees.Find(id);
            x.FirstName = employeeClone.FirstName;
            x.LastName = employeeClone.LastName;
            x.EMail = employeeClone.EMail;
            x.Phone = employeeClone.Phone;
            x.departmentId = employeeClone.departmentId;
            
            dbContext?.SaveChanges();
        }
    }
}
