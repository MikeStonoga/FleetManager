using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.EfCore.PostgreSql.Migrations;

/// <inheritdoc />
public partial class Seeding_Vehicles : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        var systemId = Guid.Parse("019a718c-f9af-7526-ad0d-a6b737ca6adc");

        // VehicleType IDs
        var truckTypeId = Guid.Parse("019a7188-860d-732a-813b-97c7d029d8f5");
        var busTypeId = Guid.Parse("019a7188-ed42-74ab-8743-4fa705283deb");
        var carTypeId = Guid.Parse("019a7189-4423-753a-8cfe-ec2ffb8cda3d");

        // Fleet IDs
        var fleetA = Guid.Parse("019a72ec-a058-71dc-946f-3c155fd9cedf");
        var fleetB = Guid.Parse("019a72ec-c7b0-74bc-b2e7-efcec7bcb1b2");
        var fleetC = Guid.Parse("019a72ec-e010-72cc-94a8-87a1d7cc5f0d");

        migrationBuilder.InsertData(
            table: "Vehicle",
            columns: new[]
            {
                "Id",
                "FleetId",
                "TypeId",
                "ChassisSeries",
                "ChassisNumber",
                "Color",
                "IsDeleted",
                "CreatorId",
                "CreationTime"
            },
            values: new object[,]
            {
                // ---------- Fleet A (Trucks) ----------
                { Guid.Parse("019a7300-a001-71aa-9111-100000000001"), fleetA, truckTypeId, "TRK", 1001L, "White", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-a002-71aa-9111-100000000002"), fleetA, truckTypeId, "TRK", 1002L, "Blue", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-a003-71aa-9111-100000000003"), fleetA, truckTypeId, "TRK", 1003L, "Red", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-a004-71aa-9111-100000000004"), fleetA, truckTypeId, "TRK", 1004L, "Gray", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-a005-71aa-9111-100000000005"), fleetA, truckTypeId, "TRK", 1005L, "Black", false, systemId, DateTime.UtcNow },

                // ---------- Fleet B (Buses) ----------
                { Guid.Parse("019a7300-b001-72bb-9222-200000000001"), fleetB, busTypeId, "BUS", 2001L, "Yellow", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-b002-72bb-9222-200000000002"), fleetB, busTypeId, "BUS", 2002L, "Green", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-b003-72bb-9222-200000000003"), fleetB, busTypeId, "BUS", 2003L, "White", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-b004-72bb-9222-200000000004"), fleetB, busTypeId, "BUS", 2004L, "Blue", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-b005-72bb-9222-200000000005"), fleetB, busTypeId, "BUS", 2005L, "Gray", false, systemId, DateTime.UtcNow },

                // ---------- Fleet C (Mixed) ----------
                { Guid.Parse("019a7300-c001-73cc-9333-300000000001"), fleetC, truckTypeId, "TRK", 3001L, "Silver", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-c002-73cc-9333-300000000002"), fleetC, truckTypeId, "TRK", 3002L, "White", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-c003-73cc-9333-300000000003"), fleetC, carTypeId,   "CAR", 3003L, "Red", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-c004-73cc-9333-300000000004"), fleetC, carTypeId,   "CAR", 3004L, "Black", false, systemId, DateTime.UtcNow },
                { Guid.Parse("019a7300-c005-73cc-9333-300000000005"), fleetC, busTypeId,   "BUS", 3005L, "Blue", false, systemId, DateTime.UtcNow }
            }
        );
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DeleteData(
            table: "Vehicle",
            keyColumn: "Id",
            keyValues: new object[]
            {
                // Fleet A
                "019a7300-a001-71aa-9111-100000000001",
                "019a7300-a002-71aa-9111-100000000002",
                "019a7300-a003-71aa-9111-100000000003",
                "019a7300-a004-71aa-9111-100000000004",
                "019a7300-a005-71aa-9111-100000000005",

                // Fleet B
                "019a7300-b001-72bb-9222-200000000001",
                "019a7300-b002-72bb-9222-200000000002",
                "019a7300-b003-72bb-9222-200000000003",
                "019a7300-b004-72bb-9222-200000000004",
                "019a7300-b005-72bb-9222-200000000005",

                // Fleet C
                "019a7300-c001-73cc-9333-300000000001",
                "019a7300-c002-73cc-9333-300000000002",
                "019a7300-c003-73cc-9333-300000000003",
                "019a7300-c004-73cc-9333-300000000004",
                "019a7300-c005-73cc-9333-300000000005"
            });
    }
}
