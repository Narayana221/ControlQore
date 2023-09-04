using HotelManagement.Dtos;
using HotelManagement.Model.Model;
using HotelManagement.Queries.GetHotel;

using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class HotelController : Controller
    {
        private readonly IMediator _mediator;
        public HotelController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("GetHotel")]

        public async Task<ActionResult<List<ViewHotelDto>>> GetHotel(GetHotelQuery command)
        {
            return await _mediator.Send(command);
        }

    }
}
