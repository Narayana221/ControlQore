using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelFillterController : Controller
    {
       private readonly IMediator _mediator;

        public HotelFillterController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpPost("ksjdhgf")]

        public  void post()
        {

        }
    }
}
