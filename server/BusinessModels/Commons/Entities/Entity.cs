using BusinessModels.Abstractions.Commons.Entities;
using BusinessModels.Commons.ValueObjects;

namespace BusinessModels.Commons.Entities;

public abstract class Entity
    : IEntity

{
    #region Properties
    public Guid Id { get; private set; }
    public int Code { get; private set; }

    public Guid CreatorId { get; private set; }
    public DateTime CreationTime { get; private set; }

    public Guid? LastModifierId { get; private set; }
    public DateTime? LastModificationTime { get; private set; }

    public Guid? DeleterId { get; private set; }
    public DateTime? DeletionTime { get; private set; }
    public bool IsDeleted { get; private set; }
    #endregion

    #region Constructors
    protected Entity() { }

    protected Entity(Guid? id = null)
    {
        Id = id ?? Guid.CreateVersion7();
    }
    #endregion

    #region Methods
    public void RegisterCreation(Guid creatorId)
    {
        CreatorId = new RequiredGuid(creatorId, nameof(CreatorId));
        CreationTime = DateTime.UtcNow;
        IsDeleted = false;
    }

    public void RegisterDeletion(Guid deleterId)
    {
        DeleterId = new RequiredGuid(deleterId, nameof(DeleterId));
        DeletionTime = DateTime.UtcNow;
    }

    public void RegisterModification(Guid modifierId)
    {
        LastModifierId = new RequiredGuid(modifierId, nameof(LastModifierId));
        LastModificationTime = DateTime.UtcNow;
        IsDeleted = true;
    }
    #endregion
}
