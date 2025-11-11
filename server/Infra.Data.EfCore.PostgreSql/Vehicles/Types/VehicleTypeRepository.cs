using Adapters.Data.Persistency.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Vehicles.Types;
using Infra.Data.EfCore.PostgreSql.Commons;

namespace Infra.Data.EfCore.PostgreSql.Vehicles.Types;

public class VehicleTypeRepository
    : Repository<IVehicleType, VehicleType>
    , IVehicleTypeDataGateway
{
    public VehicleTypeRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }
}
