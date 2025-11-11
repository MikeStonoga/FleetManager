using API.WebHost.Commons;
using Application.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Abstractions.Vehicles.Types.Views;
using BusinessModels.Vehicles.Types.Commands;

namespace API.WebHost.Vehicles.Types;

public class VehicleTypeController
    : Controller<
        IVehicleType
        , IVehicleTypeView
        , IRegisterVehicleTypeRequirement
        , RegisterVehicleTypeDTO.Requirement
        , IUpdateVehicleTypeRequirement
        , UpdateVehicleTypeDTO.Requirement
        , IVehicleTypeUseCases
    >
{
    public VehicleTypeController(IVehicleTypeUseCases useCases)
        : base(useCases)
    {
    }
}
