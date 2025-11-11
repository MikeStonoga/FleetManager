namespace BusinessModels.Abstractions.Commons.Commands;

public interface IUpdateEntityCommandRequirement
    : ICommandRequirement
{
    Guid Id { get; }
}
