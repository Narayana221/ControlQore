namespace HotelManagement.Dtos
{
    public class ViewHotelDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Location { get; set; }
        public float? Rating { get; set; }
        public int RoomTypeId { get; set; }
        public int RoomId { get; set; }

    }
}
