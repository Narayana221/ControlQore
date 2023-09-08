using HotelManagement.Repo.Context;
using MediatR;
using System.Reflection.Metadata.Ecma335;

namespace HotelManagement.Queries.UserBookings
{
    public class UserBookingQueryHandler : IRequestHandler<UserBookingQuery, bool>
    {
        private readonly HotelManagementContext _context;

        public UserBookingQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public Task<bool> Handle(UserBookingQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
