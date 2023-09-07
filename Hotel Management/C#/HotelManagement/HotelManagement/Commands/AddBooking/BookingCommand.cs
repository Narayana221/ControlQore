using HotelManagement.HotelManagement.Model.Model;
using MediatR;

namespace HotelManagement.Commands.AddBooking
{
    public class BookingCommand: IRequest<List<int>>
    {
        public int NoOfRooms { get; set; }
        public float TotalPrice { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int UserId { get; set; }
        public bool PaymentStatus { get; set; }

        public int HotelId { get; set; }
        public int RoomTypeId { get; set; }

        
        
    }
}
