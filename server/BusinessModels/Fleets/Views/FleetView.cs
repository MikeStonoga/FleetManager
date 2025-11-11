using BusinessModels.Abstractions.Fleets.Views;
using BusinessModels.Commons;

namespace BusinessModels.Fleets.Views;

public class FleetView
    : EntityView
    , IFleetView
{
    public string Name { get; private set; }
    public int VehicleCount { get; private set; }
}
