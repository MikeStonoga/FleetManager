using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Commands;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;

namespace BusinessModels.Fleets;

public sealed class Fleet
    : Entity
    , IFleet
{
    public string Name { get; private set; }

    public IEnumerable<IVehicle> Vehicles { get; }

#pragma warning disable CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.
    private Fleet() { }
#pragma warning restore CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.

    public Fleet(IRegisterFleetRequirement requirement)
        : base(id: Guid.CreateVersion7())
    {
        Name = new RequiredString(requirement.Name, nameof(Id));
    }
}
