using Adapters.Data.Persistency.Vehicles;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Views;
using BusinessModels.Vehicles;
using BusinessModels.Vehicles.Views;
using Infra.Data.EfCore.PostgreSql.Commons;

namespace Infra.Data.EfCore.PostgreSql.Vehicles;

public class VehicleRepository
    : Repository<
        IVehicle
        , Vehicle
        , IVehicleView
        , VehicleView
    >
    , IVehicleDataGateway
{
    public VehicleRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }
}
