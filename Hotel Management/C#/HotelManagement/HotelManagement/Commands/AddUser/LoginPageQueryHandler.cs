using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Commands.AddUser
{
    public class LoginPageQueryHandler : IRequestHandler<LoginPageQuery, string>
    {
        private readonly HotelManagementContext _context;

        public LoginPageQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public async Task<string> Handle(LoginPageQuery request, CancellationToken cancellationToken)
        {

            return await _context.Users.Where(x => x.UserName == request.username && x.Password==request.password).Select(x=>x.Name).FirstOrDefaultAsync(cancellationToken: cancellationToken);
        }
    }
}
