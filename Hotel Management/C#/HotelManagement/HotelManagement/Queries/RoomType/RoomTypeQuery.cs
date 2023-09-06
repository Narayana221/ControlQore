using HotelManagement.Dtos;
using MediatR;

namespace HotelManagement.Queries.RoomType
{
    public class RoomTypeQuery : IRequest<List<ViewRoomTypeDto>>
    {
        public int HotelId { get; set; }
    }
}
