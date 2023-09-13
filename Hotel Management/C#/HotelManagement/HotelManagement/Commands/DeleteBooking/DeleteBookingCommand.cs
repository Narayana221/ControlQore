using MediatR;

namespace HotelManagement.Commands.DeleteBooking
{
    public class DeleteBookingCommand: IRequest<bool>
    {
        public int BookingId { get; set; }

        public int BookedRoomId { get; set; }
    }
}
