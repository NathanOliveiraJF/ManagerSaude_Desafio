using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumInfrastructure.Migrations
{
    public partial class updateDateProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "AnoLancamento",
                table: "Album",
                type: "nvarchar(4)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "date");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "AnoLancamento",
                table: "Album",
                type: "date",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(4)");
        }
    }
}
