using BusinessModels.Abstractions.Vehicles.Types.Views;
using BusinessModels.Commons;

namespace BusinessModels.Vehicles.Types.Views;

public class VehicleTypeView
    : EntityView
    , IVehicleTypeView
{
    public string Name { get; private set; }
    public int NumberOfPassengers { get; private set; }
    public int VehiclesCount { get; private set; }
}
