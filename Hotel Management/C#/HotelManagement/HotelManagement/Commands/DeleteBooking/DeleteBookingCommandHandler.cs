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
            BookedRoom bookedRoom = new BookedRoom();
            {
                bookedRoom.BookedRoomId = request.BookedRoomId;
               
            }
            _dbContext.Remove(bookedRoom);
            await _dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
