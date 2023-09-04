using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelManagement.Repo.Migrations
{
    /// <inheritdoc />
    public partial class roomupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_BookedRoom_RoomId",
                table: "BookedRoom");

            migrationBuilder.CreateIndex(
                name: "IX_BookedRoom_RoomId",
                table: "BookedRoom",
                column: "RoomId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_BookedRoom_RoomId",
                table: "BookedRoom");

            migrationBuilder.CreateIndex(
                name: "IX_BookedRoom_RoomId",
                table: "BookedRoom",
                column: "RoomId");
        }
    }
}
