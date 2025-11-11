using Adapters.Data.Persistency.Fleets;
using Application.Abstractions.Fleets;
using Application.Commons;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Abstractions.Fleets.Views;
using BusinessModels.Fleets;

namespace Application.Fleets;

public class FleetUseCases
    : UseCases<
        IFleet
        , Fleet
        , IFleetView
        , IRegisterFleetRequirement
        , IUpdateFleetRequirement
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
