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
            var bookingId = _dbContext.Booking.Find(request.BookingId);
            if(bookingId == null) { }
            else
            bookingId.Rank = request.Rating;

            var roomId = _dbContext.BookedRoom.Where(x => x.BookingId == request.BookingId).Select(x => x.RoomId).FirstOrDefault();
            

            var hotelIdRow = _dbContext.Room.Find(roomId);
            var hotelId = hotelIdRow.HotelId;

            var a = _dbContext.Hotel.Find(hotelId);
            var newRating = (a.Rating + request.Rating)/2;
            a.Rating = newRating;


           await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
