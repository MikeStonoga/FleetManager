using Adapters.Data.Persistency.Vehicles;
using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Views;
using BusinessModels.DTOs;
using BusinessModels.Vehicles;
using BusinessModels.Vehicles.Views;
using Infra.Data.EfCore.PostgreSql.Commons;
using System.Linq.Expressions;

namespace Infra.Data.EfCore.PostgreSql.Vehicles;

public class VehicleRepository
    : Repository<
        IVehicle
        , Vehicle
        , IVehicleView
        , VehicleView
    >
    , IVehicleDataGateway
{
    public VehicleRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }

    protected override Expression<Func<VehicleView, IdCodeAndLabelDTO>> GetIdCodeAndLabelExpression
        => vehicle => new IdCodeAndLabelDTO(vehicle.Id, vehicle.Code, vehicle.ChassisId);
}
