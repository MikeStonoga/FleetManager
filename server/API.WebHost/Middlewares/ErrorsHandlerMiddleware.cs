using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Text.Json;

namespace API.WebHost.Middlewares;

public class ErrorsHandlerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorsHandlerMiddleware> _logger;

    public ErrorsHandlerMiddleware(RequestDelegate next, ILogger<ErrorsHandlerMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (ValidationException ex)
        {
            _logger.LogWarning(ex, "Validation error intercepted: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex, HttpStatusCode.UnprocessableEntity,
                $"Validation Error: {ex.Message}!");
        }
        catch (DbUpdateException ex) when (ex.InnerException is PostgresException pg && pg.SqlState == "23505")
        {
            _logger.LogWarning(ex, "Unique constraint violation");
            await HandleExceptionAsync(context, ex, HttpStatusCode.UnprocessableEntity,
                "A record with this information already exists. Please verify the details and try again.");
        }

        catch (Exception ex)
        {
            _logger.LogError(ex, "Unexpected error intercepted: {Message}", ex.Message);
            await HandleExceptionAsync(context, ex, HttpStatusCode.InternalServerError,
                "An unexpected error occurred. Please contact support.");
        }
    }

    private static async Task HandleExceptionAsync(
        HttpContext context,
        Exception ex,
        HttpStatusCode statusCode,
        string message)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)statusCode;

        var response = new
        {
            status = (int)statusCode,
            error = message,
            traceId = context.TraceIdentifier,
            path = context.Request.Path,
            timestamp = DateTime.UtcNow
        };

        var json = JsonSerializer.Serialize(response, new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        });

        await context.Response.WriteAsync(json);
    }
}
