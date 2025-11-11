using Microsoft.OpenApi.Models;
using System.Reflection;

namespace API.WebHost.Settings;

public static class SwaggerSettings
{
    public static IServiceCollection ConfigureSwagger(this IServiceCollection services)
    {
        services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Version = "v1",
                Title = "FleetManager API",
                Description = "Backend API for FleetManager system",
                Contact = new OpenApiContact
                {
                    Name = "Volvo Group Digital & IT",
                    Email = "support@volvo.com",
                    Url = new Uri("https://www.volvogroup.com/")
                }
            });

            // Inclui comentários XML (se habilitado no csproj)
            var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
            var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFilename);
            if (File.Exists(xmlPath))
                options.IncludeXmlComments(xmlPath);

            options.CustomSchemaIds(x => x.FullName?.Replace("+", "."));

            // Suporte a GUIDs como strings legíveis no Swagger
            options.MapType<Guid>(() => new OpenApiSchema
            {
                Type = "string",
                Format = "uuid"
            });

            // TODO: Autenticação futura
            // options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            // {
            //     In = ParameterLocation.Header,
            //     Description = "JWT Authorization header using the Bearer scheme.",
            //     Name = "Authorization",
            //     Type = SecuritySchemeType.Http,
            //     Scheme = "bearer"
            // });
            // options.AddSecurityRequirement(new OpenApiSecurityRequirement
            // {
            //     {
            //         new OpenApiSecurityScheme
            //         {
            //             Reference = new OpenApiReference
            //             {
            //                 Type = ReferenceType.SecurityScheme,
            //                 Id = "Bearer"
            //             }
            //         },
            //         Array.Empty<string>()
            //     }
            // });
        });

        return services;
    }
}
