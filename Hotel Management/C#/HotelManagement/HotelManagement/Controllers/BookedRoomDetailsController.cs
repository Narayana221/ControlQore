using HotelManagement.Dtos;
using HotelManagement.Queries.BookedRoomDetails;
using HotelManagement.Queries.UserBookings;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class BookedRoomDetailsController: ControllerBase
    {
        private readonly IMediator _mediator;
        public BookedRoomDetailsController(IMediator mediator) 
        {
            _mediator = mediator;

        }

        [HttpGet("GetRoomDetails")]
        public async Task<ActionResult<List<BookedRoomDto>>> GetRoomDetails(BookedRoomDetailsQuery command)
        {
            return await _mediator.Send(command);
        }
    }
}
