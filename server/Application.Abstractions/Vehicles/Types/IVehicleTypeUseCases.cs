using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;

namespace Application.Abstractions.Vehicles.Types;

public interface IVehicleTypeUseCases
    : IUseCases<IVehicleType, IRegisterVehicleTypeRequirement>
{
}
