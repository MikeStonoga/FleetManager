using Infra.Data.EfCore.PostgreSql;
using Microsoft.EntityFrameworkCore;

namespace API.WebHost.Settings;

public static class DatabaseSettings
{
    public static IServiceCollection ConfigureDatabase(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");

        if (string.IsNullOrWhiteSpace(connectionString))
            throw new InvalidOperationException("Database connection string 'DefaultConnection' was not found.");

        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseNpgsql(connectionString, npgsqlOptions =>
            {
                npgsqlOptions.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName);
                npgsqlOptions.EnableRetryOnFailure(
                    maxRetryCount: 5,
                    maxRetryDelay: TimeSpan.FromSeconds(10),
                    errorCodesToAdd: null);
            });
        });

        services.AddScoped<AppDbContext>();

        return services;
    }

    /// <summary>
    /// Applies any pending EF Core migrations at application startup.
    /// </summary>
    public static async Task ApplyMigrationsAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        try
        {
            var pending = (await dbContext.Database.GetPendingMigrationsAsync()).ToList();

            if (pending.Any())
            {
                Console.WriteLine($"[Database] Applying {pending.Count} pending migrations...");
                await dbContext.Database.MigrateAsync();
                Console.WriteLine("[Database] Migrations applied successfully!");
            }
            else
            {
                Console.WriteLine("[Database] No pending migrations found.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"[Database] Migration failed: {ex.Message}");
            throw;
        }
    }
}
