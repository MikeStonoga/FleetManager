using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;

namespace BusinessModels.Vehicles;

public sealed class Vehicle
    : Entity
    , IVehicle
{
    #region Properties
    public Guid FleetId { get; private set; }
    public Guid TypeId { get; private set; }

    public string ChassisId => $"{ChassisSeries}{ChassisNumber}";
    public string ChassisSeries { get; private set; }
    public long ChassisNumber { get; private set; }

    public string Color { get; private set; }
    #endregion

    #region Navigation Properties
    public IVehicleType Type { get; private set; }
    public IFleet Fleet { get; private set; }
    #endregion

    #region Constructors
    private Vehicle() { }

    public Vehicle(IRegisterVehicleRequirement requirement)
        : base(id: Guid.CreateVersion7())
    {
        FleetId = new RequiredGuid(requirement.FleetId, nameof(FleetId));
        TypeId = new RequiredGuid(requirement.TypeId, nameof(TypeId));

        ChassisSeries = new RequiredString(requirement.ChassisSeries, nameof(ChassisSeries));
        ChassisNumber = new NaturalNumber(requirement.ChassisNumber, nameof(ChassisNumber));

        Color = new RequiredString(requirement.Color, nameof(Color));
    }
    #endregion
}
