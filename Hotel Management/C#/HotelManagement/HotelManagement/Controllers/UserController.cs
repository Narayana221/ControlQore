using HotelManagement.Commands.AddStudent;
using HotelManagement.Dtos;
using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Queries.LoginPageQuery;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagement.Controllers
{
    public class UserController: ControllerBase
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("AddUser")]

        public async Task<ActionResult<bool>> AddUser([FromBody]AddUserCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        [HttpPost("GetUser")]

        public async Task<ActionResult<UserDto>> GetUser([FromBody]LoginPageQuery command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
