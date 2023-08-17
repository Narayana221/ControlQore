using EmployeeApplication.Model.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : Controller
    {
        private readonly EmployeeApplicationContext? dbContext;
        public LocationController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpPost("AddLocation")]
        public void post2(Location location)
        {
            dbContext?.Add(location);
            dbContext?.SaveChanges();

        }

        [HttpDelete("DeleteById")]

        public void delete(int id) {
            Location location = new Location();
            location.Id = id;
            dbContext?.Remove(location);
            dbContext?.SaveChanges();
        }

        [HttpGet("GetById")]

        public IActionResult Get(int id)
        {
            Location location = new Location();
            return Ok(dbContext?.Locations.Find(id));

        }

        [HttpGet("GetAll")]

        public IActionResult GetAll()
        {
            Location location = new Location();
            return Ok(dbContext?.Locations);

        }

        [HttpPut]

        public void put(Location location)
        {
            dbContext?.Update(location);
            dbContext?.SaveChanges();
        }




    }
}
