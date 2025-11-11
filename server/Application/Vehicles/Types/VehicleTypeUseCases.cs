using Adapters.Data.Persistency.Vehicles.Types;
using Application.Abstractions.Vehicles.Types;
using Application.Commons;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Abstractions.Vehicles.Types.Views;
using BusinessModels.Vehicles.Types;

namespace Application.Vehicles.Types;

public class VehicleTypeUseCases
    : UseCases<
        IVehicleType
        , VehicleType
        , IVehicleTypeView
        , IRegisterVehicleTypeRequirement
        , IUpdateVehicleTypeRequirement
        , IVehicleTypeDataGateway
    >
    , IVehicleTypeUseCases
{
    public VehicleTypeUseCases(IVehicleTypeDataGateway dataGateway)
        : base(dataGateway)
    {
    }
}
