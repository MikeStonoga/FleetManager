namespace API.WebHost.Settings;

public static class CorsSettings
{
    public static IServiceCollection RegisterCors(this IServiceCollection services)
    {
        services.AddCors(o => o.AddPolicy("AllowAngular",
            p => p.WithOrigins("http://localhost:4200", "https://fleetmanager.providencesoft.com.br")
                  .AllowAnyHeader()
                  .AllowAnyMethod())
        );


        return services;
    }

    public static IApplicationBuilder AddCors(this IApplicationBuilder app)
    {
        app.UseCors("AllowAngular");

        return app;
    }
}
