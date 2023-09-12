using HotelManagement.Commands.AddRating;
using HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Commands.DeleteBooking
{
    public class DeleteBookingCommandHandler : IRequestHandler<DeleteBookingCommand, bool>
    {


        private readonly HotelManagementContext _dbContext;

        public DeleteBookingCommandHandler(HotelManagementContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> Handle(DeleteBookingCommand request, CancellationToken cancellationToken)
        {
            Booking booking = new Booking();
            {
                booking.BookingId = request.BookingId;
            }
            _dbContext.Remove(booking);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
