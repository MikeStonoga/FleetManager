using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Vehicles.Commands;

public abstract class UpdateVehicleDTO
{
    public class Requirement
        : UpdateEntityCommandDTO.Requirement
        , IUpdateVehicleRequirement
    {
        public string Color { get; set; }
    }
}
