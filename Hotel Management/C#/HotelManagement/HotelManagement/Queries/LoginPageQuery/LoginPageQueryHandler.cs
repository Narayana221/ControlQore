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

            return await _context.Users.Where(x => x.userName == request.username && x.password == request.password)
                .Select(x => new UserDto
                {
                    userId = x.userId, 
                    userName = x.userName,
                    email = x.email,
                    userRoleId = x.userRoleId,
                    phone = x.phone,
                    name = x.name

                }).FirstOrDefaultAsync(cancellationToken: cancellationToken);

        }
    }
}
