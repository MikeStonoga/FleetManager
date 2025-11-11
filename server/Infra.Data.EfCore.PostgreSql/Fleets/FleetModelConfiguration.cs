using BusinessModels.Fleets;
using BusinessModels.Vehicles;
using Infra.Data.EfCore.PostgreSql.Commons;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.EfCore.PostgreSql.Fleets;

public class FleetModelConfiguration
    : EntityModelConfiguration<Fleet>
{
    public FleetModelConfiguration()
        : base(tableName: "Fleet")
    {
    }

    protected override void ConfigureModel(EntityTypeBuilder<Fleet> builder)
    {
        builder.Property(e => e.Name)
            .IsRequired();

        builder.HasMany(e => (IEnumerable<Vehicle>)e.Vehicles)
            .WithOne(e => (Fleet)e.Fleet)
            .HasForeignKey(e => e.FleetId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
