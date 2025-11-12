using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Vehicles.Types.Commands;

public interface IUpdateVehicleTypeRequirement
    : IUpdateEntityCommandRequirement
{
    string Name { get; }
    long NumberOfPassengers { get; }
}
