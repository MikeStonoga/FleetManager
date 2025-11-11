using Adapters.Data.Persistency.Commons;
using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;
using System.ComponentModel.DataAnnotations;

namespace Application.Commons;

public class UseCases<
        TIEntity
        , TEntity
        , TIRegisterEntityRequirement
        , TIEntityDataGateway
    >
    : IUseCases<TIEntity, TIRegisterEntityRequirement>
    where TIEntity : IEntity
    where TEntity : Entity, TIEntity
    where TIEntityDataGateway : IDataGateway<TIEntity>
    where TIRegisterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
{
    protected readonly TIEntityDataGateway DataGateway;

    public UseCases(
        TIEntityDataGateway dataGateway
    )
    {
        DataGateway = dataGateway;
    }

    public async Task<TIEntity?> GetById(Guid id)
        => await DataGateway.GetById(new RequiredGuid(id, nameof(id)));

    public async Task<TIEntity> Register(TIRegisterEntityRequirement requirement)
    {
        var entityToRegister = requirement.ToEntity();
        var commanderId = requirement.CommanderId;
        entityToRegister.RegisterCreation(commanderId);

        var result = await DataGateway.Register(entityToRegister);
        return result;
    }

    public async Task<TIEntity> Remove(Guid id, Guid deleterId)
    {
        // TODO: Move validations to BusinessModels layer by creating a requirement
        id = new RequiredGuid(id, nameof(id));
        deleterId = new RequiredGuid(deleterId, nameof(deleterId));

        var entityToRemove = await DataGateway.GetById(id)
            ?? throw new ValidationException($"We didn't found a record to remove with the provided id! Id: {id}");

        entityToRemove.RegisterDeletion(deleterId);
        await DataGateway.Remove(entityToRemove);
        return entityToRemove;
    }
}
