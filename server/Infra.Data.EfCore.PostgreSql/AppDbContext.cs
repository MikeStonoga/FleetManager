using BusinessModels.Fleets;
using BusinessModels.Fleets.Views;
using BusinessModels.Vehicles;
using BusinessModels.Vehicles.Types;
using BusinessModels.Vehicles.Types.Views;
using BusinessModels.Vehicles.Views;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.EfCore.PostgreSql;

public class AppDbContext
    : DbContext
{

    public DbSet<Fleet> Fleets { get; set; }
    public DbSet<FleetView> FleetsViews { get; set; }

    public DbSet<Vehicle> Vehicles { get; set; }
    public DbSet<VehicleView> VehiclesViews { get; set; }

    public DbSet<VehicleType> VehiclesTypes { get; set; }
    public DbSet<VehicleTypeView> VehiclesTypesViews { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);

        // TODO: Move to ViewModelCofiguration file
        modelBuilder.Entity<VehicleTypeView>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<VehicleTypeView>()
            .ToView("ViewVehicleType");

        modelBuilder.Entity<FleetView>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<FleetView>()
            .ToView("ViewFleet");

        modelBuilder.Entity<VehicleView>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<VehicleView>()
            .ToView("ViewVehicle");
    }
}
