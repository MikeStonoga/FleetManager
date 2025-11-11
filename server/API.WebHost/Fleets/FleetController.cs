using API.WebHost.Commons;
using Application.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Abstractions.Fleets.Views;
using BusinessModels.Fleets.Commands;

namespace API.WebHost.Fleets;

public class FleetController
    : Controller<
        IFleet
        , IFleetView
        , IRegisterFleetRequirement
        , RegisterFleetDTO.Requirement
        , IUpdateFleetRequirement
        , UpdateFleetDTO.Requirement
        , IFleetUseCases
    >
{
    public FleetController(IFleetUseCases useCases)
        : base(useCases)
    {
    }
}
