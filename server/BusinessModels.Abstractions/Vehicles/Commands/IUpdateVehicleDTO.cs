using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Vehicles.Commands;

public interface IUpdateVehicleRequirement
    : IUpdateEntityCommandRequirement
{
    string Color { get; }
}
