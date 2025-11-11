using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Abstractions.Fleets;

public interface IFleet
    : IEntity
{
    string Name { get; }
}
