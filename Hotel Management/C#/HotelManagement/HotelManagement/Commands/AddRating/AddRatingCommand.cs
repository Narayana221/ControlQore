using MediatR;

namespace HotelManagement.Commands.AddRating
{
    public class AddRatingCommand : IRequest<bool>
    {
        public int Rating { get; set; }

        public int BookingId { get; set; }
    }
}
