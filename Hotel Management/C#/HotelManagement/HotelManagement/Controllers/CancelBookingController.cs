using HotelManagement.Commands.DeleteBooking;
using HotelManagement.Dtos;
using HotelManagement.Queries.BookedRoomDetails;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class CancelBookingController : Controller
    {
        private readonly IMediator _mediator;

        public CancelBookingController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpDelete("Cancel")]
        public async Task<ActionResult<bool>> CancelBooking(DeleteBookingCommand command)
        {
            return await _mediator.Send(command);
        }

    }
}
