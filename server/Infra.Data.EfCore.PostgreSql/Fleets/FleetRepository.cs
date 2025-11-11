using Adapters.Data.Persistency.Fleets;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Fleets;
using Infra.Data.EfCore.PostgreSql.Commons;

namespace Infra.Data.EfCore.PostgreSql.Fleets;

public class FleetRepository
    : Repository<IFleet, Fleet>
    , IFleetDataGateway
{
    public FleetRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }
}
