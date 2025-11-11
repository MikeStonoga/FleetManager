using BusinessModels.Abstractions.Commons.Entities;

namespace Adapters.Data.Persistency.Commons;

public interface IDataGateway<TIEntity>
    where TIEntity : IEntity
{
    Task<TIEntity?> GetById(Guid id);

    Task<TIEntity> Register(TIEntity entity);
    Task Remove(TIEntity entity);
}
