using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Commons.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.EfCore.PostgreSql.Commons;

public abstract class Repository<TIEntity, TEntity>
    : IDataGateway<TIEntity>
    where TIEntity : IEntity
    where TEntity : Entity, TIEntity
{
    protected readonly AppDbContext AppDbContext;

    protected Repository(
        AppDbContext appDbContext
    )
    {
        AppDbContext = appDbContext;
    }

    public async Task<TIEntity?> GetById(Guid id)
    {
        var result = await AppDbContext
            .Set<TEntity>()
            .FirstOrDefaultAsync(e => e.Id == id);

        return result;
    }
}
