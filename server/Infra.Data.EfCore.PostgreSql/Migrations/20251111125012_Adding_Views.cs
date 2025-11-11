using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.EfCore.PostgreSql.Migrations;

/// <inheritdoc />
public partial class Adding_Views : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        const string CREATE_VIEW_VEHICLE_TYPE = """
CREATE VIEW "ViewVehicleType" AS
SELECT 
    vt."Id",
    vt."Code",
    vt."Name",
    vt."NumberOfPassengers",
    COUNT(v."Id") AS "VehiclesCount",
    vt."CreatorId",
    vt."CreationTime",
    vt."LastModifierId",
    vt."LastModificationTime"
FROM "VehicleType" vt
LEFT JOIN "Vehicle" v ON v."TypeId" = vt."Id" AND v."IsDeleted" = FALSE
WHERE vt."IsDeleted" = FALSE
GROUP BY 
    vt."Id",
    vt."Code",
    vt."Name",
    vt."NumberOfPassengers",
    vt."CreatorId",
    vt."CreationTime",
    vt."LastModifierId",
    vt."LastModificationTime"
""";
        migrationBuilder.Sql(CREATE_VIEW_VEHICLE_TYPE);

        const string CREATE_VIEW_FLEET = """
CREATE VIEW "ViewFleet" AS
SELECT 
    f."Id",
    f."Code",
    f."Name",
    COUNT(v."Id") AS "VehicleCount",
    f."CreatorId",
    f."CreationTime",
    f."LastModifierId",
    f."LastModificationTime",
    f."IsDeleted",
    f."DeleterId",
    f."DeletionTime"
FROM "Fleet" f
LEFT JOIN "Vehicle" v ON v."FleetId" = f."Id" AND v."IsDeleted" = FALSE
WHERE f."IsDeleted" = FALSE
GROUP BY 
    f."Id",
    f."Code",
    f."Name",
    f."CreatorId",
    f."CreationTime",
    f."LastModifierId",
    f."LastModificationTime",
    f."IsDeleted",
    f."DeleterId",
    f."DeletionTime";

""";
        migrationBuilder.Sql(CREATE_VIEW_FLEET);

        const string CREATE_VIEW_VEHICLE = """
CREATE VIEW "ViewVehicle" AS
SELECT 
    v."Id",
    v."Code",
    v."FleetId",
    f."Code" AS "FleetCode",
    f."Name" AS "FleetName",
    v."ChassisSeries",
    v."ChassisNumber",
    (v."ChassisSeries" || v."ChassisNumber") AS "ChassisId",
    v."TypeId",
    vt."Code" AS "TypeCode",
    vt."Name" AS "TypeName",
    v."Color",
    vt."NumberOfPassengers",
    v."CreatorId",
    v."CreationTime",
    v."LastModifierId",
    v."LastModificationTime"
FROM "Vehicle" v
LEFT JOIN "Fleet" f ON f."Id" = v."FleetId" AND f."IsDeleted" = FALSE
LEFT JOIN "VehicleType" vt ON vt."Id" = v."TypeId" AND vt."IsDeleted" = FALSE
WHERE v."IsDeleted" = FALSE;
""";
        migrationBuilder.Sql(CREATE_VIEW_VEHICLE);
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.Sql("""DROP VIEW "ViewVehicle"; """);
        migrationBuilder.Sql("""DROP VIEW "ViewFleet"; """);
        migrationBuilder.Sql("""DROP VIEW "ViewVehicleType"; """);
    }
}
