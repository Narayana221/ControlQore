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
            var flag = _dbContext.Users.Where(x => x.email == request.Email || x.userName == request.UserName).FirstOrDefault();
            if (flag == null)
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

                //Location location = new Location
                //{ 
                //    Name = request.LocationName
                //};


                Hotel hotel = new Hotel
                {
                    Name = request.HotelName,
                    //Location = location,
                    LocationId = request.LocationId,
                    Rating = 5

                };

                ManagerHotel managerHotel = new ManagerHotel
                {
                    User = user,
                    Hotel = hotel,
                };



                _dbContext.Users.Add(user);
                // _dbContext.Location.Add(location);
                _dbContext.Hotel.Add(hotel);
                _dbContext.ManagerHotel.Add(managerHotel);
                await _dbContext.SaveChangesAsync(cancellationToken);
                return true;
            }
            else
            {
                return false;
            }
            
        }
    }
}
