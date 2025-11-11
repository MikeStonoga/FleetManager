using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Fleets.Commands;

public abstract class UpdateFleetDTO
{
    public class Requirement
        : UpdateEntityCommandDTO.Requirement
        , IUpdateFleetRequirement
    {
        public string Name { get; set; }
    }
}
