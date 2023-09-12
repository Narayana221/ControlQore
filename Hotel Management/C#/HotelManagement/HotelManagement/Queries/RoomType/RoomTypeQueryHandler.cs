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
            //return await _context.Room.Where(x => x.HotelId == request.HotelId && x.RoomActive == true).
            //       Select(x => new ViewRoomTypeDto
            //       {
            //           RoomTypeId = x.RoomTypeId,
            //           RoomName = x.RoomType.RoomName,
            //           RoomCost = x.RoomCost
            //       }).Distinct().ToListAsync();

            var availRooms = await _context.Room
                .Where(x => x.Hotel.LocationId == request.LocationId && x.HotelId == request.HotelId && x.Hotel.Rating > request.Rating
           && !x.BookedRoom
           .Any(y => (request.StartDate >= y.StartDate && request.EndDate <= y.EndDate) ||
            (request.StartDate < y.StartDate && request.EndDate > y.StartDate) ||
            (request.StartDate > y.StartDate && request.StartDate < y.EndDate)
           && x.RoomId == y.RoomId))
           .Select(x => new
           {
               Id = x.Hotel.HotelId,
               x.Hotel.Name,
               Location = x.Hotel.Location.Name,
               x.Hotel.Rating,
               x.RoomTypeId,
               x.RoomId,
               x.RoomType.RoomName
              
           }).ToListAsync();

            var selectedHotelRooms = availRooms.GroupBy(x => new { x.RoomTypeId, x.Id })
                .Select(x => new ViewRoomCount
                {
                    Id = x.Key.Id,
                    RoomTypeId = x.Key.RoomTypeId,
                    CountofRooms = x.Count()
                }).Where(x => x.CountofRooms >= request.NoOfRooms)
                .Select(x => new { x.Id, x.RoomTypeId })
                .ToList();

            var roomIds = availRooms.Where(x => selectedHotelRooms.Any(y => x.Id == y.Id && x.RoomTypeId == y.RoomTypeId)).Select(x => x.RoomId);
            return await _context.Room
                .Include(x => x.Hotel)
                .ThenInclude(x => x.Location)
                .Where(x => roomIds.Contains(x.RoomId))
                .GroupBy(x => new
                {
                    x.RoomTypeId,
                    x.RoomType.RoomName,
                    x.RoomCost
                   
                })
                .Select(x => new ViewRoomTypeDto
                {
                    RoomTypeId = x.Key.RoomTypeId,
                    RoomName = x.Key.RoomName,
                    RoomCost = x.Key.RoomCost
                })
                .ToListAsync();


        }

      
    }
}
