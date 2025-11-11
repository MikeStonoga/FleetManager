using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Vehicles.Types.Commands;

public abstract class UpdateVehicleTypeDTO
{
    public class Requirement
        : UpdateEntityCommandDTO.Requirement
        , IUpdateVehicleTypeRequirement
    {
        public string Name { get; set; }
        public int NumberOfPassengers { get; set; }
    }
}
