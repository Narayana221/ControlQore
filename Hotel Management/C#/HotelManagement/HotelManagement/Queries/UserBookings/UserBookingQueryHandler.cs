using HotelManagement.Dtos;
using HotelManagement.Repo.Context;
using MediatR;
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
            return await _context.Booking.Where(x => x.UserId == request.Id).Select(x => x).ToList();
        }
    }
}
