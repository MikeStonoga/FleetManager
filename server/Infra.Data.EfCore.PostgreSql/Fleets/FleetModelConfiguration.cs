using BusinessModels.Fleets;
using Infra.Data.EfCore.PostgreSql.Commons;
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
    }
}
