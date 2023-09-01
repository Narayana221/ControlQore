using MediatR;

namespace HotelManagement.Queries.LoginPageQuery
{
    public class LoginPageQuery : IRequest<string>
    {
        public string? username { get; set; }

        public string? password { get; set; }
    }
}
