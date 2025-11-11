using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Abstractions.Commons.Commands;

public interface IRegisterEntityCommandRequirement<TIEntity>
    : ICommandRequirement
    where TIEntity : IEntity
{
    public abstract TIEntity ToEntity();

}

public interface IRegisterEntityCommandResult<TResult>
    where TResult : IEntity
{
    TResult CommandResult { get; }
}