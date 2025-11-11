using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Abstractions.Commons.Commands;

public interface IRegisterEntityCommandRequirement
{
    Guid CommanderId { get; }
}

public interface IRegisterEntityCommandResult<TResult>
    where TResult : IEntity
{
    TResult CommandResult { get; }
}