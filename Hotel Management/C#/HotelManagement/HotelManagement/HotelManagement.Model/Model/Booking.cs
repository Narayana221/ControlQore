namespace HotelManagement.HotelManagement.Model.Model
{
    public class Booking
    {
        public int BookingId { get; set; }
        public int NoOfRooms { get; set; }
        public float TotalPrice { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public User UserId { get; set; }

        public bool PaymentStatus { get; set; }
        public float Rating { get; set; }

    }
}
