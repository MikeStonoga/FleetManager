using Adapters.Data.Persistency.Commons;
using BusinessModels.Abstractions.Commons.DTOs;
using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using BusinessModels.Commons;
using BusinessModels.Commons.Entities;
using BusinessModels.DTOs;
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

    protected abstract Expression<Func<TEntityView, string?>>[] GetFilterableColumns { get; }

    public async Task<IEnumerable<TIEntityView>> GetAllViews(string? filter = null)
    {
        IQueryable<TEntityView> query = AppDbContext
            .Set<TEntityView>()
            .AsNoTracking();

        if (!string.IsNullOrWhiteSpace(filter))
        {
            var words = filter
                .Trim()
                .ToLower()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries);

            var provider = AppDbContext.Database.ProviderName?.ToLower() ?? string.Empty;

            Type dbFunctionsType;
            string methodName;

            if (provider.Contains("npgsql"))
            {
                dbFunctionsType = typeof(NpgsqlDbFunctionsExtensions);
                methodName = "ILike";
            }
            else
            {
                dbFunctionsType = typeof(Microsoft.EntityFrameworkCore.DbFunctionsExtensions);
                methodName = "Like";
            }

            var likeMethod = dbFunctionsType.GetMethod(
                methodName,
                new[] { typeof(DbFunctions), typeof(string), typeof(string) }
            ) ?? throw new InvalidOperationException($"Método {methodName} não encontrado em {dbFunctionsType.FullName}.");

            foreach (var word in words)
            {
                var w = $"%{word}%";
                Expression? bodyCombined = null;
                var parameter = Expression.Parameter(typeof(TEntityView), "e");

                foreach (var column in GetFilterableColumns)
                {
                    var replacedBody = ReplaceParameter(column.Body, column.Parameters[0], parameter);

                    var property = Expression.Coalesce(
                        replacedBody,
                        Expression.Constant(string.Empty)
                    );

                    var body = Expression.Call(
                        null,
                        likeMethod,
                        Expression.Property(null, typeof(EF), nameof(EF.Functions)),
                        property,
                        Expression.Constant(w)
                    );

                    bodyCombined = bodyCombined == null
                        ? body
                        : Expression.OrElse(bodyCombined, body);
                }

                if (bodyCombined != null)
                {
                    var lambda = Expression.Lambda<Func<TEntityView, bool>>(bodyCombined, parameter);
                    query = query.Where(lambda);
                }
            }

        }

        var result = await query
            .OrderByDescending(e => e.LastModificationTime ?? e.CreationTime)
            .Cast<TIEntityView>()
            .ToListAsync();

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

    public async Task<IEnumerable<IIdCodeAndLabelDTO>> GetIdsCodesAndLabels()
    {
        var result = await AppDbContext
            .Set<TEntityView>()
            .Select(GetIdCodeAndLabelExpression)
            .ToListAsync();
        return result;

    }

    protected abstract Expression<Func<TEntityView, IdCodeAndLabelDTO>> GetIdCodeAndLabelExpression { get; }


    /// <summary>
    /// Substitui um parâmetro em uma expressão (evita Expression.Invoke)
    /// </summary>
    internal static Expression ReplaceParameter(Expression body, ParameterExpression oldParameter, ParameterExpression newParameter)
    {
        return new ParameterReplacer(oldParameter, newParameter).Visit(body);
    }

    /// <summary>
    /// Visitor que substitui parâmetros em expressões lambda
    /// </summary>
    internal class ParameterReplacer : ExpressionVisitor
    {
        private readonly ParameterExpression _oldParameter;
        private readonly ParameterExpression _newParameter;

        public ParameterReplacer(ParameterExpression oldParameter, ParameterExpression newParameter)
        {
            _oldParameter = oldParameter;
            _newParameter = newParameter;
        }

        protected override Expression VisitParameter(ParameterExpression node)
        {
            return node == _oldParameter ? _newParameter : base.VisitParameter(node);
        }
    }
}