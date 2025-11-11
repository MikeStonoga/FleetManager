using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Views;

namespace Adapters.Data.Persistency.Vehicles;

public interface IVehicleDataGateway
    : IDataGateway<IVehicle, IVehicleView>
{
}
