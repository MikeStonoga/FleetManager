using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Abstractions.Fleets.Views;

namespace Application.Abstractions.Fleets;

public interface IFleetUseCases
    : IUseCases<
        IFleet
        , IFleetView
        , IRegisterFleetRequirement
        , IUpdateFleetRequirement
    >
{
}
