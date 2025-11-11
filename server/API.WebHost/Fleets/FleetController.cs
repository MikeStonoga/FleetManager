using API.WebHost.Commons;
using Application.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Fleets.Commands;

namespace API.WebHost.Fleets;

public class FleetController
    : Controller<
        IFleet
        , IRegisterFleetRequirement
        , RegisterFleetDTO.Requirement
        , IFleetUseCases
    >
{
    public FleetController(IFleetUseCases useCases)
        : base(useCases)
    {
    }
}
