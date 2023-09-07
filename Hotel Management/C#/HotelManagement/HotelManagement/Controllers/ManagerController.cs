using HotelManagement.Commands.AddManager;
using HotelManagement.Commands.AddStudent;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class ManagerController : Controller
    {
        private readonly IMediator _mediator;

        public ManagerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("AddManager")]

        public async Task<ActionResult<bool>> AddManager([FromBody] ManagerCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
