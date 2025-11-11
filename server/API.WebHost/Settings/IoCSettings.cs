using Adapters.Data.Persistency.Fleets;
using Adapters.Data.Persistency.Vehicles;
using Adapters.Data.Persistency.Vehicles.Types;
using Application.Abstractions.Fleets;
using Application.Abstractions.Vehicles;
using Application.Abstractions.Vehicles.Types;
using Application.Fleets;
using Application.Vehicles;
using Application.Vehicles.Types;
using Infra.Data.EfCore.PostgreSql.Fleets;
using Infra.Data.EfCore.PostgreSql.Vehicles;
using Infra.Data.EfCore.PostgreSql.Vehicles.Types;

namespace API.WebHost.Settings;

public static class IoCSettings
{
    public static IServiceCollection RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IFleetUseCases, FleetUseCases>();
        services.AddScoped<IFleetDataGateway, FleetRepository>();

        services.AddScoped<IVehicleUseCases, VehicleUseCases>();
        services.AddScoped<IVehicleDataGateway, VehicleRepository>();

        services.AddScoped<IVehicleTypeUseCases, VehicleTypeUseCases>();
        services.AddScoped<IVehicleTypeDataGateway, VehicleTypeRepository>();

        return services;
    }
}
