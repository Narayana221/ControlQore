namespace HotelManagement.Dtos
{
    public class BookedRoomDto
    {
       
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int RoomId { get; set; }
        public string HotelName { get; set; }

    }
}
