using BusinessModels.Abstractions.Commons.Views;

namespace BusinessModels.Abstractions.Vehicles.Types.Views;

public interface IVehicleTypeView
    : IEntityView
{
    string Name { get; }
    int NumberOfPassengers { get; }
    int VehiclesCount { get; }
}
