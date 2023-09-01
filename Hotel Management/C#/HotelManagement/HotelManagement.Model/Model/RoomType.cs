using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Model.Model
{
    public class RoomType
    {
        public int RoomTypeId { get; set; }
        public string? RoomName { get; set; }

        public int MaxPersons { get; set; }
    }
}
