using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Vehicles.Types;

namespace BusinessModels.Abstractions.Vehicles;

public interface IVehicle
    : IEntity
{
    #region Properties
    Guid FleetId { get; }
    Guid TypeId { get; }

    string ChassisId { get; }
    string ChassisSeries { get; }
    long ChassisNumber { get; }

    string Color { get; }
    #endregion

    #region NavigationProperties
    IVehicleType Type { get; }
    IFleet Fleet { get; }
    #endregion
}
