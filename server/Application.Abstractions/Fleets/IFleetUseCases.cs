using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;

namespace Application.Abstractions.Fleets;

public interface IFleetUseCases
    : IUseCases<IFleet, IRegisterFleetRequirement>
{
}
