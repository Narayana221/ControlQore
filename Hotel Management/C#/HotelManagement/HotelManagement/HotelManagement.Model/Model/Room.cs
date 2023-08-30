namespace HotelManagement.HotelManagement.Model.Model
{
    public class Room
    {
        public int RoomId { get; set; }
        public RoomType RoomTypeID { get; set;}
        
        public Hotel HotelID { get; set; }
        public bool RoomStatus { get; set; }
        public float RoomCost { get; set; }
    }
}
