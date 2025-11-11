using API.WebHost.Commons;
using Application.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets;

namespace API.WebHost.Fleets;

public class FleetController
    : Controller<
        IFleet,
        IFleetUseCases
    >
{
    public FleetController(IFleetUseCases useCases) : base(useCases)
    {
    }
}
