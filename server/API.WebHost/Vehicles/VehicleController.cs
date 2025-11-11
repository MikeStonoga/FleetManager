using API.WebHost.Commons;
using Application.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Vehicles.Commands;

namespace API.WebHost.Vehicles;

public class VehicleController
    : Controller<
        IVehicle
        , IRegisterVehicleRequirement
        , RegisterVehicleDTO.Requirement
        , IVehicleUseCases
    >
{
    public VehicleController(IVehicleUseCases useCases)
        : base(useCases)
    {
    }
}
