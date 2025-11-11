using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace API.WebHost.Commons;

[ApiController]
[Route("api/[controller]/[action]")]
// [Authorize] // TODO: Implement Authentication
public abstract class Controller<
    TIEntity,
    TIUseCases
>
    : ControllerBase
    where TIEntity : IEntity
    where TIUseCases : IUseCases<TIEntity>
{
    protected Guid CommanderId
        => Guid.CreateVersion7(); // TODO: User.Identity;

    protected readonly TIUseCases UseCases;

    protected Controller(
        TIUseCases useCases)
    {
        UseCases = useCases;
    }

    [HttpGet]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.NotFound)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> GetById([FromQuery] Guid id)
    {
        var result = await UseCases.GetById(id);
        if (result == null)
            return NotFound();

        return Ok(result);
    }
}
