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
                Name = request.Name,
                UserRoleId = request.UserRoleId,
                Email = request.Email,
                Phone = request.Phone,
                UserName = request.UserName,
                Password = request.Password,   
            };
            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
