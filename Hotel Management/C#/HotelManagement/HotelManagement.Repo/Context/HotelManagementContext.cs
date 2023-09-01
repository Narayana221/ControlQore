using HotelManagement.HotelManagement.Model.Model;
using HotelManagement.Model.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Repo.Context
{
    public class HotelManagementContext : DbContext
    {
        public HotelManagementContext(DbContextOptions options) : base(options) { }

        public DbSet<UserRole> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<BookedRoom> BookedRoom { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<RoomType> RoomType { get; set; }
         public DbSet<Hotel> Hotel { get; set; }

        public DbSet<Location> Location { get; set; }





        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var assemblyName = Assembly.GetExecutingAssembly();
            if (assemblyName is not null) modelBuilder.ApplyConfigurationsFromAssembly(assemblyName);

        }
    }
   
}

