using HotelManagement.Commands.AddStudent;
using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace HotelManagement.Commands.AddBooking
{
    public class BookingCommandHandler : IRequestHandler<BookingCommand, List<int>>
    {
        private readonly HotelManagementContext _dbContext;

        public BookingCommandHandler(HotelManagementContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<int>> Handle(BookingCommand request, CancellationToken cancellationToken)
        {
            Booking book = new Booking();
            {
                book.UserId = request.UserId;
                book.NoOfRooms = request.NoOfRooms;
                book.StartDate = request.StartDate;
                book.EndDate = request.EndDate;
                book.TotalPrice = request.TotalPrice;
                book.PaymentStatus = request.PaymentStatus;

            }
            _dbContext.Booking.AddAsync(book);
            await _dbContext.SaveChangesAsync();
            int scopeIdentity = book.BookingId;
            List<int> Rooms = new List<int>();

            Rooms = _dbContext.Room.Where(x => x.HotelId == request.HotelId && !_dbContext.BookedRoom.
            Any(y => (request.StartDate >= y.StartDate && request.EndDate <= y.EndDate) && x.RoomId == y.RoomId)).Select(x => x.RoomId).
            Take(request.NoOfRooms).ToList();
            for (int i = 0;i < Rooms.Count; i++)
            {
                BookedRoom room = new BookedRoom();
                {
                    room.StartDate = request.StartDate;
                    room.EndDate = request.EndDate;
                    room.RoomId = Rooms[i];
                    room.BookingId = scopeIdentity;
                }
                _dbContext.BookedRoom.AddAsync(room);
                await _dbContext.SaveChangesAsync();
            }
            return Rooms;
        }
    }
}
