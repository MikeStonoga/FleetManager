using BusinessModels.Abstractions.Commons.Entities;

namespace Application.Abstractions.Commons;

public interface IUseCases<TIEntity>
    where TIEntity : IEntity
{
    Task<TIEntity?> GetById(Guid id);
}
