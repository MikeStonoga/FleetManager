using BusinessModels.Fleets;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.EfCore.PostgreSql;

public class AppDbContext
    : DbContext
{
    public DbSet<Fleet> Fleets { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}
