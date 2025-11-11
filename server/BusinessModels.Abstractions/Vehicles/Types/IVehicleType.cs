using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Abstractions.Vehicles.Types;

public interface IVehicleType
    : IEntity
{
    string Name { get; }
    int NumberOfPassengers { get; }

    IEnumerable<IVehicle> Vehicles { get; }
}
