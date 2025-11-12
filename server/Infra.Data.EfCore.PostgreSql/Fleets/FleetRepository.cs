using Adapters.Data.Persistency.Fleets;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Views;
using BusinessModels.DTOs;
using BusinessModels.Fleets;
using BusinessModels.Fleets.Views;
using Infra.Data.EfCore.PostgreSql.Commons;
using System.Linq.Expressions;

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

    protected override Expression<Func<FleetView, IdCodeAndLabelDTO>> GetIdCodeAndLabelExpression
        => fleet => new IdCodeAndLabelDTO(fleet.Id, fleet.Code, fleet.Name);

    protected override Expression<Func<FleetView, string?>>[] GetFilterableColumns
        => [
       f => f.Name,
        f => f.Code.ToString()
        ];
}
