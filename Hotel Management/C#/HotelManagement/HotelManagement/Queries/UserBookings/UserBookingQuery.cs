using MediatR;

namespace HotelManagement.Queries.UserBookings
{
    public class UserBookingQuery: IRequest<bool>
    {
        public int Id { get; set; }
    }
}
