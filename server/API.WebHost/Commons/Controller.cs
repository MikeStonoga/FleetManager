using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using BusinessModels.Commons.Commands;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace API.WebHost.Commons;

[ApiController]
[Route("api/[controller]/[action]")]
// [Authorize] // TODO: Implement Authentication
public abstract class Controller<
    TIEntity,
    TIEntityView,
    TIRegisterEntityRequirement,
    TRegisterEntityRequirement,
    TIUpdateEntityRequirement,
    TUpdateEntityRequirement,
    TIUseCases
>
    : ControllerBase
    where TIEntity : IEntity
    where TIEntityView : IEntityView
    where TIRegisterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
    where TRegisterEntityRequirement : RegisterEntityCommandDTO<TIEntity>.Requirement, TIRegisterEntityRequirement
    where TIUpdateEntityRequirement : IUpdateEntityCommandRequirement
    where TUpdateEntityRequirement : UpdateEntityCommandDTO.Requirement, TIUpdateEntityRequirement
    where TIUseCases : IUseCases<TIEntity, TIEntityView, TIRegisterEntityRequirement, TIUpdateEntityRequirement>
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
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> GetAll([FromQuery] string? filter = null)
    {
        var result = await UseCases.GetAllViews(filter ?? string.Empty);
        return Ok(result);
    }

    [HttpGet]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> Count()
    {
        var result = await UseCases.Count();
        return Ok(result);
    }

    [HttpGet]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> GetIdsCodesAndLabels()
    {
        var result = await UseCases.GetIdsCodesAndLabels();
        return Ok(result);
    }

    [HttpGet]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.NotFound)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> GetById([FromQuery] Guid id)
    {
        var result = await UseCases.GetViewById(id);
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


    [HttpPatch]
    [ProducesResponseType((int)HttpStatusCode.OK)]
    [ProducesResponseType((int)HttpStatusCode.UnprocessableEntity)]
    [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
    public async Task<IActionResult> Update([FromBody] TUpdateEntityRequirement requirement)
    {
        requirement.SetCommanderId(CommanderId);
        var result = await UseCases.Update(requirement);
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
