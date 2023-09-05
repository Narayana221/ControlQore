using HotelManagement.Commands.AddBooking;
using HotelManagement.Commands.AddStudent;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class BookingController: ControllerBase
    {
        private readonly IMediator _mediator;

        public BookingController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("AddBooking")]
        
        public async Task<ActionResult<List<int>>> AddBooking([FromBody] BookingCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
