using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Commons.Commands;

public abstract class CommandRequirement
    : ICommandRequirement
{
    public Guid CommanderId { get; private set; }

    public void SetCommanderId(Guid commanderId)
        => CommanderId = commanderId;
}
