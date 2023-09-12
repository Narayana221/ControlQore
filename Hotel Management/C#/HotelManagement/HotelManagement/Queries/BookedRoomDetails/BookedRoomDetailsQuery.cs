using HotelManagement.Dtos;
using MediatR;

namespace HotelManagement.Queries.BookedRoomDetails
{
    public class BookedRoomDetailsQuery: IRequest<List<BookedRoomDto>>
    {
        public int id { get; set; }
        public bool flag { get; set; }
    }
}
