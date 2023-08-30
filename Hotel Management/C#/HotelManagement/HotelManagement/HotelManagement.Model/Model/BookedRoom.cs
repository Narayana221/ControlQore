namespace HotelManagement.HotelManagement.Model.Model
{
    public class BookedRoom
    {

        public int BookedRoomId { get; set; }
        public Booking BookingId { get; set; }
        public Room RoomId { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsCancelled { get; set; }
        public DateTime? CheckedIn { get; set; }
        public DateTime? CheckedOut { get; set; }
    }
}
