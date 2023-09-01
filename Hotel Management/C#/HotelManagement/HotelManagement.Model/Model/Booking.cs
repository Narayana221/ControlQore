using HotelManagement.HotelManagement.Model.Model;


namespace HotelManagement.Model.Model
{
    public class Booking
    {
        public int BookingId { get; set; }
        public int NoOfRooms { get; set; }
        public float TotPrice { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public User? User { get; set; }
        public int UserId { get; set; }
        public bool PaymentStatus { get; set; }
        public int Rank { get; set; }
    }
}
