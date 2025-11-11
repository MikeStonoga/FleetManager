using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Fleets.Commands;

public interface IUpdateFleetRequirement
    : IUpdateEntityCommandRequirement
{
    string Name { get; }
}
