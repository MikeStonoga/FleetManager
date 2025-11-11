using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Fleets;
using BusinessModels.Abstractions.Fleets.Views;

namespace Adapters.Data.Persistency.Fleets;

public interface IFleetDataGateway
    : IDataGateway<IFleet, IFleetView>
{
}
