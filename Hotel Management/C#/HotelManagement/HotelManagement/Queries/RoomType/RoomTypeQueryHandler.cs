using HotelManagement.Dtos;
using HotelManagement.Queries.GetHotel;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Queries.RoomType
{
    public class RoomTypeQueryHandler : IRequestHandler<RoomTypeQuery, List<ViewRoomTypeDto>>
    {
        private readonly HotelManagementContext _context;

        public RoomTypeQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }
        public async Task<List<ViewRoomTypeDto>> Handle(RoomTypeQuery request, CancellationToken cancellationToken)
        {
            return await _context.Room.Where(x => x.HotelId == request.HotelId && x.RoomActive == true).
                   Select(x => new ViewRoomTypeDto
                   {   RoomTypeId = x.RoomTypeId,
                       RoomName = x.RoomType.RoomName,
                       RoomCost = x.RoomCost
                   }).Distinct().ToListAsync();

        }

      
    }
}
