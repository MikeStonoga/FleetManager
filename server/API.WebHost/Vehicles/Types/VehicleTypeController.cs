using API.WebHost.Commons;
using Application.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Vehicles.Types.Commands;

namespace API.WebHost.Vehicles.Types;

public class VehicleTypeController
    : Controller<
        IVehicleType
        , IRegisterVehicleTypeRequirement
        , RegisterVehicleTypeDTO.Requirement
        , IVehicleTypeUseCases
    >
{
    public VehicleTypeController(IVehicleTypeUseCases useCases)
        : base(useCases)
    {
    }
}
