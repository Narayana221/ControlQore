using HotelManagement.Dtos;
using HotelManagement.HotelManagement.Model.Model;
using MediatR;

namespace HotelManagement.Queries.LoginPageQuery
{
    public class LoginPageQuery : IRequest<UserDto>
    {
        public string? username { get; set; }

        public string? password { get; set; }
    }
}
