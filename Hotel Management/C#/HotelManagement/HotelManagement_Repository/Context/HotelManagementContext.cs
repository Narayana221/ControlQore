using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HotelManagement.HotelManagement.Model.Model;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement_Repository.Context
{
    public class HotelManagementContext: DbContext
    {
        public HotelManagementContext(DbContextOptions options): base(options) { }

        
        
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<User> Users { get; set; }
    
    }
}
