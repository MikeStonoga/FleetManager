using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Vehicles.Commands;

public interface IRegisterVehicleRequirement
    : IRegisterEntityCommandRequirement<IVehicle>
{
    Guid FleetId { get; }
    Guid TypeId { get; }
    string ChassisSeries { get; }
    long ChassisNumber { get; }
    string Color { get; }
}

public interface IRegisterVehicleResult
    : IRegisterEntityCommandResult<IVehicle>
{
}
