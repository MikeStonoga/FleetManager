using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Abstractions.Commons.Views;
using System.Linq.Expressions;

namespace Adapters.Data.Persistency.Commons;

public interface IDataGateway<TIEntity, TIEntityView>
    where TIEntity : IEntity
    where TIEntityView : IEntityView
{
    Task<TIEntity?> Get(Expression<Func<TIEntity, bool>> predicate);
    Task<TIEntityView?> GetView(Expression<Func<TIEntityView, bool>> predicate);
    Task<TIEntity?> GetById(Guid id);
    Task<TIEntityView?> GetViewById(Guid id);
    Task<IEnumerable<TIEntity>> GetAll(Expression<Func<TIEntity, bool>>? predicate = null);
    Task<IEnumerable<TIEntityView>> GetAllViews(Expression<Func<TIEntityView, bool>>? predicate = null);
    Task<int> Count(Expression<Func<TIEntity, bool>>? predicate = null);

    Task<TIEntity> Register(TIEntity entity);
    Task Remove(TIEntity entity);
    Task<TIEntity> Update(TIEntity entity);

}
