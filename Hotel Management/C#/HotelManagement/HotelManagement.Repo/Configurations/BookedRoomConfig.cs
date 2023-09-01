using HotelManagement.Model.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelManagement.Repo.Configurations
{
    public class BookedRoomConfig : IEntityTypeConfiguration<BookedRoom>

    {
        public void Configure(EntityTypeBuilder<BookedRoom> builder)
        {
            //builder.Property(x => x.CheckedIn).IsRequired(false);
            //builder.Property(x => x.CheckedOut).IsRequired(false);
        }
    }
}
