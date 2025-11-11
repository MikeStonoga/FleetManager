using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;

namespace Application.Abstractions.Vehicles;

public interface IVehicleUseCases
    : IUseCases<IVehicle, IRegisterVehicleRequirement>
{
}
