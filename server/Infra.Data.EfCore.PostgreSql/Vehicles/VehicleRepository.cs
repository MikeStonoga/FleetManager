using Adapters.Data.Persistency.Vehicles;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Vehicles;
using Infra.Data.EfCore.PostgreSql.Commons;

namespace Infra.Data.EfCore.PostgreSql.Vehicles;

public class VehicleRepository
    : Repository<IVehicle, Vehicle>
    , IVehicleDataGateway
{
    public VehicleRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }
}
