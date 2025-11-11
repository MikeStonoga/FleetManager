using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Fleets.Commands;

public interface IRegisterFleetRequirement
    : IRegisterEntityCommandRequirement<IFleet>
{
    string Name { get; }
}

public interface IRegisterFleetResult
    : IRegisterEntityCommandResult<IFleet>
{
}
