using HotelManagement.HotelManagement.Model.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Repo.Context
{
    public class HotelManagementContext: DbContext
    {
        public HotelManagementContext(DbContextOptions options): base(options) { }

        public DbSet<UserRole> Roles { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
