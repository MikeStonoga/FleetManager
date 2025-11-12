using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.DTOs;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using System.Linq.Expressions;

namespace Application.Abstractions.Commons;

public interface IUseCases<
        TIEntity
        , TIEntityView
        , TIRegiterEntityRequirement
        , TIUpdateEntityRequirement
    >
    where TIEntity : IEntity
    where TIEntityView : IEntityView
    where TIRegiterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
    where TIUpdateEntityRequirement : IUpdateEntityCommandRequirement
{
    Task<TIEntity?> Get(Expression<Func<TIEntity, bool>> predicate);
    Task<TIEntityView?> GetView(Expression<Func<TIEntityView, bool>> predicate);
    Task<TIEntity?> GetById(Guid id);
    Task<TIEntityView?> GetViewById(Guid id);
    Task<IEnumerable<IIdCodeAndLabelDTO>> GetIdsCodesAndLabels();

    Task<IEnumerable<TIEntity>> GetAll(Expression<Func<TIEntity, bool>>? predicate = null);
    Task<IEnumerable<TIEntityView>> GetAllViews(Expression<Func<TIEntityView, bool>>? predicate = null);
    Task<int> Count(Expression<Func<TIEntity, bool>>? predicate = null);
    Task<TIEntityView> Register(TIRegiterEntityRequirement requirement);
    Task<TIEntityView> Update(TIUpdateEntityRequirement requirement);
    Task<TIEntity> Remove(Guid id, Guid deleterId);
}
