using Adapters.Data.Persistency.Fleets;
using Application.Abstractions.Fleets;
using Application.Commons;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Fleets;

namespace Application.Fleets;

public class FleetUseCases
    : UseCases<
        IFleet
        , Fleet
        , IRegisterFleetRequirement
        , IFleetDataGateway
    >
    , IFleetUseCases
{
    public FleetUseCases(
        IFleetDataGateway dataGateway
    )
        : base(dataGateway)
    {
    }
}
