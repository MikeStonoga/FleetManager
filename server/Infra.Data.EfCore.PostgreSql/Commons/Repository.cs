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
    protected DbSet<TEntity> DbSet
        => AppDbContext.Set<TEntity>();

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
            .FirstOrDefaultAsync(e => !e.IsDeleted && e.Id == id);

        return result;
    }

    public async Task<TIEntity> Register(TIEntity entity)
    {
        if (entity.CreatorId == Guid.Empty || entity.CreationTime == DateTime.MinValue)
            throw new InvalidOperationException("Must register business model creation on application layer before call Repository!");

        await AppDbContext.AddAsync(entity);
        await AppDbContext.SaveChangesAsync();
        return entity;
    }

    public async Task Remove(TIEntity entity)
    {
        if (!entity.IsDeleted)
            throw new InvalidOperationException("Must update the business model as deleted on application layer before call Repository!");

        DbSet.Update((TEntity)entity); // SOFT DELETE

        await AppDbContext.SaveChangesAsync();
    }

}
