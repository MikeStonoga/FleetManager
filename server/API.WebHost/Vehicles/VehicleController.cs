using API.WebHost.Commons;
using Application.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Abstractions.Vehicles.Views;
using BusinessModels.Commons.ValueObjects;
using BusinessModels.Vehicles.Commands;
using Microsoft.AspNetCore.Mvc;

namespace API.WebHost.Vehicles;

public class VehicleController
    : Controller<
        IVehicle
        , IVehicleView
        , IRegisterVehicleRequirement
        , RegisterVehicleDTO.Requirement
        , IUpdateVehicleRequirement
        , UpdateVehicleDTO.Requirement
        , IVehicleUseCases
    >
{
    public VehicleController(IVehicleUseCases useCases)
        : base(useCases)
    {
    }

    [HttpGet]
    public async Task<IActionResult> GetByChassisId([FromQuery] string chassisId)
    {
        chassisId = new RequiredString(chassisId, nameof(chassisId));
        IVehicleView? result = await UseCases.GetView(v => v.ChassisId == chassisId);

        if (result == null)
            return NotFound();

        return Ok(result);
    }
}
