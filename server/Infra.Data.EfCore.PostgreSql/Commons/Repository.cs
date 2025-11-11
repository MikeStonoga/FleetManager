using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using BusinessModels.Commons;
using BusinessModels.Commons.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Infra.Data.EfCore.PostgreSql.Commons;

public abstract class Repository<
        TIEntity
        , TEntity
        , TIEntityView
        , TEntityView
    >
    : IDataGateway<TIEntity, TIEntityView>
    where TIEntity : IEntity
    where TEntity : Entity, TIEntity
    where TIEntityView : IEntityView
    where TEntityView : EntityView, TIEntityView
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

    public async Task<IEnumerable<TIEntity>> GetAll(Expression<Func<TIEntity, bool>>? predicate = null)
    {
        IQueryable<TIEntity> query = DbSet
            .Where(e => !e.IsDeleted);

        if (predicate != null)
            query = query.Where(predicate);

        var result = await query.ToListAsync();
        return result;
    }

    public async Task<TIEntity?> Get(Expression<Func<TIEntity, bool>> predicate)
    {
        var result = await DbSet
            .Where(e => !e.IsDeleted)
            .FirstOrDefaultAsync(predicate);

        return result;
    }

    public async Task<int> Count(Expression<Func<TIEntity, bool>>? predicate = null)
    {
        IQueryable<TIEntity> query = DbSet
            .Where(e => !e.IsDeleted);

        if (predicate != null)
            query = query.Where(predicate);

        var result = await query.CountAsync();

        return result;
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
            throw new InvalidOperationException("PROGRAMMING ERROR: Must register business model creation on application layer before call Repository!");

        await AppDbContext.AddAsync(entity);
        await AppDbContext.SaveChangesAsync();
        return entity;
    }

    public async Task Remove(TIEntity entity)
    {
        if (!entity.IsDeleted)
            throw new InvalidOperationException("PROGRAMMING ERROR: Must update the business model as deleted on application layer before call Repository!");

        DbSet.Update((TEntity)entity); // SOFT DELETE

        await AppDbContext.SaveChangesAsync();
    }

    public async Task<TIEntity> Update(TIEntity entity)
    {
        if (entity.LastModifierId == Guid.Empty || entity.CreationTime == DateTime.MinValue)
            throw new InvalidOperationException("PROGRAMMING ERROR: Must register business model modification on application layer before call Repository!");

        DbSet.Update((TEntity)entity);
        await AppDbContext.SaveChangesAsync();
        return entity;
    }

    public async Task<TIEntityView?> GetViewById(Guid id)
    {
        var result = await AppDbContext
            .Set<TEntityView>()
            .AsNoTracking()
            .FirstOrDefaultAsync(e => e.Id == id);
        return result;
    }

    public async Task<IEnumerable<TIEntityView>> GetAllViews(Expression<Func<TIEntityView, bool>>? predicate = null)
    {
        IQueryable<TIEntityView> query = AppDbContext
            .Set<TEntityView>()
            .AsNoTracking();

        if (predicate != null)
            query = query.Where(predicate);

        var result = await query.ToListAsync();
        return result;
    }

    public async Task<TIEntityView?> GetView(Expression<Func<TIEntityView, bool>> predicate)
    {
        var result = await AppDbContext
            .Set<TEntityView>()
            .AsNoTracking()
            .FirstOrDefaultAsync(predicate);

        return result;
    }
}
