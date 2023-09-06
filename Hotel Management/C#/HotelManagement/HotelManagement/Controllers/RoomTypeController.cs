using HotelManagement.Dtos;
using HotelManagement.Queries.GetHotel;
using HotelManagement.Queries.RoomType;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class RoomTypeController : Controller
    {
        private readonly IMediator _mediator;

        public RoomTypeController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("GetRoomType")]

        public async Task<ActionResult<List<ViewRoomTypeDto>>> RoomType(RoomTypeQuery command)
        {
            return await _mediator.Send(command);
        }
    }
}
