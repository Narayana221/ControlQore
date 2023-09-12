using HotelManagement.Dtos;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Queries.BookedRoomDetails
{
    public class BookedRoomDetailQueryHandler : IRequestHandler<BookedRoomDetailsQuery, List<BookedRoomDto>>
    {
        private readonly HotelManagementContext _context;
        public BookedRoomDetailQueryHandler(HotelManagementContext context)
        {
            _context = context;
        }

        public async Task<List<BookedRoomDto>> Handle(BookedRoomDetailsQuery request, CancellationToken cancellationToken)
        {
            //var hotelDetails =  _context.ManagerHotel.Where(x=> x.UserId == request.id).
            //    Select(x => new 
            //    {
            //        x.User.name,
            //        x.Hotel.Name,
            //        hotelId = x.HotelId,
            //    }).ToListAsync();
            //var rooms = _context.BookedRoom.Where(x => x.Room.HotelId == hotelDetails.hotelId).Select(x=>x.RoomId).ToListAsync();
            if (request.flag == false)
            {
                var hotelID = await _context.ManagerHotel.Where(x => x.UserId == request.id).Select(x => x.HotelId).FirstOrDefaultAsync();
                return await _context.BookedRoom.Where(x => x.Room.HotelId == hotelID && (x.CheckedOut >= DateTime.Now || x.CheckedOut == null)).
                    Select(x => new BookedRoomDto
                    {
                        StartDate = x.StartDate,
                        EndDate = x.EndDate,
                        RoomId = x.RoomId,
                        BookingId = x.BookingId,
                        HotelName = x.Room.Hotel.Name   
                    }).ToListAsync();
            }
            else
            {
                var hotelID = await _context.ManagerHotel.Where(x => x.UserId == request.id).Select(x => x.HotelId).FirstOrDefaultAsync();
                return await _context.BookedRoom.Where(x => x.Room.HotelId == hotelID).
                    Select(x => new BookedRoomDto
                    {
                        StartDate = x.StartDate,
                        EndDate = x.EndDate,
                        RoomId = x.RoomId,
                        HotelName = x.Room.Hotel.Name
                    }).ToListAsync();
            }
            

            

            

            
            
        }
    }
}