using API.WebHost.Middlewares;
using API.WebHost.Settings;

var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureLogger(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.ConfigureSwagger();
builder.Services.ConfigureDatabase(builder.Configuration);
builder.Services.RegisterServices();

var app = builder.Build();

app.UseMiddleware<ErrorsHandlerMiddleware>();

await app.ApplyMigrationsAsync();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "FleetManager API v1");
    c.RoutePrefix = string.Empty; // Swagger na raiz (http://localhost:5000/)
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
