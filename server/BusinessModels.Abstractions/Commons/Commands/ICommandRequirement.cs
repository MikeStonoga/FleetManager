namespace BusinessModels.Abstractions.Commons.Commands;

public interface ICommandRequirement
{
    Guid CommanderId { get; }
    void SetCommanderId(Guid commanderId);
}
