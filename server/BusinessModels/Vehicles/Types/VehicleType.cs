using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;

namespace BusinessModels.Vehicles.Types;

public sealed class VehicleType
    : Entity
    , IVehicleType
{
    #region Properties
    public string Name { get; private set; }
    public int NumberOfPassengers { get; private set; }
    #endregion

    #region Navigation Properties
    public IEnumerable<IVehicle> Vehicles { get; }
    #endregion

    #region Constructors
    private VehicleType() { }

    public VehicleType(IRegisterVehicleTypeRequirement requirement)
        : base(id: Guid.CreateVersion7())
    {
        Name = new RequiredString(requirement.Name, nameof(Name));
        NumberOfPassengers = (int)new NaturalNumber(requirement.NumberOfPassengers, nameof(NumberOfPassengers));
    }
    #endregion

    #region Methods
    protected override void UpdateEntity<TRequirement>(TRequirement requirement)
    {
        var updateRequirement = requirement as IUpdateVehicleTypeRequirement;

        var newName = new RequiredString(updateRequirement!.Name, nameof(Name));
        var isUpdatingName = Name != newName;
        if (isUpdatingName)
            Name = newName;

        var newNumberOfPassengers = (int)new NaturalNumber(updateRequirement.NumberOfPassengers, nameof(NumberOfPassengers));
        var isUpdatingNumberOfPassengers = NumberOfPassengers != newNumberOfPassengers;
        if (isUpdatingNumberOfPassengers)
            NumberOfPassengers = newNumberOfPassengers;
    }
    #endregion
}
