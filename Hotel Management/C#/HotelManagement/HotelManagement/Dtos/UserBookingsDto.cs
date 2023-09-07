namespace HotelManagement.Dtos
{
    public class UserBookingsDto
    {
        public string HotelName { get; set; }
        public int NoOfRooms { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public float TotalPrice { get; set; }
    }
}
