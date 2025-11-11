using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Vehicles.Types.Commands;

public interface IRegisterVehicleTypeRequirement
    : IRegisterEntityCommandRequirement<IVehicleType>
{
    string Name { get; }
    int NumberOfPassengers { get; }
}

public interface IRegisterVehicleTypeResult
    : IRegisterEntityCommandResult<IVehicleType>
{
}
