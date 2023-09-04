using HotelManagement.Dtos;
using HotelManagement.Model.Model;
using MediatR;

namespace HotelManagement.Queries.GetHotel
{
    public class GetHotelQuery : IRequest<List<ViewHotelDto>>
    {
        public float Rating { get; set; }
        public string LocationName { get; set; }
        public DateTime StartDate { get; set;}
        public DateTime EndDate { get; set;}

        public int NoOfRooms { get; set; }
    }
}
