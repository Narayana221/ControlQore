﻿namespace HotelManagement.HotelManagement.Model.Model
{
    public class User
    {
        public int userId { get; set; }
        public int userRoleId { get; set; }
        //public virtual UserRole UserRole { get; set; }

        public string name { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
    }
}
