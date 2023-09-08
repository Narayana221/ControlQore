using HotelManagement.Commands.AddRating;
using HotelManagement.Dtos;
using HotelManagement.Queries.UserBookings;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class RatingController : Controller
    {
        private readonly IMediator _mediator;

        public RatingController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPut("Rating")]

        public async Task<ActionResult<bool>> AddRating(AddRatingCommand command)
        {
            return await _mediator.Send(command);
        }
    }
}
