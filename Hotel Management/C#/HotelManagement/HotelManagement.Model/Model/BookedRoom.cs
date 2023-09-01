using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Model.Model
{
    public class BookedRoom
    {
        public int BookedRoomId { get; set; }
        public Booking? Booking { get; set; }
        public int BookingId { get; set; }
        public Room? Room { get; set; }
        public int RoomId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
         public bool IsCanelled { get; set; }
        public DateTime CheckedIn { get; set; }
        public DateTime CheckedOut { get; set;
        }
    }
}
