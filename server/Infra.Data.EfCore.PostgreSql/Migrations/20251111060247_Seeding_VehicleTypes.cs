using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.EfCore.PostgreSql.Migrations;

/// <inheritdoc />
public partial class Seeding_VehicleTypes : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        var systemId = Guid.Parse("019a718c-f9af-7526-ad0d-a6b737ca6adc");
        migrationBuilder.InsertData(
            table: "VehicleType",
            columns: new[] { "Id", "Name", "NumberOfPassengers", "IsDeleted", "CreatorId", "CreationTime" },
            values: new object[,]
            {
                { Guid.Parse("019a7188-860d-732a-813b-97c7d029d8f5"), "Truck", 1, false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7188-ed42-74ab-8743-4fa705283deb"), "Bus", 42, false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7189-4423-753a-8cfe-ec2ffb8cda3d"), "Car", 4, false, systemId, DateTime.UtcNow }
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DeleteData(
            table: "VehicleType",
            keyColumn: "Id",
            keyValues: new object[] { "019a7188-860d-732a-813b-97c7d029d8f5", "019a7188-ed42-74ab-8743-4fa705283deb", "019a7189-4423-753a-8cfe-ec2ffb8cda3d" });
    }
}
