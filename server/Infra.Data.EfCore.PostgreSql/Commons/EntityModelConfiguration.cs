using BusinessModels.Commons.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Data.EfCore.PostgreSql.Commons;

public abstract class EntityModelConfiguration<TEntity>
    : IEntityTypeConfiguration<TEntity>
    where TEntity : Entity
{
    private readonly string _tableName;

    protected EntityModelConfiguration(
        string tableName
    )
    {
        _tableName = tableName;
    }

    public void Configure(EntityTypeBuilder<TEntity> builder)
    {
        builder.ToTable(_tableName);
        builder.HasKey(e => e.Id);

        var codeColumn = builder.Property(e => e.Code);
        codeColumn.IsRequired();
        codeColumn.ValueGeneratedOnAdd().Metadata.SetAfterSaveBehavior(PropertySaveBehavior.Ignore);
        builder.HasIndex(e => e.Code).IsUnique();

        ConfigureModel(builder);

        builder.Property(e => e.CreatorId).IsRequired();
        builder.Property(e => e.CreationTime).IsRequired();

        builder.Property(e => e.IsDeleted)
            .IsRequired()
            .HasDefaultValue(false);
    }

    protected abstract void ConfigureModel(EntityTypeBuilder<TEntity> builder);
}
