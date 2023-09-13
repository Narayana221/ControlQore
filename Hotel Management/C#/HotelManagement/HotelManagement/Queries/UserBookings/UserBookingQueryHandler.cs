using HotelManagement.Dtos;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace HotelManagement.Queries.UserBookings
{
    public class UserBookingQueryHandler:IRequestHandler<UserBookingQuery, List<UserBookingsDto>>
    {
        private readonly HotelManagementContext _context;

        public UserBookingQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public async Task<List<UserBookingsDto>> Handle(UserBookingQuery request, CancellationToken cancellationToken)
        {
            return await _context.BookedRoom.Where(x => x.Booking.UserId == request.Id)
                .Select(x => new UserBookingsDto
                {
                    HotelName = x.Room.Hotel.Name,
                    NoOfRooms = x.Booking.NoOfRooms,
                    StartDate = x.Booking.StartDate,
                    EndDate = x.Booking.EndDate,
                    TotalPrice = x.Booking.TotalPrice,
                    RoomId = x.RoomId,
                    BookedRoomId = x.BookedRoomId,
                    CheckOutStatus = x.CheckedOut,
                    BookingId = x.Booking.BookingId,
                    Rating = x.Booking.Rank

                }).Distinct().ToListAsync();
        }
           
    }
}
