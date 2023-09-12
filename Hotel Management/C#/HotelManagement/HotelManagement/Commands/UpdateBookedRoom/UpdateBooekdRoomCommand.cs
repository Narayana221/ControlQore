using MediatR;

namespace HotelManagement.Commands.UpdateBookedRoom
{
    public class UpdateBooekdRoomCommand: IRequest<bool>
    {
        public int roomId { get; set; }
        public DateTime checkIn { get; set; }
        public DateTime checkOut { get; set; }
        public int bookingId { get; set; }
    }
}
