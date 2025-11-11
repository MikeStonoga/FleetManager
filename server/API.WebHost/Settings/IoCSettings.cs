using Adapters.Data.Persistency.Fleets;
using Application.Abstractions.Fleets;
using Application.Fleets;
using Infra.Data.EfCore.PostgreSql.Fleets;

namespace API.WebHost.Settings;

public static class IoCSettings
{
    public static IServiceCollection RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IFleetUseCases, FleetUseCases>();
        services.AddScoped<IFleetDataGateway, FleetRepository>();

        return services;
    }
}
