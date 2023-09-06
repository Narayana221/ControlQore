using HotelManagement.HotelManagement.Model.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Model.Model
{
    public class ManagerHotel
    {
        public int ManagerHotelId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }    
    }
}
