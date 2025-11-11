using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;

namespace Application.Abstractions.Commons;

public interface IUseCases<TIEntity, TIRegiterEntityRequirement>
    where TIEntity : IEntity
    where TIRegiterEntityRequirement : IRegisterEntityCommandRequirement<TIEntity>
{
    Task<TIEntity?> GetById(Guid id);
    Task<TIEntity> Register(TIRegiterEntityRequirement requirement);
    Task<TIEntity> Remove(Guid id, Guid deleterId);
}
