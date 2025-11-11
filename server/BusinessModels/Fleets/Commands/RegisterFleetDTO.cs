using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Fleets.Commands;

public abstract class RegisterFleetDTO
{
    public class Requirement
        : RegisterEntityCommandDTO<IFleet>.Requirement
        , IRegisterFleetRequirement
    {
        public string Name { get; set; }

        public override IFleet ToEntity()
            => new Fleet(this);
    }

    public class Result
        : RegisterEntityCommandDTO<IFleet>.Result
        , IRegisterFleetResult
    {

    }
}
