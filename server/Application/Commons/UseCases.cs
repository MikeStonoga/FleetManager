using Adapters.Data.Persistency.Commons;
using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.DTOs;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;
using System.ComponentModel.DataAnnotations;
using System.Linq.Expressions;

namespace Application.Commons;

public class UseCases<
        TIEntity
        , TEntity
        , TIEntityView
        , TIRegisterEntityRequirement
        , TIUpdateEntityRequirement
        , TIEntityDataGateway
    >
    : IUseCases<TIEntity, TIEntityView, TIRegisterEntityRequirement, TIUpdateEntityRequirement>
    where TIEntity : IEntity
    where TEntity : Entity, TIEntity
    where TIEntityView : IEntityView
    where TIEntityDataGateway : IDataGateway<TIEntity, TIEntityView>
    where TIRegisterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
    where TIUpdateEntityRequirement : IUpdateEntityCommandRequirement
{
    protected readonly TIEntityDataGateway DataGateway;

    public UseCases(
        TIEntityDataGateway dataGateway
    )
    {
        DataGateway = dataGateway;
    }

    public async Task<int> Count(Expression<Func<TIEntity, bool>>? predicate = null)
        => await DataGateway.Count(predicate);

    public async Task<TIEntity?> Get(Expression<Func<TIEntity, bool>> predicate)
        => await DataGateway.Get(predicate);

    public async Task<IEnumerable<TIEntity>> GetAll(Expression<Func<TIEntity, bool>>? predicate = null)
        => await DataGateway.GetAll(predicate);

    public async Task<IEnumerable<TIEntityView>> GetAllViews(string filter)
        => await DataGateway.GetAllViews(filter);

    public async Task<TIEntity?> GetById(Guid id)
    {
        id = new RequiredGuid(id, nameof(id));
        return await DataGateway.GetById(id);
    }

    public async Task<IEnumerable<IIdCodeAndLabelDTO>> GetIdsCodesAndLabels()
        => await DataGateway.GetIdsCodesAndLabels();

    public async Task<TIEntityView?> GetView(Expression<Func<TIEntityView, bool>> predicate)
        => await DataGateway.GetView(predicate);

    public async Task<TIEntityView?> GetViewById(Guid id)
    {
        id = new RequiredGuid(id, nameof(id));
        return await DataGateway.GetViewById(id);
    }

    public async Task<TIEntityView> Register(TIRegisterEntityRequirement requirement)
    {
        var entityToRegister = requirement.ToEntity();
        var commanderId = requirement.CommanderId;
        entityToRegister.RegisterCreation(commanderId);

        var registered = await DataGateway.Register(entityToRegister);
        var view = await DataGateway.GetViewById(entityToRegister.Id);
        return view;
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

    public async Task<TIEntityView> Update(TIUpdateEntityRequirement requirement)
    {
        var entityToUpdate = await GetById(requirement.Id)
            ?? throw new ValidationException($"Entity not found for update by the provided id! Id: {requirement.Id}");

        entityToUpdate.Update(requirement);

        var updated = await DataGateway.Update(entityToUpdate);
        var view = await DataGateway.GetViewById(requirement.Id);
        return view;
    }
}
