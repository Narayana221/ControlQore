using HotelManagement.Commands.AddStudent;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.Identity.Client;

namespace HotelManagement.Commands.AddRating
{
    public class AddRatingCommandHandler : IRequestHandler<AddRatingCommand, bool>
    {
  
        private readonly HotelManagementContext _dbContext;

        public AddRatingCommandHandler(HotelManagementContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> Handle(AddRatingCommand request, CancellationToken cancellationToken)
        {
            var x = _dbContext.Booking.Find(request.BookingId);
            x.Rank = request.Rating;

            var y = _dbContext.BookedRoom.Find(request.BookingId);
            int z = y.RoomId;

            var s = _dbContext.Room.Find(z);
            var t = s.HotelId;

            var a = _dbContext.Hotel.Find(t);
            var newRating = (a.Rating + request.Rating)/2;
            a.Rating = newRating;


           await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
