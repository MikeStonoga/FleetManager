using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Abstractions.Vehicles.Types.Views;

namespace Application.Abstractions.Vehicles.Types;

public interface IVehicleTypeUseCases
    : IUseCases<
        IVehicleType
        , IVehicleTypeView
        , IRegisterVehicleTypeRequirement
        , IUpdateVehicleTypeRequirement
    >
{
}
