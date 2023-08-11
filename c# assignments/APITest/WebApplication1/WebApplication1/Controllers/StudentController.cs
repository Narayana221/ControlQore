using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Repo;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpGet]

        public IActionResult getDetails()
        {
            studentManagement ob = new studentManagement();
            
            return Ok(ob.GetStudentDetail());

        }
    }
}
