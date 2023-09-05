using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelManagement.Repo.Migrations
{
    /// <inheritdoc />
    public partial class updatetable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TotPrice",
                table: "Booking",
                newName: "TotalPrice");

            migrationBuilder.AlterColumn<int>(
                name: "Rank",
                table: "Booking",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TotalPrice",
                table: "Booking",
                newName: "TotPrice");

            migrationBuilder.AlterColumn<int>(
                name: "Rank",
                table: "Booking",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
