using API.WebHost.Middlewares;
using API.WebHost.Settings;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Host.ConfigureLogger(builder.Configuration);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigureDatabase(builder.Configuration);
builder.Services.RegisterServices();

var app = builder.Build();

app.UseMiddleware<ErrorsHandlerMiddleware>();

await app.ApplyMigrationsAsync();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
//{
app.UseSwagger();
app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
