using BusinessModels.Abstractions.Commons.Views;

namespace BusinessModels.Abstractions.Vehicles.Views;

public interface IVehicleView
    : IEntityView
{
    Guid FleetId { get; }
    int FleetCode { get; }
    string FleetName { get; }

    string ChassisSeries { get; }
    long ChassisNumber { get; }
    string ChassisId { get; }

    Guid TypeId { get; }
    int TypeCode { get; }
    string TypeName { get; }

    string Color { get; }
    int NumberOfPassengers { get; }
}
