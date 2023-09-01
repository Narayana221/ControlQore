using HotelManagement.HotelManagement.Model.Model;
using MediatR;

namespace HotelManagement.Commands.AddUser
{
    public class LoginPageQuery : IRequest<string>
    {
        public string? username { get; set; }

        public string? password { get; set; }
    }
}
