using HotelManagement.Dtos;
using HotelManagement.Model.Model;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Queries.GetHotel
{
    public class GetHotelQueryHandler : IRequestHandler<GetHotelQuery, List<ViewHotelDto>>
    {
        private readonly HotelManagementContext _context;

        public GetHotelQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }



        public async Task<List<ViewHotelDto>> Handle(GetHotelQuery request, CancellationToken cancellationToken)
        {
            // return await _context.Hotel.Where(x => x.Rating > request.Rating).Select(x => x).ToListAsync();


            /*return await _context.Location.Join(_context.Hotel, x => x.LocationId, y => y.LocationId, (x, y) =>
            new
            {
                Location = x.Name,
                HotelName = y.Name
            }).Select(x => new Location = x.Name,
                HotelName = y.Name).ToListAsync();*/
            return await _context.Hotel.Where(x => x.Location.Name == request.LocationName &&  x.Rating > request.Rating)
                .Select(x => new ViewHotelDto
                {
                    Id = x.HotelId,
                    Name = x.Name,
                    Location  = x.Location.Name,
                    Rating = x.Rating,
                })
                .ToListAsync();

        }
    }
}
