using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Vehicles;

namespace Adapters.Data.Persistency.Vehicles;

public interface IVehicleDataGateway
    : IDataGateway<IVehicle>
{
}
