using HotelManagement.Commands.AddStudent;
using HotelManagement.Commands.UpdateBookedRoom;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class UpdateBooekdRoomCoontroller: ControllerBase
    {
        private readonly IMediator _mediator;

        public UpdateBooekdRoomCoontroller(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpPost("UpdateBookedRoom")]

        public async Task<ActionResult<bool>> UpdateBookedRoom([FromBody] UpdateBooekdRoomCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
