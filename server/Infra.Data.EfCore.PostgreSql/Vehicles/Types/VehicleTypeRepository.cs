using Adapters.Data.Persistency.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Views;
using BusinessModels.DTOs;
using BusinessModels.Vehicles.Types;
using BusinessModels.Vehicles.Types.Views;
using Infra.Data.EfCore.PostgreSql.Commons;
using System.Linq.Expressions;

namespace Infra.Data.EfCore.PostgreSql.Vehicles.Types;

public class VehicleTypeRepository
    : Repository<
        IVehicleType
        , VehicleType
        , IVehicleTypeView
        , VehicleTypeView
    >
    , IVehicleTypeDataGateway
{
    public VehicleTypeRepository(AppDbContext appDbContext)
        : base(appDbContext)
    {
    }

    protected override Expression<Func<VehicleTypeView, IdCodeAndLabelDTO>> GetIdCodeAndLabelExpression
        => vehicleType => new IdCodeAndLabelDTO(vehicleType.Id, vehicleType.Code, vehicleType.Name);
}
