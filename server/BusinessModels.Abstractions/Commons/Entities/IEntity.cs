using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Abstractions.Commons.Entities;

public interface IEntity
{
    #region Properties
    Guid Id { get; }
    int Code { get; }

    Guid CreatorId { get; }
    DateTime CreationTime { get; }

    Guid? LastModifierId { get; }
    DateTime? LastModificationTime { get; }

    Guid? DeleterId { get; }
    DateTime? DeletionTime { get; }
    bool IsDeleted { get; }
    #endregion

    #region
    void Update<TRequirement>(TRequirement requirement)
        where TRequirement : IUpdateEntityCommandRequirement;
    void RegisterCreation(Guid creatorId);
    void RegisterModification(Guid modifierId);
    void RegisterDeletion(Guid deleterId);
    #endregion
}
