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
            await _dbContext.Booking.AddAsync(book);
            //await _dbContext.SaveChangesAsync();
            //int scopeIdentity = book.BookingId;
            //List<int> Rooms = new List<int>();
           
            var Rooms = _dbContext.Room.Where(x => x.HotelId == request.HotelId && x.RoomTypeId== request.RoomTypeId && !x.BookedRoom.
            Any(y => (request.StartDate >= y.StartDate && request.EndDate <= y.EndDate) ||
            (request.StartDate < y.StartDate && request.EndDate > y.StartDate) ||
            (request.StartDate > y.StartDate && request.StartDate < y.EndDate)
           && x.RoomId == y.RoomId)).
            Take(request.NoOfRooms).Select(x=> x.RoomId).ToList();
            var bookedRooms = Rooms.Select(x =>
            {
                return new BookedRoom
                {
                    StartDate = request.StartDate,
                    EndDate = request.EndDate,
                    RoomId = x,
                    Booking = book
                };
            });
            await _dbContext.BookedRoom.AddRangeAsync(bookedRooms);
            await _dbContext.SaveChangesAsync();

            return Rooms;
        }
    }
}
