namespace BusinessModels.Abstractions.Commons.Views;

public interface IEntityView
{
    Guid Id { get; }
    int Code { get; }
    public Guid CreatorId { get; }
    public DateTime CreationTime { get; }
    public Guid? LastModifierId { get; }
    public DateTime? LastModificationTime { get; }
}
