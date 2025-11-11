using BusinessModels.Abstractions.Vehicles.Views;
using BusinessModels.Commons;

namespace BusinessModels.Vehicles.Views;

public class VehicleView
    : EntityView
    , IVehicleView
{

    public Guid FleetId { get; private set; }
    public int FleetCode { get; private set; }
    public string FleetName { get; private set; }

    public string ChassisSeries { get; private set; }
    public long ChassisNumber { get; private set; }
    public string ChassisId { get; private set; }

    public Guid TypeId { get; private set; }
    public int TypeCode { get; private set; }
    public string TypeName { get; private set; }

    public string Color { get; private set; }
    public int NumberOfPassengers { get; private set; }
}
