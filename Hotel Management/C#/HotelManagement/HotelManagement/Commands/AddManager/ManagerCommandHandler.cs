using HotelManagement.Commands.AddStudent;
using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;

namespace HotelManagement.Commands.AddManager
{
    public class ManagerCommandHandler : IRequestHandler<ManagerCommand, bool>
    {
        private readonly HotelManagementContext _dbContext;

        public ManagerCommandHandler(HotelManagementContext dbContext)
        {
            _dbContext = dbContext;
        }
        public  async Task<bool> Handle(ManagerCommand request, CancellationToken cancellationToken)
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

            Location location = new Location
            { 
                Name = request.LocationName
            };


            Hotel hotel = new Hotel
            { 
                Name = request.HotelName,
                Location = location,
            };



            _dbContext.Users.Add(user);
            _dbContext.Location.Add(location);
            _dbContext.Hotel.Add(hotel);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
