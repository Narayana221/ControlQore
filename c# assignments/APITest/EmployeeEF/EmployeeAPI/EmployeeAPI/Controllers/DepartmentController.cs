using EmployeeApplication.Model.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : Controller
    {
        private readonly EmployeeApplicationContext? dbContext;
        public DepartmentController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost("Add")]

        public void Add(DepartmentClone departmentclone)
        {
            Department department = new Department();
            department.Name = departmentclone.Name;
            department.LocationId = departmentclone.LocationId;
            dbContext?.Add(department);
            dbContext?.SaveChanges();

        }

        [HttpDelete("Delete")]
        public void Delete(int id, Department department)
        {
            department.Id = id;
            dbContext?.Remove(department);
            dbContext?.SaveChanges();
        }

        [HttpGet("GetById")]

        public IActionResult Get(int id,Department dept)
        {
            return Ok(dbContext?.Department.Find(id));
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            return Ok(dbContext?.Department);
        }

        [HttpPut("Update")]
        public void put(DepartmentClone departmentClone, int id)
        {
            var x = dbContext?.Department.Find(id);
            x!.Name = departmentClone.Name;
            x.LocationId = departmentClone.LocationId;
            dbContext?.SaveChanges();
        }

    }
}
