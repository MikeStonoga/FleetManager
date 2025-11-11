using BusinessModels.Vehicles;
using Infra.Data.EfCore.PostgreSql.Commons;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.EfCore.PostgreSql.Vehicles;

public class VehicleModelConfiguration
    : EntityModelConfiguration<Vehicle>
{
    public VehicleModelConfiguration()
        : base(tableName: "Vehicle")
    {
    }

    protected override void ConfigureModel(EntityTypeBuilder<Vehicle> builder)
    {
        builder.Property(e => e.FleetId).IsRequired();
        builder.Property(e => e.TypeId).IsRequired();

        builder.Property(e => e.ChassisSeries).IsRequired();
        builder.Property(e => e.ChassisNumber).IsRequired();

        builder.HasIndex(e => new { e.ChassisSeries, e.ChassisNumber })
            .IsUnique()
            .HasFilter("\"IsDeleted\" = false");

        builder.Property(e => e.Color).IsRequired();
    }
}
