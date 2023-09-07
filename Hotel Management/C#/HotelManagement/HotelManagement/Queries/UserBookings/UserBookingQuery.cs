using HotelManagement.Dtos;
using MediatR;

namespace HotelManagement.Queries.UserBookings
{
    public class UserBookingQuery: IRequest<List<UserBookingsDto>>
    {
        public int Id { get; set; }
    }
}
