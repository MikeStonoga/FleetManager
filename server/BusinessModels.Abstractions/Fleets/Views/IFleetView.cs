using BusinessModels.Abstractions.Commons.Views;

namespace BusinessModels.Abstractions.Fleets.Views;

public interface IFleetView
    : IEntityView
{
    string Name { get; }
    int VehicleCount { get; }
}
