using BusinessModels.Abstractions.Commons.Entities;

namespace Adapters.Data.Persistency.Commons;

public interface IDataGateway<TIEntity>
    where TIEntity : IEntity
{
    Task<TIEntity?> GetById(Guid id);
}
