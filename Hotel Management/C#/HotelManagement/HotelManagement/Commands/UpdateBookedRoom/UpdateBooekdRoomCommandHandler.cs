﻿using HotelManagement.Commands.AddBooking;
using HotelManagement.Dtos;
using HotelManagement.Repo.Context;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Commands.UpdateBookedRoom
{
    public class UpdateBooekdRoomCommandHandler : IRequestHandler<UpdateBooekdRoomCommand, bool>
    {
        private readonly HotelManagementContext _Context;

        public UpdateBooekdRoomCommandHandler(HotelManagementContext dbContext)
        {
            _Context = dbContext;
        }

        public async Task<bool> Handle(UpdateBooekdRoomCommand request, CancellationToken cancellationToken)
        {
            //var roomId = _Context.BookedRoom.Find(request.roomId);

            var roomId = await _Context.BookedRoom.Where(x => x.RoomId == request.roomId && x.BookingId == request.bookingId).Select(x => x).FirstOrDefaultAsync();
            
            roomId.StartDate = request.checkIn;
            roomId.EndDate = request.checkOut;
            roomId.CheckedIn = request.checkIn;
            roomId.CheckedOut = request.checkOut;
            _Context.SaveChanges();
            return true;
        }
    }
}
