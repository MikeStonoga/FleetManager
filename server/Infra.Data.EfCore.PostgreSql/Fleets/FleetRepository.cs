using Adapters.Data.Persistency.Fleets;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Views;
using BusinessModels.Fleets;
using BusinessModels.Fleets.Views;
using Infra.Data.EfCore.PostgreSql.Commons;

namespace Infra.Data.EfCore.PostgreSql.Fleets;

public class FleetRepository
    : Repository<
        IFleet
        , Fleet
        , IFleetView
        , FleetView
    >
    , IFleetDataGateway
{
    public FleetRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }
}
