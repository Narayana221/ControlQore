using HotelManagement.Dtos;
using MediatR;

namespace HotelManagement.Queries.RoomType
{
    public class RoomTypeQuery : IRequest<List<ViewRoomTypeDto>>
    {
        public int HotelId { get; set; }

        public int NoOfRooms { get; set; }

        public float Rating { get; set; }
        public int LocationId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        
    }
}
