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
    #region Properties
    public string Name { get; private set; }
    #endregion

    #region Navigation Properties
    public IEnumerable<IVehicle> Vehicles { get; }
    #endregion

    #region Constructors
#pragma warning disable CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.
    private Fleet() { }
#pragma warning restore CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.

    public Fleet(IRegisterFleetRequirement requirement)
        : base(id: Guid.CreateVersion7())
    {
        Name = new RequiredString(requirement.Name, nameof(Id));
    }
    #endregion

    #region Methods
    protected override void UpdateEntity<TRequirement>(TRequirement requirement)
    {
        var updateRequirement = requirement as IUpdateFleetRequirement;

        var newName = new RequiredString(updateRequirement!.Name, nameof(Name));
        var isUpdatingName = Name != newName;
        if (isUpdatingName)
            Name = newName;
    }
    #endregion
}
