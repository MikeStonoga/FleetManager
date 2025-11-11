using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Abstractions.Vehicles.Views;

namespace Application.Abstractions.Vehicles;

public interface IVehicleUseCases
    : IUseCases<
        IVehicle
        , IVehicleView
        , IRegisterVehicleRequirement
        , IUpdateVehicleRequirement
    >
{
}
