using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Views;

namespace Adapters.Data.Persistency.Vehicles.Types;

public interface IVehicleTypeDataGateway
    : IDataGateway<IVehicleType, IVehicleTypeView>
{
}
