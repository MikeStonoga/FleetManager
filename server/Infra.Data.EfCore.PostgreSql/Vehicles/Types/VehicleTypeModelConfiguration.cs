using BusinessModels.Vehicles;
using BusinessModels.Vehicles.Types;
using Infra.Data.EfCore.PostgreSql.Commons;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.EfCore.PostgreSql.Vehicles.Types;

public class VehicleTypeModelConfiguration
    : EntityModelConfiguration<VehicleType>
{
    public VehicleTypeModelConfiguration()
        : base(tableName: "VehicleType")
    {
    }

    protected override void ConfigureModel(EntityTypeBuilder<VehicleType> builder)
    {
        builder.Property(e => e.Name).IsRequired();

        builder.Property(e => e.NumberOfPassengers).IsRequired();

        builder.HasMany(e => (IEnumerable<Vehicle>)e.Vehicles)
            .WithOne(e => (VehicleType)e.Type)
            .HasForeignKey(e => e.TypeId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
