using BusinessModels.Abstractions.Commons.Views;

namespace BusinessModels.Commons;

public abstract class EntityView
    : IEntityView
{
    public Guid Id { get; protected set; }
    public int Code { get; protected set; }
    public Guid CreatorId { get; protected set; }
    public DateTime CreationTime { get; protected set; }
    public Guid? LastModifierId { get; protected set; }
    public DateTime? LastModificationTime { get; protected set; }

    protected EntityView() { }
}
