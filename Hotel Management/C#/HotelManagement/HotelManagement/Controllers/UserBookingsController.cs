using HotelManagement.Dtos;
using HotelManagement.Queries.GetHotel;
using HotelManagement.Queries.UserBookings;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class UserBookingsController
    {
        private readonly IMediator _mediator;

        public UserBookingsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("GetUserBookings")]

        public async Task<ActionResult<List<UserBookingsDto>>> GetUserBookings(UserBookingQuery command)
        {
            return await _mediator.Send(command);
        }
    }
}
