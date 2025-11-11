using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Commons.Commands;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace API.WebHost.Commons;

[ApiController]
[Route("api/[controller]/[action]")]
// [Authorize] // TODO: Implement Authentication
public abstract class Controller<
    TIEntity,
    TIRegisterEntityRequirement,
    TRegisterEntityRequirement,
    TIUseCases
>
    : ControllerBase
    where TIEntity : IEntity
    where TIRegisterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
    where TRegisterEntityRequirement : RegisterEntityCommandDTO<TIEntity>.Requirement, TIRegisterEntityRequirement
    where TIUseCases : IUseCases<TIEntity, TIRegisterEntityRequirement>
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

    [HttpPost]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> Register([FromBody] TRegisterEntityRequirement requirement)
    {
        requirement.SetCommanderId(CommanderId);
        var result = await UseCases.Register(requirement);
        return Ok(result);
    }

    [HttpDelete]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> Remove([FromQuery] Guid id)
    {
        var result = await UseCases.Remove(id, deleterId: CommanderId);
        return Ok(result);
    }
}
