using HotelManagement.HotelManagement.Model.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Repository.Context
{
    public class HotelManagement:DbContext
    {
        public HotelManagement(DbContextOptions option) : base(option) { }

        public DbSet<UserRole> Roles { get; set; }
        public DbSet<User> Users { get;}


    }
}
