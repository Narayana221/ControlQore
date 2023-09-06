using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;

namespace HotelManagement.Commands.AddStudent
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommand, bool>
    {
        private readonly HotelManagementContext _dbContext;

        public AddUserCommandHandler(HotelManagementContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> Handle(AddUserCommand request, CancellationToken cancellationToken)
        {
            User user = new User
            {
                name = request.Name,
                userRoleId = request.UserRoleId,
                email = request.Email,
                phone = request.Phone,
                userName = request.UserName,
                password = request.Password,   
            };
            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
