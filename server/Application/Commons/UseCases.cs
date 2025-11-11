using Adapters.Data.Persistency.Commons;
using Application.Abstractions.Commons;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Commons.Entities;
using BusinessModels.Commons.ValueObjects;

namespace Application.Commons;

public class UseCases<TIEntity, TEntity, TIEntityDataGateway>
    : IUseCases<TIEntity>
    where TIEntity : IEntity
    where TEntity : Entity, TIEntity
    where TIEntityDataGateway : IDataGateway<TIEntity>
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
}
