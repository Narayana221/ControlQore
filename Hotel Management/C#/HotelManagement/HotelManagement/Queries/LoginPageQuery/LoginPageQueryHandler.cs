using HotelManagement.Dtos;
using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Queries.LoginPageQuery
{
    public class LoginPageQueryHandler : IRequestHandler<LoginPageQuery, UserDto>
    {
        private readonly HotelManagementContext _context;

        public LoginPageQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public async Task<UserDto> Handle(LoginPageQuery request, CancellationToken cancellationToken)
        {

            var user = await _context.Users.Where(x => x.userName == request.username)
                .Select(x => new
                {
                    userId = x.userId,
                    userName = x.userName,
                    email = x.email,
                    userRoleId = x.userRoleId,
                    phone = x.phone,
                    name = x.name,
                    password = x.password

                }).FirstOrDefaultAsync(cancellationToken: cancellationToken);
            if (user is null) return null;
            if (user.password == request.password)
            {
                return new UserDto
                {
                    userId = user.userId,
                    userName = user.userName,
                    email = user.email,
                    userRoleId = user.userRoleId,
                    phone = user.phone,
                    name = user.name,
                };
            }
            return null;
        }
    }
}
