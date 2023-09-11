using MediatR;

namespace HotelManagement.Commands.UpdateBookedRoom
{
    public class UpdateBooekdRoomCommand: IRequest<bool>
    {
        public int roomId { get; set; }
        public DateTime checkedIn { get; set; }
        public DateTime checkedOut { get; set; }
    }
}
