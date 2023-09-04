using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Model.Model
{
    public class Room
    {
        public int RoomId { get; set; }
        public RoomType? RoomType { get; set; }

        public int RoomTypeId { get; set; }
        public Hotel? Hotel { get; set; }
        public int HotelId { get; set; }
        public bool RoomActive { get; set; }
        public float RoomCost { get; set; }

        public BookedRoom BookedRoom { get; set; }
    }
}
