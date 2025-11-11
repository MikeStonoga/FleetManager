using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.EfCore.PostgreSql.Migrations;

/// <inheritdoc />
public partial class Seeding_Fleets : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        var systemId = Guid.Parse("019a718c-f9af-7526-ad0d-a6b737ca6adc");
        migrationBuilder.InsertData(
            table: "Fleet",
            columns: new[] { "Id", "Name", "IsDeleted", "CreatorId", "CreationTime" },
            values: new object[,]
            {
                { Guid.Parse("019a72ec-a058-71dc-946f-3c155fd9cedf"), "Fleet A", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a72ec-c7b0-74bc-b2e7-efcec7bcb1b2"), "Fleet B", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a72ec-e010-72cc-94a8-87a1d7cc5f0d"), "Fleet C", false, systemId, DateTime.UtcNow }
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DeleteData(
            table: "Fleet",
            keyColumn: "Id",
            keyValues: new object[] { "019a72ec-a058-71dc-946f-3c155fd9cedf", "019a72ec-c7b0-74bc-b2e7-efcec7bcb1b2", "019a72ec-e010-72cc-94a8-87a1d7cc5f0d" });
    }
}
