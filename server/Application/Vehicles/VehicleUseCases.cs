using Adapters.Data.Persistency.Vehicles;
using Application.Abstractions.Vehicles;
using Application.Commons;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Abstractions.Vehicles.Views;
using BusinessModels.Vehicles;

namespace Application.Vehicles;

public class VehicleUseCases
    : UseCases<
        IVehicle
        , Vehicle
        , IVehicleView
        , IRegisterVehicleRequirement
        , IUpdateVehicleRequirement
        , IVehicleDataGateway
    >
    , IVehicleUseCases
{
    public VehicleUseCases(IVehicleDataGateway dataGateway)
        : base(dataGateway)
    {
    }
}
